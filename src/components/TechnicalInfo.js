import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function TechnicalInfo() {
  const { t } = useTranslation();
  return (
    <main className="main-content">
      <h2>Informații Tehnice</h2>
      <p className="paragraph">
        {t('codesp')}
      </p>
          
      <img src={require('../assets/images/cod/esp.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">{t('general')}</p>
        <img src={require('../assets/images/cod/server.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">{t('fastapi')}</p>
      <img src={require('../assets/images/cod/kafka_cons.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">{t('kafka_consumer')}</p>
      <img src={require('../assets/images/cod/linechart.jpg')} alt="Solul la început" className="image-content" />
        <p className="paragraph">{t('linechart')}</p>
      <Link to="/eugen-blog">{t('startpage')}</Link>
    </main>
  );
}

export default TechnicalInfo;