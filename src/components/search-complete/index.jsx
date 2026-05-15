import { useEffect, useState } from "react";
import "./searchfilter.css"

function SearchComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParam, setSearchParam] = useState("");
  const [users, setUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  async function fetchListOfUsers() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data?.users?.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchParam),
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="search-container">
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={searchParam}
        onChange={handleChange}
      />

      {showDropdown && (
        <ul className="results-container">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <li key={index}>
                {user}
              </li>
            ))
          ) : (
            <li>No users found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchComplete;
