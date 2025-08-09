import image1 from "../assets/churchImages/1.jpg"
import image2 from "../assets/churchImages/2.jpg"
import image3 from "../assets/churchImages/3.jpg"
import image4 from "../assets/churchImages/4.jpg"
import image5 from "../assets/churchImages/5.jpg"
import image6 from "../assets/churchImages/6.jpg"
import image7 from "../assets/churchImages/7.jpg"
import image8 from "../assets/churchImages/8.jpg"
import image9 from "../assets/churchImages/9.jpg"
import image10 from "../assets/churchImages/10.jpg"
import image11 from "../assets/churchImages/11.jpg"
import image12 from "../assets/churchImages/12.jpg"
import image13 from "../assets/churchImages/13.jpg"
import image14 from "../assets/churchImages/14.jpg"
import image15 from "../assets/churchImages/15.jpg"
import image16 from "../assets/churchImages/16.jpg"
import image17 from "../assets/churchImages/17.jpg"






const  ImageGallery =()=> {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3},
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 },
    { src: image11 },
    { src: image12 },
    { src: image13 },
    { src: image14 },
    { src: image15 },
    { src: image16 },
    { src: image17 },

  ];

  return (
    <div className="bg-[white]">
      <p className="text-[50px] h-[100px] flex p-[20px] items-center font-bold">
      Gallery
    </p>
    <div className="lg:columns-3 columns-2 gap-4 p-[15px] md:p-[20px]"> {/* masonry columns */}
      {images.map((img, index) => (
        <div key={index} className="mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md">
          <img
            src={img.src}
            alt={`img-${index}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>

    </div>
  );
}

export default ImageGallery;