import React from "react";
import FlipCard from "./Flipcard.jsx";
import historical1 from "../assets/historical1.jpg";
import historical2 from "../assets/historical2.jpg";
import historical3 from "../assets/historical3.jpg";
import historical4 from "../assets/historical4.jpeg";
import historical5 from "../assets/historical5.jpeg";
import historical6 from "../assets/historical6.jpg";
import historical7 from "../assets/historical7.jpg";
import historical8 from "../assets/historical8.png";
import historical9 from "../assets/historical9.jpeg";
import historical10 from "../assets/historical10.jpeg";
import historical11 from "../assets/historical11.jpeg";
import historical12 from "../assets/historical12.jpeg";
import historical13 from "../assets/historical13.jpeg";
import historical14 from "../assets/historical14.jpeg";
const places = [
  {
    title: "Mount Kanchenjunga",
    brief: "Third highest mountain in the world.",
    description:
      "Mount Kanchenjunga, located on the border between Nepal and India, is the third highest peak globally at 8,586 meters. It holds immense spiritual and cultural significance for local communities, often considered sacred. The mountain offers spectacular trekking routes, attracting adventure seekers from around the world. Kanchenjunga's unique biodiversity includes rare flora and fauna, contributing to its designation as a biosphere reserve. It presents a challenging climb and breathtaking panoramic views from its summit, making it a prized location for mountaineers and naturalists alike.",
    image: historical1,
  },
  {
    title: "Toy Train",
    brief: "Heritage narrow-gauge railway in Darjeeling.",
    description:
      "The Darjeeling Himalayan Railway, known affectionately as the 'Toy Train,' is a UNESCO World Heritage Site and a marvel of engineering. Built in the late 19th century, it runs on a narrow-gauge track between Siliguri and Darjeeling, navigating steep hills and sharp curves. The train is famous for its charming steam locomotives and breathtaking views of the Himalayan landscapes. It has been instrumental in connecting remote hill areas, boosting tourism, and preserving a unique travel experience that reflects colonial-era railway technology.",
    image: historical2,
  },
  {
    title: "Victoria Memorial",
    brief: "Iconic marble monument in Kolkata.",
    description:
      "Built between 1906 and 1921, the Victoria Memorial is a majestic symbol of colonial-era grandeur dedicated to Queen Victoria. Its Indo-Saracenic Revival architecture blends British and Mughal elements, making it architecturally significant. The memorial houses a museum with a vast collection of paintings, sculptures, manuscripts, and historical artifacts chronicling British rule in India. Surrounding the monument are lush gardens, adding to its serene ambiance. It stands as an important cultural landmark and a major tourist attraction in Kolkata.",
    image: historical3,
  },
  {
    title: "Howrah Bridge",
    brief: "Iconic cantilever bridge over the Hooghly River.",
    description:
      "The Howrah Bridge, officially known as Rabindra Setu, is an engineering marvel and one of the busiest cantilever bridges in the world. Completed in 1943, it connects the cities of Howrah and Kolkata across the Hooghly River. The bridge symbolizes the spirit of Kolkata and supports heavy traffic daily. Its unique construction without nuts and bolts and impressive length make it a subject of engineering study. The bridge is not only a vital transport link but also a cultural icon prominently featured in art and cinema.",
    image: historical4,
  },
  {
    title: "Indian Museum",
    brief: "Largest and oldest museum in India.",
    description:
      "Located in Kolkata, the Indian Museum is the oldest and largest multipurpose museum in India and the Asia-Pacific region. Established in 1814, it houses over 100,000 artifacts across fields including art, archaeology, anthropology, geology, and zoology. Collections feature rare specimens such as Egyptian mummies, Buddhist relics, ancient coins, and fossils. The museum educates visitors about India’s rich cultural and natural heritage, making it a significant resource for researchers and tourists. Its neoclassical architecture adds to its historical importance.",
    image: historical5,
  },
  {
    title: "Mother House",
    brief: "Mother Teresa’s headquarters in Kolkata.",
    description:
      "The Mother House in Kolkata serves as the headquarters for the Missionaries of Charity, the religious congregation founded by Mother Teresa. It houses the tomb of Mother Teresa and functions as a center of charitable work, providing aid to the poorest individuals in society. The site inspires visitors with its message of compassion, humility, and service. It is a spiritual landmark attracting pilgrims and tourists who wish to pay homage to Mother Teresa's life and work.",
    image: historical6,
  },
  {
    title: "Jorasanko Thakur Bari",
    brief: "Ancestral home of Rabindranath Tagore.",
    description:
      "Jorasanko Thakur Bari is the ancestral home of Nobel laureate Rabindranath Tagore, situated in Kolkata. It has been transformed into a museum depicting Tagore’s life, literary achievements, and cultural contributions. The house offers insights into Bengal’s rich intellectual history and the Bengal Renaissance movement. Visitors can explore artifacts, manuscripts, and memorabilia that illustrate Tagore's multifaceted persona as a poet, philosopher, and musician.",
    image: historical7,
  },
  {
    title: "Sundarbans National Park",
    brief: "Largest mangrove forest and tiger reserve.",
    description:
      "A UNESCO World Heritage Site, the Sundarbans National Park is the largest mangrove forest in the world and a critical tiger reserve. It is renowned for its unique ecosystem of tidal waterways, mudflats, and small islands. The park provides habitat to numerous endangered species, including the Bengal tiger, saltwater crocodiles, and various bird species. It supports local communities through sustainable fishing and tourism, emphasizing conservation and biodiversity preservation.",
    image: historical8,
  },
  {
    title: "Digha",
    brief: "Popular beach town on the Bay of Bengal.",
    description:
      "Digha is a well-known seaside resort town located on the shores of the Bay of Bengal. It is famous for its clean sandy beaches, calm waters, and family-friendly atmosphere. The town attracts tourists seeking a tranquil beach retreat from bustling cities. Besides beach activities, visitors can enjoy local seafood cuisine, explore nearby fishing villages, and experience colorful sunrise and sunset views over the sea.",
    image: historical9,
  },
  {
    title: "Dakshineswar Kali Temple",
    brief: "Temple on Hooghly river bank.",
    description:
      "The Dakshineswar Kali Temple is a revered Hindu temple complex situated on the eastern bank of the Hooghly River near Kolkata. Built in 1855, it is dedicated to Goddess Kali and is noted for its nine spires and sprawling courtyard. The temple was a spiritual center for Sri Ramakrishna Paramhansa and remains a pilgrimage site attracting devotees and visitors year-round. The temple architecture showcases classic Bengal temple styles and intricate craftsmanship.",
    image: historical10,
  },
  {
    title: "Hazarduari Palace",
    brief: "Palace with a thousand doors in Murshidabad.",
    description:
      "Hazarduari Palace, located in Murshidabad, West Bengal, is a grand palace known for its architectural marvel featuring a thousand doors. Built in the 19th century, it served as the residence of the Nawabs of Bengal. The palace holds a valuable collection of antiques, weapons, paintings, and manuscripts. It exemplifies rich Indo-European architecture and offers a glimpse into the opulent lifestyle of Bengal’s historical rulers. The palace is now a museum and tourist attraction.",
    image: historical11,
  },
  {
    title: "Cooch Behar Palace",
    brief: "Royal palace of the Koch dynasty.",
    description:
      "Cooch Behar Palace is an exquisite structure built in the 19th century, reflecting classical Western architectural styles. It was the home of the Koch dynasty rulers and is renowned for its elegant halls, expansive gardens, and royal artifacts. The palace stands as a symbol of Cooch Behar’s heritage and hosts cultural events. Its architectural grandeur attracts tourists and history enthusiasts alike.",
    image: historical12,
  },
  {
    title: "Gour (Gauda)",
    brief: "Historic medieval capital of Bengal.",
    description:
      "Gour, also known as Gauda, Lakhnauti, and Jannatabad, was the medieval capital of Bengal from the 7th century and later the capital of the Bengal Sultanate in the 15th and 16th centuries. It flourished as a populous and vibrant city with magnificent buildings like the citadel, royal palace, mosques, canals, and bridges featuring glazed tiles. The city played a central role in Bengal’s political and cultural history, though it later declined due to natural and political changes. Its ruins today are important archaeological and historical sites.",
    image: historical13,
  },
  {
    title: "Shantiniketan",
    brief: "University town founded by Rabindranath Tagore.",
    description:
      "Shantiniketan is an educational and cultural center founded by Nobel laureate Rabindranath Tagore and home to Visva Bharati University. It emphasizes holistic, open-air learning blending arts, literature, music, and nature. The town hosts annual cultural and arts festivals that celebrate Bengal’s rich heritage. Shantiniketan reflects Tagore’s vision of blending tradition with modern education and remains a vibrant intellectual hub.",
    image: historical14,
  },
];

const DetailedCards = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {places.map((place, i) => (
        <FlipCard
          key={i}
          title={place.title}
          image={place.image}
          brief={place.brief}
          description={place.description}
        />
      ))}
    </div>
  );
};

export default DetailedCards;
