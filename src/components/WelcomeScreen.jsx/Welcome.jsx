import React from 'react';
import './Welcome.scss';

function Welcome() {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1>Добро пожаловать!</h1>
        <p>Это моя анкета</p>
      </div>
    </div>
  );
}

export default Welcome;