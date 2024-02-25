import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Gallery.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    );
  } 


const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />
    };

    return (
        <div className="gallery-wrapper">
            <div className="gallery-block">
                <h3 className="text-color-light-blue">Funngro @ Shark Tank</h3>
                <p className="text-color-grey">Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and now Sharks also loved Funngro</p>
            </div>
            <Slider {...settings}>
            <div className="video-wrapper">
  <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsGysgwm02YY%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsGysgwm02YY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsGysgwm02YY%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" allowFullScreen title="Funngro @ Shark Tank"></iframe>
</div>
                <div>
                    <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fdf3f03e4e4d213cda423f_Funngro%20-%20Shark%20Tank.png" alt="" className="image-full-width gallery-cover" />
                </div>
                <div>
                    <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fdf406cd40dff886664edb_Funngro%20-%20Shark%20Tank%202.png" alt="" className="image-full-width gallery-cover" />
                </div>
                <div>
                    <img src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63fdf416648a6375d0f9db21_Funngro%20-%20Shark%20Tank%203.png" alt="" className="image-full-width gallery-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default Gallery;