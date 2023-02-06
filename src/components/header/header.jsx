import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Avatar, Checkbox, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite, Delete, Edit } from "@mui/icons-material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./header.scss";

export function Header({ data1, data,deleteMemory,edit }) {
  const [about, setabout] = React.useState(false);
  const [refelesh, setRefelesh] = React.useState();

  // React.useEffect(() => {
  //   fetch("https://api.mymemories.uz/api/v1/memories/all", {
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data);
  //         setData(data.data);
  //       }
  //     });
  // }, [refelesh]);

  const deletemem = (id) => {
    fetch(`https://api.mymemories.uz/api/v1/memories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        deleteMemory()
        setRefelesh(data);
      });
  };

  return (
    <div className="container2">
      <div className="header">
        <TextField
          focused
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          style={{ width: "300px", color: "red", marginLeft: "20px" }}
        />
        <div className="btn">
          {" "}
          <Button onClick={() => setabout(true)} variant="outlined">
            about me
          </Button>
          <Link to="/login">
            <Button variant="outlined">LOGOUT</Button>
          </Link>
        </div>
        {about ? (
          <div className=" aboutme1">
            <div className="box1">
              <p className="home_text">{data1.name}</p>
              <p className="home_text">{data1.id}</p>
              <p className="home_text">{data1.email}</p>
              <button className="xx" onClick={() => setabout(false)}>
                X
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="about">
        <ul>
          {data
            ? data.map((el) => (
              
                <li className="aaa" key={el.id}>
                  
                  <div className="about_box">
                    <div>
                      <Avatar
                        alt="Remy Sharp"
                        src={el.files[0].url}
                        sx={{ width: 56, height: 56 }}
                      />
                    </div>
                    <div className="heart1">
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                      <Checkbox
                        icon={<HeartBrokenIcon />}
                        checkedIcon={<FavoriteBorder />}
                      />
                    </div>
                  </div>
                  <ul>
                    <li>
                    {console.log(el.title.slice(0,7))}
                      <h3>{el.title.length > 20 ? el.title.slice(0,20)+ "..." : el.title}</h3>
                      <p>{el.desc.length > 25 ? el.desc.slice(0,25)+ "..." : el.desc}</p>
                      <span>{el.created_at}</span>
                    </li>
                  </ul>

                  <div className="space">
                    <IconButton
                      onClick={() => deletemem(el.id)}
                      aria-label="delete"
                    >
                      <Delete />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <AddCircleOutlineIcon  />
                    </IconButton>
                    <IconButton aria-label="delete"  onClick={() => edit(el)} >
                      <Edit />
                    </IconButton>
                  </div>
                </li>
              ))
            : <h1>xotira kiriting</h1>}
        </ul>
      </div>
    
    </div>
  );
}
