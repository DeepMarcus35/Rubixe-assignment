import "./header.css";
const Navbar = () => {
    return (
      <>
        {
          <div className="header">

            <div className="header-left">
            <img className="logo" src={require("../../images/logo.png")}
            alt="logo" />
            </div>

            <div className="header-right">
              <span>HOME</span>
              <span>SERVICES</span>
              <span>PRODUCTS</span>
              <span>AI INTERNSHIP</span>
              <span>CAREER</span>
              <span>BLOG</span>
              <span>ABOUT</span>
              <span>CONTACT US</span>
            </div>
          </div>
          }
      </>
    );
  };
  
  export default Navbar;
  