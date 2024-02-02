// UserData.jsx
import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function UserData() {
  const [query, setQuery] = useState("");
  console.log(query);
  const nav = useNavigate();
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

  const aplFilter = (e) => {
    const filter = e.target.value;
    nav(`/userpage/${filter}?`);
  };
  const nameList = ['username', 'userdes'];
  const search = (users) => {
    return users.filter(
      (item) =>
        // item.username.toLowerCase().includes(query.toLowerCase()) ||
        // item.userdes.toLowerCase().includes(query.toLowerCase())
        //some() is uesd to instead of or operator it work as or 
        nameList.some((key) => 
        item[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  
  return (
    <div className="w-full min-h-screen bg-gray-800 text-white overflow-y-hidden">
      <div>
        <select
          className=" bg-gray-800 text-white py-2 px-6 float-right mt-2 rounded-lg "
          onChange={aplFilter}
        >
          <option>Category</option>
          <option value="Busness">Busness</option>
          <option value="working">working</option>
        </select>
        <input
          type="text"
          placeholder="search"
          className=" float-right py-2 px-6 outline-none mt-2 rounded-lg text-black"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <div>
        {/* {users.filter(item => item.username.toLocaleLowerCase().includes(query)).map((detail) => (
            <Link to={`/userpage/${detail.id}`} key={detail.id}>
                 <div className='h-20'>
                     <h1>{detail.username}</h1>
                     <p>{detail.userdes}</p>
                 </div>
             </Link>
          ))} */}
        {search(users).map((detail) => (
          <Link to={`/userpage/${detail.id}`} key={detail.id}>
            <div className="h-20">
              <h1>{detail.username}</h1>
              <p>{detail.userdes}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserData;
