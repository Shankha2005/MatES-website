export const metadata = { title: 'Mates' }

export default function Page() {
  return (
    <main>
      
          <div id="preloader"></div>
          {/* Header section start */}
          <header className="header-other" id="navbar">
            <a href="/" className="logo-area">
              <img src="/img/Mlogo.webp" alt="" />
            </a>
            <div className="nav-switch">
              <i className="fa fa-bars"></i>
            </div>
      
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
      
          {/* Page header section start */}
          <section className="page-header-section" style={{ backgroundColor: "#f4f7fe" }}>
              <div className="team-container text-center">
                  <h1 className="header-title text-center" data-aos="fade-down">Our Team</h1>
              </div>
          </section>
          {/* Page header section end */}
          
          <section id="cards">
              <div className="container py-2" style={{ backgroundColor: "transparent" }}>
                  <div className="tile" id="tile-1">
                      {/*2023-24 */}
                      <div className="tab-content">
                          <div className="tab-pane fade show active" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                              <h2 className="text-center my-4" data-aos="fade-up" data-aos-delay="100">Overall Club Coordinator</h2>
                              <div className="row d-flex justify-content-center">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/Deepesh.jpg" alt="Pratyush Manas" /></div>
                                          
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Deepesh Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Organizer</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:pratyush_2101mm17@iitp.ac.in"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/pratyush-manas-322460228/
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/cuberrr65/
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
      
                              <h2 className="text-center my-4" data-aos="fade-up">Committee Coordinators</h2>
                              <div className="row d-flex justify-content-around">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/Abhinay_ MPR.jpg" alt="" /></div>
                                          
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Abhinay</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:saranya_2101mm24@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/saranya-tiwari-68b74224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/tiwsaranya?igsh=MW02bHViN3VieHFwMw==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                    <div className="our-team">
                                        <div className="pic"><img src="/img/Coords/Abhishek_MediaRelations.jpg" alt="" /></div>
                                        
                                        <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Abhishek</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                        
                                        <ul className="social">
                                            <li className="d-flex flex-row justify-content-around align-item-center">
                                                <a href="mailto:mohit_2101mm11@iitp.ac.in
                                                "><i className="fa fs-2 fa-envelope"></i></a>
                                                <a href="https://www.linkedin.com/in/mohit-kumar-941a54201/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                    <div className="our-team">
                                        <div className="pic"><img src="/img/Coords/Ananta_MediaRelations.jpg" alt="" /></div>
                                        
                                        <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Ananta</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                        
                                        <ul className="social">
                                            <li className="d-flex flex-row justify-content-around align-item-center">
                                                <a href="mailto:mohit_2101mm11@iitp.ac.in
                                                "><i className="fa fs-2 fa-envelope"></i></a>
                                                <a href="https://www.linkedin.com/in/mohit-kumar-941a54201/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                    <div className="our-team">
                                        <div className="pic"><img src="/img/Coords/VirajKulkarni_MPR.jpg" alt="" /></div>
                                        
                                        <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Viraj Kulkarni</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                        
                                        <ul className="social">
                                            <li className="d-flex flex-row justify-content-around align-item-center">
                                                <a href="mailto:mohit_2101mm11@iitp.ac.in
                                                "><i className="fa fs-2 fa-envelope"></i></a>
                                                <a href="https://www.linkedin.com/in/mohit-kumar-941a54201/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                  <div className="our-team">
                                      <div className="pic"><img src="/img/Coords/Anshul_Events.JPG" alt="" /></div>
                                      
                                      <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Anshul</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                      
                                      <ul className="social">
                                          <li className="d-flex flex-row justify-content-around align-item-center">
                                              <a href="mailto:rachit_2101mm20@iitp.ac.in
                                              "><i className="fa fs-2 fa-envelope"></i></a>
                                              <a href="https://www.linkedin.com/in/rachit-ranjan-030540224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                              " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                              <a href="https://www.instagram.com/rachit_2527?igsh=OGQ5ZDc2ODk2ZA==
                                              " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                <div className="our-team">
                                    <div className="pic"><img src="/img/Coords/Masthan_Events.jpg" alt="" /></div>
                                    
                                    <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Masthan</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                    
                                    <ul className="social">
                                        <li className="d-flex flex-row justify-content-around align-item-center">
                                            <a href="mailto:bhumika_2101mm07@iitp.ac.in
                                            "><i className="fa fs-2 fa-envelope"></i></a>
                                            <a href="https://www.linkedin.com/in/bhumikatiwari21
                                            " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                            <a href="https://www.instagram.com/_bhumikatiw_21?igsh=NnNqODJtYWh5aW85
                                            " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                              <div className="our-team">
                                  <div className="pic"><img src="/img/Coords/Rakesh Kumar __Events.jpg" alt="" /></div>
                                  
                                  <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Rakesh Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                  
                                  <ul className="social">
                                      <li className="d-flex flex-row justify-content-around align-item-center">
                                          <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                          <a href="#"><i className="fa fs-2 fa-linkedin"></i></a>
                                          <a href="#"><i className="fa fs-2 fa-instagram"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                            <div className="our-team">
                                <div className="pic"><img src="/img/Coords/rishabh_events.jpg" alt="" /></div>
                                
                                <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Rishabh Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                
                                <ul className="social">
                                    <li className="d-flex flex-row justify-content-around align-item-center">
                                        <a href="mailto:aditi_2101mm01@iitp.ac.in
                                        "><i className="fa fs-2 fa-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/aditi-verma28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                        " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                        <a href="https://www.instagram.com/aditiverma.28?igsh=OGQ5ZDc2ODk2ZA==
                                        " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                          <div className="our-team">
                              <div className="pic"><img src="/img/Coords/Sagar_Events.jpg" alt="" /></div>
                              
                              <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Sagar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                              
                              <ul className="social">
                                  <li className="d-flex flex-row justify-content-around align-item-center">
                                      <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                      <a href="#"><i className="fa fs-2 fa-linkedin"></i></a>
                                      <a href="#"><i className="fa fs-2 fa-instagram"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                        <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                          <div className="our-team">
                              <div className="pic"><img src="/img/Coords/Hemanth_sonu_designer.jpg" alt="" /></div>
                              
                              <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Hemanth</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>
                              
                              <ul className="social">
                                  <li className="d-flex flex-row justify-content-around align-item-center">
                                      <a href="mailto:falendra_2101mm44@iitp.ac.in
                                      "><i className="fa fs-2 fa-envelope"></i></a>
                                      <a href="https://www.linkedin.com/in/falendra-kumar-0a895a2a0/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                      <a href="https://www.instagram.com/o_ly_falendra/?hl=en" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                          <div className="our-team">
                              <div className="pic"><img src="/img/Coords/Diptanshu.jpg" alt="" /></div>
                              
                              <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Diptanshu</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>
                              
                              <ul className="social">
                                  <li className="d-flex flex-row justify-content-around align-item-center">
                                      <a href="mailto:falendra_2101mm44@iitp.ac.in
                                      "><i className="fa fs-2 fa-envelope"></i></a>
                                      <a href="https://www.linkedin.com/in/falendra-kumar-0a895a2a0/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                      <a href="https://www.instagram.com/o_ly_falendra/?hl=en" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                     
                    <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                      <div className="our-team">
                          <div className="pic"><img src="/img/Coords/ajay kumar saini _ technical.webp" alt="" /></div>
                          
                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Ajay Kumar Saini</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>
                          
                          <ul className="social">
                              <li className="d-flex flex-row justify-content-around align-item-center">
                                  <a href="mailto:nandita_2101mm12@iitp.ac.in"><i className="fa fs-2 fa-envelope"></i></a>
                                  <a href="https://www.linkedin.com/in/nandita27iitp/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                  <a href="https://www.instagram.com/_nan_dita27_/?hl=en" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                      <div className="our-team">
                          <div className="pic"><img src="/img/Coords/Prabhraj_technical.jpg" alt="" /></div>
                          
                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Prabhraj</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>
                          
                          <ul className="social">
                              <li className="d-flex flex-row justify-content-around align-item-center">
                                  <a href="mailto:nandita_2101mm12@iitp.ac.in"><i className="fa fs-2 fa-envelope"></i></a>
                                  <a href="https://www.linkedin.com/in/nandita27iitp/" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                  <a href="https://www.instagram.com/_nan_dita27_/?hl=en" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
                              </div>
                        
                              <h2 className="text-center my-4" data-aos="fade-up">Committee Sub-Coordinators</h2>
                              <div className="row d-flex justify-content-around">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Aman_ Public Relations.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Aman</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm33_tanvi@iitp.ac.in 
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/tanvi-mishra-39928a271
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Aditya_PublicRelations.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Aditya</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm39_raunak@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/raunak-bansod-718b30259
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/raunak_04_?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Alok_PublicRelations.webp" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Alok Kumar
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm08@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/anurag-singh-70a44125a
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Deependra_PublicRelations.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Deependra</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm39_raunak@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/raunak-bansod-718b30259
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/raunak_04_?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Shailja Mathuria .jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shailja Mathuria</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm39_raunak@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/raunak-bansod-718b30259
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/raunak_04_?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Abhijeet_Events.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Abhijeet</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm35_view@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Akshaya_Events.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Akshaya 
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm29_subham@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/subham-prasad-gouda-623666255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/subham_iitp?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Meghana_Events.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Meghana
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm29_subham@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/subham-prasad-gouda-623666255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/subham_iitp?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Anand.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Anand
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm29_subham@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/subham-prasad-gouda-623666255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/subham_iitp?igsh=OGQ5ZDc2ODk2ZA==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Shankha_Technical.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shankhadeep
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm37_arpan@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/arpan-patel-98869025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/__x__arpan__x__?igsh=MWc3cWNhOGI2eHpjag==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Digvijay_Technical.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Digvijay
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm37_arpan@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/arpan-patel-98869025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/__x__arpan__x__?igsh=MWc3cWNhOGI2eHpjag==
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Parnava_Design.jpg" alt="" /></div>
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Parnava
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201ph29_suprajit@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/suprajit-dewanji-977618225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/dewanjisuprajit2003?igsh=N2dldHo1cHRlcDY5
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/bhuvan_design.jpg" alt="" /></div>
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Bhuvaneswar
                                          </h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201ph29_suprajit@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/suprajit-dewanji-977618225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
                                                  " target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/dewanjisuprajit2003?igsh=N2dldHo1cHRlcDY5
                                                  " target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>

                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">
      
                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/Shashi Raghava _Design.jpg" alt="" /></div>
      
                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shashi Raghava</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>
                                          
                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="mailto:2201mm02_abhishek@iitp.ac.in
                                                  "><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="https://www.linkedin.com/in/abhishek-roy-587480256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="https://www.instagram.com/esabhishekroy?igsh=YTQwZjQ0NmI0OA==" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          {/* Footer section start */}
          <footer>
              {/* Grid container */}
              <div className="container">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="brief-info col-lg-4 col-md-12 col-sm-12">
                    <img loading="lazy" src="/img/Mlogo.webp" alt="white logo" width="200" />
                    <p>Materials Engineering Society (MatES), IIT PATNA is an association of UG & PG students, college faculty and staff of the Department of Metallurgical and Materials Engineering of IIT Patna.</p>
                    
                    <div className="social-icons col-lg-4 col-md-12 col-sm-12">
                      <h5>Follow Us!</h5>
                      <ul className="social-network social-circle">
                        <li><a href="https://www.facebook.com/MatES.IITP" className="fa fa-facebook" title="Facebook" target="_blank"><i className="icofont-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/mates__iitp/?hl=en" className="fa fa-instagram" title="Instagram" target="_blank"><i className="icofont-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna/mycompany/" className="fa fa-linkedin" title="Linkedin" target="_blank"><i className="icofont-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="link-section row col-lg-4 col-md-12 col-sm-12">
                    {/*Grid column*/}
                    <div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <h6 className="text-uppercase">Quick Links</h6>
                      <ul className="list-unstyled mb-0">
                        <li><a href="/" id="text-dark">MatES</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/#events" id="text-dark">Events</a></li>
                        <li><a href="/gallery" id="text-dark">Gallery</a></li>
                        <li><a href="/team" id="text-dark">Team</a></li>
                      </ul>
                    </div>
                    {/*Grid column*/}
                  </div>
                  
                  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div id="map">
                      <h6 className="text-uppercase">Visit Our Campus</h6>
                      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721" width="350px" height="300px" frameBorder="0" style={{ borderRadius: "5px" }} allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                
                {/* Copyright */}
                {/*Grid row*/}
                <div className="copyright-text row">
                  <div className="credits col-sm-12">
                    <span style={{ fontWeight: "100" }}>&copy; Copyright <span style={{ fontWeight: "600" }}>MatES, IIT Patna.</span></span>
                    <span className="credit-N-M">Developed by MatES Technical Committee.&#9829;</span>
                  </div>
                </div>
              </div>
              {/* Grid container */}
          </footer>
          {/* Footer section end */}
        
      
          
          
          {/*====== Javascripts & Jquery ======*/}
          
          
          
          
          
          
          
          
          
          
          
    </main>
  )
}
