import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Johny Dummy',
      image:
        'https://picsum.photos/150/',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
