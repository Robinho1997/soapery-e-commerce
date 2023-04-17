import React, { useContext } from "react";
import "../styles/agbWiderrufDatenschutz.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";

function Agb() {
  const { germanLanguage } = useContext(Context);
  return (
    <div className="agb-page">
      <Navbar />
      <h1 className="agb-header">AGB</h1>
      {germanLanguage ? (
        <div className="agb">
          <h2 className="agb-name">Allgemeine Geschäftsbedingungen</h2>
          <Link to="/">soapery.de</Link>
          <h2 className="margin-top">1. Geltungsbereich</h2>
          <h3>1.1 Vertragspartner</h3>
          <p>
            Diese Allgemeinen Verkaufsbedingungen („AGB“) gelten für alle über
            unseren Onlineshop („Onlineshop“) geschlossenen Verträge zwischen
            uns, der Mustermann GmbH, vertreten durch Max Mustermann,
            Musterstraße 12, D-53639 Königswinter, Deutschland, Telefon: +49
            (0)$$21/65$$23$ (Du erreichst uns Mo.-Fr. 10-17 Uhr), E-Mail:
            info@muster-soapery.de, Handelsregister: Amtsgericht Musterheim, HRB
            32$$53$, Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG :
            DE3$$5353$54$ (nachfolgend: „wir“ oder „SOAPERY“ genannt) und Dir
            als unserem mindestens 18 Jahre alten Kunden, der als Verbraucher
            handelt. Maßgebend ist die jeweils bei Abschluss des Vertrags
            gültige Fassung der AGB.
          </p>
          <h3>1.2 Verbraucher</h3>
          <p>
            Die Angebote im Onlineshop richten sich ausschließlich an
            (End)Verbraucher mit Sitz in der Bundesrepublik Deutschland und
            Österreich. Verbraucher ist gemäß § 13 BGB jede natürliche Person,
            die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder
            ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
            zugerechnet werden können.{" "}
          </p>
          <h2>2. Vertragsschluss</h2>
          <h3>2.1 Bestellprozess</h3>
          <p>
            Die Präsentation und Bewerbung von Artikeln in unserem Onlineshop
            stellt kein bindendes Angebot zum Abschluss eines Kaufvertrags dar.
            Du kannst aus unserem Sortiment Produkte auswählen und diese über
            den Button „In den Warenkorb“ in einem so genannten Warenkorb
            sammeln. Über den Button „Checkout“ gibst Du einen verbindlichen
            Antrag zum Kauf der im Warenkorb befindlichen Waren ab. Vor
            Abschicken der Bestellung kannst Du die Daten jederzeit korrigieren,
            indem Du die hierfür im Bestellablauf vorgesehenen und erläuterten
            Korrekturhilfen nutzt. Mit dem Absenden Deiner Bestellung über den
            Onlineshop durch Anklicken des Buttons „Kaufen“ gibst Du eine
            rechtsverbindliche Bestellung ab.{" "}
          </p>
          <p>
            Dein Antrag kann jedoch nur abgegeben und an uns übermittelt werden,
            wenn Du Dich durch Setzen eines entsprechenden Häkchens mit der
            Geltung dieser AGB einverstanden erklärst, dadurch in Deinen Antrag
            aufnimmst und erklärst, die Verbraucherwiderrufsbelehrung und unsere
            Datenschutzhinweise zur Kenntnis genommen und verstanden zu haben.{" "}
          </p>
          <p>
            Du bist an Deine Bestellung für die Dauer von zwei (2) Wochen nach
            deren Abgabe gebunden. Dein gegebenenfalls bestehendes Recht (falls
            Du Verbraucher bist), Deine Bestellung zu widerrufen, bleibt hiervon
            unberührt. Die Verbraucherwiderrufsbelehrung und das
            Muster-Widerrufsformular findest Du nachstehend unter Ziff. 3.{" "}
          </p>
          <h3>2.2 Mindestbestellwert; verbraucherübliche Bestellmengen</h3>
          <p>
            Bestellungen können wir gegebenenfalls nur ab einem
            Mindestbestellwert berücksichtigen. Sollte dies der Fall sein,
            kannst Du den Mindestbestellwert den in unserem Onlineshop bereit
            gestellten Preisinformationen entnehmen. Bestellungen im Onlineshop
            sind zudem grundsätzlich nur in für Verbraucher üblichen Mengen
            möglich. Dies gilt auch für aufeinanderfolgende Bestellungen, die in
            der Summe eine verbraucherübliche Bestellmenge überschreiten.{" "}
          </p>
          <h3>2.3 Zustandekommen des Kaufvertrages</h3>
          <p>
            Auf Deinen Antrag hin schicken wir Dir eine automatische
            Empfangsbestätigung per E-Mail ("Bestellbestätigung") zu, in welcher
            Deine Bestellung nochmals aufgeführt wird. Die Bestellbestätigung
            dokumentiert lediglich, dass Deine Bestellung bei uns eingegangen
            ist und stellt keine Annahme des Antrags dar. Die Nutzung
            zugelassener Sofortzahlungsarten durch Dich führt trotz
            Kaufpreiszahlung noch nicht zum Abschluss des Kaufvertrages. Der
            Kaufvertrag kommt erst durch die Abgabe der Annahmeerklärung durch
            uns zustande, die mit einer gesonderten E-Mail
            ("Auftragsbestätigung"), spätestens jedoch durch Lieferung der Ware
            erfolgt. In der Bestellbestätigung oder Auftragsbestätigung, jedoch
            spätestens bei Lieferung der Ware, wird Dir der Vertragstext
            (bestehend aus Deiner Bestellung, den AGB, der Widerrufsbelehrung
            und dem Muster-Widerrufsformular) von uns auf einem dauerhaften
            Datenträger (E-Mail oder Papierausdruck) zugesandt. Der Vertragstext
            wird unter Wahrung des Datenschutzes gespeichert. Du kannst Deine
            vergangenen Bestellungen unter Deinem Nutzerkonto einsehen, falls Du
            ein solches registriert hast. Die Registrierung eines Nutzerkontos
            ist keine Bestellvoraussetzung.
          </p>
          <h3>2.4 Speicherung des Vertragstextes </h3>
          <p>
            Den Vertragstext bestehend aus Deiner Bestellung, den AGB, der
            Widerrufsbelehrung und dem Muster-Widerrufsformular übersenden wir
            Dir mit der Bestellbestätigung oder in einer separaten E-Mail,
            jedoch spätestens bei Lieferung der Ware auf einem dauerhaften
            Datenträger (E-Mail oder Papierausdruck). Zudem speichern wir den
            Vertragstext unter Wahrung des Datenschutzes. Du kannst Deine
            vergangenen Bestellungen unter Deinem Nutzerkonto einsehen, falls Du
            ein solches registriert hast. Die Registrierung eines Nutzerkontos
            ist keine Bestellvoraussetzung.
          </p>
          <h3>2.5 Vertragssprache</h3>
          <p>
            Die für den Vertragsschluss zur Verfügung stehende Sprache ist
            Deutsch.{" "}
          </p>
          <h2>3. Verbraucherwiderrufsrecht</h2>
          <h3>3.1 Widerrufsbelehrung</h3>
          <h3 className="center">Widerrufsrecht</h3>
          <p>
            Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag, an dem Du oder ein von Dir benannter Dritter, der
            nicht der Beförderer ist, die Waren in Besitz genommen haben bzw.
            hat. Zur Wahrung der Widerrufsfrist reicht es aus, dass Du die
            Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
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
            ursprünglichen Transaktion eingesetzt hast, es sei denn, mit Dir
            wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden
            Dir wegen dieser Rückzahlung Entgelte berechnet. Wir können die
            Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten
            haben oder bis Du den Nachweis erbracht hast, dass Du die Waren
            zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.{" "}
          </p>
          <h3>3.2 Ausschluss des Widerrufsrechts</h3>
          <p>
            Das Widerrufsrecht besteht, soweit wir mit Dir nichts anderes
            vereinbart haben, unter anderem nicht bei Verträgen zur Lieferung
            versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der
            Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung
            nach der Lieferung entfernt wurde.{" "}
          </p>
          <h3>3.3 Muster-Widerrufsformular</h3>
          <p>
            Über das Muster-Widerrufsformular informieren wir Dich nach der
            gesetzlichen Regelung wie folgt:
          </p>

          <p>Muster-Widerrufsformular</p>
          <p>
            (Wenn Du den Vertrag widerrufen willst, fülle bitte dieses Formular
            aus und sende es an uns zurück.)
          </p>
          <ul>
            <li>
              An SOAPERY GmbH, Musterstraße 1, D-53639 Königswinter,
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
          <h2>4. Preise und Versandkosten; Hinsendekosten bei Widerruf </h2>
          <p>
            Sämtliche Preisangaben in unserem Onlineshop sind Bruttopreise
            inklusive der gesetzlichen Umsatzsteuer und verstehen sich zuzüglich
            anfallender Versandkosten. Die Versandkosten sind in unseren
            Preisangaben im Warenkorb in unserem Onlineshop angegeben. Der
            Versand nach Deutschland ist 3,95€. Der Versand nach Österreich oder
            Luxemburg kostet 9,95 EUR. Der Versand nach Spanien, Frankreich,
            Italien, Bulgarien oder Griechenland kostet 14,95 EUR. Der Versand
            in die Schweiz kostet 19,95 EUR. Ab einem Warenbestellwert von 19,90
            EUR liefern wir innerhalb Deutschlands versandkostenfrei. Ab einem
            Warenbestellwert von 39,90 EUR liefern wir versandkostenfrei nach
            Österreich. Der Preis einschließlich Umsatzsteuer und anfallender
            Versandkosten wird außerdem in der Bestellmaske angezeigt, bevor Du
            Deine Bestellung absendest. Wenn wir Deine Bestellung durch
            Teillieferungen erfüllen, entstehen Dir nur für die erste
            Teillieferung Versandkosten. Erfolgen die Teillieferungen auf Deinen
            Wunsch, berechnen wir für jede Teillieferung Versandkosten. Wenn Du
            Deine Vertragserklärung wirksam widerrufst, kannst Du unter den
            gesetzlichen Voraussetzungen die Erstattung bereits bezahlter Kosten
            für den Versand zu Ihnen (Hinsendekosten) verlangen (vgl. zu
            sonstigen Widerrufsfolgen die Widerrufsbelehrung).
          </p>
          <h2>5. Lieferbedingungen</h2>
          <h3>5.1 Teillieferungen</h3>
          <p>
            Wir sind zu Teillieferungen berechtigt, soweit dies für Dich
            zumutbar ist.
          </p>
          <h3>5.2 Liefergebiet</h3>
          <p>
            Wir liefern nur im Versandweg an Kunden, die eine Lieferadresse in
            der Bundesrepublik Deutschland, Österreich, Luxemburg, der Schweiz,
            Spanien, Frankreich, Italien, Bulgarien oder Griechenland angeben.
            Eine Selbstabholung der Ware ist nicht möglich. Ebensowenig liefern
            wir an Packstationen.
          </p>
          <h3>5.3 Lieferfrist</h3>
          <p>
            Die Lieferfrist beginnt am Tag des Vertragsschlusses zu laufen und
            endet mit dem Ablauf des letzten Tages der Frist. Fällt der letzte
            Tag der Frist auf einen Samstag, Sonntag oder einen am Lieferort
            staatlich anerkannten allgemeinen Feiertag, so tritt an die Stelle
            eines solchen Tages der nächste Werktag. Für die Länge der
            Lieferfrist ist die Angabe in der jeweiligen Produktbeschreibung
            ausschlaggebend. Sofern für die jeweilige Ware in unserem Onlineshop
            keine Lieferzeit angegeben ist, beträgt sie höchstens 10 Werktage,
            soweit nichts anderes vereinbart wurde.
          </p>
          <h3>5.4 Transportschäden</h3>
          <p>
            Falls Du Verbraucher bist, werden Waren mit offensichtlichen
            Transportschäden angeliefert, so reklamierst Du solche Fehler bitte
            möglichst sofort beim Zusteller und nimmst bitte unverzüglich
            Kontakt zu uns auf. Die Versäumung einer Reklamation oder
            Kontaktaufnahme hat für Deine gesetzlichen Ansprüche und deren
            Durchsetzung, insbesondere Deiner Gewährleistungsrechte, keinerlei
            Konsequenzen. Du hilfst uns aber, unsere eigenen Ansprüche gegenüber
            dem Frachtführer bzw. der Transportversicherung geltend machen zu
            können.
          </p>
          <h2>6. Zahlungsarten</h2>
          <h3>6.1 Zahlung per PayPal</h3>
          <p>
            Wenn Du die Zahlungsart „PayPal“ gewählt hast, muss Du, um den
            Rechnungsbetrag bezahlen zu können, dort registriert sein bzw. sich
            erst registrieren und mit Deinen Zugangsdaten legitimieren. Die
            Zahlungstransaktion wird von PayPal unmittelbar nach Bestätigung der
            Zahlungsanweisung automatisch durchgeführt. Weitere Hinweise
            erhältst Du beim Bestellvorgang.
          </p>
          <h3>6.2 Zahlung per Kreditkarte über Shopify Payments</h3>
          <p>
            Du kannst bequem und sicher mit Kreditkarte bezahlen. Die
            Zahlungstransaktion wird unmittelbar nach Bestätigung der
            Zahlungsanweisung und nach Ihrer Legitimation als rechtmäßiger
            Karteninhaber von Ihrem Kreditkartenunternehmen auf Aufforderung von
            Shopify durchgeführt und Ihre Karte belastet. Weitere Hinweise
            erhältst Du beim Bestellvorgang.
          </p>
          <h3>6.3 Zahlung per KLARNA Rechnungskauf</h3>
          <p>
            Die Zahlungsfrist beträgt 14 Tage ab Versand der Ware. Weitere
            Hinweise erhältst Du beim Bestellvorgang.
          </p>
          <h3>6.4 Zahlung per KLARNA Sofortüberweisung</h3>
          <p>
            Wenn du die Klarna Sofortüberweisung nutzen möchtest, kannst du
            Deinen Einkauf direkt mit deinen Online-Banking-Daten bezahlen.
            Weitere Hinweise erhältst Du beim Bestellvorgang.
          </p>
          <h3>6.5 Zahlung per eps-Überweisung</h3>
          <p>
            Wenn du mit eps-Überweisung nutzen möchtest, kannst du deinen
            Einkauf direkt mit deinen Online-Banking-Daten bezahlen. Weitere
            Hinweise erhältst Du beim Bestellvorgang.
          </p>
          <h3>6.6 Gutscheine</h3>
          <p>
            Soweit wir Dir in unserem alleinigen Ermessen Coupons,
            Aktionsgutscheine oder sonstige geldwerte Vorteile z.B. in Form von
            Vorteilscodes (zusammen „Gutschein(e)“ genannt) gewähren, kannst Du
            diese gemäß den folgenden Bedingungen ausschließlich im Rahmen des
            Onlinebestellprozesses während der angegebenen Gültigkeitsdauer
            einlösen:{" "}
          </p>
          <p>
            Sämtliche Gutscheine können nur einmalig und nicht in Kombination
            mit anderen Aktionen eingelöst werden. Pro Bestellung kann nur ein
            Gutschein eingelöst werden. Soweit die Einlösung von Gutscheinen
            unter einem bestimmten Mindestbestellwert pro Bestellung
            ausgeschlossen sein sollte, weisen wir Dich hierauf in unseren
            Angeboten hin.{" "}
          </p>
          <p>
            Soweit der durch den Gutschein gewährte Vorteil in einer
            prozentualen oder in Euro bezifferten Ersparnis liegt, gilt der
            Gutschein für unser Gesamtsortiment, ausgenommen reduzierte Ware,
            und wird automatisch von Deinem Rechnungsbetrag abgezogen. Ein den
            Rechnungsbetrag übersteigender Vorteilswert verfällt. Eine
            Barauszahlung des Gutscheinwerts ist ausgeschlossen.{" "}
          </p>
          <p>
            Soweit der Gutschein sonstige geldwerte Vorteile, z.B. kostenlose
            Produktzugaben, z.B. in Form von Produktproben gewährt, liefern wir
            Dir diese mit Deiner Bestellung solange der Vorrat reicht.
          </p>
          <h2>7. Promotions</h2>
          <h3>7.1 Rabatte</h3>
          <p>
            Soweit wir Dir im Online-Shop in unserem alleinigen Ermessen Rabatte
            (ggf. ab einem bestimmten Mindestbestellwert) gewähren, kannst Du
            diese ausschließlich im Rahmen des Onlinebestellprozesses und
            während der angegebenen Gültigkeitsdauer gemäß den folgenden
            Bedingungen in Anspruch nehmen: Der Rabattcode kann im Gutscheinfeld
            im Warenkorb im Rahmen des Bestellprozesses eingegeben werden. Wir
            gewähren den Rabatt temporär. Die jeweiligen Rabattbedingungen
            werden in der Kommunikationsmaßnahme genannt und können in unseren
            AGB unter dem Punkt 7.1 eingesehen werden. Der Rabatt hängt zudem
            ggf. vom Wert Deiner Bestellung, von den bestellten Artikeln oder
            anderen Promotionregeln ab. Sollten Produkte nicht verfügbar sein,
            hast Du kein Anrecht auf Nacherfüllung. Solltest Du keinen Rabatt
            auswählen, so hast Du nach Abschluss Deiner Bestellung kein Anrecht
            mehr auf den Rabatt. Eine Barauszahlung des Wertes des Rabattes ist
            ausgeschlossen.
          </p>
          <h3>7.2 Gratis-Produktzugaben</h3>
          <p>
            Soweit wir Dir im Online-Shop in unserem alleinigen Ermessen
            Gratis-Produktzugaben (ggf. ab einem bestimmten Mindestbestellwert)
            (im Folgenden: „Goodie(s)“ genannt) gewähren, kannst Du diese
            ausschließlich im Rahmen des Onlinebestellprozesses und während der
            angegebenen Gültigkeitsdauer gemäß den folgenden Bedingungen in
            Anspruch nehmen: Die verfügbaren Goodies werden Dir im
            Bestellprozess angezeigt. Wir gewähren Goodies nur solange unser
            Vorrat reicht. Welche Goodies Dir angezeigt werden und wie viele Du
            auswählen und kostenlos Deinem Warenkorb hinzufügen kannst, hängt
            zudem ggf. vom Wert Deiner Bestellung, von den bestellten Artikeln
            oder anderen Promotionregeln ab. Solltest Du kein(e) Goodie(s)
            auswählen, so hast Du nach Abschluss Deiner Bestellung kein Anrecht
            mehr auf das/die Goodies. Eine Barauszahlung des Wertes des/der
            Goodie(s) ist ausgeschlossen.
          </p>
          <h2>8. Eigentumsvorbehalt</h2>
          <p>
            Die gelieferte Ware bleibt bis zur vollständigen Bezahlung des
            Kaufpreises in unserem Eigentum.
          </p>
          <h2>9. Gewährleistung</h2>
          <h3>9.1 Gesetzliche Mängelansprüche</h3>
          <p>
            Wir haften für Sach- oder Rechtsmängel gelieferter Artikel nach den
            geltenden gesetzlichen Vorschriften.{" "}
          </p>
          <h3>9.2 Garantien</h3>
          <p>
            Etwaige von uns gegebene Verkäufergarantien für bestimmte Artikel
            oder von den Herstellern bestimmter Artikel eingeräumte
            Herstellergarantien treten neben die Ansprüche wegen Sach- oder
            Rechtsmängeln im Sinne von Ziff. 8.1. Einzelheiten des Umfangs
            solcher Garantien ergeben sich aus den Garantiebedingungen, die den
            Artikeln gegebenenfalls beiliegen.
          </p>
          <h2>10. Haftung</h2>
          <h3>10.1 Grundsatz</h3>
          <p>
            Wir haften Dir gegenüber in allen Fällen vertraglicher und
            außervertraglicher Haftung bei Vorsatz und grober Fahrlässigkeit
            nach Maßgabe der gesetzlichen Bestimmungen auf Schadensersatz oder
            Ersatz vergeblicher Aufwendungen.
          </p>
          <h3>10.2 Haftung bei Verletzung wesentlicher Vertragspflichten</h3>
          <p>
            In sonstigen Fällen haften wir – soweit in Ziff. 9.3 nicht
            abweichend geregelt – nur bei Verletzung einer Vertragspflicht,
            deren Erfüllung die ordnungsgemäße Durchführung des Vertrags
            überhaupt erst ermöglicht und auf deren Einhaltung Du als Kunde
            regelmäßig vertrauen darfst (so genannte Kardinalpflicht), und zwar
            beschränkt auf den Ersatz des vorhersehbaren und typischen Schadens.
            In allen übrigen Fällen ist unsere Haftung vorbehaltlich der
            Regelung in Ziff. 9.3 ausgeschlossen. Die vorstehende
            Haftungsbeschränkung gilt auch für die persönliche Haftung unserer
            Mitarbeiter, Vertreter und Organe.
          </p>
          <h3>10.3 Unbeschränkte Haftung</h3>
          <p>
            Unsere Haftung für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit und nach zwingenden gesetzlichen
            Vorschriften bleibt von den vorstehenden Haftungsbeschränkungen und
            –ausschlüssen unberührt.{" "}
          </p>
          <h2>11. Aufrechnung; Zurückbehaltungsrechte</h2>
          <p>
            Du bist nicht berechtigt, gegenüber unseren Forderungen
            aufzurechnen, es sei denn, Deine Gegenansprüche sind rechtskräftig
            festgestellt oder unbestritten. Du bist zur Aufrechnung gegenüber
            unseren Forderungen auch berechtigt, wenn Du Mängelrügen oder
            Gegenansprüche aus demselben Kaufvertrag geltend machst. Als Käufer
            darfst Du ein Zurückbehaltungsrecht nur dann ausüben, wenn Dein
            Gegenanspruch aus demselben Kaufvertrag herrührt.
          </p>
          <h2>12. Sonstiges</h2>
          <h3>13.1 Anwendbares Recht</h3>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
            des UN-Kaufrechts. Wenn zum Zeitpunkt Deiner Bestellung Dein
            gewöhnlicher Aufenthalt in Österreich ist, bleibt die Anwendung
            zwingender österreichischer Rechtsvorschriften von der in Satz 1
            getroffenen Rechtswahl unberührt.
          </p>
          <h3>13.2 Kundendienst</h3>
          <p>
            Du erreichst unseren Kundendienst für Fragen, Reklamationen und
            Beanstandungen Ihrer Bestellung werktags von 9:00 Uhr bis 17:00 Uhr
            unter der Telefonnummer +49 $00 2$$237$ sowie per E-Mail unter
            shop@muster-soapery.de.
          </p>
          <h3>13.3 Streitbeilegung</h3>
          <p>
            Streitbeilegung: Die EU-Kommission hat eine Internetplattform zur
            Online-Beilegung von Streitigkeiten geschaffen. Die Plattform dient
            als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten
            betreffend vertragliche Verpflichtungen, die aus
            Online-Kaufverträgen erwachsen. Nähere Informationen sind unter dem
            folgenden Link verfügbar: http://ec.europa.eu/consumers/odr. Zur
            Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle sind wir weder bereit noch
            verpflichtet.
          </p>
          <h2>Stand dieser AGB: April 2023</h2>
        </div>
      ) : (
        <div className="agb">
          <h2 className="agb-name">Terms and Conditions</h2>
          <Link to="/">soapery.de</Link>
          <h2 className="margin-top">1. Scope of Application</h2>
          <h3>1.1 Contracting parties</h3>
          <p>
            These General Terms and Conditions of Sale ("GTC") apply to all
            contracts concluded via our online shop ("Online Shop") between us,
            Mustermann GmbH, represented by Max Mustermann, Musterstraße 12,
            D-53639 Königswinter, Germany, Telephone: +49 (0)$$21/65$$23$ (you
            can reach us Mon-Fri 10-5), email: info@muster-soapery.de,
            commercial register: Musterheim District Court, HRB 32$$53$,
            value-added tax identification number in accordance with § 27a of
            the German Value Added Tax Act: DE3$$5353$54$ (hereinafter referred
            to as "we" or "SOAPERY") and you as our customer who is at least 18
            years old and acts as a consumer. The version of the GTC valid at
            the time the contract is concluded is authoritative.
          </p>
          <h3>1.2 Consumers</h3>
          <p>
            The offers in the online shop are exclusively directed at (end)
            consumers with their registered office in the Federal Republic of
            Germany and Austria. A consumer is any natural person who concludes
            a legal transaction for purposes that are predominantly neither
            commercial nor self-employed.{" "}
          </p>
          <h2>2. Conclusion of contract</h2>
          <h3>2.1 Ordering process</h3>
          <p>
            The presentation and promotion of items in our online shop do not
            constitute a binding offer to conclude a purchase agreement. You can
            select products from our range and collect them in a so-called
            shopping cart using the "Add to cart" button. By clicking the
            "Checkout" button, you submit a binding request to purchase the
            goods in the shopping cart. Before submitting the order, you can
            correct the data at any time by using the correction aids provided
            and explained in the ordering process. By clicking the "Buy" button
            to submit your order via the online shop, you place a legally
            binding order.{" "}
          </p>
          <p>
            However, your request can only be submitted and transmitted to us if
            you agree to these GTC by ticking the appropriate box, thereby
            including them in your request and stating that you have read and
            understood the consumer cancellation policy and our privacy policy.{" "}
          </p>
          <p>
            You are bound by your order for a period of two (2) weeks after it
            has been submitted. Your right (if you are a consumer) to revoke
            your order remains unaffected by this. You will find the consumer
            cancellation policy and the model cancellation form below under
            section 3.{" "}
          </p>
          <h3>
            2.2 Minimum order value; customary order quantities for consumers
          </h3>
          <p>
            In some cases, we can only consider orders with a minimum order
            value. If this is the case, you can find the minimum order value in
            the price information provided in our online shop. Orders in the
            online shop are generally only possible in customary order
            quantities for consumers. This also applies to successive orders
            that exceed a customary order quantity in total.{" "}
          </p>
          <h3>2.3 Conclusion of the purchase contract</h3>
          <p>
            Upon your request, we will send you an automatic receipt
            confirmation via email ("Order Confirmation"), which lists your
            order again. The Order Confirmation only documents that your order
            has been received by us and does not constitute acceptance of the
            request. Despite payment of the purchase price, the use of approved
            instant payment methods by you does not lead to the conclusion of
            the purchase contract. The purchase contract is only concluded by
            our acceptance declaration, which is made by a separate email
            ("Order Confirmation") or, at the latest, by delivery of the goods.
            In the Order Confirmation or Order Confirmation email, but no later
            than upon delivery of the goods, we will send you the contract text
            (consisting of your order, the general terms and conditions, the
            cancellation policy, and the sample cancellation form) on a durable
            medium (email or paper printout). The contract text is stored while
            maintaining data protection. If you have registered such an account,
            you can view your past orders under your user account. The
            registration of a user account is not a prerequisite for placing an
            order.
          </p>
          <h3>2.4 Storage of the Contract Text</h3>
          <p>
            We will send you the contract text, consisting of your order, the
            general terms and conditions, the cancellation policy, and the
            sample cancellation form, with the Order Confirmation or in a
            separate email, but no later than upon delivery of the goods, on a
            durable medium (email or paper printout). We also store the contract
            text while maintaining data protection. If you have registered such
            an account, you can view your past orders under your user account.
            The registration of a user account is not a prerequisite for placing
            an order.
          </p>
          <h3>2.5 Contract Language</h3>
          <p>The language available for concluding the contract is German.</p>
          <h2>3. Consumer Right of Withdrawal</h2>
          <h3>3.1 Cancellation Policy</h3>
          <h3>Right of Withdrawal</h3>
          <p>
            You have the right to withdraw from this contract within fourteen
            days without giving any reason. The withdrawal period is fourteen
            days from the day on which you or a third party named by you, who is
            not the carrier, have/has taken possession of the goods. To exercise
            your right of withdrawal, it is sufficient to send a message about
            your decision to withdraw from the contract before the withdrawal
            period expires.
          </p>
          <h3>Consequences of Withdrawal</h3>
          <p>
            If you withdraw from this contract, we shall reimburse to you all
            payments received from you, including the costs of delivery (except
            for the supplementary costs arising if you chose a type of delivery
            other than the least expensive type of standard delivery offered by
            us), without undue delay and in any event not later than fourteen
            days from the day on which we are informed about your decision to
            withdraw from this contract. We will make the reimbursement using
            the same means of payment as you used for the initial transaction
            unless you have expressly agreed otherwise; in any event, you will
            not incur any fees as a result of such reimbursement. We may
            withhold reimbursement until we have received the goods back or you
            have supplied evidence of having sent back the goods, whichever is
            the earliest.
          </p>
          <h3>3.2 Exclusion of the Right of Withdrawal</h3>
          <p>
            The right of withdrawal does not apply, unless we have agreed
            otherwise with you, to contracts for the delivery of sealed goods
            which are not suitable for return for reasons of health protection
            or hygiene if their seal has been removed after delivery.
          </p>
          <h3>3.3 Sample withdrawal form</h3>
          <p>
            We inform you about the sample withdrawal form according to legal
            regulations as follows:
          </p>
          <p>Sample withdrawal form</p>
          <p>
            (If you want to withdraw from the contract, please fill out this
            form and send it back to us.)
          </p>
          <ul>
            <li>
              To SOAPERY GmbH, Musterstraße 1, D-53639 Königswinter,
              info@muster-soapery.de, Germany
            </li>
            <li>
              I/we (*) hereby give notice that I/we (*) withdraw from my/our (*)
              contract of sale of the following goods (*)/for the provision of
              the following service (*)
            </li>
            <li>Ordered on (*)/received on (*)</li>
            <li>Name of consumer(s)</li>
            <li>Address of consumer(s)</li>
            <li>
              Signature of consumer(s) (only if this form is notified on paper)
            </li>
            <li>Date</li>
          </ul>
          <p>(*) Delete as applicable.</p>
          <h2>
            4. Prices and shipping costs; forward shipping costs upon revocation
          </h2>
          <p>
            All price information in our online shop is gross prices including
            statutory value-added tax and does not include applicable shipping
            costs. Shipping costs are indicated in our price information in the
            shopping cart in our online shop. Shipping to Germany is €3.95.
            Shipping to Austria or Luxembourg costs €9.95. Shipping to Spain,
            France, Italy, Bulgaria, or Greece costs €14.95. Shipping to
            Switzerland costs €19.95. We deliver free of charge within Germany
            for orders with a value of €19.90 or more. We deliver free of charge
            to Austria for orders with a value of €39.90 or more. The price
            including VAT and applicable shipping costs is also displayed in the
            order form before you submit your order. If we fulfill your order
            through partial deliveries, you will only incur shipping costs for
            the first partial delivery. If the partial deliveries are made at
            your request, we will charge shipping costs for each partial
            delivery. If you effectively revoke your declaration of contract,
            you can demand reimbursement of the costs for shipping to you
            (forward shipping costs) under the statutory conditions (see the
            withdrawal notice for other consequences of withdrawal).
          </p>
          <h2>5. Delivery conditions</h2>
          <h3>5.1 Partial deliveries</h3>
          <p>
            We are entitled to make partial deliveries, as far as this is
            reasonable for you.
          </p>
          <h3>5.2 Delivery area</h3>
          <p>
            We only deliver by mail to customers who provide a delivery address
            in the Federal Republic of Germany, Austria, Luxembourg,
            Switzerland, Spain, France, Italy, Bulgaria, or Greece. Pickup of
            the goods is not possible. We do not deliver to packing stations.
          </p>
          <h3>5.3 Delivery period</h3>
          <p>
            The delivery period begins on the day of the conclusion of the
            contract and ends on the last day of the period. If the last day of
            the period falls on a Saturday, Sunday, or a general public holiday
            recognized at the place of delivery, the next working day shall take
            the place of such a day. The indication in the respective product
            description is decisive for the length of the delivery period. If no
            delivery time is specified for the respective goods in our online
            shop, it shall be at most 10 working days, unless otherwise agreed.
          </p>
          <h3>5.4 Transport damages</h3>
          <p>
            If you are a consumer, goods with obvious transport damages will be
            delivered, so please report such defects to the deliverer as soon as
            possible and contact us immediately. Failure to report or contact us
            has no consequences for your legal claims and their enforcement,
            especially your warranty rights. However, you help us to assert our
            own claims against the carrier or transport insurance.
          </p>
          <h2>6. Payment methods</h2>
          <h3>6.1 Payment by PayPal</h3>
          <p>
            If you have chosen the payment method "PayPal", you must be
            registered there or register first and legitimize yourself with your
            access data in order to be able to pay the invoice amount. The
            payment transaction is carried out automatically by PayPal
            immediately after confirmation of the payment instruction. You will
            receive further information during the ordering process.
          </p>
          <h3>6.2 Payment by credit card via Shopify Payments</h3>
          <p>
            You can pay conveniently and securely by credit card. The payment
            transaction will be carried out immediately after confirmation of
            the payment instruction and after your legitimacy as the rightful
            cardholder by your credit card company at the request of Shopify,
            and your card will be charged. You will receive further information
            during the ordering process.
          </p>
          <h3>6.3 Payment by KLARNA invoice purchase</h3>
          <p>
            The payment period is 14 days from the dispatch of the goods. You
            will receive further information during the ordering process.
          </p>
          <h3>6.4 Payment by KLARNA instant bank transfer</h3>
          <p>
            If you want to use Klarna instant bank transfer, you can pay for
            your purchase directly with your online banking data. You will
            receive further information during the ordering process.
          </p>
          <h3>6.5 Payment by eps transfer</h3>
          <p>
            If you want to use eps transfer, you can pay for your purchase
            directly with your online banking data. You will receive further
            information during the ordering process.
          </p>
          <h3>6.6 Vouchers</h3>
          <p>
            To the extent that we grant you coupons, promotional vouchers, or
            other monetary benefits, e.g. in the form of advantage codes
            (together "Vouchers") at our sole discretion, you can redeem them
            exclusively within the online ordering process during the specified
            validity period according to the following conditions:
          </p>
          <p>
            All vouchers can only be redeemed once and not in combination with
            other promotions. Only one voucher can be redeemed per order. If
            redemption of vouchers is excluded for a certain minimum order value
            per order, we will inform you of this in our offers.
          </p>
          <h2>7. Promotions</h2>
          <h3>7.1 Discounts</h3>
          <p>
            Insofar as we grant you discounts (possibly from a certain minimum
            order value) at our sole discretion in the online shop, you can only
            use them within the online ordering process and during the specified
            validity period according to the following conditions: The discount
            code can be entered in the voucher field in the shopping cart as
            part of the ordering process. We grant the discount temporarily. The
            respective discount conditions are mentioned in the communication
            measure and can be viewed under point 7.1 of our general terms and
            conditions. The discount also depends, if applicable, on the value
            of your order, the items ordered, or other promotion rules. If
            products are not available, you are not entitled to subsequent
            performance. If you do not select a discount, you will no longer be
            entitled to the discount after you have completed your order. A cash
            payment of the value of the discount is excluded.
          </p>
          <h3>7.2 Free Product Additions</h3>
          <p>
            Insofar as we grant you free product additions (possibly from a
            certain minimum order value) at our sole discretion in the online
            shop (hereinafter called "Goodie(s)"), you can only use them within
            the online ordering process and during the specified validity period
            according to the following conditions: The available goodies will be
            displayed to you in the ordering process. We only grant goodies
            while stocks last. Which goodies are displayed to you and how many
            you can select and add to your shopping cart free of charge also
            depend, if applicable, on the value of your order, the items
            ordered, or other promotion rules. If you do not select any goodies,
            you will no longer be entitled to the goodies after you have
            completed your order. A cash payment of the value of the goodies is
            excluded.
          </p>
          <h2>8. Retention of Title</h2>
          <p>
            The delivered goods remain our property until the purchase price has
            been paid in full.
          </p>
          <h2>9. Warranty</h2>
          <h3>9.1 Legal Claims for Defects</h3>
          <p>
            We are liable for defects in the delivered items according to the
            applicable legal provisions.
          </p>
          <h3>9.2 Guarantees</h3>
          <p>
            Any seller guarantees given by us for certain items or manufacturer
            guarantees granted by the manufacturers of certain items apply in
            addition to claims for defects in accordance with clause 8.1. The
            details of the scope of such guarantees can be found in the
            guarantee conditions, which may be enclosed with the items.
          </p>
          <h2>10. Liability</h2>
          <h3>10.1 Principle</h3>
          <p>
            We are liable to you in all cases of contractual and non-contractual
            liability for intent and gross negligence in accordance with the
            statutory provisions for damages or reimbursement of futile
            expenses.
          </p>
          <h3>10.2 Liability for Breach of Material Contractual Obligations</h3>
          <p>
            In other cases, we are only liable, unless otherwise specified in
            section 9.3, for the breach of a contractual obligation which is
            essential to the proper execution of the contract and on which the
            customer may regularly rely (so-called cardinal obligation), limited
            to the reimbursement of foreseeable and typical damages. In all
            other cases, our liability is excluded, subject to the provisions of
            section 9.3. The above limitation of liability also applies to the
            personal liability of our employees, representatives, and organs.
          </p>
          <h3>10.3 Unlimited liability</h3>
          <p>
            Our liability for damages resulting from the violation of life,
            body, or health and according to mandatory statutory provisions
            remains unaffected by the above limitations and exclusions of
            liability.
          </p>
          <h2>11. Setoff; Retention Rights</h2>
          <p>
            You are not entitled to offset against our claims, unless your
            counterclaims have been finally adjudicated or are undisputed. You
            are also entitled to offset against our claims if you assert claims
            for defects or counterclaims arising from the same purchase
            contract. As a buyer, you may exercise a right of retention only if
            your counterclaim arises from the same purchase contract.
          </p>
          <h2>12. Miscellaneous</h2>
          <h3>13.1 Applicable Law</h3>
          <p>
            German law shall apply, excluding the UN Sales Convention. If, at
            the time of your order, your habitual residence is in Austria, the
            application of mandatory Austrian legal provisions remains
            unaffected by the choice of law made in sentence 1.
          </p>
          <h3>13.2 Customer Service</h3>
          <p>
            You can reach our customer service for questions, complaints and
            objections regarding your order on weekdays from 9:00 a.m. to 5:00
            p.m. by phone at +49 $00 2$$237$ or by email at
            shop@muster-soapery.de.
          </p>
          <h3>13.3 Dispute Resolution</h3>
          <p>
            Dispute resolution: The European Commission has created an Internet
            platform for online dispute resolution. The platform serves as a
            point of contact for out-of-court settlement of disputes concerning
            contractual obligations arising from online purchase contracts.
            Further information is available at the following link:
            http://ec.europa.eu/consumers/odr. We are neither willing nor
            obliged to participate in a dispute resolution procedure before a
            consumer arbitration board.
          </p>
          <h2>As of April 2023</h2>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Agb;
