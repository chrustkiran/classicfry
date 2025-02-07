const Marque = ({ pt = 0 }) => {
  return (
    <div className={`marque-section fix section-padding pt-${pt} section-bg`}>
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <span className="text-slider text-color">More</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">fries,</span>
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">more </span>
              <span className="text-slider text-color-2">smiles,</span>{" "}
              <img src="assets/img/icon/pizza.png" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">more </span>
              <span className="text-slider text-color">crunch -</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">perfect </span>
              <span className="text-slider text-color">for</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">sharing !</span>
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
              <span className="text-slider text-color-2">food</span>{" "}
              <img src="assets/img/icon/pizza.png" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">populer</span>
              <span className="text-slider text-color">dishes</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marque;
