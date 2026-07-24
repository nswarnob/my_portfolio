const GQL_URL = "https://leetcode.com/graphql";

const PROFILE_QUERY = `query getUserProfile(
  $username: String!
  $currentYear: Int
  $previousYear: Int
) {
  matchedUser(username: $username) {
    username
    currentCalendar: userCalendar(year: $currentYear) {
      submissionCalendar
    }
    previousCalendar: userCalendar(year: $previousYear) {
      submissionCalendar
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}`;

export function isValidLeetCodeUsername(username) {
  return typeof username === "string" && /^[A-Za-z0-9_-]{1,30}$/.test(username);
}

export function parseSubmissionCalendar(calendar) {
  let parsed = calendar;

  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      return {};
    }
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(parsed).flatMap(([timestamp, count]) => {
      if (!/^\d+$/.test(timestamp)) return [];

      const normalizedCount = Number(count);
      return Number.isFinite(normalizedCount) && normalizedCount > 0
        ? [[timestamp, normalizedCount]]
        : [];
    }),
  );
}

export async function fetchLeetCodeProfile(username) {
  if (!isValidLeetCodeUsername(username)) return null;

  const currentYear = new Date().getUTCFullYear();

  const res = await fetch(GQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: PROFILE_QUERY,
      variables: {
        username,
        currentYear,
        previousYear: currentYear - 1,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`LeetCode request failed: ${res.status}`);
  }

  const json = await res.json();
  if (json?.errors?.length) {
    throw new Error(json.errors[0].message || "LeetCode returned an error");
  }

  const matched = json?.data?.matchedUser;
  if (!matched) return null;

  const submissionCalendar = {
    ...parseSubmissionCalendar(matched.previousCalendar?.submissionCalendar),
    ...parseSubmissionCalendar(matched.currentCalendar?.submissionCalendar),
  };

  return {
    username: matched.username,
    calendar: {
      submissionCalendar,
      totalActiveDays: Object.keys(submissionCalendar).length,
    },
    submissions: matched.submitStats?.acSubmissionNum || [],
  };
}

export default fetchLeetCodeProfile;
