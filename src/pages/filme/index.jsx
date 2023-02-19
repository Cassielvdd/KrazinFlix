import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSave, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./filme.css";

function PageF() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
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
    function filmePage() {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=093e1606a3d331d153ca5ccf2e09d853&language=pt-BR`
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setFilme(json);
        });
    }
    filmePage();
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
    <div
      className="tudo"
      style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${filme.backdrop_path}`})`,
      }}
    >
      <Header />
      <div className="conteudo">
        <div className="film-content">
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
              alt=""
            />
          </div>
          <div className="text">
            <h1>{filme.title}</h1>
            <h3>{filme.tagline}</h3>
            <p>Avaliação: {filme.vote_average} / 10</p>
            <p>Custo de Produção : {filme.budget}</p>
            <button className="save">
              <FontAwesomeIcon icon={faSave} />
            </button>
            <button className="play">
              <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
        </div>
        <div className="overview">
          <p>{filme.overview}</p>
        </div>
      </div>
      <section className="cards-slider-1">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {rated.map((item) => {
            return (
              <div className="card-1" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
                <div className="ab">
                  <Link to={`/`}>
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
export default PageF;
