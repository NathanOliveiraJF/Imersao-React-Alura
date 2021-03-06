/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoryRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  // http://localhost:8080/categorias?_embed=videos
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Computação quântica é a palavra do futuro. Há pouco tempo, a Google anunciou que alcançamos a supremacia quântica e todos ficaram animados. Como estamos cada vez mais próximos do limite da computação atual, a expectativa de computadores quânticos no horizonte nos deixa animados. Mas como é que um computador quântico funciona? O que torna ele diferente de um computador clássico?"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Computação quântica é a palavra do futuro. Há pouco tempo, a Google anunciou que alcançamos a supremacia quântica e todos ficaram animados. Como estamos cada vez mais próximos do limite da computação atual, a expectativa de computadores quânticos no horizonte nos deixa animados. Mas como é que um computador quântico funciona? O que torna ele diferente de um computador clássico?"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;
