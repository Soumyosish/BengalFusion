import React from 'react';

const ArtFlipCard = ({ art }) => {
  return (
    <div
      className="bg-transparent w-80 h-112 perspective-1000 m-5 group"
    >
      <div className="relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white text-gray-800">
          <img src={art.image} alt={art.name} className="w-full h-95 object-cover" />
          <div className="p-5 text-xl font-bold text-gray-800 bg-white">
            {art.name}
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white transform rotate-y-180">
          <div className="p-8 h-full flex flex-col justify-center text-center">
            <h3 className="text-2xl mb-4 text-black font-bold">{art.name}</h3>
            <p className="leading-relaxed mb-5 text-black text-xl">
              {art.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtFlipCard;