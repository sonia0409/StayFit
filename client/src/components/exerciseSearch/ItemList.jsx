import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "./Item";
import BackButton from "./BackButton";


export default function ItemList(props) {
  const { header, exerciseList, onClick } = props;
  console.log(props);

  const nameList = exerciseList.map((element) => (
    <Item
      key={exerciseList.indexOf(element)}
      exerciseItem={element}
      onClick={onClick}
    />
  ));

  return (
    <div className='itemList'>
      <div className='heading-container'>
        <span>
          <BackButton />
        </span>
        <h2>
          {header}
        </h2>
      </div>
      <div className="item-container">
        {nameList}
      </div>
    </div>
  );
}
