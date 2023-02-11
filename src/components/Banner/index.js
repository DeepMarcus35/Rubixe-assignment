import "./banner.css";
export const Banner = () => {
  return (
    <>
      <img
        src={require("../../images/seminar.jpg")}
        className="banner_img"
        alt="seminar image"
      />
      <div className="banner-text-container">
        <h1>TECH</h1>
        <h4>FOR</h4>
        <h2>TEENS</h2>
        <div className="bottom-text">
        <h3>CARVING FUTURE <br />
        TECHNOLOGY PROFESSIONALS<br />
        OUT OF YOUNG MINDS
        </h3>
        </div>
      </div>
    </>
  );
};
