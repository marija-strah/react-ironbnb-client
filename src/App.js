import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/create" element={<CreateApartment/>} />
      </Routes>
    </div>
  );
}

export default App;
