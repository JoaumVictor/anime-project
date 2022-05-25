import React from 'react'
import PropTypes from 'prop-types'

import * as S from './index';

export const RenderAnimeCards = ({ each, index }) => {
  return (
    <S.Container key={index}>
      <h3>{ each.title }</h3>
      <img src={each.images.jpg.large_image_url} alt="" />
      <S.CardInfo>
        <p>{`Episodios: ${each.episodes}`}</p>
        <p>{`Nota: ${each.score}`}</p>
        { each.year && <p>{`Ano: ${each.year}`}</p>}
      </S.CardInfo>
    </S.Container>
  )
}

RenderAnimeCards.propTypes = {
  each: PropTypes.object,
  index: PropTypes.number,
}.isRequired;
