import React, { useState } from "react";
import backgroundImage from "../assets/newsletter.jpeg"; // Ensure you have an appropriate image in assets

const Newsletter = () => {
  const [email, setEmail] = useState("");

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic here
  };

  return (
    <div
      id="newsletter"
      style={{
        minHeight: "350px",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Semi-transparent overlay for text readability (optional, can remove) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: "rgba(0,0,0,0.40)", // Reduce alpha for even lighter overlay or remove for no overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <form
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
          width: "100%",
          maxWidth: "480px",
        }}
        onSubmit={handleSubmit}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "8px",
            marginTop: "20px",
          }}
        >
          <span className="text-teal-500">Get Your</span> Travel Inspiration
          <br />
          Straight to Your Inbox
        </h2>
        <div
          style={{
            display: "flex",
            gap: "4px", // Reduced gap from 8px to 4px for closer alignment
            margin: "24px 0",
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "999px 0 0 999px",
              border: "2px solid white",
              outline: "none",
              fontSize: "1rem",
              width: "190px", // Slightly reduced width for better spacing with button
              color: "#fff",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              // Adding placeholder color support:
              "::placeholder": {
                color: "rgba(255, 255, 255, 0.6)",
              },
            }}
            // For cross-browser placeholder styling:
            onFocus={(e) => (e.target.style.color = "#fff")}
            onBlur={(e) => {
              if (!e.target.value)
                e.target.style.color = "rgba(255, 255, 255, 0.6)";
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 28px",
              borderRadius: "0 999px 999px 0",
              border: "none",
              background: "#f57242", // match image accent
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Subscribe
          </button>
        </div>
        <div
          style={{
            fontSize: "0.95rem",
            color: "#fff",
            opacity: 0.85,
            marginTop: "8px",
          }}
        >
          <span className="text-white text-2xl">
            <b>
              Subscribe for tour newsletters and exclusive promotions. Read our
              Privacy Policy.
            </b>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
