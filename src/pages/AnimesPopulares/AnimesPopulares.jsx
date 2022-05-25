import axios from 'axios';
import React, { useEffect, useState } from 'react'

import * as S from './index';
import { RenderAnimeCards } from '../../components/RenderAnimeCards/RenderAnimeCards';
import URLS from '../../services/URLS';

export const AnimesPopulares = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios(URLS.topAnimes)
    .then(({ data }) => {
      setData(data.data);
      console.log(data.data[0]);
    });
  }, []);

  return (
    <>
      <S.Title>
        Esses são os 25 animes mais populares da atualidade de acordo com o My Anime List
      </S.Title>
      
      <S.RenderAnimeCards>
        {data && (
          data.map((each, i) => (
            <RenderAnimeCards each={each} index={i} />
          )))}
      </S.RenderAnimeCards>
      
      <S.UrlsContainer>
        <h4>{ URLS.topAnimes }</h4>
      </S.UrlsContainer>
    </>
  );
}
