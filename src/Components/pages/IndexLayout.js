import React, { useState } from "react"
import { BodyContainer, ScoreP, DeleteButton } from "./Styles"
import Banner from "../Banner"
import Card from "../Card"
import Form from "../Form/Index"
// import Button from "../Utilities/Button"

const IndexLayout = () => {
  const [tardValue, setTardValue] = useState("1")
  const [aigleValue, setAigleValue] = useState("1")
  const [griffValue, setGriffValue] = useState("1")
  const [souffleValue, setSouffleValue] = useState("1")

  const [tardCount, setTardCount] = useState(0)
  const [aigleCount, setAigleCount] = useState(0)
  const [griffCount, setGriffCount] = useState(0)
  const [souffleCount, setSouffleCount] = useState(0)

  const onSubmitHandlerTard = e => {
    e.preventDefault()

    if (tardCount < 20) {
      setTardCount(prevState => prevState + +tardValue)
    }
  }

  const onChangeHandlerTard = e => {
    setTardValue(e.target.value)
  }

  const onSubmitHandlerAigle = e => {
    e.preventDefault()

    if (aigleCount < 20) {
      setAigleCount(prevState => prevState + +aigleValue)
    }
  }

  const onChangeHandlerAigle = e => {
    setAigleValue(e.target.value)
  }

  const onSubmitHandlerGriff = e => {
    e.preventDefault()

    if (griffCount < 20) {
      setGriffCount(prevState => prevState + +griffValue)
    }
  }

  const onChangeHandlerGriff = e => {
    setGriffValue(e.target.value)
  }

  const onSubmitHandlerSouffle = e => {
    e.preventDefault()

    if (souffleCount < 20) {
      setSouffleCount(prevState => prevState + +souffleValue)
    }
  }

  const onChangeHandlerSouffle = e => {
    setSouffleValue(e.target.value)
  }

  const onDeleteHandlerTard = () => {
    if (tardCount >= 1 && tardCount !== 0) {
      setTardCount(tardCount - tardValue)
    }
  }

  const onDeleteHandlerAigle = () => {
    if (aigleCount >= 1 && aigleCount !== 0) {
      setAigleCount(aigleCount - aigleValue)
    }
  }

  const onDeleteHandlerSouffle = () => {
    if (souffleCount >= 1 && souffleCount !== 0) {
      setSouffleCount(souffleCount - souffleValue)
    }
  }

  const onDeleteHandlerGriff = () => {
    if (griffCount >= 1 && griffCount !== 0) {
      setGriffCount(griffCount - griffValue)
    }
  }

  return (
    <>
      <Banner />
      <BodyContainer>
        <Card title="Romentard">
          <ScoreP>Score: {tardCount}</ScoreP>
          <Form
            count={tardCount}
            onChangeHandler={onChangeHandlerTard}
            onSubmitHandler={onSubmitHandlerTard}
            value={tardValue}
            type={{
              house: "romentard",
            }}
          />
          <DeleteButton onClick={onDeleteHandlerTard}>Substract</DeleteButton>
        </Card>
        <Card title="Hemsirdaigle">
          <ScoreP>Score: {aigleCount}</ScoreP>
          <Form
            count={aigleCount}
            onChangeHandler={onChangeHandlerAigle}
            onSubmitHandler={onSubmitHandlerAigle}
            value={aigleValue}
            type={{
              house: "hemsirdaigle",
            }}
          />
          <DeleteButton onClick={onDeleteHandlerAigle}>Substract</DeleteButton>
        </Card>
        <Card title="Paulsouffle">
          <ScoreP>Score: {souffleCount}</ScoreP>
          <Form
            count={souffleCount}
            onChangeHandler={onChangeHandlerSouffle}
            onSubmitHandler={onSubmitHandlerSouffle}
            value={souffleValue}
            type={{
              house: "paulsouffle",
            }}
          />
          <DeleteButton onClick={onDeleteHandlerSouffle}>
            Substract
          </DeleteButton>
        </Card>
        <Card title="Gryffobin">
          <ScoreP>Score: {griffCount}</ScoreP>
          <Form
            count={griffCount}
            onChangeHandler={onChangeHandlerGriff}
            onSubmitHandler={onSubmitHandlerGriff}
            value={griffValue}
            type={{
              house: "gryffobin",
            }}
          />
          <DeleteButton onClick={onDeleteHandlerGriff}>Substract</DeleteButton>
        </Card>
      </BodyContainer>
    </>
  )
}

export default IndexLayout
