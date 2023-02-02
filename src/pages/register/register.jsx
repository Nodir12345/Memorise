import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import React from "react";
import "./register.css";
import img from "../../img/eagle.png";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  let navigate = useNavigate()
  const [username, setUsername] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [pasport, setPasport] = React.useState([]);
  const change = (e) => {
    e.preventDefault();
    fetch("https://api.mymemories.uz/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: pasport,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/")
      });
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
        <form className="form" onSubmit={(e) => change(e)}>
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
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            label="Name"
            variant="standard"
            style={{ margin: "0 auto", width: "400px" }}
          />
          <TextField
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="standard-basic"
            label="Email"
            variant="standard"
            style={{ margin: "0 auto", width: "400px" }}
          />
          <TextField
            required
            type="password"
            onChange={(e) => setPasport(e.target.value)}
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
