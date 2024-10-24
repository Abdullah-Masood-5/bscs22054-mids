import { React, useState } from "react";
import movieData from "../MovieData.js";

function List(props) {
  return (
    <ul>
      {movieData.map((item) => (
          <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default List;
