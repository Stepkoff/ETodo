import {Outlet} from "react-router-dom";
import React from "react";
import s from './index.module.sass';
import SideBar from "../../modules/SideBar";

const Layout = () => {
  return (
    <div className={s.layout}>
      <SideBar/>
      <main className={s.main}>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout