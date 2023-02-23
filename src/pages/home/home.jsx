import React, { useEffect } from "react";
import "./home.scss";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { Liner } from "../../components/liner/Liner";
import { Modalchik } from "./components/modalchik";
export const Home = () => {
  const [editState, setEditState] = React.useState(false);
  const [data1, setdata] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [defender, setdefender] = React.useState(false);
  const [feild, setfeild] = React.useState(false);
  const [load, setload] = React.useState([]);
  const [desc, setdesc] = React.useState([]);
  const [title, settitle] = React.useState([]);
  const [refelesh, setRefelesh] = React.useState();
  let naigate = useNavigate();

  useEffect(() => {
    // console.log("RENDER SUBMIT FUNC");

    fetch("https://api.mymemories.uz/api/v1/memories/all", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.data);
        }
      });
  }, []);

  React.useEffect(() => {
    fetch("https://api.mymemories.uz/api/v1/users", {
      headers: {
        authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((el) => {
        setdata(el.data);
        if (!el.success) {
          naigate("/register");
        } else {
          setdefender(!defender);
        }
      });
  }, [refelesh]);
  if (!defender) {
    return;
  }

  const upload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("name", file.name);
    formData.append("file", file);
    fetch("https://api.mymemories.uz/api/v1/files", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setload([data.data.id, ...load]);
        }
      });
  };
  const submit = (e) => {
    e.preventDefault();

    fetch("https://api.mymemories.uz/api/v1/memories", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        media: load,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          fetch("https://api.mymemories.uz/api/v1/memories/all", {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.success) {
                setData(data.data);
              }
            });
        }
      });
    setRefelesh(refelesh);
  };

  const deleteMemory = () => {
    fetch("https://api.mymemories.uz/api/v1/memories/all", {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data.data);
      });
  };

  const edit = (el) => {
    setEditState(el);
  };

  return (
    <div className="big">
      <div className="left">
        <h1>
          <span>my</span> memorise
        </h1>
        <Button
          variant="outlined"
          onClick={() => setfeild(!feild)}
          style={{ width: "300px", marginBottom: "50px" }}
        >
          CREATE THEME
        </Button>
        {feild ? (
          <form onSubmit={(e) => submit(e)}>
            <TextField
              onChange={(e) => settitle(e.target.value)}
              required
              type="text"
              id="standard-basic"
              label="Name"
              variant="outlined"
              style={{ margin: "0 auto", width: "300px" }}
            />
            <TextField
              onChange={(e) => setdesc(e.target.value)}
              required
              type="text"
              id="standard-basic"
              label="Name"
              variant="outlined"
              style={{ margin: "0 auto", width: "300px" }}
            />
            <TextField
              onChange={(e) => upload(e)}
              required
              type="file"
              id="standard-basic"
              variant="outlined"
              style={{ margin: "0 auto", width: "300px" }}
            />

            <Button type="submit" variant="outlined">
              Send
            </Button>
          </form>
        ) : (
          ""
        )}
        <div>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          Liked memorise
        </div>
        <div>
          <Checkbox icon={<HeartBrokenIcon />} checkedIcon={<Favorite />} />
          Disliked memorise
        </div>
        <Liner></Liner>
      </div>
      <Header
        data1={data1}
        data={data}
        deleteMemory={deleteMemory}
        edit={edit}
      ></Header>
      {editState ? <Modalchik values={editState} setEditState={setEditState} deleteMemory={deleteMemory} /> : ""}
    </div>
  );
};
