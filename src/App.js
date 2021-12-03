import logo from './logo.svg';
import './App.css';
import SearchScreen from "./SearchScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsScreen from "./DetailsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen/>}/>
        <Route path="/:searchTerm" element={<SearchScreen/>}/>
        <Route path="/details/:id" element={<DetailsScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
