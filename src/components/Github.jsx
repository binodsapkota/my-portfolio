import { useEffect, useState } from "react";

const GITHUB_USERNAME = "binodsapkota";

function Github() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoading(true);

        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=100`
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("GitHub API request failed");
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading GitHub data...</p>
      </div>
    );
  }

  return (
    <section className="github-section bg-[#f0f2f5]">
      <div className="section-header">
        <h2 className="section-title">GitHub Overview</h2>
        <div className="section-divider"></div>
      </div>

      {/* Profile Info */}
      {profile && (
        <div className="github-profile-card animate-fade-in">
          <img
            src={profile.avatar_url}
            alt="GitHub Avatar"
            className="github-avatar"
          />
          <h3>{profile.name || profile.login}</h3>
          <p className="bio">{profile.bio}</p>
          <div className="profile-stats">
            <p>👥 {profile.followers} Followers</p>
            <p>⭐ {profile.following} Following</p>
          </div>
          <p>📦 {profile.public_repos} Public Repos</p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      {/* Repositories Table */}
      <div className="repos-container animate-slide-up">
        <h3 className="repo-header">Repositories</h3>
        <div className="table-wrapper">
          <table className="repo-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Repository Name</th>
                <th>Description</th>
                <th>⭐ Stars</th>
                <th>🔗 Link</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo, index) => (
                <tr key={repo.id} className="repo-row">
                  <td>{index + 1}</td>
                  <td className="repo-name">{repo.name}</td>
                  <td className="repo-desc">
                    {repo.description || "No description"}
                  </td>
                  <td className="repo-stars">★ {repo.stargazers_count}</td>
                  <td>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link-btn"
                    >
                      Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="background-glow"></div>
    </section>
  );
}

export default Github;
