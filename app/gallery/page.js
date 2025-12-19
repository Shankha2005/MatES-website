'use client';
import { useEffect, useState } from 'react';
import './gallery.css';

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  const images = [
    { id: 1, src: '/img/Gallery/1.webp', size: 'wide' },
    { id: 2, src: '/img/Gallery/2.webp', size: 'normal' },
    { id: 3, src: '/img/Gallery/3.webp', size: 'normal' },
    { id: 4, src: '/img/Gallery/4.webp', size: 'normal' },
    { id: 5, src: '/img/Gallery/5.webp', size: 'normal' },
    { id: 6, src: '/img/Gallery/6.webp', size: 'normal' },
    { id: 7, src: '/img/Gallery/7.webp', size: 'normal' },
    { id: 8, src: '/img/Gallery/8.webp', size: 'normal' },
    { id: 9, src: '/img/Gallery/9.webp', size: 'normal' },
    { id: 10, src: '/img/Gallery/10.webp', size: 'normal' },
    { id: 12, src: '/img/Gallery/12.webp', size: 'wide' },
    { id: 13, src: '/img/Gallery/13.webp', size: 'normal' },
    { id: 14, src: '/img/Gallery/14.webp', size: 'normal' },
    { id: 15, src: '/img/Gallery/15.webp', size: 'normal' },
    { id: 16, src: '/img/Gallery/16.webp', size: 'normal' },
    { id: 17, src: '/img/Gallery/17.webp', size: 'normal' },
    { id: 19, src: '/img/Gallery/19.webp', size: 'normal' },
    { id: 21, src: '/img/Gallery/21.webp', size: 'normal' },
    { id: 22, src: '/img/Gallery/22.webp', size: 'normal' },
    { id: 24, src: '/img/Gallery/24.webp', size: 'normal' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <main>
      <div id="preloader"></div>
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
      <section id="gallery-section" style={{ backgroundColor: "white", overflowX: "hidden", minHeight: "100vh" }}>
        <div className="py-2">
          <div className="row pb-4"></div>
          <div className="tile" id="tile-1">
            <div className="page-section spad pb50">
              <div className="container_gallery">
                <div className="text-center">
                  <h1 className="sp-title gallery-title animate-title">Our Gallery</h1>
                  <p className="gallery-subtitle">Capturing moments that matter</p>
                </div>
              </div>
              <div className="gallery-container">
                <div className="gallery-grid">
                  {images.map((image, index) => (
                    <div 
                      key={image.id} 
                      className={`gallery-item ${image.size === 'wide' ? 'gallery-item-wide' : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => openLightbox(image)}
                    >
                      <div className="gallery-item-overlay">
                        <i className="fa fa-search-plus"></i>
                      </div>
                      <img 
                        src={image.src} 
                        alt={`Gallery image ${image.id}`}
                        loading="lazy"
                        onLoad={() => setLoadedImages(prev => [...prev, image.id])}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fa fa-times"></i>
          </button>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={`Gallery image ${selectedImage.id}`} />
          </div>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          <div className="lightbox-counter">
            {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
          </div>
        </div>
      )}
      <footer>
        <div className="container">
          <div className="row">
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
              <div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <h6 className="text-uppercase">Quick Links</h6>
                <ul className="list-unstyled mb-0">
                  <li><a href="/" id="text-dark">MatES</a></li>
                  <li><a href="/#about" id="text-dark">About Us</a></li>
                  <li><a href="/#events" id="text-dark">Events</a></li>
                  <li><a href="/gallery" id="text-dark">Gallery</a></li>
                  <li><a href="/team" id="text-dark">Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div id="map">
                <h6 className="text-uppercase">Visit Our Campus</h6>
                <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721" width="350px" height="300px" frameBorder="0" style={{ borderRadius: "5px" }} allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="copyright-text row">
            <div className="credits col-sm-12">
              <span style={{ fontWeight: "100" }}>&copy; Copyright <span style={{ fontWeight: "600" }}>MatES, IIT Patna.</span></span>
              <span className="credit-N-M">Developed by MatES Technical Committee.&#9829;</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
