import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";


// const Item = ({item}) => {
//   return (
//     <div
//       className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
//       data-wow-delay=".3s"
//     >
//       <div className="catagory-product-card-2 shadow-style text-center">
//         {/* <div className="icon">
//           <Link href="/shop-cart">
//             <i className="far fa-heart" />
//           </Link>
//         </div> */}
//         <div className="catagory-product-image">
//           <img src={item['image']} alt="product-img" />
//         </div>
//         <div className="catagory-product-content">
//           <div className="catagory-button">
//             <Link href="/shop-cart" className="theme-btn-2">
//               <i className="far fa-shopping-basket" />
//               Add To Cart
//             </Link>
//           </div>
//           <div className="info-price d-flex align-items-center justify-content-center">
//             {/* <p>-5%</p> */}
//             <h4>{item.portionPrices.map(price => price.price).toSorted()[0]}</h4>
//             <span>{item.tag}</span>
//             {/* <span>$28.52</span> */}
//           </div>
//           <h4>
//             <Link href="/shop-single">{item.name}</Link>
//           </h4>
//           {/* <div className="star">
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star" />
//                     <span className="fas fa-star text-white" />
//                   </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

const page = () => {
  // const [items, fetchItems] = useItem();

  // const [consItems, setConsItems ] = useState({})

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // useEffect(() => {
  //   setConsItems(items.filter(item => item.isAvailable).reduce((obj, item) => {
  //     if (!item.category in obj) {
  //       obj[item.category] = [];
  //     }
  //     obj[item.category].push(obj);
  //   }, {}));
  // }, [items]);

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Page"} />
      {/* <section className="food-category-section fix section-padding">
        <div className="container">
          <ProductTopBar />
          <div className="row">
            {consItems.map(item => {
              <Item item={item}></Item>
            })}
          </div>
          <div
            className="page-nav-wrap mt-5 text-center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <ul>
              <li>
                <Link className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-left" />
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  1
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  2
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  3
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  4
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
