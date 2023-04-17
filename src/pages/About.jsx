import React, { useContext } from "react";
import "../styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";

function About() {
  const { germanLanguage } = useContext(Context);
  return (
    <div className="about-page">
      <Navbar />
      <img
        className="about-img"
        src="https://images.unsplash.com/photo-1647439767291-1fb0e942c1a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
      />
      <p className="about-header">PROTECT, CARE & ENJOY.</p>
      <p className="about-text">
        {germanLanguage
          ? "SOAPERY bietet perfekt abgestimmte Pflege kombiniert mit herrlichen Düften und verantwortungsvollen Inhaltsstoffen. Unsere Seifen werden sorgfältig mit natürlichen Inhaltsstoffen hergestellt die sowohl sanft zur Haut als auch umweltfreundlich sind. Wir sind stolz darauf eine breite Palette von Seifen anbieten zu können. Vitamin E und Ectoin unterstützen die Abwehr von freien Radikalen und schützen somit vor vorzeitiger Hautalterung. Kostbare Sheabutter und Aloe Vera (aus kontrolliert biologischem Anbau) verwöhnen Deine von der Sonne beanspruchte Haut intensiv mit Feuchtigkeit. Die Cremes hinterlassen ein samtiges Hautgefühl, ziehen schnell und vollständig ein und sind wasserfest."
          : "SOAPERY offers perfectly coordinated care combined with delightful scents and responsible ingredients. Our soaps are carefully made with natural ingredients that are gentle on the skin and environmentally friendly. We are proud to offer a wide range of soaps. Vitamin E and Ectoin support the defense against free radicals and thus protect against premature skin aging. Precious shea butter and aloe vera (from controlled organic cultivation) intensively moisturize your skin exposed to the sun. The creams leave a velvety feeling on the skin, are quickly and completely absorbed, and are waterproof."}
      </p>
      <div className="img-text-presentation-div">
        <img src="https://images.unsplash.com/photo-1643123158251-3a66f53a4635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <p className="text">
          {germanLanguage
            ? "Für unsere Produkte verwenden wir keine Nanopartikel, kein Mikroplastik, kein Octocrylen, oder andere Inhaltsstoffe, die das Wachstum von Korallen beeinträchtigen."
            : " For our products we do not use nanoparticles, microplastics, octocrylene or any other ingredients that may harm coral growth in our products."}
        </p>
      </div>
      <p className="about-header">
        {germanLanguage ? "KORALLENSCHUTZ" : "CORAL PROTECTION"}
      </p>
      <p className="about-text">
        {germanLanguage
          ? "SOAPERY pflegt Deine Haut ohne dabei Korallenriffe zu belasten."
          : "SOAPERY cares for your skin without burdening coral reefs."}
      </p>
      <p className="about-text">
        {germanLanguage
          ? "Für unsere Produkte verwenden wir keine Nanopartikel, Mikroplastik, Octocrylen oder andere Inhaltsstoffe, die das Wachstum von Korallen beeinträchtigen. Zusätzlich unterstützen wir gemeinnützige Organisationen bei ihrer Arbeit für unsere Ozeane, wie z.B. die Initiative coralive.org, die sich mit Herzblut unter anderem der Wiederherstellung von Korallenriff- und Küstenökosystemen in betroffenen Gebieten widmen."
          : "We do not use nanoparticles, microplastics, octocrylene, or any other ingredients that may harm coral growth in our products. In addition, we support non-profit organizations in their work for our oceans, such as the coralive.org initiative, which is passionately dedicated to restoring coral reef and coastal ecosystems in affected areas."}
      </p>
      <p className="about-header">MADE IN GERMANY</p>
      <p className="about-text">
        {germanLanguage
          ? "SOAPERY wird zu 100% in Deutschland hergestellt (auch unsere Produktverpackungen). Wir achten auf möglichst kurze Transportwege, um unsere Umwelt nicht unnötig zu belasten."
          : "SOAPERY is 100% made in Germany (including our product packaging). We pay attention to keeping transportation routes as short as possible to avoid unnecessarily burdening the environment."}
      </p>
      <p className="about-header">DESIGN</p>
      <p className="about-text">
        {germanLanguage
          ? "Wir sind uns nicht nur unserer Verantwortung gegenüber unserer Haut und Umwelt bewusst, sondern möchten auch, dass du Spaß an unseren Produkten hast. So haben wir SOAPERY mit viel Liebe zum Detail entsprechend designed."
          : "We are not only aware of our responsibility towards our skin and the environment, but also want you to enjoy our products. That's why we designed SOAPERY with great attention to detail."}
      </p>
      <p className="about-text">
        {germanLanguage
          ? "Wir freuen uns darauf, Dich als Kunden zu begrüßen."
          : "We are looking forward to welcoming you as a customer."}
      </p>
      <p className="about-text">SOAPERY with Love.</p>
      <Footer />
    </div>
  );
}

export default About;
