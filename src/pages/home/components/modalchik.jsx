import { Button, TextField } from "@mui/material";
import React from "react";
import "./modalchik.scss";
export const Modalchik = ({ values, setEditState, deleteMemory }) => {
  const [load, setload] = React.useState([]);
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
        console.log(data);
        if (data.success) {
          setload([data.data.id, ...load]);
        }
      });
  };
  const submit = (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[2].value;
    if (load.length === 0) {
      setload(values.files[0].id);
    }
    console.log(load);
    console.log(values);
    fetch("https://api.mymemories.uz/api/v1/memories", {
      
      method: "PUT",
      headers: {
        "Authorization": `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        id: values.id,
        title: title,
        desc: desc,
        media: load,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        deleteMemory();
      });
      
  };

  return (
    <div className="father">
      <form onSubmit={(e) => submit(e)}>
        <TextField
          required
          color="primary"
          defaultValue={values.title}
          style={{ color: "#fff", width: "400px" }}
          type="text"
          label="Title"
          variant="outlined"
        />
        <TextField
          required
          color="primary"
          defaultValue={values.desc}
          style={{ color: "#fff", width: "400px" }}
          type="text"
          label="Description"
          variant="outlined"
        />
        <TextField
          onChange={(e) => upload(e)}
          color="primary"
          style={{ color: "#fff", width: "400px" }}
          type="file"
          label="File"
          variant="outlined"
        />
        <Button
          variant="contained"
          type="button"
          onClick={() => setEditState(false)}
        >
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
