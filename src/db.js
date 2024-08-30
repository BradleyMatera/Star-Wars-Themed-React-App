import { characterData, planetData } from './data.jsx'; // Ensure the correct file extension

export const fetchCharacterData = async () => {
  // Simulate an async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: characterData.map(character => character.name),
        datasets: [
          {
            label: 'Character Heights',
            data: characterData.map(character => character.height),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    }, 1000);
  });
};

export const fetchPlanetData = async () => {
  // Simulate an async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: planetData.map(planet => planet.name),
        datasets: [
          {
            label: 'Planet Populations',
            data: planetData.map(planet => planet.population),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      });
    }, 1000);
  });
};
export default { fetchCharacterData, fetchPlanetData };