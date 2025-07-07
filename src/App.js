// Write your code at relevant places in the code below:

import React ,{useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const handleUserData = (username,age) => {
    const newUser = {
      name: username,
      age: age,
      id:Math.random().toString().trim()
    }
    setUserList((prevData) => {
      return [...prevData,newUser]
    })
  }
  return (
    <div>
      <AddUser onAddUser={handleUserData} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
