import React from "react";
import FestivalFlipCard from "../components/FestivalFlipCard";
import festival1 from "../assets/festival1.webp";
import festival2 from "../assets/festival2.jpeg";
import festival3 from "../assets/festival3.jpg";
import festival4 from "../assets/festival4.jpg";
import festival5 from "../assets/festival5.jpg";
import festival6 from "../assets/festival6.jpg"; 
import festival8 from "../assets/festival8.jpg";  
import festival9 from "../assets/festival9.jpg";  
import festival10 from "../assets/festival10.jpeg";  
const festival=[
{
id: 1,
name: "Durga Puja",
image: festival1,
description: "Durga Puja is the biggest and most significant festival of West Bengal, celebrating the victory of Goddess Durga over the demon Mahishasura. It is marked by elaborate pandals, beautiful idols, cultural events, feasting, and vibrant social gatherings, typically occurring in September-October.",
type: "Religious Festival",
region: "West Bengal, Primarily Kolkata"
},
{
id: 2,
name: "Kali Puja",
image: festival2,
description: "Kali Puja is a major festival dedicated to Goddess Kali, celebrated with night-long chants, offerings, and lighting after Durga Puja mainly in Kolkata and other parts of West Bengal. It symbolizes the triumph of good over evil with rituals continuing till dawn.",
type: "Religious Festival",
region: "West Bengal, Kolkata"
},
{
id: 3,
name: "Saraswati Puja",
image: festival3,
description: "Saraswati Puja, also known as Basant Panchami, is celebrated in January-February to honor the Goddess of knowledge and learning. It is considered auspicious for educational beginnings and marked by decorating Saraswati idols and cultural programs.",
type: "Religious Festival",
region: "West Bengal"
},
{
id: 4,
name: "Lakshmi Puja",
image: festival4,
description:"Lakshmi Puja is a major Bengali festival dedicated to Goddess Lakshmi, the deity of wealth. Celebrated on the full moon after Durga Puja, families clean and decorate their homes, perform rituals, offer sweets, and stay awake singing prayers to welcome prosperity and well-being.",
type: "Religious Festival",
region: "West Bengal"
},
{
id: 5,
name: "Bhai Phota",
image: festival5,
description: "Bhai Phota is the Bengali version of Raksha Bandhan celebrated in November. Sisters tie threads on their brothers' wrists and pray for their wellbeing, symbolizing sibling love and protection with ritualistic offerings and celebrations.",
type: "Cultural Festival",
region: "West Bengal"
},
{
id: 6,
name: "Poila Boishakh",
image: festival6,
description: "Poila Boishakh is the Bengali New Year celebrated on April 14th with parades, fairs, traditional food, and rituals such as river dips and prayers to Goddess Lakshmi and Lord Ganesha. It marks a fresh start with new clothes and new ledgers for traders.",
type: "Cultural Festival",
region: "West Bengal"
},
{
id: 8,
name: "Jagaddhatri Puja",
image: festival8,
description: "Jagaddhatri Puja is celebrated to honor Goddess Jagaddhatri, an incarnation of Goddess Durga symbolizing strength and protection. It usually occurs in the Bengali month of Kartik (October-November).It is famous in places like Chandannagar and Krishnanagar, known for its grand idol decorations, cultural performances, and vibrant processions.",
type: "Religious Festival",
region: "West Bengal"
},
{
id: 9,
name: "Rath Yatra",
image: festival9,
description: "Rath Yatra is a traditional chariot festival celebrated in West Bengal, dedicated to Lord Jagannath. The festival involves grand processions where elaborately decorated chariots carrying deities Jagannath, Balabhadra, and Subhadra are pulled through streets by devotees. ",
type: "Religious Festival",
region: "West Bengal"
},
{
id: 10,
name: "Makar Sankranti (Poush Sankranti)",
image: festival10,
description: "Makar Sankranti or Poush Sankranti is a harvest festival marking the end of winter, celebrated with sweet dishes made from newly harvested rice and date palm jaggery. It signifies prosperity and is held in January.",
type: "Harvest Festival",
region: "West Bengal"
}
];
export default function FestivalsPage() {
  return (
    <main className="py-10 px-4 md:px-12"><br/><br/>
      <h1 className="text-3xl font-bold mb-6 text-center">Festivals of Bengal</h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto text-2xl">
        Experience vibrant festivals like Durga Puja and Poila Boishakh, and traditions across the seasons.
      </p>
      <div className="flex flex-wrap justify-center items-start gap-4">
        {festival.map((festival) => (
          <FestivalFlipCard key={festival.id} festival={festival} />
        ))}
      </div>
    </main>
  );
}


