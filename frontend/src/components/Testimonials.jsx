import CircularTestimonials from "./CircularTestimonials"; // update path as needed
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";

const testimonials = [
  {
    name: "Ishita Ghosh",
    designation: "Satisfied Customer",
    quote:
      "Bengal Fusion beautifully captures the essence of West Bengal's culture and heritage. The detailed insights into tourist spots and festivals made my trip unforgettable!",
    src: image2,
  },
  {
    name: "Arindam Chatterjee",
    designation: "Food Enthusiast",
    quote:
      "The culinary journey through Bengal’s authentic dishes like Rosogolla and Shorshe Ilish featured here is simply amazing. The site gave me a craving to explore Bengali flavors!",
    src: image3,
  },
  {
    name: "Anwesha Roy",
    designation: "Frequent Visitor",
    quote:
      "Every visit to Bengal feels enriched thanks to the cultural and historical information presented. This site is a must-visit for anyone wanting to dive deep into Bengal’s traditions.",
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
