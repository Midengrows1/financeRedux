import React, { useState } from "react";
import s from "./SidebarForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentOption, setMoney } from "../../Store/FinanceSlice";
import {
  addIndicator,
  clearIndicators,
  ShowDate,
} from "../../Store/FinanceSlice";
const SideabarForm = () => {
  // const [money, setMoney] = useState("");
  const money = useSelector((state) => state.finances.money);
  const dispatch = useDispatch();
  return (
    <div className={s.sidebarForm}>
      <ul className={s.sideItem_container}>
        <li>
          <label>
            <span>Date</span>
            <input
              type="date"
              onChange={(e) => dispatch(ShowDate(e.target.value))}
            />
          </label>
        </li>
        <li>
          <label>
            <span>Type</span>
            <select
              name="selectType"
              id="select-type"
              onChange={(e) => dispatch(selectCurrentOption(e.target.value))}
            >
              <option value="income" name="income">
                Income
              </option>
              <option value="expenses" name="expenses">
                Expenses
              </option>
            </select>
          </label>
        </li>
        <li>
          <label>
            <span>Category</span>
            <select
              name="selectCategory"
              id="select-category"
              onChange={(e) => dispatch(selectCurrentOption(e.target.value))}
            >
              <option value="salary" name="salary">
                salary
              </option>
              <option value="food" name="food">
                food
              </option>
              <option value="deposit" name="deposit">
                Deposit
              </option>
            </select>
          </label>
        </li>
        <li>
          <label>
            <span>Value</span>
            <input
              type="text"
              placeholder="450"
              value={money}
              required
              onChange={(e) => dispatch(setMoney(e.target.value))}
            />
          </label>
        </li>
      </ul>
      <div className={s.sidebarForm_btn}>
        <button onClick={() => dispatch(clearIndicators())}>Clear</button>
        <button onClick={() => dispatch(addIndicator())}>Save</button>
      </div>
    </div>
  );
};

export default SideabarForm;
