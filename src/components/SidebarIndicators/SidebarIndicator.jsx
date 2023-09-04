import React from "react";
import s from "./sidebarIndicator.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

const SidebarIndicator = () => {
  // const type = useSelector((state) => state.finances.type);
  // const category = useSelector((state) => state.finances.category);
  // const money = useSelector((state) => state.finances.money);
  const finances = useSelector((state) => state.finances.finances);
  return (
    <div className={s.sidebarIndicator}>
      <ul className={s.sidebarIndicaror_inner}>
        {finances.map((item, index) => {
          return (
            <li key={index}>
              <div
                className={clsx(s.sidebarIndicator__item, {
                  [s.activeType]: item.type === "expenses",
                })}
              >
                <p>{item.category}</p>
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