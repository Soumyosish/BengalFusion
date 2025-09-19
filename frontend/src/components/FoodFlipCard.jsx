import React from 'react';

const FoodFlipCard = ({ food }) => {
  return (
    <div
      className="bg-transparent w-72 h-96 perspective-1000 m-5 group"
    >
      <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white text-gray-800">
          <img src={food.image} alt={food.name} className="w-full h-80 object-cover" />
          <div className="p-5 text-xl font-bold text-gray-800 bg-white">
            {food.name}
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white transform rotate-y-180">
          <div className="p-8 h-full flex flex-col justify-center text-center">
            <h3 className="text-2xl mb-4 text-black font-bold">{food.name}</h3>
            <p className=" leading-relaxed mb-5 text-black text-xl">
              {food.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodFlipCard;