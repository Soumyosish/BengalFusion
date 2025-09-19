import CircularTestimonials from "./CircularTestimonials";// update path as needed
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";

const testimonials = [
  {
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    quote:
      "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    src: image2,
  },
  {
    name: "Samir Gupta",
    designation: "Food Enthusiast",
    quote:
      "I loved the authentic flavors! The ambiance was cozy and the staff was truly welcoming.",
    src: image3,
  },
  {
    name: "Ananya Biswas",
    designation: "Frequent Visitor",
    quote:
      "Every visit is a delight. Highly recommended for anyone who values quality and good taste!",
    src: image1,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-yellow-100 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 drop-shadow-md">
        Testimonials Section
      </h1>
      <CircularTestimonials testimonials={testimonials} />
    </div>
  );
}
