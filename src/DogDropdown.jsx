import React, { useState, useEffect } from 'react';

function DogDropdown() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [dogImages, setDogImages] = useState([]);
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

  useEffect(() => {
    // Fetch the selected dog breed data and images
    async function fetchData() {
      if (selectedBreed) {
        try {
          // Fetch breed data
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

          // Fetch dog images for the selected breed
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
    <div>
      <h2>Select a Dog Breed:</h2>
      <select onChange={handleSelectChange} value={selectedBreed}>
        <option value="">Select a breed</option>
        {dogBreeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {dogData && (
        <div>
          <h3>{dogData.name}</h3>
          <p>Weight: {dogData.weight.imperial} (Imperial) - {dogData.weight.metric} (Metric)</p>
          <p>Height: {dogData.height.imperial} (Imperial) - {dogData.height.metric} (Metric)</p>
          <p>Life Span: {dogData.life_span}</p>
          <p>Bred For: {dogData.bred_for}</p>
          <p>Breed Group: {dogData.breed_group}</p>
        </div>
      )}
      {dogImages.length > 0 && (
        <div>
          <h3>Images of {dogData.name}:</h3>
          <div className="dog-images">
            {dogImages.map((image) => (
              <img key={image.id} src={image.url} alt={dogData.name} />
            ))}
          </div>
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default DogDropdown;
