import React, { useEffect, useState } from 'react';
import User from './components/User/User';

const App = () => {
  const [users, setUSers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUSers(data));
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