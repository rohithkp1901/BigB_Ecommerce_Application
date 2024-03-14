import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Contact() {
  return (
    <>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-around gap-5">
  <img
    id="h-img-1"
    src="https://www.cloudtalk.io/wp-content/uploads/2021/12/Article-202104-eCommerceCC-2x.png"
    alt=""
    width="550px"
    height="400px"
  />
  <div className="mx-5">
    <form action="" id="msgform">
      <h2>Contact Us</h2>
      <p className="lh-1">
        Fill out the form below ond we will cantact you as soon as possible.
      </p>
      <p id="note" />
      <div className="d-flex flex-column gap-5">
        <div className="d-flex gap-5">
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            style={{
              width: 200,
              border: "none",
              borderBottom: "1px solid black"
            }}
          />
          <input
            type="text"
            placeholder="Your Email"
            id="email"
            style={{
              width: 200,
              border: "none",
              borderBottom: "1px solid black"
            }}
          />
        </div>
        <div className="d-flex gap-5">
          <select
            name=""
            id="topic"
            style={{
              width: 200,
              border: "none",
              borderBottom: "1px solid black"
            }}
          >
            <option value="">Choose Topic</option>
            <option value="product">Product</option>
            <option value="Service">Service</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Message"
            id="msg"
            style={{
              width: 200,
              border: "none",
              borderBottom: "1px solid black"
            }}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-4 px-5" id="send">
        Send
      </button>
      <h6
        className="mt-2"
        id="sendmsg"
        style={{ backgroundColor: "rgb(181, 131, 165)" }}
      />
    </form>
  </div>
</div>

    <Footer/>
    </>
    )
}
