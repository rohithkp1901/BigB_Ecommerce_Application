import React from 'react'

export default function Footer() {
  return (<>
    <div className="bg-light newsletter">
      <div className="container pt-5">
        <h2>Join Our Newsletter</h2>
        <input
          type="text"
          style={{
            border: "none",
            borderBottom: "1px solid black",
            width: 500,
            backgroundColor: "transparent"
          }}
          placeholder="YOUR EMAIL"
          id="newsletter"
        />
        <button
          className="btn btn-primary h-sub subscribe"
          id="newsletter"
          onclick="subscribe()"
        >
          Subscribe
        </button>
        <h5 id="subs" />
        <div className="d-flex gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
            alt="facebook"
            width={20}
            height={20}
            className=" mt-2"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
            alt="instagram"
            width={20}
            height={20}
            className="mt-2 d-inline-block"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
            alt="twitter"
            width={20}
            height={20}
            className="mt-2 d-inline-block"
          />
        </div>
      </div>
    </div>
    <div className="d-flex container justify-content-between">
      <div className="d-flex gap-1 mt-3">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1294/1294391.png"
          alt=""
          width={15}
          height={15}
          className="d-inline-block mt-2"
        />
        <p>2024 All Rights Reserved</p>
      </div>
      <div className="d-flex gap-3 mt-3">
        <a href="" className="h-f-a">
          Help &amp; Info
        </a>
        <a href="" className="h-f-a">
          Terms &amp; Privacy
        </a>
      </div>
    </div>
    </>
  )
}
