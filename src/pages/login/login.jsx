import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import React from "react";
import "./login.css";
import img from "../../img/eagle.png";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = React.useState([]);
  const [passwort, setPasswort] = React.useState([]);
  let navigate = useNavigate()
  const login = (e) => {
    e.preventDefault();
    fetch("https://api.mymemories.uz/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: passwort,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.token){
        localStorage.setItem("token", data.token)
        navigate("/")
       }
       else{
        alert("xato")

       }
      })
  };
  return (
    <div className="container box">
      <div className="boxrigth">
        <img className="imgeagle" src={img} alt="img" />
        <h2 className="title2">mymemories</h2>
        <p className="text2">No matter how much suffering you went through, you never wanted to let go of those memories.</p>
      </div>
      <div className="boxleft">
        <h1 className="title">
          <span className="my">my</span> memorise
        </h1>
        <div className="box_text">
          <p className="text">LOGIN</p>
          <p className="text">SIGN UP</p>
        </div>
        <form  className="form" onSubmit={(e) =>login(e)}>
        <TextField
            required
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            id="standard-basic"
            label="UserName"
            variant="standard"
            style={{ margin: "0 auto", width: "400px" }}
          />
          <TextField
            required
            type="password"
            onChange={(e) => setPasswort(e.target.value)}
            id="standard-basic"
            label="Pasport"
            variant="standard"
            style={{ margin: "0 auto", width: "400px" }}
          />
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
