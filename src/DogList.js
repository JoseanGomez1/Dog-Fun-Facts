// DogList.js
import React, { useState, useEffect } from 'react';

function DogList() {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of dog breeds
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
      } catch (error) {
        setError(error.message);
      }
    }

    fetchBreeds();
  }, []);

  return (
    <div>
      <h2>List of Dog Breeds:</h2>
      <ul>
        {dogBreeds.map((breed) => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default DogList;
