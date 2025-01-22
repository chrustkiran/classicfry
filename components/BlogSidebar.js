import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Search</h4>
          </div>
          <div className="search_widget">
            <form action="#">
              <input type="text" placeholder="Search your keyword..." />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Popular Feeds</h4>
          </div>
          <div className="popular-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp1.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="/news-details">
                    Budget Issues Force The Our To Become
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  24th March 2024
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp2.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="/news-details">
                    The Best Products That Shape Fashion
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  25th March 2024
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/news/pp3.jpg")',
                }}
              />
              <div className="post-content">
                <h5>
                  <Link href="/news-details">
                    The Best Products That Shape Fashion
                  </Link>
                </h5>
                <div className="post-date">
                  <i className="far fa-calendar-alt" />
                  26th March 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Categories</h4>
          </div>
          <div className="widget_categories">
            <ul>
              <li>
                <Link href="/news">
                  <i className="flaticon-burger" />
                  burger <span>23</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-chicken" />
                  Fried Chiken <span>24</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-french-fries" />
                  French Fries <span>11</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-pizza" />
                  Hot Pizzas <span>05</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-sandwich" />
                  Sandwich <span>06</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-bread" />
                  Bread <span>10</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-rice" />
                  fried rice <span>13</span>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <i className="flaticon-hotdog" />
                  hot dog <span>07</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Never Miss News</h4>
          </div>
          <div className="social-link">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Popular Tags</h4>
          </div>
          <div className="tagcloud">
            <Link href="/news">burger</Link>
            <Link href="/news-details">hot dog</Link>
            <Link href="/news-details">french fry</Link>
            <Link href="/news-details">chiken</Link>
            <Link href="/news-details">pasta</Link>
            <Link href="/news-details">Sandwich</Link>
            <Link href="/news-details">landing</Link>
            <Link href="/news-details">fast food</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
