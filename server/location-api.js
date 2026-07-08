import http from "node:http";

let currentLocation = {
  city: "Dhaka",
  country: "Bangladesh",
  displayText: "Dhaka, Bangladesh",
  source: "server",
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/location") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(currentLocation));
    return;
  }

  if (req.method === "POST" && req.url === "/api/location") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const incoming = JSON.parse(body || "{}");
        currentLocation = {
          ...currentLocation,
          ...incoming,
          displayText:
            incoming.displayText ||
            [incoming.city, incoming.country].filter(Boolean).join(", "),
        };
      } catch (error) {
        currentLocation = {
          ...currentLocation,
          source: "server-error",
        };
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(currentLocation));
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(3001, () => {
  console.log("Location API listening on http://localhost:3001/api/location");
});
