import React from "react";

const FlipCard = ({ title, image, brief, description }) => {
  return (
    <div
      className="w-150 h-80 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full duration-700 ease-in-out transform-style-preserve-3d"
        style={{
          transformStyle: "preserve-3d",
          transitionProperty: "transform",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
      >
        {/* Front side */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg bg-white"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-3 text-lg font-semibold">
            {title}
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-lg bg-white shadow-lg p-4 overflow-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-1 font-semibold">{brief}</p>
          <p className="text-gray-700 text-xl whitespace-pre-line ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
