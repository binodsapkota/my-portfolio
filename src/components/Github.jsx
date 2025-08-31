import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'binodsapkota'

function Github() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
        ])
        const profileData = await profileRes.json()
        const reposData = await reposRes.json()
        setProfile(profileData)
        setRepos(reposData)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGithubData()
  }, [])

  if (loading) return <div>Loading GitHub info...</div>

  return (
    <section className="github-section">
      {/* Profile Info Section */}
      {profile && (
        <section className="github-profile-info">
          <img src={profile.avatar_url} alt="GitHub avatar" width={100} style={{ borderRadius: '50%' }} />
          <h2>{profile.name || profile.login}</h2>
          <p>{profile.bio}</p>
          <p>
            <strong>Followers:</strong> {profile.followers} &nbsp;
            <strong>Following:</strong> {profile.following}
          </p>
          <p>
            <strong>Public Repos:</strong> {profile.public_repos}
          </p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </section>
      )}

      {/* Repositories Section */}
      <div className="github-repos">
        <h3>Repositories</h3>
        <table className="github-repos-table">
          <thead>
            <tr>
                <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Stars</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo,idx) => (
              <tr key={repo.id}>
                <td>{idx+1}</td>
                <td>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </td>
                <td className="repo-desc">{repo.description || '-'}</td>
                <td className="repo-stars">★ {repo.stargazers_count}</td>
                <td>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Github