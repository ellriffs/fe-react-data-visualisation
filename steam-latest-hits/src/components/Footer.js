import '../styles/Footer.css';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function Footer() {
  return (
    <footer className="Footer" onClick={scrollToTop}>
      <h3>Back To Top!</h3>
    </footer>
  );
};

export default Footer;
