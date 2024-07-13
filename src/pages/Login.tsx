import React from 'react';
import './Login.css';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonIcon, IonButton, IonRouterLink } from '@ionic/react';
import { arrowForward, lockClosed, person } from 'ionicons/icons';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
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
          <div className="header">
            <img style={{ borderRadius: "50%", height: "100px" }} src="https://static.vecteezy.com/system/resources/previews/000/574/215/original/vector-sign-of-user-icon.jpg" alt="" />
            <p className="title">Login</p>
            <p className="subTitle">Log into your account so you can manage your college curriculum</p>
          </div>

          <form>
            <div className="ion-padding">
              <IonItem>
                <IonInput placeholder="Enter your username"></IonInput>
                <IonIcon icon={person} slot="start"></IonIcon>
              </IonItem>
              <IonItem>
                <IonInput placeholder="Enter your password"></IonInput>
                <IonIcon icon={lockClosed} slot="start"></IonIcon>
              </IonItem>
              <div className="forgotPassword">
                <IonRouterLink routerLink="../reset-password"  style={{color: "yellow"}}>Forgot Password</IonRouterLink>

              </div>
              <div>
                <p>New Member? <IonRouterLink routerLink="../register"  style={{color: "yellow"}}>Register</IonRouterLink></p>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <IonButton className="ion-margin" href="/tab2">Login<IonIcon icon={arrowForward}></IonIcon></IonButton>
              </div>
            </div>
          </form>

        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
