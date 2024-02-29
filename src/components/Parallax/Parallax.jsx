import "./parallax.scss";

function Parallax({ type }) {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "About"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* <h1>{type === "About" ? "What I Do?" : "What I did?"}</h1> */}
      <div className="mountains"></div>
      <div className="plannets"></div>
      <div className="stars"></div>
    </div>
  );
}

export default Parallax;
