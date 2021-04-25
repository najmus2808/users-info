import React, { useEffect, useState } from 'react';
import User from './components/User/User';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      {
        users.map(user => <User user={user} key={user.id}></User>)
      }
    </div>
  );
};

export default App;