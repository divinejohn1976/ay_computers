import React from "react";

const Content = () => {
  const imagesPath = [
    "./assets/computers/laptop1.jpeg",
    "./assets/computers/laptop2.jpeg",
    "./assets/computers/laptop3.jpeg",
    "./assets/computers/laptop4.jpeg",
    "./assets/computers/laptop5.jpeg",
    "./assets/computers/laptop6.jpeg",
  ];
  return (
    <main>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {imagesPath.map((path) => (
            <div
              class="carousel-item active carousel carousel-fade"
              data-bs-interval="2000"
              title="AY Laptops"
            >
              <img src={path} alt="Laptops" />
            </div>
          ))}
          {/* <div class="carousel-item active" data-bs-interval="10000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Content;
