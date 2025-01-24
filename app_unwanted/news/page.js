import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"blog page"} />
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-1.jpg")',
                      }}
                    />
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-user" />
                          Shikhon .Ha
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="/news-details">
                          QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered Lorem haca
                        ullamcorper donec ante habi believable. If you are going
                        to use a passage of Lorem Ipsum cibo mundi ea duo donec
                        imperdiet eturpis varius per a augue magna hac. dolor
                        sit amet, teration in some form, by injected humour, or
                        randomised words which don't look ev
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="post-link">
                          <Link href="/news-details">
                            <i className="fas fa-arrow-right" /> Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-2.jpg")',
                      }}
                    />
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-user" />
                          Modina Theme
                        </span>
                        <span>
                          <i className="fal fa-comments" />5 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          4th February 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="/news-details">
                          QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered Lorem haca
                        ullamcorper donec ante habi believable. If you are going
                        to use a passage of Lorem Ipsum cibo mundi ea duo donec
                        imperdiet eturpis varius per a augue magna hac. dolor
                        sit amet, teration in some form, by injected humour, or
                        randomised words which don't look ev
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="post-link">
                          <Link href="/news-details">
                            <i className="fas fa-arrow-right" /> Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/news/post-3.jpg")',
                      }}
                    />
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-user" />
                          Shikhon .Ha
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          35 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          24th March 2024
                        </span>
                      </div>
                      <h2>
                        <Link href="/news-details">
                          QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS
                        </Link>
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered Lorem haca
                        ullamcorper donec ante habi believable. If you are going
                        to use a passage of Lorem Ipsum cibo mundi ea duo donec
                        imperdiet eturpis varius per a augue magna hac. dolor
                        sit amet, teration in some form, by injected humour, or
                        randomised words which don't look ev
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="post-link">
                          <Link href="/news-details">
                            <i className="fas fa-arrow-right" /> Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-post quote-post format-quote">
                    <div className="post-content text-white bg-cover">
                      <div className="quote-content">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="quote-text">
                          <h2>
                            Good food is the foundation of genuine happiness.
                            Cooking is love made visible
                          </h2>
                          <div className="post-meta pt-40 d-inline-block">
                            <span>
                              <i className="fal fa-comments" />
                              35 Comments
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt" />
                              24th March 2024
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <Link href="#" className="page-numbers">
                        <i className="fal fa-long-arrow-left" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        01
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        ..
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        10
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        11
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
