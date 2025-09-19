import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import howrah_bridge from "../assets/howrah_bridge.jpg";
import tourist from "../assets/tourist2.webp";
import festivals from "../assets/durga-10.jpg";
import foods from "../assets/misti1.jpg";
import music1 from "../assets/music1.jpg";

const SectionBg = styled(motion.section)`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;

const FeaturesCardContainer = styled.div`
  width: 90vw;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #064e3b;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
  letter-spacing: 0.01em;
`;

const Subtitle = styled.p`
  color: #065f46;
  font-size: 1.7rem;
  margin-bottom: 84px;
  text-align: center;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureCard = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 320px;
  height: 400px;
  border-radius: 28px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1), opacity 0.6s;
  ${({ position }) =>
    position === 0 &&
    css`
      transform: translate(-50%, 0) scale(1.15);
      opacity: 1;
      z-index: 3;
      box-shadow: 0 16px 44px rgba(0, 0, 0, 0.2);
    `}
  ${({ position }) =>
    position === -1 &&
    css`
      transform: translate(-140%, 20px) scale(0.92);
      opacity: 0.85;
      z-index: 2;
    `}
  ${({ position }) =>
    position === 1 &&
    css`
      transform: translate(40%, 20px) scale(0.92);
      opacity: 0.85;
      z-index: 2;
    `}
  ${({ position }) =>
    Math.abs(position) > 1 &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .feature-image {
    transform: scale(0.95);
  }
`;

const FeatureImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 18px 26px 18px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0.45) 100%
  );
  color: #fff;
  opacity: 0;
  transition: opacity 300ms ease;
`;

const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 8px 0;
`;

const FeatureDesc = styled.p`
  font-size: 0.98rem;
  text-align: center;
  max-width: 90%;
`;

const features = [
  {
    title: "A Living Story",
    desc: "We believe Bengal is not just a place but a living story, and our platform is dedicated to bringing that story closer to you. From the iconic streets of Kolkata to the tranquil backwaters of the Sundarbans, Bengal Fusion invites you to journey through landmarks steeped in history.",
    img: howrah_bridge,
  },
  {
    title: "Historic Landmarks",
    desc: "Wander through palaces, forts, and colonial heritage sites—each telling its own unforgettable tale.",
    img: tourist,
  },
  {
    title: "Famous Foods",
    desc: "Experience the unmistakable taste of Bengal’s sweets, street foods, and traditional recipes—from mishti and sandesh to machher jhol and more.",
    img: foods,
  },
  {
    title: "Festivals & Traditions",
    desc: "Celebrate the unique rituals, crafts, and customs that mark each season and community, including Durga Puja and Poila Boishakh.",
    img: festivals,
  },
  {
    title: "Music & Culture",
    desc: "Listen to the melodies of Rabindra Sangeet and Baul folk, and witness art forms passed down through generations.",
    img: music1,
  },
];

export default function AboutFeaturesSection({ id }) {
  const [centerIdx, setCenterIdx] = useState(1);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % features.length);
    }, 2200);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCardClick = (idx) => {
    setCenterIdx(idx);
  };

  return (
    <SectionBg
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <FeaturesCardContainer>
        <Title>Discover Bengal</Title>
        <Subtitle>Explore the harmony of heritage and modernity</Subtitle>

        <CarouselWrapper>
          {features.map((feature, idx) => {
            let pos = idx - centerIdx;
            if (pos < -1) pos += features.length;
            if (pos > 1) pos -= features.length;
            return (
              <FeatureCard
                key={idx}
                position={pos}
                onClick={() => handleCardClick(idx)}
              >
                <FeatureImage
                  className="feature-image"
                  src={feature.img}
                  alt={feature.title}
                />
                <Overlay className="overlay">
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDesc>{feature.desc}</FeatureDesc>
                </Overlay>
              </FeatureCard>
            );
          })}
        </CarouselWrapper>
      </FeaturesCardContainer>
    </SectionBg>
  );
}
