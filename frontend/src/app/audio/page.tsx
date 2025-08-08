'use client';

import React, { useState } from 'react';
// import Lottie from "lottie-react";
// import microphoneAnimation from "./groovyWalk.json";
import css from "./page.module.css";

export default function Page() {
  // const [isRecording, setIsRecording] = useState(false);

  // const toggleRecording = () => {
  //   setIsRecording(prev => !prev);
  // };

  return (
    <div className={css.wrapper}>
      <h1 className="text-xl font-bold mb-4">Audio page</h1>

      {/* <div style={{ width: 200, marginBottom: 20 }}>
        <Lottie
          animationData={microphoneAnimation}
          loop={true}
          autoplay={isRecording}
        />
      </div> 

      <button
        onClick={toggleRecording}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isRecording ? 'red' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {isRecording ? 'Завершити розмову' : 'Почати розмову'}
      </button> */}
    </div>
  );
}