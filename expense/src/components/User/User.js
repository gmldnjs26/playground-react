import UserEditForm from "./UserEditForm";
import UserList from "./UserList";
import { useState, useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const User = () => {
  const [userList, setUserList] = useState([]);
  const authContext = useContext(AuthContext);

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
