import React from 'react';
import '../css/MainContent.css';
import { Link } from 'react-router-dom';



function MainContent() {
  return (
    <main className='main-content'>
      <h2>Salutare tuturor!</h2>
      <p className="paragraph">
        Vreau să aduc în atenția voastră ultimul proiect la care am lucrat. Este vorba despre un sistem care monitorizează umiditatea solului în trei zone adiacente, unde am plantat ardei, roșii și castraveți. 
        Ideea mi-a venit după ce am reluat legătura cu un coleg din școală — <a href="https://www.youtube.com/watch?v=xpGFJZjnEOw" target="_blank" rel="noopener noreferrer">Nicu</a>. El are un proiect similar, pe care îl puteti vizita facand click. Revenind la grădina noastră, acest proiect, pe lângă munca manuală — pregătirea solului, plantarea puieților, plasarea cablurilor cu senzori și pompe — are și o componentă tehnică. Aceasta presupune programarea unui microcontroller, care coordonează activitatea pompelor, recepționează datele la fiecare 3 secunde și le transmite către laptopul personal. Toate aceste detalii tehnice le voi prezenta spre final, pentru cei interesați.
      </p>

      <p className="paragraph">Iată cum arăta solul în momentele de început.</p>
      <img src={require('../assets/images/crop.jpg')} alt="Solul la început" className="image-content" />

      <p className="paragraph">
        Am ales această parte din grădină deoarece, din experiențele anterioare de îngrijire, am observat că se usucă cel mai repede — posibil din cauza lipsei umbrei și/sau a drenajului slab al solului.
      </p>
      <p className="paragraph">
        Am plantat în total 18 puieți: 3 ardei iuți, 6 plante de roșii, 4 castraveti și 5 plante de ardei capia. Nu sunt neapărat așezați în rânduri, pentru că am vrut doar să acopăr zona centrală a grădinii.
      </p>

      <img src={require('../assets/images/board.jpg')} alt="Placă de bază" className="image-content" />
      <img src={require('../assets/images/board2.jpg')} alt="Placă de bază 2" className="image-content" />

      <p className="paragraph">Să trecem la revizuirea componentelor utilizate în acest scop.</p>
      <img src={require('../assets/images/esp.jpg')} alt="ESP32" className="image-content" />

      <p className="paragraph">
        <strong>ESP32</strong> este un microcontroller puternic și versatil, ideal pentru proiecte IoT. Dispune de Wi-Fi și Bluetooth integrate, multiple pini GPIO, suport pentru senzori și module externe, fiind perfect pentru automatizarea și monitorizarea inteligentă a grădinii.
      </p>

      <img src={require('../assets/images/sensors.jpg')} alt="Senzori" className="image-content" />

      <p className="paragraph">
        <strong>Senzorii capacitive de umiditate</strong> măsoară nivelul de apă din sol fără a coroda senzorul, oferind o citire precisă și stabilă. Trei astfel de senzori pot fi amplasați în diferite zone ale grădinii pentru a monitoriza uniform umiditatea solului și a optimiza irigația, economisind apă și menținând plantele sănătoase.
      </p>
       <img src={require('../assets/images/pumps.jpg')} alt="Pompe" className="image-content" />
{/*
      <p className="paragraph">Să trecem la revizuirea componentelor utilizate în acest scop.</p>
      <img src={require('../assets/images/esp.jpg')} alt="ESP32" className="image-content" /> */}

      <p className="paragraph">
        <strong>Pompe submersibile mici 3-6V</strong> sunt ideale pentru sisteme compacte de irigație sau circulație a apei în grădină. Aceste pompe electrice funcționează la tensiuni joase și pot livra un debit de aproximativ 3.7 litri pe minut, fiind eficiente pentru alimentarea cu apă a zonelor mici sau medii, fără consum mare de energie.
      </p>
      <img src={require('../assets/images/7.jpg')} alt="Imagine 7" className="image-content" />

      <p className="paragraph">Cabluri, plăci de conectare și plăci de prototipare</p>
      <img src={require('../assets/images/prototype.jpg')} alt="Prototip" className="image-content" />

      <p className="paragraph">Așa arată componentele conectate la controller</p>
      {/* <img src={require('../assets/images/9.jpg')} alt="Componente conectate" className="image-content" /> */}

      <div style={{ width: 600, height: 400, margin: "1rem auto", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/wjXp09_OUBE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block" }}
        ></iframe>
      </div>

      <p className="paragraph">Componentele în funcțiune</p>
      {/* <img src={require('../assets/images/9.jpg')} alt="Componente în funcțiune" className="image-content" /> */}

      <img src={require('../assets/images/cat.jpg')} alt="Pisică" className="image-content" />
      <img src={require('../assets/images/pepper.jpg')} alt="Ardei" className="image-content" />

      <p className="paragraph">Iată și primele rezultate ale muncii! :)</p>
      {/* <img src={require('../assets/images/12.jpg')} alt="Rezultate" className="image-content" /> */}

      <Link to="/technical" className='technical-link'>Informații Tehnice</Link>
    </main>
  );
}

export default MainContent;
