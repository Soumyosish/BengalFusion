import React from "react";
import DetailedCards from "../components/DetailedCards";

export default function TouristPlacesPage() {
  return (
    <main className="py-10 px-4 md:px-12">
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-6 text-center">Historical Places</h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-2xl">
        Explore the rich heritage and iconic landmarks across West Bengal.
      </p>
      <DetailedCards />
    </main>
  );
}
