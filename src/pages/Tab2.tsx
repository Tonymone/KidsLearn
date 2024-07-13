import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonPage, IonHeader, IonToolbar, IonTitle, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { book, personCircleOutline, reader, ribbon } from 'ionicons/icons';

const Tab2: React.FC = () => {

  const subjects = [
    {
      "id": 1,
      "name": "Numbers",
      "lessons": [
        {
          "title": "Number Recognition",
          "youtubeLink": "https://www.youtube.com/embed/q6FK1ztCjig",
          "description": "Practice identifying numbers with interactive games and quizzes."
        },
        {
          "title": "Counting",
          "youtubeLink": "https://www.youtube.com/embed/hQSBGyWOjNs",
          "description": "Learn to count from 1 to 10 with fun animations and songs."
        },
        {
          "title": "Addition and Subtraction",
          "youtubeLink": "https://www.youtube.com/embed/igcoDFokKzU",
          "description": "Introduction to basic addition and subtraction concepts through visual examples."
        }
      ]
    },
    {
      "id": 2,
      "name": "Alphabets",
      "lessons": [
        {
          "title": "Letter Recognition",
          "youtubeLink": "https://www.youtube.com/embed/RiYzD1h-YVQ",
          "description": "Learn to recognize uppercase and lowercase letters through colorful illustrations."
        },
        {
          "title": "Phonics",
          "youtubeLink": "https://www.youtube.com/embed/h4FjjPneNw8",
          "description": "Introduction to letter sounds and phonetic pronunciation with interactive activities."
        },
        {
          "title": "Writing Practice",
          "youtubeLink": "https://www.youtube.com/embed/C7oebqj3PCY",
          "description": "Practice writing letters with guided tracing exercises and writing games."
        },
      ]
    }
  ]

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
        {subjects.map(subject => (
          <div>
            <IonCardHeader>
              <IonCardTitle>{subject.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {subject.lessons.map(lesson => (
                <IonCard>
                  <iframe
                    width="100%"
                    height="310"
                    src={lesson.youtubeLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  >
                  </iframe>
                  <IonCardHeader>
                    <IonCardTitle>{lesson.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {lesson.description}
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCardContent>
          </div>
        ))}
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

export default Tab2;
