import React from "react"
import { BannerContainer } from "./Styles"
import Heads from "../Heads"

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Laurry Pottini</h1>
      <Heads src="https://source.unsplash.com/random" />
    </BannerContainer>
  )
}

export default Banner
