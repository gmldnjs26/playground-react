import { useState } from "react";
import Modal from "./Modal";

const AddUserForm = ({ addUser }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  const onClickHandler = () => {
    if (userName.length === 0 || userAge.length === 0) {
      return setIsShowModal(true);
    }
    addUser({
      name: userName,
      age: userAge,
    });
    setUserName("");
    setUserAge("");
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onInput={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={userAge}
        onInput={(e) => setUserAge(e.target.value)}
      />
      <button onClick={onClickHandler}>Add User</button>
      {isShowModal ? <Modal closeModal={closeModal} /> : ""}
    </div>
  );
};

export default AddUserForm;
