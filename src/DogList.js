import React, { useState, useEffect } from 'react';

function DogList() {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [error, setError] = useState(null);
  const [randomBreeds, setRandomBreeds] = useState([]);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogBreeds(data);

        // Select 6 random dog breeds
        const randomIndexes = [];
        while (randomIndexes.length < 6) {
          const randomIndex = Math.floor(Math.random() * data.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
        const randomBreeds = randomIndexes.map((index) => data[index]);
        setRandomBreeds(randomBreeds);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchBreeds();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Suggested Dogs:</h2>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        {randomBreeds.map((breed) => (
          <li key={breed.id}>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              {breed.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;


