import React, { use } from 'react';

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const newUser = { name, email };

    //send data to server
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('after post', data);
      })

  }
  return (
    <div>
      <div>
        <h3>Add a user</h3>
        <form onSubmit={handleAddUser}>
          <input name='name' type="text" /> <br />
          <input name='email' type="email" /> <br />
          <button>Add User</button>
        </form>
      </div>
      <div>
        {
          users.map(user => <p key={user.id}>Name:{user.name}, Email: {user.email}</p>)
        }
      </div>
    </div>
  );
};

export default Users;