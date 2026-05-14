import { useEffect, useState } from "react";
import UserCard from "./user-card";
import "./github.css"

function GithubFinder() {
    const [userName, setUserName] = useState('berradurusertgoz');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true)
    
    async function fetchGithubUserData(){
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if(data) {
            setUserData(data)
            setLoading(false);
        }
        if(data.message === 'Not Found'){
            setUserData(null)
        }
    }
    function handleSubmit() {
        fetchGithubUserData()
    }
    useEffect(() => {
        fetchGithubUserData()
    },[])

    if(loading) {
        return <h1>Loading...</h1>
    }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search"
          type="text"
          placeholder="Search github username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData && <UserCard user={userData}/>
      }
    </div>
  );
}

export default GithubFinder;
