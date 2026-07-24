const API_ENDPOINT = "/api/leetcode";

export async function fetchLeetCodeActivity(username, { signal } = {}) {
  if (!username) throw new Error("No LeetCode username provided");

  const query = new URLSearchParams({ username });
  const res = await fetch(`${API_ENDPOINT}?${query}`, { signal });
  const payload = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(payload?.error || `LeetCode fetch failed: ${res.status}`);
  }

  if (!payload?.username) throw new Error("LeetCode activity is unavailable");

  return payload;
}

export default fetchLeetCodeActivity;
