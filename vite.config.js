import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  fetchLeetCodeProfile,
  isValidLeetCodeUsername,
} from "./server/leetcode.js";

const sendJson = (response, status, body) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
};

const leetCodeDevelopmentApi = () => ({
  name: "leetcode-development-api",
  configureServer(server) {
    server.middlewares.use("/api/leetcode", async (request, response) => {
      if (request.method !== "GET") {
        response.setHeader("Allow", "GET");
        sendJson(response, 405, { error: "Method not allowed" });
        return;
      }

      const requestUrl = new URL(request.url || "/", "http://localhost");
      const username = requestUrl.searchParams.get("username")?.trim() || "";

      if (!isValidLeetCodeUsername(username)) {
        sendJson(response, 400, { error: "Invalid LeetCode username" });
        return;
      }

      try {
        const profile = await fetchLeetCodeProfile(username);

        if (!profile) {
          sendJson(response, 404, { error: "LeetCode profile not found" });
          return;
        }

        response.setHeader(
          "Cache-Control",
          "public, s-maxage=3600, stale-while-revalidate=86400",
        );
        sendJson(response, 200, profile);
      } catch (error) {
        console.error("Unable to fetch LeetCode activity", error);
        sendJson(response, 502, {
          error: "LeetCode activity is temporarily unavailable",
        });
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  // ensure Vercel (or any CI) resolves index.html from project root
  root: ".",
  plugins: [react(), leetCodeDevelopmentApi()],
  server: {
    proxy: {
      "/api/location": "http://localhost:3001",
    },
  },
});
