import Login from "./Components/Login.jsx";
import Register from  "./Components/Register.jsx";
import { MdOutlineMail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import {useState} from "react";



function App(){
  const [Form, setForm] = useState('Login');
  return (<>
    {Form === "Login" ? (
        <Login MdOutlineMail={MdOutlineMail} AiFillLock = {AiFillLock} FormHandle={setForm} />
    ) : (
        <Register FormHandle={setForm}/>
    )}
  </>
  );
}


export default App;