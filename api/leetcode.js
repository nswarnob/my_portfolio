import {
  fetchLeetCodeProfile,
  isValidLeetCodeUsername,
} from "../server/leetcode.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");

    return response.status(405).json({
      error: "Method not allowed",
    });
  }

  const requestUrl = new URL(request.url, "https://portfolio.local");
  const username = requestUrl.searchParams.get("username")?.trim() || "";

  if (!isValidLeetCodeUsername(username)) {
    return response.status(400).json({
      error: "Invalid LeetCode username",
    });
  }

  try {
    const profile = await fetchLeetCodeProfile(username);

    if (!profile) {
      return response.status(404).json({
        error: "LeetCode profile not found",
      });
    }

    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );

    return response.status(200).json(profile);
  } catch (error) {
    console.error("Unable to fetch LeetCode activity", error);

    return response.status(502).json({
      error: "LeetCode activity is temporarily unavailable",
    });
  }
}
