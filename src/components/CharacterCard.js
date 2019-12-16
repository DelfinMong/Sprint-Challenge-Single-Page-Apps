import React from "react";
import styled from "styled-components";


const Card = styled.div`
  font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:whitesmoke;
  background:darkslategrey;
  padding:2%;
  width:40%;`
  ;

  const CardInfo = styled.div`
  font-size:16px;
  border:1px dashed gold;
  margin: 0 auto;
  border-radius:10px;
  padding:5px;
  margin: 15px 0px;
  color:whitesmoke;
  background:darkslategrey;
  width:40%;
  display:inline-block;
`;

export default function CharacterCard(props) {
  return (
    <Card>
       <h2>{props.name}</h2>
      <div className="img-container">
        <img src={props.image} />
      </div>
      <CardInfo>
        <p>Status: {props.status}</p>
        <p>Gender: {props.gender}</p>
        <p>Species: {props.species}</p>
        
      </CardInfo>
    </Card>
  );
}
