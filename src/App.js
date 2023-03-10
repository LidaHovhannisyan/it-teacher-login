import { Route, Routes } from "react-router";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <Routes>
      <Route path="/it-teacher-login" element={<Login />} />
      <Route path="/createaccount" element={<Registration />} />
    </Routes>
  );
}

export default App;
