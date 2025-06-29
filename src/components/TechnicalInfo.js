import React from 'react';
import { Link } from 'react-router-dom';
function TechnicalInfo() {
  return (
    <main className="main-content">
      <h2>Informații Tehnice</h2>
      <p className="paragraph">
        Aici voi posta codul unde veti puitea vedea in detaliu tehnologiile folosite.
      </p>
          
      <img src={require('../assets/images/cod/esp.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">Codul din fisierul esp.py citește valorile de la trei senzori de umiditate conectați la ESP32 și controlează automat trei pompe în funcție de nivelul de umiditate măsurat.
Valorile brute și procentuale ale umidității sunt calculate pentru fiecare senzor folosind o funcție de mapare calibrată.
La fiecare 5 secunde, datele colectate sunt trimise sub formă de payload JSON către un server specificat printr-o cerere HTTP POST.
Conexiunea la rețeaua Wi-Fi este gestionată automat, iar dacă ESP32 se deconectează, acesta încearcă să se reconecteze.
Codul afișează în serial atât valorile citite, cât și răspunsurile serverului pentru monitorizare și depanare.</p>
        <img src={require('../assets/images/cod/server.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">Acest cod definește un server FastAPI care primește date de la senzori prin endpoint-ul /data folosind metoda POST. La fiecare cerere primită, serverul adaugă un timestamp UTC curent la date, afișează payload-ul în consolă și trimite datele către un topic Kafka numit sensor_data. Serverul permite cereri din orice origine (CORS) și rulează pe portul 5050. Astfel, codul funcționează ca un gateway între dispozitivele IoT și infrastructura Kafka pentru colectarea și procesarea ulterioară a datelor.</p>
      <img src={require('../assets/images/cod/kafka_cons.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">Acest cod definește un consumator Kafka care se conectează la un cluster Kafka specificat și ascultă topicul sensor_data. La fiecare mesaj primit, acesta decodifică payload-ul JSON, extrage timestamp-ul și valorile de umiditate pentru fiecare senzor, apoi le afișează în consolă. De asemenea, codul gestionează reconectarea automată la brokerul Kafka în caz de deconectare. Astfel, permite monitorizarea continuă a datelor de la senzori într-un mod eficient și scalabil.</p>
      <img src={require('../assets/images/cod/linechart.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">Aceasta este o reprezentare grafică de tip linie care ilustrează variațiile umidității măsurate la fiecare oră.</p>
      <Link to="/eugen-blog">Inapoi la Pagina de Start</Link>
    </main>
  );
}

export default TechnicalInfo;