import React, { useState } from "react";
import backgroundImage from "../assets/newsletter.jpeg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Base URL for backend API from environment variable
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "";

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch(`${backendUrl}/api/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message });
        setEmail(""); // reset input on success
      } else {
        setMessage({
          type: "error",
          text: data.message || "Subscription failed",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Network error. Please try again later.",
      });
    }

    setLoading(false);
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
      {/* Optional overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: "rgba(0,0,0,0.40)",
          zIndex: 1,
        }}
      />

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
            gap: "4px",
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
              width: "190px",
              color: "#fff",
              backgroundColor: "transparent",
              boxSizing: "border-box",
            }}
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
              background: "#f57242",
              color: "#fff",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "1rem",
            }}
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <div
            style={{
              color: message.type === "error" ? "#ff6b6b" : "#70e000",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            {message.text}
          </div>
        )}
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
