import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/css/Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect,useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer';
import { Link ,useNavigate} from 'react-router-dom';
export default function Home() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

  
  useEffect(() => {
    fetch('http://localhost:8000/api/category/')
      .then(response => response.json())
      .then((data) => {setData(data); console.log(data)})
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    const carousels = document.querySelectorAll('.carousel');
    if (window.bootstrap && window.bootstrap.Carousel) {
      carousels.forEach((carousel) => {
        new window.bootstrap.Carousel(carousel);
    });
    }
    }, []);

    const handleCategoryClick = (categoryName) => {
      navigate(`/product/${categoryName}`);
    }

  
  
  return (
    <>
    
  <div className="d-flex container mt-2 justify-content-between">
  
    <div className="" style={{ width: 400 }}>
           <Carousel  interval={2000}> 
            <Carousel.Item>
            <img
              id="h-img-1"
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/p/r/4/-original-imagqcq2yzehwnvg.jpeg?q=20&crop=false"
              alt="titan"
              width="400px"
              height="400px"
            />
            
            </Carousel.Item>

           <Carousel.Item >
           <img
              id="h-img-2"
              src="https://hips.hearstapps.com/hmg-prod/images/best-rolex-watches-for-men-1592238259.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*"
              alt=""
              width="400px"
              height="400px"
            />
           </Carousel.Item>

            <Carousel.Item>
            <img
            src='https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800'
              alt=""
              width="400px"
              height="400px"
              id="h-img-3"
            />
            </Carousel.Item>
            
            <Carousel.Item>
            <img
            src='https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg'
              alt=""
              width="400px"
              height="400px"
              id="h-img-3"
            />
            </Carousel.Item>
          </Carousel>
    </div>
    
    <div className="intro">
      <h2>THANK YOU</h2>
      <h1 style={{fontSize:'100px', fontWeight:'bold'}}>INDIA</h1>
      <h2>FOR BRINGING JOY</h2>
      <h2>TO SMALL BUSINESSES</h2>
      <h3 style={{fontWeight:'bold'}}>Big B</h3>
      <p className="lh-1">
        ECommerce Application Which gives you whatever you needs.
      </p>
      <Link to={'/all'}>
        <button className="btn btn-primary" id="shopnow">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
  <main
    className="d-flex justify-content-around flex-home "
    style={{ marginTop: 20 }}
  >
   
      <Carousel style={{width:'500px'}}  interval={1000}>
          <Carousel.Item>
            <div className="card card1" style={{width:'500px',padding:'30px'}}>
              <h3 className="pt-2 ps-3">4+ star deals for you</h3>
              <div className="d-flex flex-column gap-5 pt-2 flex-wrap flex-home">
                <div className="d-flex flex-row gap-5 justify-content-around flex-wrap">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/81UWgnVKDBL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/71WagddZ64L._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal of the day</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row gap-5 justify-content-around flex-home">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/71T4m4vigmL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/61+8UbvYZYL._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="180px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">60% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal of the day</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            </Carousel.Item>
          
            <Carousel.Item>
            <div className="card card1" style={{width:'500px',padding:'30px'}}>
              <h4 className="pt-2 ps-3">
                Deals inspired by your recent history
              </h4>
              <div className="d-flex flex-column gap-5 pt-2 flex-home">
                <div className="d-flex flex-row gap-5 justify-content-around flex-wrap">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/81UWgnVKDBL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/51EXoZ4JcSL._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">30% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row gap-5 justify-content-around flex-home">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/A1cIxlKI3NL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="200px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/61rOvBvBwGL._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="200px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card card1" style={{width:'500px',padding:'30px'}}>
              <h4 style={{color:'white'}}>Nothing</h4>
              <div className="d-flex flex-column gap-5 pt-2 flex-home">
                <div className="d-flex flex-row gap-5 justify-content-around">
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/81UWgnVKDBL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/71WagddZ64L._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="150px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row gap-5 justify-content-around flex-home">
                  <div className="d-flex flex-column gap-2">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/51EXoZ4JcSL._AC_SY145_.jpg
                  "
                        alt=""
                        width="150px"
                        height="200px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2 flex-home">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/61rOvBvBwGL._AC_SY145_.jpg"
                        alt=""
                        width="150px"
                        height="200px"
                      />
                    </div>
                    <div className="pe-3">
                      {" "}
                      <button className="btn btn-danger btn-sm">50% OFF</button>
                      &nbsp;&nbsp;<span className="deal">Deal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Carousel.Item>
          </Carousel>
    <div style={{width:500}}>
      <div className="card card1" style={{ width: 500 }}>
        <h3 className="pt-2 ps-3">Up to 60% off </h3>
        <div className="d-flex flex-column gap-2 pt-2 flex-wrap">
          <div className="d-flex flex-row gap-2 justify-content-around flex-wrap">
          {data.map(item => (
          
          <div key={item.id} className="d-flex flex-column gap-2">
          <Link to={`/product/${item.name}`} onClick={() => handleCategoryClick(item.name)}>

              <div>
                <img
                src={item.image}

                  alt={item.name}
                  width="200px"
                  height="150px"
                />
              </div>
              </Link>
              <div className="pe-3">
            <span className="mens">{item.name}</span>
              </div>
            </div>
            

        ))} 
          </div>
        </div>
      </div>
    </div>
  </main>
  <div className="mt-5 bg-light">
  <h1 className=" pt-2 text-center">Why Shop With Us</h1>
  <div className="d-flex flex-wrap justify-content-around pt-3">
    <div className="text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/411/411776.png"
        alt=""
        width="80px"
        height="80px"
      />
      <h4>FREE SHIPPING</h4>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8369/8369316.png"
        alt=""
        width="10px"
        height="10px"
      />
      <p className="psize">ENJOY FREE SHIPPING ON ALL ORDERS- </p>
      <p className="psize">NO MINIMUM PURCHASE REQUIRED.</p>
    </div>
    <div className="text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/4230/4230869.png"
        alt=""
        width="80px"
        height="80px"
      />
      <h4>24/7 SUPPORT</h4>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8369/8369316.png"
        alt=""
        width="10px"
        height="10px"
      />
      <p className="psize "> OUR TEAM IS AVAILABLE 24/7 TO HELP</p>
      <p className="psize"> WITH ANY QUESTIONS OR CONCERNS.</p>
    </div>
    <div className="text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5163/5163798.png"
        alt=""
        width="80px"
        height="80px"
      />
      <h4>MONEY BACK</h4>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8369/8369316.png"
        alt=""
        width="10px"
        height="10px"
      />
      <p className="psize"> WE OFFER A 100% MONEY-BACK</p>
      <p className="psize">GUARANTEE FOR YOUR SATISFACTION.</p>
    </div>
    <div className="text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5469/5469919.png"
        alt=""
        width="80px"
        height="80px"
      />
      <h4>30 DAYS RETURNABLE</h4>
      <img
        src="https://cdn-icons-png.flaticon.com/128/8369/8369316.png"
        alt=""
        width="10px"
        height="10px"
      />
      <p className="psize"> WE OFFERS 30 DAYS</p>
      <p className="psize">RETURN POLICY TO OUR CUSTOMERS.</p>
    </div>
  </div>
</div>
<>
  <div className="mt-5 d-flex justify-content-around flex-home">
    <div className="card card1 product ">
      <img
        className="ms-5 ps-3 mt-5"
        src="https://m.media-amazon.com/images/I/51jUcRK69ML._AC_QL95_SX300_SY250_FMwebp_.jpg"
        alt=""
        width="300px"
      
      />
      <p className="text-center mt-5">
        Dell G15 5520 Gaming Laptop, Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA
        RTX 3050 (4GB GDDR6),15.6"(39.62cm) FHD WVA AG 120Hz 250 nits, Backlit
        KB Orange, Win 11 + MSO'21,Dark Shadow Grey,2.81kg
      </p>
      <div className="d-flex ms-3 mt-4">
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-empty.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <span> &nbsp;95</span>
      </div>
      <div className="d-flex gap-1 ms-3 flex-home">
        <span style={{ fontSize: 20, fontWeight: "bold" }}>$</span>
        <span style={{ fontSize: 25, color: "brown", fontWeight: "bold" }}>
          45,799.00
        </span>
      </div>
      <button className="border-0 bg-transparent " id="h-addtocart">
        Add to Cart
      </button>
    </div>
    <div className="card card1 ">
      <img
        className="ms-5 ps-5 mt-5"
        src="https://m.media-amazon.com/images/I/91IxU4BBVKL._AC_QL10_SX300_SY250_FMwebp_.jpg"
        alt=""
        width="200px"
        height="200px"
      />
      <p className="text-center mt-5">
        HP 320 15.6-inch Backpacks/Trolley Pass-Through; Padded Back Panel;
        Padded air mesh Panel/Hand wash and air Dry/Padded Laptop Pocket/1 Year
        Limited Warranty (793A6AA)
      </p>
      <div className="d-flex ms-3 mt-4">
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-empty.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <span> &nbsp;95</span>
      </div>
      <div className="d-flex gap-1 ms-3 flex-home">
        <span style={{ fontSize: 20, fontWeight: "bold" }}>$</span>
        <span style={{ fontSize: 25, color: "brown", fontWeight: "bold" }}>
          799.00
        </span>
      </div>
      <a href="" className="btn text-center text-decoration-none ">
        Add to Cart
      </a>
    </div>
    <div className="card card1">
      <img
        className="ms-5 ps-3"
        src="https://m.media-amazon.com/images/I/610JNk+B9GL._SL1500_.jpg"
        alt="TUF"
        width="300px"
      />
      <p className="text-center">
        ASUS TUF Gaming F17 (2022), 17.3"(43.94 cms) FHD 144Hz, Intel Core
        i5-12500H 12th Gen, RTX 3050 4GB GPU, Gaming Laptop (16GB/512GB
        SSD/90WHr Battery/Windows 11/Gray/2.6 Kg), FX707ZC4-HX067W
      </p>
      <div className="d-flex ms-3">
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-fullfill.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/perc/star-empty.svg"
          alt="rating"
          width={20}
          height={20}
          className="d-inline-block"
        />
        <span> &nbsp;95</span>
      </div>
      <div className="d-flex gap-1 ms-3">
        <span style={{ fontSize: 20, fontWeight: "bold" }}>$</span>
        <span style={{ fontSize: 25, color: "brown", fontWeight: "bold" }}>
          72,990.00
        </span>
      </div>
      <a href="" className="btn text-center text-decoration-none ">
        Add to Cart
      </a>
    </div>
  </div>
  <div className="d-flex mt-5 justify-content-around">
    <div className="w-50 pt-5">
      <h1 className="text-center lh-1 fs-1">
        <p>Customer</p>
        <p> Review</p>
      </h1>
    </div>
  </div>
  <div className="w-50 " style={{paddingLeft:'100px'}}>
    <Carousel>
     <Carousel.Item>
     <div className="d-flex gap-4">
            <div className="customer-review ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
                alt=""
                width="100px"
                height="70px"
              />
              <p style={{ color: "gray" }}>
                "A review from a customer who benefited from your product.
                Reviews can be a highly effective way of establishing
                credibility and increasing your company's reputation .*
              </p>
              <h6>Customer Name</h6>
            </div>
            <div className="customer-review">
              <img
                src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
                alt=""
                width="100px"
                height="70px"
              />
              <p style={{ color: "gray" }}>
                "A review from a customer who benefited from your product.
                Reviews can be a highly effective way of establishing
                credibility and increasing your company's reputation .*
              </p>
              <h6>Customer Name</h6>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex gap-5">
            <div className="customer-review ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
                alt=""
                width="100px"
                height="70px"
              />
              <p style={{ color: "gray" }}>
                "A review from a customer who benefited from your product.
                Reviews can be a highly effective way of establishing
                credibility and increasing your company's reputation .*
              </p>
              <h6>Customer Name</h6>
            </div>
            <div className="customer-review ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/156/156855.png"
                alt=""
                width="100px"
                height="70px"
              />
              <p style={{ color: "gray" }}>
                "A review from a customer who benefited from your product.
                Reviews can be a highly effective way of establishing
                credibility and increasing your company's reputation .*
              </p>
              <h6>Customer Name</h6>
            </div>
          </div>
          </Carousel.Item>

    </Carousel>
                  
  </div>
  <Footer/>
  </>

</>

  )
}
