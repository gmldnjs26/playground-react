const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((user) => {
        return (
          <div>
            {user.name} ({user.age} years old)
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
