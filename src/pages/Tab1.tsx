import React, { useRef, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import './Tab1.css';
import { book, personCircleOutline, reader, ribbon } from 'ionicons/icons';

const Tab1: React.FC<RouteComponentProps<{ youtubeLink?: string }>> = ({ match }) => {
  const { youtubeLink } = match.params;
  // Define a default value for youtubeLink if it's not provided
  const defaultYouTubeLink = "https://www.youtube.com/embed/_gHCz9-V7Bk";
  // Use optional chaining (?.) to handle the case where youtubeLink might be undefined
  const videoSrc = youtubeLink ? decodeURIComponent(youtubeLink) : defaultYouTubeLink;

  interface Lesson {
    name: string;
    youtubeLink: string;
  }

  const lessons: Lesson[] = [
    { name: 'Numbers', youtubeLink: 'https://www.youtube.com/embed/x6D51-pz2A4' },
    { name: 'Tables', youtubeLink: 'https://www.youtube.com/embed/another-video-id' },
    { name: 'Calculus', youtubeLink: 'https://www.youtube.com/embed/yet-another-video-id' },
    // Add more lessons with their respective YouTube links
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
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <iframe
                width="100%"
                height="315"
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IonCol>
          </IonRow>
          {/* Uncomment this section if you want to render buttons */}
          {/* <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={handlePlayVideo}>Play Video</IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>
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

export default Tab1;
