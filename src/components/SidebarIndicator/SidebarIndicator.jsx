import React from "react";
import s from "./SidebarIndicator.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";

const SidebarIndicator = () => {
  const finances = useSelector((state) => state.finances.finances);
  console.log(finances);
  return (
    <div className={s.sidebarIndicator}>
      <ul className={s.sidebarIndicaror_inner}>
        {finances.map((item, index) => {
          return (
            <li key={index}>
              <div
                className={clsx(s.sidebarIndicator__item, {
                  [s.activeType]: item.category === "expenses",
                })}
              >
                <p>{item.type}</p>
                <div className={s.sidebarIndicator__item_desc}>
                  <span>{item.date}</span>
                  <span>{item.money}$</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarIndicator;
