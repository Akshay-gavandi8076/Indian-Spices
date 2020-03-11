import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import Slider from "react-slick";
 

const pictures =[
  {
    name:'phot 1',
    url:"/img/aa.png"
  },
  {
    name:'phot 2',
    url:"/img/ab.jpg"
  },
  {
    name:'phot 3',
    url:"/img/ac.jpeg"
  },
  {
    name:'phot 4',
    url:"/img/ad.jpg"
  },
  {
    name:'phot 5',
    url:"/img/ae.jpg"
  },
  {
    name:'phot 6',
    url:"/img/af.jpg"
  }
]

const Photos = [
  {
    name:'photo 1',
    url:"/img/one.jpg"
  },
  {
    name:'photo 2',
    url:"/img/two.jpg"
  },
  {
    name:'photo 3',
    url:"/img/three.jpg"
  },
  {
    name:'photo 3',
    url:"/img/four.jpg"
  },
  {
    name:'photo 5',
    url:"/img/five.jpg"
  }
]
    class SimpleSlider extends Component {
    render(){
    const settings ={
            infinite: true,
            slidesToShow: 1, 
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            fade: true,
            click:true,
            pauseOnHover: true,
            cssEase: "linear",
            className: "slides"
            };
            const setting = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 2
            };
    return (
           <div className="SimpleSlider">
            <Slider {...settings}>
            {Photos.map((photo) => {
            return(
              <div>
               <img src={photo.url} className="clsImage" alt="Not Found"/>
              </div>
            )
            })}
            </Slider>
            <h1 className="text">Welcome To Indian Spices</h1>
            <h1 className="txt">-Best Sellers-</h1>
            <div className="SimpleSlide">
            <Slider {...setting}>
            {pictures.map((phot) =>{
              return(
                <div>
               <img src={phot.url} className="clsImg" alt="Not Found"/>
               </div>
              )
            })}
            </Slider>
              </div>
            </div>

       
           

           
        );
      }
    } 
export default SimpleSlider;
