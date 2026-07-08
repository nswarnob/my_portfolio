/**
 * GitHub API Service
 * Fetches repository data dynamically from GitHub
 */

export const fetchLatestRepository = async (username) => {
  try {
    // Fetch user's repositories sorted by updated date
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=1&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    if (!repos || repos.length === 0) {
      return null;
    }

    const repo = repos[0];

    // Transform GitHub repo data to our format
    return {
      name: repo.name,
      description: repo.description || "No description provided",
      techStack: extractTechStack(repo),
      repoUrl: repo.html_url,
      liveUrl: repo.homepage || null,
      updatedAt: formatDate(new Date(repo.updated_at)),
      highlight:
        repo.stargazers_count > 0
          ? `⭐ ${repo.stargazers_count} stars`
          : "Recently updated",
    };
  } catch (error) {
    console.error("Error fetching latest repository:", error);
    return null;
  }
};

/**
 * Extract tech stack from repository topics and language
 */
const extractTechStack = (repo) => {
  const stack = [];

  // Add language if available
  if (repo.language) {
    stack.push(repo.language);
  }

  // Add topics as tech stack
  if (repo.topics && repo.topics.length > 0) {
    stack.push(...repo.topics.slice(0, 4)); // Limit to 4 topics
  }

  return stack.length > 0 ? stack : ["Repository"];
};

/**
 * Format date to relative format
 */
const formatDate = (date) => {
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) {
    return `Updated ${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `Updated ${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays < 7) {
    return `Updated ${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  }
};
