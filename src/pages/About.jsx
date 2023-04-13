import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <img className="about-img" src="https://images.unsplash.com/photo-1563305145-b64e0c2184aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
      <p className="about-header">PROTECT, CARE & ENJOY.</p>
      <p className="about-text">
        SOAPERY bietet perfekt abgestimmte Pflege kombiniert mit herrlichen
        Düften und verantwortungsvollen Inhaltsstoffen. Unsere Seifen werden
        sorgfältig mit natürlichen Inhaltsstoffen hergestellt die sowohl sanft
        zur Haut als auch umweltfreundlich sind. Wir sind stolz darauf eine
        breite Palette von Seifen anbieten zu können. Vitamin E und Ectoin
        unterstützen die Abwehr von freien Radikalen und schützen somit vor
        vorzeitiger Hautalterung. Kostbare Sheabutter und Aloe Vera (aus
        kontrolliert biologischem Anbau) verwöhnen Deine von der Sonne
        beanspruchte Haut intensiv mit Feuchtigkeit. Die Cremes hinterlassen ein
        samtiges Hautgefühl, ziehen schnell und vollständig ein und sind
        wasserfest.{" "}
      </p>
      <div className="img-text-presentation-div">
        <img src="https://images.unsplash.com/photo-1643123158251-3a66f53a4635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        <p className="text">
        Für unsere Produkte verwenden wir keine Nanopartikel, kein Mikroplastik, kein Octocrylen, oder andere Inhaltsstoffe, die das Wachstum von Korallen beeinträchtigen.
        </p>
      </div>
      <p className="about-header">KORALLENSCHUTZ</p>
      <p className="about-text">SOAPERY pflegt Deine Haut vor der Sonne, ohne dabei Korallenriffe zu belasten.</p>
      <p className="about-text">Für unsere Produkte verwenden wir keine Nanopartikel, Mikroplastik, Octocrylen oder andere Inhaltsstoffe, die das Wachstum von Korallen beeinträchtigen. Zusätzlich unterstützen wir gemeinnützige Organisationen bei ihrer Arbeit für unsere Ozeane, wie z.B. die Initiative coralive.org, die sich mit Herzblut unter anderem der Wiederherstellung von Korallenriff- und Küstenökosystemen in betroffenen Gebieten widmen.</p>
      <p className="about-header">MADE IN GERMANY</p>
      <p className="about-text">SOAPERY wird zu 100% in Deutschland hergestellt (auch unsere Produktverpackungen). Wir achten auf möglichst kurze Transportwege, um unsere Umwelt nicht unnötig zu belasten.</p>
      <p className="about-header">DESIGN</p>
      <p className="about-text">Wir sind uns nicht nur unserer Verantwortung gegenüber unserer Haut und Umwelt bewusst, sondern möchten auch, dass du Spaß an unseren Produkten hast. So haben wir V.SUN mit viel Liebe zum Detail und unserer femininen Ästhetik entsprechend designed.</p>
      <p className="about-text">Wir freuen uns darauf, Dich als Kunden zu begrüßen.</p>
      <p className="about-text">SOAPERY with Love.</p>
      <Footer />
    </div>
  );
}

export default About;
