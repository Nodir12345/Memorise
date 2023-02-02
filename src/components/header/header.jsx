import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Avatar, Checkbox, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite, Delete, Edit } from "@mui/icons-material";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import img1 from "../../img/img.png";
import "./header.scss";
export function Header({ data1 }) {
  const [about, setabout] = React.useState(false);

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
          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>
          
          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>

          <li>
            <div className="about_box">
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={img1}
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
                <h3>Shamollarda qolgan...</h3>
                <p>
                  Urush boshlanadi. Charliz qurolli kuchlar majmuasiga xizmatga
                  ketadi. Lekin jangda ishtirok...
                </p>
                <span>01/01/2023</span>
              </li>
            </ul>
            <div className="space">
              <IconButton aria-label="delete">
                <Delete />
              </IconButton>
              <IconButton aria-label="delete">
              <AddCircleOutlineIcon/>
              </IconButton>
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
