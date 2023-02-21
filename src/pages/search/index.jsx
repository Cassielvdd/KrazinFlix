import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./search.css";
import Header from "../../components/header";
import { toast } from "react-toastify";
function SearchResult() {
  const navigation = useNavigate();
  const { query } = useParams();
  const [busca, setBusca] = useState([]);
  useEffect(() => {
    async function search() {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=093e1606a3d331d153ca5ccf2e09d853&query=${query}&language=pt-BR`
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setBusca(json.results.slice(0, 5));
          console.log(json);
        })
        .catch((error) => {
          toast.error("Filme não encontrado");
          navigation("/", { replace: true });
        });
    }
    search();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      {busca.map((item) => {
        if (item.backdrop_path === null) {
          toast.warn("As imagens de alguns filmes não foram encontradas");
        }
        return (
          <div
            key={item.id}
            className="result-card"
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original${item.backdrop_path}`})`,
            }}
          >
            <div className="result-box">
              <div className="left">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />
              </div>
              <div className="right">
                <h1>{item.title}</h1>
                <p>
                  Lançamento :{" "}
                  {item.release_date.split("-").reverse().join("/")}
                </p>
                <Link to={`/filme/${item.id}`}>Acessar</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SearchResult;
