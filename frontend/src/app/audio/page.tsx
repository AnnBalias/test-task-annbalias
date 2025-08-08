'use client';

import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import css from './page.module.css';

export default function Page() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className={css.wrapper}>
      <h1 className="text-xl font-bold mb-4">Audio page</h1>

      <div style={{ width: 200, marginBottom: 20 }}>
        <DotLottieReact
          src="https://lottie.host/faa30c6f-9468-4a0d-8373-808167f6628a/I7hDsDEGmX.lottie"
          loop
          autoplay
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
      </button>
    </div>
  );
}
