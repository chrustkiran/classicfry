import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"blog single"} />
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">
                      <h2 className="mt-0">
                        QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS
                      </h2>
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          Shikhon .Ha
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          15 Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          4th February 2024
                        </span>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered Lorem haca
                        ullamcorper donec ante habi believable. If you are going
                        to use a passage of Lorem Ipsum cibo mundi ea duo donec
                        imperdiet eturpis varius per a augue magna hac. dolor
                        sit amet, teration in some form, by injected humour, or
                        randomised words which don't look ev
                      </p>
                      <p>
                        When Food is a Love Language Food is a powerful way to
                        show love. That's especially true in many Asian American
                        and Pacific Islander (AAPI) cultures, where it's more
                        common to show care through actions rather than
                        words—and especially through food.
                      </p>
                      <img
                        src="assets/img/news/post-4.jpg"
                        alt="blog__img"
                        className="single-post-image"
                      />
                      <h4>
                        The people who give you their food give you their heart
                      </h4>
                      <p>
                        This shortage is being seen in both the airline and the
                        cargo industries. With such a small pool of applicants
                        to choose from, these two sectors are battling to get
                        the most qualified available candidates. Many pilots are
                        increasingly being wooed to get behind the controls of
                        passenger planes over cargo flights—frankly, it’s tough
                        to compete with jobs perks like fixed schedules and free
                        flights for your family across the world.
                      </p>
                      <blockquote>
                        Your time is limited, so don’t waste it living someone
                        else’s life. Don’t be trapped by dogma – which is living
                        with the results
                      </blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incidid unt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute.
                      </p>
                      <ul className="checked-list mb-4">
                        <li>Cooking is love made visible</li>
                        <li>We’re an open book</li>
                        <li>100% goes to the field</li>
                        <li>Received the highest grades</li>
                      </ul>
                      <h5>People who love to eat are always the best people</h5>
                      <p>
                        Just as we’ve found with the truck driver shortage, the
                        impetus behind skilled labor leaving is many-fold.
                        Demographics play a large role—a massive amount of
                        pilots are expected to hang up their hats in the next
                        few years as they reach the mandatory commercial pilot
                        retirement age of 65. And there’s no large group of
                        applicants sitting waiting to replace them.This is
                        likely because it’s becoming considerably more difficult
                        to obtain a pilot license than it was ten years ago.
                      </p>
                      <img
                        className="alignleft"
                        src="assets/img/news/post-inner.jpg"
                        alt="blog__img"
                      />
                      <p>
                        This is a constantly updated list of hand-curated food
                        quotes from popular chefs, cooks, and quotes from
                        notable writers. Feel free to share these food quotes on
                        Pinterest, Facebook, Twitter, Instagram, etc.
                      </p>
                      <p>
                        When Food is a Love Language Food is a powerful way to
                        show love. That's especially true in many Asian American
                        and Pacific Islander (AAPI) cultures, where it's more
                        common to show care through actions rather than
                        words—and especially through food. I watch cooking
                        change the cook, just as it transforms the food
                      </p>
                    </div>
                  </div>
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Releted Tags</h4>
                      <div className="tagcloud">
                        <Link href="/news-details">Design</Link>
                        <Link href="/news-details">apps</Link>
                        <Link href="/news-details">data</Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
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
                      </div>
                    </div>
                  </div>
                  {/* comments section wrap start */}
                  <div className="comments-section-wrap pt-40">
                    <div className="comments-heading">
                      <h3>03 Comments</h3>
                    </div>
                    <ul className="comments-item-list">
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img
                            src="assets/img/news/author_img2.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Rosalina Kelian</a>
                            </h5>
                            <span>19th May 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna. Ut enim ad minim
                              veniam, quis nostrud laboris nisi ut aliquip ex ea
                              commodo consequat.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img
                            src="assets/img/news/author_img3.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Arista Williamson</a>
                            </h5>
                            <span>21th Feb 2024</span>
                            <a href="#" className="theme-btn minimal-btn">
                              <i className="fal fa-reply" />
                              Reply
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                        <ul className="replay-comment">
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img
                                src="assets/img/news/author_img4.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Salman Ahmed</a>
                                </h5>
                                <span>29th Jan 2021</span>
                                <a href="#" className="theme-btn minimal-btn">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <div className="comment-text">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam..
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-form-wrap mt-40">
                    <h3>Post Comment</h3>
                    <form action="#" className="comment-form">
                      <div className="single-form-input">
                        <textarea
                          placeholder="Type your comments...."
                          defaultValue={""}
                        />
                      </div>
                      <div className="single-form-input">
                        <input type="text" placeholder="Type your name...." />
                      </div>
                      <div className="single-form-input">
                        <input type="email" placeholder="Type your email...." />
                      </div>
                      <div className="single-form-input">
                        <input
                          type="text"
                          placeholder="Type your website...."
                        />
                      </div>
                      <button className="theme-btn center" type="submit">
                        <i className="fal fa-comments" />
                        Post Comment
                      </button>
                    </form>
                  </div>
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
