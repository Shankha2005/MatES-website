export const metadata = { title: 'Mates' }

export default function Page() {
  return (
    <main>
      
          <div id="preloader"></div>
          {/* Header section start */}
          <header className="header-area" id="navbar">
            <a href="/" className="logo-area">
              <img src="/img/Mlogo.webp" alt="logo" />
            </a>
      
            <div className="nav-switch"><i className="fa fa-bars"></i></div>
      
            <nav className="nav-menu">
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/#about">ABOUT US</a></li>
                <li><a href="/#events">EVENTS</a></li>
                <li><a href="/gallery">GALLERY</a></li>
                <li><a href="/team">TEAM</a></li>
              </ul>
            </nav>
          </header>
          {/* Header section end */}
      
          {/* Hero section start */}
          <section className="hero-section">
            <div id="hero">
              <div
                className="back_img"
                style={{ backgroundImage: "url('/img/landing.jpg')" }}
              ></div>
              <div className="caption">
                <h1 data-aos="fade-up" data-aos-delay="500">MatES, IIT Patna</h1>
                <h2 data-aos="fade-right" data-aos-delay="500">
                  Materials Engineering Society (MatES), IIT PATNA is an association
                  of UG & PG students, college faculty and staff of the Department of
                  Metallurgical and Materials Engineering of IIT Patna.
                </h2>
      
                <a
                  href="#events"
                  className="btn-get-started"
                  data-aos="fade-left"
                  data-aos-delay="800"
                  >View Events</a
                >
              </div>
            </div>
          </section>
          {/* Hero section end */}
      
          {/* Main section start -------------------------------------------------------------*/}
          <main id="main" style={{ backgroundColor: "#000" }}>
            {/* About section start */}
            <section id="about" className="cta-section pt100 pb50">
              <div className="container" style={{ maxWidth: "1279px" }}>
                <div
                  className="p-lg-5 cta-content"
                  style={{ flex: "auto" }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div
                    style={{ height: "1px", backgroundColor: "#dcbf30", marginBottom: "1%" }}
                  ></div>
                  <h2
                    className="sp-title"
                    style={{ fontSize: "42px", marginBottom: "10px", textAlign: "center" }}
                  >
                    About Us
                  </h2>
      
                  <div
                    style={{ height: "1px", backgroundColor: "#dcbf30", marginBottom: "3%" }}
                  ></div>
                  <p>
                    Materials Engineering Society (MatES) is an official student body
                    of the Materials Engineering Department at the Indian Institute of
                    Technology Patna (IIT Patna). It was established in 2009 with the
                    aim of promoting the field of materials science and engineering
                    among students and researchers. MatES organizes various technical
                    and non-technical events throughout the year to provide a platform
                    for students to showcase their skills and knowledge in the field
                    of materials engineering. Some of the events organized by MatES
                    include guest lectures, workshops, industrial visits, and
                    technical competitions. <br /><br />
                    The society also provides a platform for students to participate
                    in various national and international conferences and seminars
                    related to materials science and engineering. MatES conducts
                    various training programs and workshops to enhance the technical
                    skills and knowledge of the students. MatES, IIT Patna, has been
                    successful in creating awareness about the field of materials
                    science and engineering among students and researchers. The
                    society has played a key role in promoting research and
                    development in the field of materials engineering. In conclusion,
                    MatES at IIT Patna has been instrumental in promoting the field of
                    materials science and engineering among students and researchers.
                    The society has provided a platform for students to showcase their
                    skills and knowledge and has encouraged them to participate in
                    various technical and non-technical events.
                  </p>
                  <div className="caption">
                    <a
                      href="https://linktr.ee/stc.iitp"
                      target="_blank"
                      className="btn-get-started"
                      data-aos="fade-up"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* About section end */}
      
            {/*Events Section start*/}
            <section id="events" className="cta-section pt100 pb50">
              <div className="container" style={{ maxWidth: "1279px" }}>
                <div
                  className="p-lg-5 cta-content"
                  style={{ flex: "auto" }}
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div
                    style={{ height: "1px", backgroundColor: "#dcbf30", marginBottom: "1%" }}
                  ></div>
                  <h2
                    className="sp-title"
                    style={{ fontSize: "42px", marginBottom: "10px", textAlign: "center" }}
                  >
                    Our Past Events
                  </h2>
      
                  <div
                    style={{ height: "1px", backgroundColor: "#dcbf30", marginBottom: "3%" }}
                  ></div>
                  <div className="row">
                    <figure className="snip0016" data-aos="fade-up">
                      <img src="/img/first.jpeg" alt="sample41" />
                      <figcaption>
                        <h4>Material Science Exhibition and Materials Quiz</h4>
                        <p>
                          A milestone in club's functioning where a quiz based on
                          elementary level material science for school students and an
                          exhibition demonstrating interesting experiments and the
                          concepts behind them was conducted.
                        </p>
                        {/*<a href="#"></a>*/}
                      </figcaption>
                    </figure>
      
                    <figure className="snip0016" data-aos="fade-up" data-aos-delay="200">
                      <img src="/img/second.jpeg" alt="sample42" />
                      <figcaption>
                        <h4>MatEX: Fresher's Event</h4>
                        <p>
                          It was a part of 'HELLO WORLD' (Orientation of technical
                          clubs for freshers), which introduced freshers to the club
                          events and its working. The presentation also involved
                          interaction with alumini through google meet.
                        </p>
                      </figcaption>
                    </figure>
      
                    <figure className="snip0016" data-aos="fade-up" data-aos-delay="400">
                      <img src="/img/third.jpeg" alt="sample43" />
                      <figcaption>
                        <h4>MatES Trivia: Quiz</h4>
                        <p>
                          A quiz organised as a part of 'HELLO WORLD' exclusively for
                          freshers which included various types of questions including
                          text and picture formats.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
            {/*Events Section end*/}
      
            {/* Gallery section start */}
            <section className="cta" style={{ marginTop: "50px" }}>
              <h1>WE STAND AHEAD IN QUALITY</h1>
              <a href="/gallery" className="btn-get-started" data-aos="fade-right"
                >VIEW GALLERY</a
              >
            </section>
          </main>
          {/*MAIN section ends---------------------------------------------------------------*/}
      
          {/* Footer section start */}
          <footer>
            {/* Grid container */}
            <div className="container">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="brief-info col-lg-4 col-md-12 col-sm-12">
                  <img
                    loading="lazy"
                    src="/img/Mlogo.webp"
                    alt="white logo"
                    width="200"
                  />
                  <p>
                    Materials Engineering Society (MatES), IIT PATNA is an association
                    of UG & PG students, college faculty and staff of the Department
                    of Metallurgical and Materials Engineering of IIT Patna.
                  </p>
      
                  <div className="social-icons col-lg-4 col-md-12 col-sm-12">
                    <h5>Follow Us!</h5>
                    <ul className="social-network social-circle">
                      <li>
                        <a
                          href="https://www.facebook.com/MatES.IITP"
                          className="fa fa-facebook"
                          title="Facebook"
                          target="_blank"
                          ><i className="icofont-facebook"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/mates__iitp/?hl=en"
                          className="fa fa-instagram"
                          title="Instagram"
                          target="_blank"
                          ><i className="icofont-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna/mycompany/"
                          className="fa fa-linkedin"
                          title="Linkedin"
                          target="_blank"
                          ><i className="icofont-linkedin"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
      
                <div className="link-section row col-lg-4 col-md-12 col-sm-12">
                  {/*Grid column*/}
                  <div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <h6 className="text-uppercase">Quick Links</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="/" id="text-dark">MatES</a>
                      </li>
                      <li>
                        <a href="#about" id="text-dark"
                          >About Us</a
                        >
                      </li>
                      <li>
                        <a
                          href="#events"
                          id="text-dark"
                          >Events</a
                        >
                      </li>
                      <li>
                        <a
                          href="/gallery"
                          id="text-dark"
                          >Gallery</a
                        >
                      </li>
                      <li><a href="/team" id="text-dark">Team</a></li>
                    </ul>
                  </div>
                  {/*Grid column*/}
                </div>
      
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <div id="map">
                    <h6 className="text-uppercase">Visit Our Campus</h6>
                    <iframe
                      loading="lazy"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721"
                      width="350px"
                      height="300px"
                      frameBorder="0"
                      style={{ borderRadius: "5px" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
      
              {/* Copyright */}
              {/*Grid row*/}
              <div className="copyright-text row">
                <div className="credits col-sm-12">
                  <span style={{ fontWeight: "100" }}
                    >&copy; Copyright
                    <span style={{ fontWeight: "600" }}>MatES, IIT Patna.</span></span
                  >
                  <span className="credit-N-M"
                    >Developed by MatES Technical Committee.&#9829;</span
                  >
                </div>
              </div>
            </div>
            {/* Grid container */}
          </footer>
          {/* Footer section end */}
      
          {/*JavaScript*/}
          
          
          {/*====== Javascripts & Jquery ======*/}
          
          
          
          
          
          
          
          
          
      
          
        
    </main>
  )
}
