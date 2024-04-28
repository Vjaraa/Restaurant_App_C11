import React from 'react'
import * as S from "./Container.styles";

const Container = ({Children}) => {
  return (
    <S.ContainerContent>{Children}</S.ContainerContent>
  )
}

export default Container