import React, { useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import './SplashScreen.css'; // Import CSS file for custom styling

const SplashScreen: React.FC = () => {
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      window.location.replace('/tab2'); // Assuming '/main' is your main page route
    }, 8000);
  }, []);

  return (
    <IonPage>
      <IonContent className="splash-content">

        <div className='div2'>
          <div className="background-container">
            <div className="background-animation">
            </div> 
          </div>

          <div className="kiddo-learn">
            <span style={{ color: '#FF5733' }}>K</span>
            <span style={{ color: '#FFC300' }}>i</span>
            <span style={{ color: '#DAF7A6' }}>d</span>
            <span style={{ color: 'crimson' }}>d</span>
            <span style={{ color: 'yellow' }}>o</span>
            <span style={{ color: '#6f47fe' }}>L</span>
            <span style={{ color: '#FF00FF' }}>e</span>
            <span style={{ color: '#7DF9FF' }}>a</span>
            <span style={{ color: '#F39C12' }}>r</span>
            <span style={{ color: '#00ff00' }}>n</span>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
