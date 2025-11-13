"use client";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div
      className="catagory-product-card bg-cover"
      style={{
        backgroundImage: 'url("assets/img/shape/catagory-card-shape.jpg")',
      }}
    >
      <h5>{category.total} products</h5>
      <div className="catagory-product-image text-center">
        <div
          // href={{
          //   pathname: "/shop-list",
          //   query: { category: category.category },
          // }}
        >
          <img
            className="category-product-main-image"
            src={category.image}
            alt="product-img"
          />
          {/* <div className="decor-leaf">
              <img
                src="assets/img/shape/decor-leaf.svg"
                alt="shape-img"
              />
            </div>
            <div className="decor-leaf-2">
              <img
                src="assets/img/shape/decor-leaf-2.svg"
                alt="shape-img"
              />
            </div>
            <div className="burger-shape">
              <img
                src="assets/img/shape/burger-shape.png"
                alt="shape-img"
              />
            </div> */}
        </div>
      </div>
      <div className="catagory-product-content text-center">
        {/* <div className="catagory-product-icon">
            <img
              src="assets/img/shape/food-shape.svg"
              alt="shape-text"
            />
          </div> */}
        <h3 className="mt-3">
          {/* TODO :: handle this peroperly until this, it is not clickable */}
          <div
            // href={{
            //   pathname: "/shop-list",
            //   query: { category: category.category },
            // }}
          >
            {category.category}
          </div>
        </h3>
        <p>{category.total} products</p>
      </div>
    </div>
  );
};

export default CategoryCard;
