import React from "react"
import { BannerContainer } from "./Styles"
import Heads from "../Heads"
import lo from "../../../static/Images/lo.jpg"

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Laurry Pottini</h1>
      <Heads src={lo} />
    </BannerContainer>
  )
}

export default Banner
