import React, { useState, useContext, useEffect } from "react";
import "../styles/faq.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import germanFaqData from "../data/germanFaqData";
import englishFaqData from "../data/englishFaqData";
import { Context } from "../Context";

function Faq() {
  const { germanLanguage } = useContext(Context);
  const [faqs, setFaqs] = useState(germanFaqData);
  
  useEffect(() => {
    setFaqs(germanLanguage ? germanFaqData : englishFaqData);
  }, [germanLanguage]);

  const showAnswer = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const FaqElements = faqs.map((faq, index) => (
    <div key={index} className="faq-container">
      <h3 className="question" onClick={() => showAnswer(index)}>
        {faq.question}
        {faq.isOpen ? (
          <span className="material-symbols-outlined minus-icon">remove</span>
        ) : (
          <span className="material-symbols-outlined plus-icon">add</span>
        )}
      </h3>
      <p
        className={`answer ${faq.isOpen ? "open" : ""}`}
        style={{
          height: faq.isOpen ? "auto" : "0",
          paddingBottom: faq.isOpen ? "20px" : "0",
          overflow: "hidden",
        }}
      >
        {faq.answer}
      </p>
    </div>
  ));
  return (
    <div>
      <Navbar />
      <h1 className="faq-header">FAQ</h1>
      <div className="margin-bottom">{FaqElements}</div>
      <Footer />
    </div>
  );
}

export default Faq;
