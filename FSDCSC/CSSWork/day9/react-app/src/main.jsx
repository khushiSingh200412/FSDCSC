import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from "./Marks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App name={"khushi singh"} email={"khushi@gmail.com"} mobile={7347585855} />
    <App name={"payal"} email={"payal@gmail.com"} mobile={73476778985855} />
    
    <Marks m1={90} m2={100} m3={1000} />
    <Marks />
  </StrictMode>
);
