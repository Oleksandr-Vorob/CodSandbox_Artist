import { useState } from "react";
import Show from "./Show";

export default function Add() {
  const [inputs, setInputs] = useState({});
  const [picture, setPicture] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPicture([...picture, inputs]);
  };

  function view(props) {
    if (props !== []) return <Show pict={props} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter painting(url):
          <input
            type="url"
            name="url"
            value={inputs.url || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter genre:
          <input
            type="text"
            name="genre"
            value={inputs.genre || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter author:
          <input
            type="text"
            name="author"
            value={inputs.author || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter year of writing:
          <input
            type="number"
            name="year"
            value={inputs.year || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="ADD" />
      </form>
      {view(picture)}
    </>
  );
}
