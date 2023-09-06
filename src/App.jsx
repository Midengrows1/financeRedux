import s from "./App.module.css";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Sidebar } from "./components";
import ReactEcharts from "echarts-for-react";
const defData = [
  {
    title: "Salary",
    categories: {
      value: "salary",
      label: "Salary",
    },
    date: "7.7.\n    2023",
    price: "500",
    color: "salary",
    type: {
      value: "income",
      label: "Доход",
    },
  },
  {
    title: "Food",
    categories: {
      value: "food",
      label: "food",
    },
    date: "7.7.\n    2023",
    price: "500",
    color: "food",
    type: {
      value: "income",
      label: "Доход",
    },
  },
  {
    title: "Deposit",
    categories: {
      value: "deposit",
      label: "deposit",
    },
    date: "7.7.\n    2023",
    price: "500",
    color: "deposit",
    type: {
      value: "income",
      label: "Доход",
    },
  },
];
function App() {
  const [data, setData] = useState(defData);
  const newData = useSelector((state) => state.finances.finances);
  console.log(newData);
  const FoodPrice = newData
    ?.filter((item) => item.type === "food")
    ?.reduce((accumulator, currentValue) => {
      return accumulator + +currentValue.money;
    }, 0);
  const SalaryPrice = newData
    ?.filter((item) => item.type === "salary")
    ?.reduce((accumulator, currentValue) => {
      return accumulator + +currentValue.money;
    }, 0);
  const DepositPrice = newData
    ?.filter((item) => item.type === "deposit")
    ?.reduce((accumulator, currentValue) => {
      return accumulator + +currentValue.money;
    }, 0);
  console.log(FoodPrice);
  const changeFoodPrice = () => {
    data.map((item) => {
      switch (item.title) {
        case "Food":
          return (item.price = FoodPrice);
        case "Salary":
          return (item.price = SalaryPrice);
        case "Deposit":
          return (item.price = DepositPrice);
      }
    });
    console.log(data);
  };
  useMemo(() => {
    changeFoodPrice();
  });

  const filterIncomeData = data
    .filter((item) => item.type.value === "income")
    .map((item) => {
      return { name: item.title, value: item.price };
    });
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "0%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: filterIncomeData,
      },
    ],
  };

  return (
    <div className={s.app}>
      <header className={s.header}>
        <h2>Budget Tracker</h2>
      </header>
      <div className={s.main_chart}>
        <Sidebar></Sidebar>
      </div>
      <ReactEcharts option={option} />
    </div>
  );
}

export default App;
