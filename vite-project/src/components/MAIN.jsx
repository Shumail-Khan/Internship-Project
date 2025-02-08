import React, { useEffect, useState } from 'react';

const MAIN = () => {
    const [text, setText] = useState('a Technical Problem Solver');
    const texts = ['a Technical Problem Solver', 'an Innovative Thinker', 'a Creative Developer'];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setText(texts[index]);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval
    }, []);

    return (
        <>
            <div className='h-full w-full flex'>
                <div className='max-h-full w-1/2 bg-gray-900 p-12'>
                    <h3 className='text-2xl px-8 mt-30 text-gray-400'>SHOWCASING MY JOURNEY IN CODE</h3>
                    <h1 className='text-6xl font-bold px-8 mt-5 text-white'>Hi, I'm <span className='text-red-400'>Essa</span></h1>
                    <h2 className='text-4xl px-8 mt-8 font-bold text-white'>{text}</h2>
                    <p className=' mx-7 mt-7 text-gray-400'>
                        As a passionate developer, I craft engaging digital experiences with clean, efficient code. My focus is on delivering innovative solutions that bring ideas to life, ensuring every interaction feels seamless and impactful.
                    </p>
                    <div className='flex gap-40 px-8 mt-5'>
                        <div>
                            <h1 className='text-white text-xl'>FIND ME IN</h1>
                            <div className='flex gap-4 mt-4'>
                                <div className='h-12 w-15 bg-gray-950 rounded-xl flex items-center justify-center'>
                                    <img className='w-6 h-6' src="/images/gmail.png" alt="Instagram" />
                                </div>
                                <div className='h-12 w-15 bg-gray-950 rounded-xl flex items-center justify-center'>
                                    <img src='https://img.icons8.com/color/48/000000/github--v1.png' alt="GitHub" />
                                </div>
                                <div className='h-12 w-15 bg-gray-950 rounded-xl flex items-center justify-center'>
                                    <img className='w-6 h-6' src="/images/linkedin.png" alt="LinkedIn" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white text-xl'>BEST SKILL ON</h1>
                            <div className='flex gap-4 mt-4'>
                                <div className='h-12 w-15 bg-red-600 rounded-xl flex items-center justify-center'>
                                    <img className='w-6 h-6' src="/images/physics.png" alt="React" />
                                </div>
                                <div className='h-12 w-15 bg-green-600 rounded-xl flex items-center justify-center'>
                                    <img className='w-6 h-6' src="/images/java-script.png" alt="Node.js" />
                                </div>
                                <div className='h-12 w-15 bg-yellow-600 rounded-xl flex items-center justify-center'>
                                    <img className='w-6 h-6' src="/images/database.png" alt="MongoDB" />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-900 w-1/2 px-28 flex items-center justify-center'>
                    <img className='max-h-full rounded-full' src="/images/newlogo.c3da7b994fe417607185.png" alt="Profile" />
                </div>
            </div>
        </>
    );
};

export default MAIN;