// import BrowserRouters usw   --> davor npm i react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";



// import css 

import Home from "./pages/Home";
import HomeLinkWeiterleitung from "./pages/HomeLinkWeiterleitung";

function App() {
  return (
    <div className="App">


<BrowserRouter>

<Routes>

  <Route path="/" element={ <Home> </Home>} ></Route>
  <Route path="/Home/:url" element={ <HomeLinkWeiterleitung> </HomeLinkWeiterleitung>} ></Route>
</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
