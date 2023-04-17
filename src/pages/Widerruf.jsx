import React, { useContext } from "react";
import "../styles/agbWiderrufDatenschutz.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Context } from "../Context";

function Widerruf() {
  const { germanLanguage } = useContext(Context);
  return (
    <div className="widerruf-page">
      <Navbar />
      <h1 className="widerruf-header">
        {germanLanguage ? "WIDERRUFSRECHT" : "REFUND POLICY"}
      </h1>
      <h2 className="widerruf-header-small">
        {germanLanguage
          ? "WIDERRUFSBELEHRUNG"
          : "CONSUMER CANCELLATION POLICY POLICY"}
        WIDERRUFSBELEHRUNG
      </h2>
      {germanLanguage ? (
        <div className="widerruf">
          <p>
            Als Verbraucher hast Du bei Abschluss eines Fernabsatzgeschäfts
            grundsätzlich ein gesetzliches Widerrufsrecht, über das wir nach
            Maßgabe des gesetzlichen Musters nachfolgend (Ziff. 3.1)
            informieren. Ausnahmen vom Widerrufsrecht sind in Ziff. 3.2
            geregelt. In Ziff. 3.3 findest Du ein Muster-Widerrufsformular:
          </p>
          <h3>1. Widerrufsbelehrung</h3>
          <h3>Widerrufsrecht</h3>
          <p>
            Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag, an dem Du oder ein von Dir benannter Dritter, der
            nicht der Beförderer ist, die Waren in Besitz genommen haben bzw.
            hat. Um Dein Widerrufsrecht auszuüben, musst Du uns über Deinen
            Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst
            dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch
            nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es
            aus, dass Du die Mitteilung über die Ausübung des Widerrufsrechts
            vor Ablauf der Widerrufsfrist absendest.
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
            ursprünglichen Transaktion eingesetzt hast, es sei denn, mit Dir
            wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
            Dir wegen dieser Rückzahlung Entgelte berechnet. Wir können die
            Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten
            haben oder bis Du den Nachweis erbracht hast, dass Du die Waren
            zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.{" "}
          </p>
          <p>
            Du hast die Waren unverzüglich und in jedem Fall spätestens binnen
            vierzehn Tagen ab dem Tag, an dem Du uns über den Widerruf dieses
            Vertrags unterrichtest an uns zurückzusenden oder zu übergeben. Die
            Frist ist gewahrt, wenn Du die Waren vor Ablauf der Frist von
            vierzehn Tagen absendest. Du trägst die unmittelbaren Kosten der
            Rücksendung der Waren. Du musst für einen etwaigen Wertverlust der
            Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung
            der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
            notwendigen Umgang mit ihnen zurückzuführen ist.{" "}
          </p>
          <h3>2. Ausschluss des Widerrufsrechts</h3>
          <p>
            Das Widerrufsrecht besteht, soweit wir mit Dir nichts anderes
            vereinbart haben, unter anderem nicht bei Verträgen zur Lieferung
            versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der
            Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung
            nach der Lieferung entfernt wurde.{" "}
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
              An SOAPERY GmbH, Musterstraße 1, D-53639 Köngiswinter,
              info@muster-soapery.de, Deutschland
            </li>
            <li>
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
              abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die
              Erbringung der folgenden Dienstleistung (*)
            </li>
            <li>Bestellt am (*)/erhalten am (*)</li>
            <li>Name des/der Verbraucher(s)</li>
            <li>Anschrift des/der Verbraucher(s)</li>
            <li>
              Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
              Papier)
            </li>
            <li>Datum</li>
          </ul>
          <p>(*) Unzutreffendes streichen.</p>
        </div>
      ) : (
        <div className="widerruf">
          <p>
            As a consumer, you have a general statutory right to cancellation
            upon conclusion of a distance-selling transaction, which we hereby
            inform you of as follows in accordance with the statutory template
            (section 1). Exceptions to the right to cancellation are regulated
            in section 1 You can find a template cancellation form in section 3:
          </p>
          <h3>1. Cancellation policy </h3>
          <h3>Right to cancellation</h3>
          <p>
            You have the right to cancel this contract without stating reasons
            within fourteen days. The cancellation period amounts to fourteen
            days from the day on which you have taken possession of the products
            or a third party named by you – who is not the carrier – has done
            so. You may use the enclosed template cancellation form for this
            purpose, although this is not required. In order to satisfy the
            cancellation period, it is sufficient to send the cancellation prior
            to expiry of the cancellation period.
          </p>
          <h3>Consequences of cancellation </h3>
          <p>
            If you cancel this contract, we must repay all payments we have
            received from you, including delivery costs (with the exception of
            additional costs incurred as a result of your choice of another
            delivery method than the cheapest standard delivery offered by us)
            promptly and no later than within fourteen days from the day on
            which we receive your notice of cancellation of this contract. To
            settle this repayment, we shall use the same method of payment you
            used in the original transaction, unless we have expressly agreed
            otherwise with you; under no circumstances shall you be charged any
            fees as a result of this repayment. We may deny repayment until we
            have received the products back or you have provided evidence that
            you have sent back the goods, depending on which occurs earlier.
          </p>
          <p>
            You must return or hand over the products without delay and in any
            case no later than within fourteen days from the day on which you
            inform us of cancellation of this contract. The period is observed
            if you send the products prior to expiry of this period of fourteen
            days. You shall bear the direct costs of returning the products. You
            must only compensate us for any loss of value of the products if
            this loss of value is due to handling of the products that was not
            necessary for examining the quality, characteristics and
            functionality of the products.
          </p>
          <h3>2. Exclusion of the right to cancellation</h3>
          <p>
            The right to cancellation shall exist insofar as we have not agreed
            otherwise with you; it shall not exist inter alia for contracts on
            the delivery of sealed products that are not suitable for returns
            for reasons of health protection or hygiene if their seal has been
            broken after delivery.{" "}
          </p>
          <h3>3. Template cancellation form</h3>
          <p>
            We hereby inform you of the template cancellation form in accordance
            with statutory provisions as follows:
          </p>
          <h3>Template cancellation form </h3>
          <p>
            ((If you wish to cancel the contract, please complete this form and
            send it back to us.)
          </p>
          <ul>
            <li>
              To: SOAPERY GmbH, Musterstraße 1, D-53639 Köngiswinter,
              info@muster-soapery.de, Germany
            </li>
            <li>
              I/We (*) hereby cancel the contract concluded with me/us (*) on
              the purchase of the following products (*)/the provision of the
              following services (*)
            </li>
            <li>Ordered on (*)/received on (*)</li>
            <li>Name of the consumer(s) </li>
            <li>Address of the consumer(s) </li>
            <li>Signature of the consumer(s) (only for paper submission)</li>
            <li>Date </li>
          </ul>
          <p>(*) Strike through as applicable. </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Widerruf;
