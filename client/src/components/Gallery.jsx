import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './Gallery.css'

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7581074/pexels-photo-7581074.jpeg',
      alt: 'Modern Clinic Interior',
      title: 'State-of-the-Art Facilities'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8413181/pexels-photo-8413181.jpeg',
      alt: 'Consultation Room',
      title: 'Comfortable Consultation Rooms'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/20863397/pexels-photo-20863397.jpeg',
      alt: 'Advanced Medical Equipment',
      title: 'Latest Medical Technology'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/6010795/pexels-photo-6010795.jpeg',
      alt: 'Waiting Area',
      title: 'Relaxing Waiting Area'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/16877776/pexels-photo-16877776.jpeg',
      alt: 'Surgery Room',
      title: 'Advanced Surgery Facilities'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/6129204/pexels-photo-6129204.jpeg',
      alt: 'Reception Area',
      title: 'Welcoming Reception'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8460228/pexels-photo-8460228.jpeg',
      alt: 'Medical Laboratory',
      title: 'Diagnostic Laboratory'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/6129144/pexels-photo-6129144.jpeg',
      alt: 'Pharmacy',
      title: 'In-House Pharmacy'
    }
  ]

  return (
    <section className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">Our Medical Facilities</h2>
          <p className="gallery-subtitle">
            Take a virtual tour of our state-of-the-art medical facilities designed for your comfort and care
          </p>
          <div className="title-divider"></div>
        </div>

        {/* Main Gallery */}
        <div className="gallery-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            loop={true}
            loopAdditionalSlides={3}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="main-gallery-swiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="gallery-slide">
                  <div className="image-container">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3 className="image-title">{image.title}</h3>
                        <div className="zoom-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev-custom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="swiper-button-next-custom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

    

        {/* Stats */}
        <div className="gallery-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Treatment Rooms</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Surgery Suites</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Care</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Medical Staff</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
