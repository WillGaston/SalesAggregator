"use client"

import Gallery from '../components/Gallery';
import { useState } from 'react';

export default function Home() {

  const [selectedType, setSelectedLanguage] = useState('');

  const handleLanguageFilter = (type: string) => {
    setSelectedLanguage(type !== selectedType ? type : '');
  };

  return (
        <div className = 'py-2 mx-auto text-center flex flex-col items-center text-xl'>
          <div className="space-x-4 py-4">
          <button
              onClick={() => handleLanguageFilter('Shirt')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Shirt' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Shirts
            </button>
            <button
              onClick={() => handleLanguageFilter('Pants')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Pants' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Pants/Jeans
            </button>
            <button
              onClick={() => handleLanguageFilter('Shorts')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Shorts' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Shorts
            </button>
            <button
              onClick={() => handleLanguageFilter('Fleece')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Fleece' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Fleece/Sweater
            </button>
            <button
              onClick={() => handleLanguageFilter('Jacket')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Jacket' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Jackets/Coats/Parkas
            </button>
            <button
              onClick={() => handleLanguageFilter('Other')}
              className={`py-2 px-4 font-bold rounded-full ${
                selectedType === 'Other' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
              } border border-gray-500 hover:bg-gray-100`}
            >
              Other
            </button>
          </div>
          <Gallery selectedType={selectedType}/>
        </div>
  );
}
