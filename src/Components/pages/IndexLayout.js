import React, { useState } from "react"
import { BodyContainer, ScoreP } from "./Styles"
import Banner from "../Banner"
import Card from "../Card"
import Form from "../Form/Index"
import mc from "../../../static/Images/mc.png"
import robin from "../../../static/Images/robin.png"
import paul from "../../../static/Images/paul.png"
import romain from "../../../static/Images/romain.png"

const IndexLayout = () => {
  const [tardValue, setTardValue] = useState("1")
  const [aigleValue, setAigleValue] = useState("1")
  const [griffValue, setGriffValue] = useState("1")
  const [souffleValue, setSouffleValue] = useState("1")

  const [tardCount, setTardCount] = useState(0)
  const [aigleCount, setAigleCount] = useState(0)
  const [griffCount, setGriffCount] = useState(0)
  const [souffleCount, setSouffleCount] = useState(0)

  const [animationRomantard, setAnimationRomantard] = useState(0)
  const [animationAigle, setAnimationAigle] = useState(0)
  const [animationSouffle, setAnimationSouffle] = useState(0)
  const [animationGriff, setAnimationGriff] = useState(0)

  const onSubmitHandlerTard = e => {
    e.preventDefault()

    if (tardCount < 20) {
      setTardCount(prevState => prevState + +tardValue)

      setAnimationRomantard(prevState => prevState + tardValue * 10)
    }
  }

  const onChangeHandlerTard = e => {
    setTardValue(e.target.value)
  }

  const onSubmitHandlerAigle = e => {
    e.preventDefault()

    if (aigleCount < 20) {
      setAigleCount(prevState => prevState + +aigleValue)
      setAnimationAigle(prevState => prevState + aigleValue * 10)
    }
  }

  const onChangeHandlerAigle = e => {
    setAigleValue(e.target.value)
  }

  const onSubmitHandlerGriff = e => {
    e.preventDefault()

    if (griffCount < 20) {
      setGriffCount(prevState => prevState + +griffValue)
      setAnimationGriff(prevState => prevState + griffValue * 10)
    }
  }

  const onChangeHandlerGriff = e => {
    setGriffValue(e.target.value)
  }

  const onSubmitHandlerSouffle = e => {
    e.preventDefault()

    if (souffleCount < 20) {
      setSouffleCount(prevState => prevState + +souffleValue)
      setAnimationSouffle(prevState => prevState + souffleValue * 10)
    }
  }

  const onChangeHandlerSouffle = e => {
    setSouffleValue(e.target.value)
  }

  const onDeleteHandlerTard = () => {
    if (tardCount >= 1 && tardCount !== 0) {
      setTardCount(tardCount - tardValue)
      setAnimationRomantard(prevState => prevState - tardValue * 10)
    }
  }

  const onDeleteHandlerAigle = () => {
    if (aigleCount >= 1 && aigleCount !== 0) {
      setAigleCount(aigleCount - aigleValue)
      setAnimationAigle(prevState => prevState - aigleValue * 10)
    }
  }

  const onDeleteHandlerSouffle = () => {
    console.log("clicked")
    if (souffleCount >= 1 && souffleCount !== 0) {
      setSouffleCount(souffleCount - souffleValue)
      setAnimationSouffle(prevState => prevState - souffleValue * 10)
    }
  }

  const onDeleteHandlerGriff = () => {
    if (griffCount >= 1 && griffCount !== 0) {
      setGriffCount(griffCount - griffValue)
      setAnimationGriff(prevState => prevState - griffValue * 10)
    }
  }

  return (
    <>
      <Banner />
      <BodyContainer>
        <Card
          title="Romentard"
          animationRomantard={animationRomantard}
          src={romain}
        >
          <ScoreP>
            Score:{" "}
            {tardCount > 20 ? 20 : tardCount && tardCount < 0 ? 0 : tardCount}
          </ScoreP>
          <Form
            count={tardCount}
            onChangeHandler={onChangeHandlerTard}
            onSubmitHandler={onSubmitHandlerTard}
            value={tardValue}
            type={{
              house: "romentard",
            }}
            clicked={onDeleteHandlerTard}
          />
        </Card>
        <Card title="Hemsirdaigle" animationAigle={animationAigle} src={mc}>
          <ScoreP>
            Score:{" "}
            {aigleCount > 20
              ? 20
              : aigleCount && aigleCount < 0
              ? 0
              : aigleCount}
          </ScoreP>
          <Form
            count={aigleCount}
            onChangeHandler={onChangeHandlerAigle}
            onSubmitHandler={onSubmitHandlerAigle}
            value={aigleValue}
            type={{
              house: "hemsirdaigle",
            }}
            clicked={onDeleteHandlerAigle}
          />
        </Card>
        <Card
          title="Paulsouffle"
          animationSouffle={animationSouffle}
          src={paul}
        >
          <ScoreP>
            Score:{" "}
            {souffleCount > 20
              ? 20
              : souffleCount && souffleCount < 0
              ? 0
              : souffleCount}
          </ScoreP>
          <Form
            count={souffleCount}
            onChangeHandler={onChangeHandlerSouffle}
            onSubmitHandler={onSubmitHandlerSouffle}
            value={souffleValue}
            type={{
              house: "paulsouffle",
            }}
            clicked={() => onDeleteHandlerSouffle()}
          />
        </Card>
        <Card title="Gryffobin" animationGriff={animationGriff} src={robin}>
          <ScoreP>
            Score:{" "}
            {griffCount > 20
              ? 20
              : griffCount && griffCount < 0
              ? 0
              : griffCount}
          </ScoreP>
          <Form
            count={griffCount}
            onChangeHandler={onChangeHandlerGriff}
            onSubmitHandler={onSubmitHandlerGriff}
            value={griffValue}
            type={{
              house: "gryffobin",
            }}
            clicked={onDeleteHandlerGriff}
          />
        </Card>
      </BodyContainer>
    </>
  )
}

export default IndexLayout
