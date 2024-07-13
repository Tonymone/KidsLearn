import React from 'react';
import './Login.css';

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonIcon, IonButton } from '@ionic/react';
import { arrowForwardOutline, person } from 'ionicons/icons';

const ResetPassword: React.FC = () => {

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

                <div className="header">
                    <p className="title">Enter your email</p>
                    <p className="subTitle">Please enter your email address to reset the password</p>
                </div>

                <form className="ion-padding">
                    <IonItem>
                        <IonInput placeholder="example@gmail.com"></IonInput>
                        <IonIcon icon={person} slot="start"></IonIcon>
                    </IonItem>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <IonButton className="ion-margin">Continue<IonIcon icon={arrowForwardOutline}></IonIcon></IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default ResetPassword;
