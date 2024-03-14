import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Carousel } from 'react-bootstrap'

export default function About() {
  return (
    <>
    <main className="container">
  <div className="d-flex flex-column gap-3">
    <div className="d-flex about-box justify-content-between">
      <div>
        <img
          src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2018/02/4-1.jpg"
          alt=""
          width="450px"
          height="350px"
        />
      </div>
      <div className=" about">
        <h1>About Us</h1>
        <p>
          A short paragraph describing your company's vision of what it <br />
          hopes to achieve in the future. This section is meant to inspire{" "}
          <br />
          people to join your company on its journey.
        </p>
      </div>
    </div>
    <div className="d-flex about-box justify-content-between">
      <div className="my-5 vision">
        <h1>Our Vision</h1>
        <p>
          Use this section to describe your company and the products you <br />
          offer. You could share your company's story and details about <br />
          why you are in business. The goal is to create a connection with{" "}
          <br />
          the visitor and give them confidence to buy from you.
        </p>
      </div>
      <div className="mx-5">
        <img
        src='https://5.imimg.com/data5/SELLER/Default/2022/11/UC/RL/MO/157353929/e-commerce-website-development-service.jpg'
          alt=""
          width="450px"
          height="350px"
        />
      </div>
    </div>
  </div>
  <div className="d-flex flex-column gap-5 mt-5">
  {/* Social media post */}
  <div className="text-center m-5">
    <h2>Social Media Posts</h2>
    <p>This is a gallary to showcase images from your recent social posts</p>
  </div>
  <Carousel
    id="customerCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval={4000}
  >
      <Carousel.Item className="carousel-item">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71PXHvmjz1L._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/710SxepIfiL._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61RpRYFb2wL._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71efZuOyE2L._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71l2-gWOnpL._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61iZMVtMAoL._AC_SY200_.jpg"
              alt=""
              width="150px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/61-M8rjGl0L._AC_SY200_.jpg"
              alt=""
              width="150px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/91eY68L5j9L._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/71nkap6IJ2L._AC_SY200_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/51sPXbeTfZL._AC_UL160_SR160,160_.jpg"
              alt=""
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </Carousel.Item>
  </Carousel>
</div>

</main>
<Footer/>
</>

  )
}
