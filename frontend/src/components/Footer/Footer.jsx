import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* <h3>NUME</h3> */}
        <ul className="socials">
          <li><a href="#"><i className="linkedin"></i></a></li>
          <li><a href="#"><i className="github"></i></a></li>
        </ul>
      </div>
      <p>Copyright © 2022</p>{" "}
    </footer>
  );
};

export default Footer;
