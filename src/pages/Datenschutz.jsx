import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";
import "../styles/agbWiderrufDatenschutz.css";

function Datenschutz() {
  const { germanLanguage } = useContext(Context);
  return (
    <div>
      <Navbar />
      <h1 className="datenschutz-header">
        {germanLanguage ? "DATENSCHUTZERKLÄRUNG" : "PRIVACY POLICY"}
      </h1>
      {germanLanguage ? (
        <div className="datenschutz">
          <h2>1. Datenschutz auf einen Blick </h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>
          <h3>Datenerfassung auf dieser Website </h3>
          <h3>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.{" "}
          </p>
          <h3>Wie erfassen wir Ihre Daten? </h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
            betreten.{" "}
          </p>
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten.{" "}
          </p>
          <p>
            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
            werden.{" "}
          </p>
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
            zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.{" "}
          </p>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>
          <h3>Analyse-Tools und Tools von Drittanbietern</h3>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit Cookies und mit
            sogenannten Analyseprogrammen.
          </p>
          <p>
            Detaillierte Informationen zu diesen Tools und über Ihre
            Widerspruchsmöglichkeiten finden Sie in der folgenden
            Datenschutzerklärung.{" "}
          </p>
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.{" "}
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie persönlich identifiziert werden können. Die
            vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
            und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
            Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.{" "}
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <div className="datenschutz-adresse">
            <p>SOAPERY GmbH</p>
            <p>Musterstraße 1</p>
            <p>53639 Königswinter</p>
            <p>Deutschland</p>
            <p>Telefon: +49 (0) 2226/45$$6$37</p>
            <p>E-Mail: info@soapery-muster</p>
          </div>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z. B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </div>
      ) : (
        <div className="datenschutz">
          <h2>1. Data protection at a glance</h2>
          <h3>General notices</h3>
          <p>
            The following notices provide a simple overview of what happens to
            your personal data when you visit this website. Personal data is any
            data by which you can be personally identified. For detailed
            information on data protection, please refer to our privacy policy
            listed below this text.
          </p>
          <h3>Data collection on this website</h3>
          <h3>Who is responsible for data collection on this website?</h3>
          <p>
            The data processing on this website is carried out by the website
            operator. You can find his contact details in the imprint of this
            website.
          </p>
          <h3>How do we collect your data?</h3>
          <p>
            Your data is collected on the one hand by the fact that you tell us.
            This may be, for example, data that you enter in a contact form.
          </p>
          <p>
            Other data is collected automatically by our IT systems when you
            visit the website. This is mainly technical data (e.g. Internet
            browser, operating system or time of page view). The collection of
            this data takes place automatically as soon as you enter this
            website.{" "}
          </p>
          <h3>What do we use your data for?</h3>
          <p>
            A part of the data is collected to ensure error-free provision of
            the website.{" "}
          </p>
          <p>Other data may be used to analyze your user behavior. </p>
          <h3>What rights do you have regarding your data?</h3>
          <p>
            You have the right at any time to receive information free of charge
            about the origin, recipient and purpose of your stored personal
            data. You also have a right to request the correction or deletion of
            this data. For this purpose, as well as for further questions on the
            subject of data protection, you can contact us at any time at the
            address given in the imprint. Furthermore, you have the right to
            lodge a complaint with the competent supervisory authority.{" "}
          </p>
          <p>
            In addition, you have the right to request the restriction of the
            processing of your personal data under certain circumstances. For
            details, please refer to the privacy policy under "Right to
            restriction of processing".
          </p>
          <h3>Analytics tools and third-party tools</h3>
          <p>
            When visiting this website, your surfing behavior may be
            statistically analyzed. This is done primarily with cookies and with
            so-called analysis programs. The analysis of your surfing behavior
            is usually anonymous; the surfing behavior can not be traced back to
            you. You can object to this analysis or prevent it by not using
            certain tools.{" "}
          </p>
          <p>
            For detailed information about these tools and about your opt-out
            options, please see the following privacy policy.{" "}
          </p>
          <h2>2. General notes and mandatory information</h2>
          <h3>Data protection</h3>
          <p>
            The operators of these pages take the protection of your personal
            data very seriously. We treat your personal data confidentially and
            in accordance with the legal data protection regulations and this
            privacy policy.{" "}
          </p>
          <p>
            When you use this website, various personal data are collected.
            Personal data is data with which you can be personally identified.
            This Privacy Policy explains what data we collect and what we use it
            for. It also explains how and for what purpose this is done.{" "}
          </p>
          <p>
            We point out that data transmission on the Internet (for example,
            when communicating by e-mail) can have security gaps. A complete
            protection of data against access by third parties is not possible.{" "}
          </p>
          <h3>Note to the responsible body</h3>
          <p>This website is operated by:</p>
          <div className="datenschutz-adresse">
            <p>SOAPERY GmbH</p>
            <p>Musterstraße 1</p>
            <p>53639 Königswinter</p>
            <p>Germany</p>
            <p>Phone: +49 (0) 2226/45$$6$37</p>
            <p>Email: info@soapery-muster</p>
          </div>
          <p>
            Responsible body is the natural or legal person who alone or jointly
            with others determines the purposes and means of the processing of
            personal data (e.g. names, e-mail addresses or similar).
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Datenschutz;
