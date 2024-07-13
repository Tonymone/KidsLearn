import React from 'react';
import { IonContent, IonList, IonItem, IonAvatar, IonLabel, IonBadge, IonPage, IonHeader, IonToolbar, IonTitle, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { book, personCircleOutline, reader, ribbon } from 'ionicons/icons';

const Tab3: React.FC = () => {
  const leaderboardData = [
    { name: 'Sachin', level: 5, score: 10450 },
    { name: 'Habibulla', level: 5, score: 9680 },
    { name: 'Qais', level: 5, score: 8660 },
    { name: 'Lolit', level: 5, score: 8550 },
    { name: 'Pratham', level: 5, score: 7420 },
    { name: 'Aayush', level: 5, score: 7410 },
    { name: 'British', level: 4, score: 6980 },
    { name: 'Mantri', level: 4, score: 6660 },
    { name: 'Sourav', level: 4, score: 6550 },
    { name: 'Aaditya', level: 4, score: 5420 },
    { name: 'Lallan Don', level: 3, score: 4460 },
    { name: 'Rajiv', level: 3, score: 4200 },
    { name: 'Harshil Kanakia', level: 3, score: 3360 },
    { name: 'Aadinath', level: 3, score: 2250 },
    { name: 'Vivek', level: 2, score: 2100 },
  ];

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
        <IonList style={{ background: "radial-gradient(circle, rgba(189,4,255,1) 0%, rgba(41,223,221,1) 100%)" }} >
          {leaderboardData.map((user, index) => (
            <IonItem key={index} lines="full" style={{ backgroundColor: 'white', margin: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <IonAvatar slot="start">
                <img src={`https://picsum.photos/200/300?id=${index}`} alt="User Avatar" style={{ borderRadius: '50%' }} />
              </IonAvatar>
              <IonLabel style={{ marginLeft: '10px' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px' }}>{user.name}</h2>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Level {user.level}</p>
              </IonLabel>
              <IonBadge color="warning" style={{ fontSize: '0.9rem' }}>{user.score}</IonBadge>
            </IonItem>
          ))}
        </IonList>
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

export default Tab3;
