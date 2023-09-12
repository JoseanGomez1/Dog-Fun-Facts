import React, { useState, useEffect } from 'react';

function DogDropdown() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [dogImages, setDogImages] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of all the dogs
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

  useEffect(() => {
    // Fetch for both dog and dog data
    async function fetchData() {
      if (selectedBreed) {
        try {
          // Fetch for dog data
          const breedResponse = await fetch(
            `https://api.thedogapi.com/v1/breeds/${selectedBreed}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          if (!breedResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const breedData = await breedResponse.json();
          setDogData(breedData);

          // Fetch for dog images
          const imagesResponse = await fetch(
            `https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreed}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          if (!imagesResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const imagesData = await imagesResponse.json();
          setDogImages(imagesData);
        } catch (error) {
          setError(error.message);
        }
      }
    }

    fetchData();
  }, [selectedBreed]);

  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Select a Dog Breed:</h2>

      <select
        onChange={handleSelectChange}
        value={selectedBreed}
        className="border rounded p-2 shadow-md mb-4"
      >
        <option value="">Select a breed</option>
        {dogBreeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      {dogData && (
        <div>
          <h3 className="text-2xl font-semibold mb-2">{dogData.name}</h3>
          <p className="mb-2">
            Weight: {dogData.weight.imperial} (Imperial) - {dogData.weight.metric} (Metric)
          </p>
          <p className="mb-2">
            Height: {dogData.height.imperial} (Imperial) - {dogData.height.metric} (Metric)
          </p>
          <p className="mb-2">Life Span: {dogData.life_span}</p>
          <p className="mb-2">Bred For: {dogData.bred_for}</p>
          <p className="mb-2">Breed Group: {dogData.breed_group}</p>
        </div>
      )}
      {dogImages.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-2">Images of {dogData.name}:</h3>
          <div className="flex justify-center items-center">
            {dogImages.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={dogData.name}
                className="w-80 h-80 object-cover rounded-lg shadow-md m-2"
              />
            ))}
          </div>
        </div>
      )}
      {error && <div className="text-red-600">Error: {error}</div>}
    </div>
  );
}

export default DogDropdown;
