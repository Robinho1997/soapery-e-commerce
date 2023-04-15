import React from "react";
import "../styles/agbWiderrufDatenschutz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Widerruf() {
  return (
    <div className="widerruf-page">
      <Navbar />
      <h1 className="widerruf-header">WIDERRUFSRECHT</h1>
      <h2 className="widerruf-header-small">WIDERRUFSBELEHRUNG</h2>
      <div className="widerruf">
        <p>
          Als Verbraucher hast Du bei Abschluss eines Fernabsatzgeschäfts
          grundsätzlich ein gesetzliches Widerrufsrecht, über das wir nach
          Maßgabe des gesetzlichen Musters nachfolgend (Ziff. 3.1) informieren.
          Ausnahmen vom Widerrufsrecht sind in Ziff. 3.2 geregelt. In Ziff. 3.3
          findest Du ein Muster-Widerrufsformular:
        </p>
        <h3>1. Widerrufsbelehrung</h3>
        <h3>Widerrufsrecht</h3>
        <p>
          Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
          diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage
          ab dem Tag, an dem Du oder ein von Dir benannter Dritter, der nicht
          der Beförderer ist, die Waren in Besitz genommen haben bzw. hat. Um
          Dein Widerrufsrecht auszuüben, musst Du uns über Deinen Entschluss,
          diesen Vertrag zu widerrufen, informieren. Du kannst dafür das
          beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
          vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass
          Du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
          Widerrufsfrist absendest.
        </p>
        <h3>Folgen des Widerrufs</h3>
        <p>
          Wenn Du diesen Vertrag widerrufst, haben wir Dir alle Zahlungen, die
          wir von Dir erhalten haben, einschließlich der Lieferkosten (mit
          Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Du
          eine andere Art der Lieferung als die von uns angebotene, günstigste
          Standardlieferung gewählt hast), unverzüglich und spätestens binnen
          vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
          Deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
          Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Du bei der
          ursprünglichen Transaktion eingesetzt hast, es sei denn, mit Dir wurde
          ausdrücklich etwas anderes vereinbart; in keinem Fall werden Dir wegen
          dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung
          verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Du
          den Nachweis erbracht hast, dass Du die Waren zurückgesandt hast, je
          nachdem, welches der frühere Zeitpunkt ist.{" "}
        </p>
        <p>
          Du hast die Waren unverzüglich und in jedem Fall spätestens binnen
          vierzehn Tagen ab dem Tag, an dem Du uns über den Widerruf dieses
          Vertrags unterrichtest an uns zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Du die Waren vor Ablauf der Frist von vierzehn
          Tagen absendest. Du trägst die unmittelbaren Kosten der Rücksendung
          der Waren. Du musst für einen etwaigen Wertverlust der Waren nur
          aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
          Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
          notwendigen Umgang mit ihnen zurückzuführen ist.{" "}
        </p>
        <h3>2. Ausschluss des Widerrufsrechts</h3>
        <p>
          Das Widerrufsrecht besteht, soweit wir mit Dir nichts anderes
          vereinbart haben, unter anderem nicht bei Verträgen zur Lieferung
          versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der
          Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach
          der Lieferung entfernt wurde.{" "}
        </p>
        <h3>3. Muster-Widerrufsformular</h3>
        <p>
          Über das Muster-Widerrufsformular informieren wir Dich nach der
          gesetzlichen Regelung wie folgt:
        </p>
        <h3>Muster-Widerrufsformular</h3>
        <p>
          (Wenn Du den Vertrag widerrufen willst, fülle bitte dieses Formular
          aus und sende es an uns zurück.)
        </p>
        <ul>
          <li>
            An SOAPERY GmbH, Musterstraße 1, D-53639 Köngiswinter, info@muster-soapery.de,
            Deutschland
          </li>
          <li>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</li>
          <li>Bestellt am (*)/erhalten am (*)</li>
          <li>Name des/der Verbraucher(s)</li>
          <li>Anschrift des/der Verbraucher(s)</li>
          <li>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</li>
          <li>Datum</li>
        </ul>
        <p>(*) Unzutreffendes streichen.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Widerruf;
