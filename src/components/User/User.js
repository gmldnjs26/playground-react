import UserEditForm from "./UserEditForm";
import UserList from "./UserList";
import { useState } from "react";

const User = () => {
  const [userList, setUserList] = useState([]);

  const addUser = (userInfo) => {
    setUserList((prev) => {
      setUserList([...prev, userInfo]);
    });
  };
  return (
    <div>
      <UserEditForm addUser={addUser} />
      <UserList userList={userList} />
    </div>
  );
};

export default User;
