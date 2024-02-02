// UserPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const {id} = useParams();
  
  
  const users = [
    {
      id: 1,
      username: "hammad",
      userdes: "Hammad is a programmer",
    },
    {
      id: 2,
      username: "Wahab",
      userdes: "Wahab is an English teacher",
    },
    {
      id: 3,
      username: "Noushad",
      userdes: "Noushad is a Math teacher",
    },
    {
      id: 4,
      username: "hamesh",
      userdes: "hamesh is a programmer",
    },
    {
      id: 5,
      username: "Waheed",
      userdes: "Waheed is an English teacher",
    },
    {
      id: 6,
      username: "Nouraan",
      userdes: "Nouraan is a Math teacher",
    },
    {
      id: 7,
      username: "Hameed",
      userdes: "Hameed is a programmer",
    },
    {
      id: 8,
      username: "Waleed",
      userdes: "Waleedis an English teacher",
    },
    {
      id: 9,
      username: "Nazar",
      userdes: "Nazar is a Math teacher",
    },
  ];

  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="w-full h-96 bg-gray-800 text-white">
       <div >
          <div >
            <h1>{user.username}</h1>
            <p>{user.userdes}</p>
          </div>
      </div>
      
    </div>
  );
}

export default UserPage;
