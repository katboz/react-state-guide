import React from "react";
import { Wrapper } from "./Card.styles";

type Props = {
    name: string;
    imgUrl: string;
};
// I have to always specify Props object
const Card =({name, imgUrl}:Props) =>(
    <Wrapper>
        <p>{name}</p>
        <img src={imgUrl} alt="character-thumb"/>
    </Wrapper>
);

export default Card;