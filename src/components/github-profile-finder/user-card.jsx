import "./github.css"
function UserCard({user}) {
    const {
    avatar_url,
    location,
    public_repos,
    followers,
    following,
    name,
    login,
    bio,
    html_url,
  } = user;
    
    return (
        <div className="github-user">
            <img className="avatar" 
            src={avatar_url} 
            alt="User" />
            <h2>{name || login}</h2>
            <p className="username">@{login}</p>
            {bio && <p className="bio">{bio}</p>}
        <div className="user-info">
            <div>
                <span>Repos</span>
                <strong>{public_repos}</strong>
            </div>
            <div>
                <span>Followers</span>
                <strong>{followers}</strong>
            </div>
            <div>
                <span>Following</span>
                <strong>{following}</strong>
            </div>
        </div>
        {location && (
            <p className="location">
                📍 {location}
            </p>
        )}
        <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-link"
      >
        View Github Profile
      </a>
        </div>
    )
}

export default UserCard
