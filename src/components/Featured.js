import React from 'react';

const Featured  = () => {
  const images = [
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo-p-500.png", alt: "Image 1" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a029eed4fdce11c2d34e80_FM%20live%20logo.png", alt: "Image 2" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo-p-500.png", alt: "Image 3" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a02a16a363596ec9c5eefb_Times%20of%20India%20logo.png", alt: "Image 4" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo-p-500.png", alt: "Image 5" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a029286e97ee36926d7bbf_Entracker.png", alt: "Image 6" },
    { src: "https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/63a0293fe9b4746ced4246a3_Mda.png", alt: "Image 7" },
  ];

  return (
    <div>
      <div className="text3">
        <h1>We are Featured in</h1>
        <p>The world is talking about Funngro, check out what everyone is saying</p>
      </div>

      <div className="scroller-container">
        <div className="scroller-content">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;