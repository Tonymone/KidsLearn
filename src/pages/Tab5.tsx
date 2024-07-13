import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol, IonLabel, IonRadioGroup, IonRadio, IonCard, IonCardContent, IonAlert, IonHeader, IonToolbar, IonTitle, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { book, personCircleOutline, reader, ribbon } from 'ionicons/icons';
import './Tab5.css';

const Tab5: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions] = useState<string[]>([
    'What letter comes after "A" in the alphabet?',
    'Which letter makes the "mmm" sound like in "Monkey"?',
    'What is the last letter of the alphabet?',
    'Which letter is missing in the sequence: A, B, C, _, E?',
    'Which letter is not a vowel?'
  ]);
  const [options] = useState<string[][]>([
    ['B', 'C', 'K', 'T'],
    ['M', 'P', 'S', 'T'],
    ['B', 'J', 'L', 'Z'],
    ['R', 'D', 'O', 'Q'],
    ['S', 'A', 'E', 'I']
  ]);
  const [correctAnswers] = useState<number[]>([0, 0, 3, 1, 0]); // Index of correct options for each question
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showReviewAlert, setShowReviewAlert] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [reviewMessage, setReviewMessage] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(40); // Initial timer set to 60 seconds
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [quizStarted, setQuizStarted] = useState<boolean>(false); // State to track whether the quiz has started

  const startQuiz = () => {
    setQuizStarted(true); // Start the quiz
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleQuizCompletion();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer); // Clear the timer when component unmounts
    };
  }, [timer]);

  const handleOptionChange = (event: CustomEvent) => {
    const selectedOption = parseInt(event.detail.value, 10);
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = selectedOption;
    setSelectedOptions(updatedSelectedOptions);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      handleQuizCompletion();
    }
  };

  const handleQuizCompletion = () => {
    const newScore = selectedOptions.reduce((acc, option, index) => {
      if (option === correctAnswers[index]) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(newScore);
    setShowAlert(true);
    console.log("handleQuizCompletion on fire 🔥");
  };

  const chacha = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
      console.log("Chacha on fire 🔥");
    }
  };

  const reviewQuestions = () => {
    // Prepare review of answered questions
    const review = questions.map((question, index) => {
      const correctOption = options[index][correctAnswers[index]];
      const userAnswer = options[index][selectedOptions[index]];
      const isCorrect = correctAnswers[index] === selectedOptions[index];
      return { questionIndex: index + 1, question, correctOption, userAnswer, isCorrect };
    });
    return review;
  };

  const handleSubmit = () => {
    handleQuizCompletion();
    chacha(); // Stop the timer
  };

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
        {!quizStarted && ( // Render the "Start Quiz" button if the quiz has not started
          <div className='div1'>
            <h2>Are you ready for the quiz? </h2>
            <IonButton onClick={startQuiz}>Start Quiz</IonButton>
          </div>
        )}
        {quizStarted && ( // Render the quiz content if the quiz has started
          <>
            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-center">
                  <h1>{questions[questionIndex]}</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonRadioGroup value={selectedOptions[questionIndex]} onIonChange={handleOptionChange}>
                    {options[questionIndex].map((option, index) => (
                      <IonCard key={index} color={selectedOptions[questionIndex] === index ? "primary" : "secondary"}>
                        <IonCardContent className="ion-text-center">
                          <IonRadio slot="start" value={index} />
                          <IonLabel>{option}</IonLabel>
                        </IonCardContent>
                      </IonCard>
                    ))}
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  {questionIndex === questions.length - 1 ? (
                    <IonButton onClick={handleSubmit}>Submit</IonButton>
                  ) : (
                    <IonButton onClick={nextQuestion}>Next Question</IonButton>
                  )}
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonLabel>Time Left: {timeLeft} seconds</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        )}
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Quiz Result"
        message={`Your score: ${score}/5`}
        buttons={[
          {
            text: 'Review Questions',
            handler: () => {
              const review = reviewQuestions();
              const reviewMessage = review.map((item, index) => {
                return `Question ${item.questionIndex}: Correct answer - ${item.correctOption}, Your answer - ${item.userAnswer}`;
              }).join('\n');
              setShowAlert(false);
              setShowReviewAlert(true);
              setReviewMessage(reviewMessage);
            }
          }
        ]}
      />

      <IonAlert
        isOpen={showReviewAlert}
        onDidDismiss={() => setShowReviewAlert(false)}
        header="Review Answers"
        message={reviewMessage}
        buttons={['OK']}
      />
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

export default Tab5;
