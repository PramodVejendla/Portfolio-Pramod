import "./projects.scss";

function Projects() {
  return (
    <div className="projects">
      <div className="wrapper">
        <a href="https://natours-murex-alpha.vercel.app/" target="blank">
          <div className="project1">
            <img src="./natours.png" />
          </div>
        </a>
      </div>

      <div className="wrapper">
        <a href="https://realtors-ashy.vercel.app/" target="blank">
          <div className="project1">
            <img src="./realtor.png" />
          </div>
        </a>
      </div>
      <div className="wrapper">
        <a href="https://trillo-hotel-booking.vercel.app/" target="blank">
          <div className="project1">
            <img src="./trillo.png" />
          </div>
        </a>
      </div>
      <div className="wrapper">
        <a
          href="https://metro-food-156shte7w-pramodvejendlas-projects.vercel.app/"
          target="blank"
        >
          <div className="project1">
            <img src="./ShoppingCart.png" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
