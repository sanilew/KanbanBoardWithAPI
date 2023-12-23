import React, { useState } from "react";
import { useEffect } from "react";
import UserData from "./components/UserData";
import DisplayNotification from "./components/DisplayNotification"
import UpdateToast from "./components/UpdateToast";

const API =
  "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";
function App() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (url) => {
    try {
      let response = await fetch(url);
      const data = (await response.json()) || [];
      setUsers(data.users);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div>
      <div>
      <h2 style={{marginLeft:"38rem",color:"blue"}}>Kanban Board</h2>
      <UpdateToast/>
      {/* <DisplayNotification/> */}
      </div>
      <UserData users={users} />
    </div>
  );
}

export default App;
