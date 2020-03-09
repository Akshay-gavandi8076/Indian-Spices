import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import Slider from "react-slick";

const photos = [
  {
    name:'photo 1',
    url:"/img/t.jpg"
  },
  {
    name:'photo 2',
    url:"/img/o.jpg"
  },
  {
    name:'photo 3',
    url:"/img/th.jpg"
  },
  {
    name:'photo 4',
    url:"/img/fr.jpg"
  },
  {
    name:'photo 5',
    url:"/img/fv.jpg"
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
            autoplaySpeed: 5000,
            fade: true,
            pauseOnHover: true,
            cssEase: "linear",
            className: "slides"
            }
    return (
           <div className="SimpleSlider">
            <Slider {...settings}>
            {photos.map((photo) => {
            return(
              <div>
               <img src={photo.url} className="clsImage"/>
              </div>
            )
            })}
            </Slider>
            <h1 className="text">Welcome To Indian Spices</h1>
            </div>
            );
      }
    } 
export default SimpleSlider;





