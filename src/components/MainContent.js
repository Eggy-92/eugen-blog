import React from 'react';
import '../css/MainContent.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function MainContent() {
    const { t } = useTranslation();
  return (
    <main className='main-content'>
      <h2>{t('greeting')}</h2>
<p
  className="paragraph"
  dangerouslySetInnerHTML={{ __html: t('project_intro') }}
/>

      <p className="paragraph">{t('initial')}</p>
      <img src={require('../assets/images/crop.jpg')} alt="Solul la început" className="image-content" />

      <p className="paragraph">
        {t('soil_condition')}
      </p>
      <p className="paragraph">
        {t('plants')}
      </p>

      <img src={require('../assets/images/board.jpg')} alt="Placă de bază" className="image-content" />
      <img src={require('../assets/images/board2.jpg')} alt="Placă de bază 2" className="image-content" />

      <p className="paragraph">{t('components1')}</p>
      <img src={require('../assets/images/esp.jpg')} alt="ESP32" className="image-content" />

      <p className="paragraph">
        {t('microcontroller')}
      </p>

      <img src={require('../assets/images/sensors.jpg')} alt="Senzori" className="image-content" />

      <p className="paragraph">
        {t('sensors')}
      </p>
      <img src={require('../assets/images/pumps.jpg')} alt="Pompe" className="image-content" />


      <p className="paragraph">
        {t('pumps')}
      </p>
      <img src={require('../assets/images/7.jpg')} alt="Imagine 7" className="image-content" />

      <p className="paragraph">{t('components2')}</p>
      <img src={require('../assets/images/prototype.jpg')} alt="Prototip" className="image-content" />

      <p className="paragraph">{t('connected')}</p>
      

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

      <p className="paragraph">{t('function')}</p>
      {/* <img src={require('../assets/images/9.jpg')} alt="Componente în funcțiune" className="image-content" /> */}

      <img src={require('../assets/images/cat.jpg')} alt="Pisică" className="image-content" />
      <img src={require('../assets/images/pepper.jpg')} alt="Ardei" className="image-content" />

      <p className="paragraph">{t('results')}</p>
      {/* <img src={require('../assets/images/12.jpg')} alt="Rezultate" className="image-content" /> */}

      <Link to="/technical" className='technical-link'>{t('tech_data')}</Link>
    </main>
  );
}

export default MainContent;
