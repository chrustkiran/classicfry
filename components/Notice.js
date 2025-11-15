import './notice.css';
export default function Notice(){
  return (
    <div className="announcement-banner">
      <div className="container">
        <div className="banner-content">
          <span className="banner-icon">🎉</span>
          <span className="banner-text">
            <strong>COMING SOON!</strong> We're expanding to Romford! Stay tuned
            for updates.
          </span>
          <a href='/contact#romford-location'><span className="banner-badge">NEW LOCATION</span></a>
        </div>
      </div>
    </div>
  );
}
