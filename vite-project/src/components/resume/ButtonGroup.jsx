import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Achievements from './Achievements';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experiance';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('Education'); // Default to Education

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='flex flex-col h-full w-full bg-gray-900 sticky top-0 p-8'>
      <h3 className='text-2xl text-center mt-6 text-red-600'>3 + YEARS OF EXPERIENCE</h3>
      <h1 className='text-center text-7xl mt-4 text-white font-bold'>My Resume</h1>
      <div className='flex mt-16 items-start justify-center gap-4'>
        <button
          className={`bg-gray-950 w-[450px] h-12 text-white text-2xl rounded-sm hover:bg-gray-800 transition duration-300 ${activeButton === 'Education' ? 'border-4 border-red-500' : ''}`}
          onClick={() => handleButtonClick('Education')}
          aria-pressed={activeButton === 'Education'}
        >
          Education
        </button>
        <button
          className={`bg-gray-950 w-[450px] h-12 text-white text-2xl rounded-sm hover:bg-gray-800 transition duration-300 ${activeButton === 'Professional Skills' ? 'border-4 border-red-500' : ''}`}
          onClick={() => handleButtonClick('Professional Skills')}
          aria-pressed={activeButton === 'Professional Skills'}
        >
          Professional Skills
        </button>
        <button
          className={`bg-gray-950 w-[450px] h-12 text-white text-2xl rounded-sm hover:bg-gray-800 transition duration-300 ${activeButton === 'Experience' ? 'border-4 border-red-500' : ''}`}
          onClick={() => handleButtonClick('Experience')}
          aria-pressed={activeButton === 'Experience'}
        >
          Experience
        </button>
        <button
          className={`bg-gray-950 w-[450px] h-12 text-white text-2xl rounded-sm hover:bg-gray-800 transition duration-300 ${activeButton === 'Achievements' ? 'border-4 border-red-500' : ''}`}
          onClick={() => handleButtonClick('Achievements')}
          aria-pressed={activeButton === 'Achievements'}
        >
          Achievements
        </button>
      </div>

      <div className='mt-8'>
        <TransitionGroup>
          <CSSTransition
            key={activeButton}
            timeout={300}
            classNames="fade"
          >
            <div>
              {activeButton === 'Education' && <Education />}
              {activeButton === 'Professional Skills' && <Skills />}
              {activeButton === 'Experience' && <Experience />}
              {activeButton === 'Achievements' && <Achievements />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <style jsx>{`
        .fade-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .fade-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 300ms, transform 300ms;
        }
        .fade-exit {
          opacity: 1;
          transform: scale(1);
        }
        .fade-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </div>
  );
};

export default ButtonGroup;