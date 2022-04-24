import { Route,  Routes } from "react-router-dom";
import Createnotes from "./components/Createnotes";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element={<Home/>}>
            Main Route
          </Route>

          <Route path="/notes" element={<Notes/>} >
            Notes Route

          </Route>

          <Route path="/createnotes" element={<Createnotes/>} >
            Create Note

          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
