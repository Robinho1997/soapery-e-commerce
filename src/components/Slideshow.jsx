import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "80vh",
  opacity: 0.6,
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1551651056-2cb4d5c104be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage:  `url(${slideImage.url})` }}
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
