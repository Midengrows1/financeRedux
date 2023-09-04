import React from "react";
import SideabarForm from "../SidebarForm/SideabarForm";
import SidebarIndicator from "../SidebarIndicator/SidebarIndicator";
import s from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <SideabarForm></SideabarForm>
      <SidebarIndicator></SidebarIndicator>
    </div>
  );
};
export default Sidebar;
