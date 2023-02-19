import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="contain">
        <div className="left">
          <h1>KrazinFlix</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
            amet corrupti obcaecati, numquam voluptate unde repellendus
            recusandae cupiditate ratione ad, laudantium non fuga sit fugit
            sequi iure, delectus ex et.
          </p>
        </div>
        <div className="right">
          <h1>Menu</h1>
          <div className="btn-right">
            <button>Contato</button>
            <button>Sobre</button>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>&copy; 2023 por Pedro Cassiel Web Dev</p>
      </div>
    </footer>
  );
}
export default Footer;
