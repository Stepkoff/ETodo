import React, {useState} from 'react';
import s from './index.module.sass';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from "react-router-dom";
import {useAuth} from "../AuthUser";
import {signOut} from "firebase/auth";
import {firebaseAuth} from "../../App/firebaseConfig";
import Modal from "../../ui/Modal/index.module";

const SideBar = () => {
  const {currentUser} = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);

  const logOut = () => {
    signOut(firebaseAuth)
  }
  return (
    <nav className={sidebarOpen ? s.sideBar : `${s.sideBar} ${s.sideBar__closed}`}>
      <header>
        <Link to={'/'} className={s.logo}>ETodo</Link>
        <button onClick={() => setSidebarOpen(prev => !prev)} className={s.burgerBtn}><GiHamburgerMenu size={25}/></button>
      </header>
      <div className={s.user}>
        <img src={currentUser?.photoUrl} alt="User photo"/>
        <p>{currentUser?.displayName}</p>
      </div>
      <button className={s.addTodo} onClick={() => setModalOpened(true)}>
        + New ETodo
      </button>
      <div className={s.logout}>
        <button onClick={logOut}>Logout</button>
      </div>
      <Modal isOpened={modalOpened} onClose={() => setModalOpened(false)}>
        <h1>test modal</h1>
      </Modal>
    </nav>
  );
};

export default SideBar;