import React from "react"
import { CardContainer, CardImageContainer, HeadContainer } from "./Styles"
import Heads from "../Heads"
const Card = props => {
  console.log(props)
  return (
    <CardContainer>
      <h3>{props.title}</h3>
      {props.children}
      <CardImageContainer>
        <HeadContainer
          animationRomantard={props.animationRomantard}
          animationAigle={props.animationAigle}
          animationSouffle={props.animationSouffle}
          animationGriff={props.animationGriff}
        >
          <Heads src={props.src} />
        </HeadContainer>
      </CardImageContainer>
    </CardContainer>
  )
}

export default Card
