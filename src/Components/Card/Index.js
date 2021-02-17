import React from "react"
import { CardContainer, CardImageContainer, HeadContainer } from "./Styles"
import Heads from "../Heads"
const Card = props => {
  return (
    <CardContainer>
      <h3>{props.title}</h3>
      {props.children}
      <CardImageContainer isActive5={props.isActive5}>
        <HeadContainer>
          <Heads src="https://source.unsplash.com/random" />
        </HeadContainer>
        <HeadContainer>
          <Heads src="https://source.unsplash.com/random" />
        </HeadContainer>
        <HeadContainer>
          <Heads src="https://source.unsplash.com/random" />
        </HeadContainer>
        <HeadContainer>
          <Heads
            src="https://source.unsplash.com/random"
            className="image-circle"
          />
        </HeadContainer>
        <HeadContainer>
          <Heads src="https://source.unsplash.com/random" />
        </HeadContainer>
      </CardImageContainer>
    </CardContainer>
  )
}

export default Card
