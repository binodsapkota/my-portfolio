import { useEffect, useState } from "react"
import {
  ExternalLink,
  FolderGit2,
  GitFork,
  Github as GithubIcon,
  Loader2,
  Star,
  UserPlus,
  Users,
} from "lucide-react"

const GITHUB_USERNAME = "binodsapkota"
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`

function formatUpdated(iso) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function Github() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGithubData() {
      setError(null)
      try {
        setLoading(true)
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=12`
          ),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("GitHub API request failed")
        }

        const profileData = await profileRes.json()
        const reposData = await reposRes.json()

        setProfile(profileData)
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch (e) {
        console.error("Error fetching GitHub data:", e)
        setError("Could not load activity from GitHub right now.")
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [])

  if (loading) {
    return (
      <section id="github" className="github-section" aria-busy="true" aria-label="GitHub">
        <div className="container mx-auto px-4">
          <div className="github-minimal github-minimal--state">
            <Loader2 className="github-minimal__spinner" strokeWidth={2} aria-hidden="true" />
            <p className="github-minimal__state-text">Loading GitHub…</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || !profile) {
    return (
      <section id="github" className="github-section" aria-label="GitHub">
        <div className="container mx-auto px-4">
          <div className="github-minimal github-minimal--state">
            <GithubIcon className="github-minimal__state-icon" strokeWidth={1.5} aria-hidden="true" />
            <p className="github-minimal__state-text">
              {error || "Profile unavailable."}{" "}
              <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="github-minimal__inline-link">
                Open GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="github-section" aria-label="GitHub profile and repositories">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="github-minimal__head">
          <h2 className="github-minimal__title">GitHub</h2>
          <p className="github-minimal__lede">
            Public repositories and development activity.
          </p>
        </header>

        <div className="github-minimal__profile">
          <img
            src={profile.avatar_url}
            alt={`${profile.login} avatar`}
            width={72}
            height={72}
            className="github-minimal__avatar"
            decoding="async"
          />
          <div className="github-minimal__profile-main">
            <div className="github-minimal__identity">
              <h3 className="github-minimal__name">{profile.name || profile.login}</h3>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-minimal__login"
              >
                @{profile.login}
              </a>
            </div>
            {profile.bio && <p className="github-minimal__bio">{profile.bio}</p>}
            <div className="github-minimal__stats" role="list">
              <span className="github-minimal__stat" role="listitem">
                <Users className="github-minimal__stat-icon" strokeWidth={1.75} aria-hidden="true" />
                <strong>{profile.followers}</strong>
                <span className="github-minimal__stat-label">followers</span>
              </span>
              <span className="github-minimal__stat" role="listitem">
                <UserPlus className="github-minimal__stat-icon" strokeWidth={1.75} aria-hidden="true" />
                <strong>{profile.following}</strong>
                <span className="github-minimal__stat-label">following</span>
              </span>
              <span className="github-minimal__stat" role="listitem">
                <FolderGit2 className="github-minimal__stat-icon" strokeWidth={1.75} aria-hidden="true" />
                <strong>{profile.public_repos}</strong>
                <span className="github-minimal__stat-label">repos</span>
              </span>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-minimal__profile-cta"
            >
              <GithubIcon className="github-minimal__cta-icon" strokeWidth={2} aria-hidden="true" />
              Profile on GitHub
              <ExternalLink className="github-minimal__cta-external" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="github-minimal__repos-wrap">
          <h4 className="github-minimal__repos-heading">Recent repositories</h4>
          <ul className="github-minimal__repo-grid">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-minimal__repo-card"
                >
                  <div className="github-minimal__repo-top">
                    <span className="github-minimal__repo-name">{repo.name}</span>
                    <span className="github-minimal__repo-stars" title="Stars">
                      <Star className="github-minimal__repo-star-icon" strokeWidth={2} aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <p className="github-minimal__repo-desc">
                    {repo.description || (
                      <span className="github-minimal__repo-desc--empty">No description</span>
                    )}
                  </p>
                  <div className="github-minimal__repo-meta">
                    {repo.fork && (
                      <span className="github-minimal__repo-pill">
                        <GitFork className="github-minimal__pill-icon" strokeWidth={2} aria-hidden="true" />
                        Fork
                      </span>
                    )}
                    {repo.language && (
                      <span className="github-minimal__repo-lang">{repo.language}</span>
                    )}
                    <span className="github-minimal__repo-updated">Updated {formatUpdated(repo.updated_at)}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <p className="github-minimal__foot">
            <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="github-minimal__foot-link">
              See everything on GitHub
              <ExternalLink className="github-minimal__foot-external" strokeWidth={2} aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Github
