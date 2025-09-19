import React from "react";
import { useNavigate } from "react-router-dom";
import touristPlacesImg from "../assets/historical14.jpeg";
import foodsImg from "../assets/food6.jpg";
import festivalsImg from "../assets/durga_feature.png";
import musicImg from "../assets/art12.jpg"

const categories = [
  {
    id: 1,
    title: "Historical Places",
    description: "Explore popular tourist destinations in West Bengal",
    image: touristPlacesImg,
    path: "/west-bengal/tourist-places"
  },
  {
    id: 2,
    title: "Foods",
    description: "Discover delicious Bengali cuisine",
    image: foodsImg,
    path: "/west-bengal/foods"
  },
  {
    id: 3,
    title: "Festivals",
    description: "Experience vibrant West Bengal festivals",
    image: festivalsImg,
    path: "/west-bengal/festivals"
  },
  {
    id: 4,
    title: "Art & Music",
    description: "Enjoy traditional and modern Bengali music",
    image: musicImg,
    path: "/west-bengal/music"
  }
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  const handleCardClick = (category) => {
    navigate(category.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-10 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-10 text-center">Explore West Bengal</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map(({ id, title, description, image, path }) => (
          <div
            key={id}
            onClick={() => handleCardClick({ id, title, description, image, path })}
            className="cursor-pointer rounded-xl shadow-lg overflow-hidden bg-white hover:scale-[1.03] transform transition duration-300 ease-in-out"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCardClick({ id, title, description, image, path });
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-66 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600 text-xl">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
