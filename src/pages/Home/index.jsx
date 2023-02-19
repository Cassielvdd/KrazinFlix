import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
function Home() {
  const [filmes, setFilmes] = useState([]);
  const [rated, setRated] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    function Lanc() {
      fetch(
        ` https://api.themoviedb.org/3/movie/popular?api_key=093e1606a3d331d153ca5ccf2e09d853&language=pt-BR&page=1`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setFilmes(json.results.slice(0, 20));
        });
    }
    Lanc();
    function Top() {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=093e1606a3d331d153ca5ccf2e09d853&language=pt-BR&page=1`
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setRated(json.results);
        });
    }
    Top();
  }, []);
  return (
    <div className="background">
      <Header />
      <main>
        <div className="content">
          <h1>Busque por um Filme</h1>
          <form action="">
            <div className="input">
              <input type="text" placeholder="Buscar Filme" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
      </main>
      <section className="cards-slider">
        <div className="h1">
          <h1>Lançamentos</h1>
        </div>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {filmes.map((filme) => {
            return (
              <div className="card" key={filme.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt=""
                />
                <div className="ab">
                  <Link to={`filme/${filme.id}`}>
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <section className="cards-slider">
        <div className="h1">
          <h1>Top Rated</h1>
        </div>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {rated.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
                <div className="ab">
                  <Link to={`filme/${item.id}`}>
                    <FontAwesomeIcon icon={faPlay} />
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      <Footer />
    </div>
  );
}
export default Home;
