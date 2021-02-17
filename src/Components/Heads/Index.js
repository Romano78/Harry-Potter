import React from "react"
import { ImageContainer, Img } from "./Styles"

const Heads = props => {
  return (
    <ImageContainer>
      <Img src={props.src} alt="" />
    </ImageContainer>
  )
}

export default Heads
