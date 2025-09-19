import React from "react";
import FoodFlipCard from "../components/FoodFlipCard";

// Import food images
import food1 from "../assets/food1.webp";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.webp";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.webp";
import food8 from "../assets/food8.jpeg";
import food9 from "../assets/food9.jpg";

const foods = [
  {
    id: 1,
    name: "Sweets Platter",
    image: food1,
    description:
      "A traditional Bengali sweets platter,showcases a delightful array of milk-based sweets.These confections are celebrated for their delicate textures and rich, sweet flavors, offering a taste of Bengal's rich culinary heritage.",
    type: "Sweet",
    region: "Bengal",
  },
  {
    id: 2,
    name: "Luchi",
    image: food2,
    description:
      "Deep-fried puffed bread made from refined flour, typically served with aloo dum or chana dal.",
    type: "Bread",
    region: "Bengal",
  },
  {
    id: 3,
    name: "Shorshe Ilish",
    image: food3,
    description:
      "Ilish (Hilsa fish) also known as the king of fish, cooked in a mustard seed paste with green chilies and turmeric. A quintessential Bengali dish, especially during the monsoon season.",
    type: "Main Course",
    region: "Bengal",
  },
  {
    id: 4,
    name: "Kolkata Biryani",
    image: food4,
    description:
      "A fragrant biryani made with basmati rice, tender meat (usually mutton or chicken), potatoes, and a blend of aromatic spices. Known for its unique flavor and the inclusion of potatoes with eggs.",
    type: "Main Course",
    region: "Bengal",
  },
  {
    id: 5,
    name: "Misti doi",
    image: food5,
    description:
      "Sweetened yogurt dessert with a caramelized top layer, a perfect ending to any Bengali meal.",
    type: "Dessert",
    region: "Bengal",
  },
  {
    id: 6,
    name: "Jhalmuri",
    image: food6,
    description:
      "A spicy and tangy snack made with puffed rice, chopped onions, green chilies, tomatoes, coriander leaves, and a mix of spices. It's a popular street food in Bengal.",
    type: "Vegetarian",
    region: "Bengal",
  },
  {
    id: 7,
    name: "Aam Pora Shorbot",
    image: food7,
    description:
      "A refreshing summer drink made from roasted raw mangoes, sugar, and water. It's a traditional Bengali beverage that helps beat the heat.",
    type: "Vegetarian",
    region: "Bengal",
  },
  {
    id: 8,
    name: "Chicken curry",
    image: food8,
    description:
      "Slow-cooked chicken curry with onions, garlic, and aromatic spices. A rich and hearty Bengali delicacy.",
    type: "Maincourse",
    region: "Bengal",
  },
  {
    id: 9,
    name: "Egg Roll",
    image: food9,
    description:
      "Egg roll is a popular street food in Kolkata, consisting of a thin paratha wrapped around a filling of spiced eggs, onions, and sometimes additional ingredients like chicken or vegetables. It's a quick and flavorful snack enjoyed by many.",
    type: "Bread",
    region: "Bengal",
  },
];

export default function FoodsPage() {
  return (
    <main className="py-10 px-4 md:px-12">
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-6 text-center">Bengali Foods</h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 text-2xl">
        Discover delicious Bengali cuisine—from sweets like mishti and sandesh
        to classic dishes like machher jhol.
      </p>

      <div className="flex flex-wrap justify-center items-start gap-4">
        {foods.map((food) => (
          <FoodFlipCard key={food.id} food={food} />
        ))}
      </div>
    </main>
  );
}
