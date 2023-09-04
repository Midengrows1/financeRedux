import s from "./App.module.css";
import { Sidebar } from "./components";
function App() {
  return (
    <div className={s.app}>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
