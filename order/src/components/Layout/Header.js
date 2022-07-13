import { Fragment, useState } from "react";

import mealsImageSrc from "../../assets/meals.jpeg";
import Cart from "../Cart/Cart";
import Modal from "../UI/Modal";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    console.log("223");
    setIsShowModal(!isShowModal);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton modalHandler={toggleModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImageSrc} alt="A table full of delicious food!" />
      </div>
      {!isShowModal || (
        <Modal>
          <Cart />
        </Modal>
      )}
    </Fragment>
  );
};

export default Header;
