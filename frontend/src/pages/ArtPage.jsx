import React from "react";
import ArtFlipCard from "../components/ArtFlipCard";
// Import art images
import art1 from "../assets/art1.webp";
import art2 from "../assets/art2.jpg";  
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";
import art5 from "../assets/art5.jpeg";
import art6 from "../assets/art6.jpg";
import art7 from "../assets/art7.webp";
import art8 from "../assets/art8.jpeg";  
import art9 from "../assets/art9.jpg";
import art10 from "../assets/art10.webp";
import art11 from "../assets/art11.jpeg";
import art12 from "../assets/art12.jpg";  
import art13 from "../assets/art13.jpeg";
import art14 from "../assets/art14.jpeg";
import art15 from "../assets/art15.webp";
const art = [
{
  id: 1,
  name: "Terracotta Art ",
  image: art1,
  description: "Terracotta art features intricate baked clay objects, figurines, and temple panels. Bankura, Bishnupur, and Panchmura are renowned for their unique terracotta horses, temple plaques, household, and decorative items that often portray mythological stories and rural Bengali life.",
  type: "Clay Craft",
  region: "Bankura, Bishnupur, West Bengal"
},
{
  id: 2,
  name: "Kantha Embroidery",
  image: art2,
  description: "Kantha is a traditional embroidery involving simple running stitches over layers of old clothes, often upcycled sarees and dhotis. The rural women of Bengal create vibrant patterns and motifs, transforming fabric into quilts, shawls, and garments, uniquely expressing cultural and ecological themes.",
  type: "Textile Art",
  region: "All Bengal"
},
{
  id: 3,
  name: "Dokra/Dhokra Metal Craft",
  image: art3,
  description: "Dokra is the ancient bell metal craft of Bengal, famed for its lost-wax (cire perdue) casting technique. Created mostly by the Dhokra Damar tribes, it produces jointless brass artifacts, including figurines, accessories, utensils, and jewelry, each piece one-of-a-kind.",
  type: "Metal Craft",
  region: "Bankura, Bardhaman, West Bengal"
},
{
  id: 4,
  name: "Sholapith/Shola Crafts",
  image: art4,
  description: "Sholapith, or Indian cork, crafts use a milky-white spongy plant matter to create delicate decorations and ritual artifacts – bridal headgear, goddess accessories, and garlands. Widely used in festivals like Durga Puja, these artifacts symbolize purity and tradition.",
  type: "Plant Craft",
  region: "Murshidabad, Bardhaman, Birbhum, West Bengal"
},
{
  id: 5,
  name: "Kalighat Painting/Patachitra",
  image: art5,
  description: "Kalighat painting, originating near the Kalighat temple in 19th-century Kolkata, is known for bold strokes, sparkling colors, and vivid depictions of Hindu deities and social themes. Patachitra is an ancient scroll painting tradition, also narrating stories in sung performances.",
  type: "Painting",
  region: "Kolkata, Medinipur, West Bengal"
},
{
  id: 6,
  name: "Wood Carving/Natungram Wooden Dolls",
  image: art6,
  description: "Natungram village produces brightly painted wooden owl figurines, king-queen pairs, and goddess idols. With roots in centuries-old stone carving, Natungram’s artisans now handcraft wood art for ritual, decorative, and household use.",
  type: "Wood Craft",
  region: "Burdwan, West Bengal"
},
{
  id: 7,
  name: "Bamboo Craft",
  image: art7,
  description: "Bamboo has been woven into Bengal’s arts for centuries, used in baskets, mats, fans, and ritual items. Artisans craft both functional and decorative pieces, highlighting the region’s dedication to sustainable, eco-friendly practices.",
  type: "Natural Fiber Craft",
  region: "Bankura, Bardhaman, Murshidabad, West Bengal"
},
{
  id: 8,
  name: "Lac-Coated Toys",
  image: art8,
  description: "Lacquer-coated wooden toys and trinkets—from spinning tops to figurines—showcase the bright colors and intricate design Bengal artisans are known for. Lac gives a distinct finish and durability.",
  type: "Wood Craft",
  region: "Bardhaman, West Bengal"
},
{
  id: 9,
  name: "Murshidabad Silk Weaving",
  image: art9,
  description: "Skilled weavers in Murshidabad craft elegant textiles from pure mulberry silk, producing lightweight sarees, stoles, and fabrics adorned with hand-painted, block-printed, and embroidered motifs. These luxurious silks—revered for their smooth texture and glossy sheen—blend traditional Bengali designs with contemporary patterns, making them a prized choice for festive wear and cultural events.",
  type: "Silk Weaving",
  region: "Murshidabad, West Bengal"
},
{
  id: 10,
  name: "Garad Silk Weaving",
  image: art10,
  description: "Master weavers in Murshidabad delicately craft Garad silk sarees, recognized by their pristine off-white body and striking red borders. Woven from pure mulberry silk, these sarees remain undyed to preserve their natural purity and are symbolic of sanctity and tradition in Bengali culture.",
  type: "Silk Weaving",
  region: "Murshidabad, West Bengal"
},
{
  id: 11,
  name: "Chhau Dance",
  image: art11,
  description: "Chhau is a vibrant, semi-classical masked dance drama originating from Purulia, West Bengal. The dancers wear elaborate handcrafted masks and ornate costumes, complemented by dramatic folk music and percussion, creating a powerful spectacle that celebrates martial traditions and rural folklore.",
  type: "Folk Dance",
  region: "Purulia, West Bengal"
},
{
  id: 12,
  name: "Rabindranath Tagore",
  image: art12,
  description: "Rabindranath Tagore was a towering literary figure and cultural icon of Bengal who reshaped Bengali literature, music, and art with his innovative works. The first non-European Nobel laureate in Literature(1913), authored timeless poetry, novels and Rabindra-Sangeet songs. Tagore founded Visva-Bharati University to promote holistic education blending Indian traditions and global ideas.",
  type: "Literary and Cultural Figure",
  region: "West Bengal"
},
{
   id: 13,
  name: "Sitalpati Mats",
  image: art13,
  description: "Sitalpati mats are traditional woven mats crafted from the soft, fine cane slips of the Murta plant (Maranta dichotoma). These mats are valued for their cooling properties, silk-like texture, and intricate handwoven designs, often featuring geometric or animal motifs symbolizing comfort and artisanal heritage.",
  type: "Mat Weaving",
  region: "Cooch Behar, West Bengal"
},
{
  id: 14,
  name: "Shell and Conch Shell Craft",
  image: art14,
  description: "Artisans carve conch shells and other marine shells into ritual bangles, jewelry, and decorative items. These elegant artifacts are often used in Bengali weddings and in temple ceremonies.",
  type: "Shell Craft",
  region: "Murshidabad, Nabadwip, West Bengal"
},
{
id: 15,
name: "Shantiniketan Leather Bags",
image: art15,
description: "Shantiniketan leather bags are traditional handicrafts that are crafted from vegetable-tanned sheepskin or goatskin leather, dyed with natural colors, and feature intricate embossed batik and hand-painted motifs. These bags reflect a rich cultural heritage and are known for their durability, unique artistry, and elegant shine from lacquer finishing.",
type: "Leather Craft",
region: "Shantiniketan, West Bengal"
},
];

export default function MusicPage() {
  return (
    <main className="py-10 px-4 md:px-12"><br/><br/>
      <h1 className="text-3xl font-bold mb-6 text-center">Art & Music</h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto text-2xl">
        Enjoy traditional and modern Bengali music, from Rabindra Sangeet to Baul folk, and more.
      </p>
      <div className="flex flex-wrap justify-center items-start gap-4">
        {art.map((art) => (
          <ArtFlipCard key={art.id} art={art} />
        ))}
      </div>
    </main>
  );
}


