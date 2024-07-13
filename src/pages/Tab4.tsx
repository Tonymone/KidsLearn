import './Tab4.css'
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonButton,
  IonIcon,
  IonBadge,
  IonRouterLink,
  IonTabBar,
  IonTabButton
} from '@ionic/react';
import { personCircleOutline, logOutOutline, book, reader, ribbon } from 'ionicons/icons';

const Tab4: React.FC = () => {
  const [name, setName] = useState('Tony Thomas');
  const [level, setLevel] = useState(5);
  const [rating, setRating] = useState(4.5);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="medium">
          <IonTitle style={{ fontSize: "34px", letterSpacing: '3px' }}>
            <span style={{ color: '#FF5733' }}>K</span>
            <span style={{ color: '#FFC300' }}>i</span>
            <span style={{ color: '#DAF7A6' }}>d</span>
            <span style={{ color: 'crimson' }}>d</span>
            <span style={{ color: 'yellow' }}>o</span>
            <span style={{ color: '#40E0D0' }}>L</span>
            <span style={{ color: '#FF00FF' }}>e</span>
            <span style={{ color: '#7DF9FF' }}>a</span>
            <span style={{ color: '#F39C12' }}>r</span>
            <span style={{ color: '#32CD32' }}>n</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className='shapedividers_com-9987'>
          <div style={{ textAlign: 'center', marginTop: '150px' }}>
            <img src="https://st.depositphotos.com/1052233/2815/v/600/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg" alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', zIndex: 22, objectFit: 'cover' }} />
            <h2 style={{ marginTop: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</h2>
            <IonBadge color="success" style={{ fontSize: '0.9rem', marginTop: '10px' }}>Level {level}</IonBadge>
            <IonBadge color="primary" style={{ fontSize: '0.9rem', marginLeft: '0.5rem', marginTop: '10px' }}>Rating: {rating}</IonBadge>
          </div>
          <IonList style={{ marginTop: '20px', backgroundColor: "rgba(41,223,221,0.01)" }} className='ion-padding'>
            <IonRouterLink routerLink="../Login">
              <IonButton expand="block" color="danger" style={{ marginTop: '0.5rem' }}>
                <IonIcon icon={logOutOutline} slot="start" />
                Logout
              </IonButton>
            </IonRouterLink>
          </IonList>
        </div>

      </IonContent>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon aria-hidden="true" icon={book} />
          <IonLabel>Lessons</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab5" href="/tab5">
          <IonIcon aria-hidden="true" icon={reader} />
          <IonLabel>Quiz</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon aria-hidden="true" icon={ribbon} />
          <IonLabel>Leader Board</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/tab4">
          <IonIcon aria-hidden="true" icon={personCircleOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Tab4;