import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

/*
 * Additional concepts:
 * 
 * Example of JS destructuring:
 * const { name, height } = character;
 * Here, 'name' and 'height' are extracted from the 'character' object.
 * 
 * React hooks will not work inside class components. Hooks can only be used in functional components.
 * 
 * setState() is a function that schedules an update to a component's state object. 
 * When state changes, the component responds by re-rendering.
 */

// Define a styled container for the Dashboard
const DashboardContainer = styled.div`
  padding: 20px;
  color: #ffd700;
  background-color: #000;
  border-radius: 10px;
`;

/*
 * React Hooks are functions that let you use state and other React features in functional components.
 * Hooks are a new addition in React 16.8. They simplify the process of managing state and side effects in React applications,
 * allowing you to write cleaner and more maintainable code.
 */

const Dashboard = () => {
  /*
   * useState is a Hook that allows you to add state to functional components.
   * It returns an array with two elements: the current state value and a function to update it.
   * Example: const [count, setCount] = useState(0);
   * Here, 'count' is the state variable, and 'setCount' is the function to update 'count'.
   */
  const [characterData, setCharacterData] = useState([]);
  const [planetData, setPlanetData] = useState([]);
  const [characterChartData, setCharacterChartData] = useState([]);
  const [planetChartData, setPlanetChartData] = useState([]);

  /*
   * useEffect is a Hook that lets you perform side effects in functional components.
   * It runs after every render by default, but you can control its execution by providing dependencies.
   * Example: useEffect(() => { document.title = `You clicked ${count} times`; }, [count]);
   * Here, the effect runs only when 'count' changes.
   */
  useEffect(() => {
    // Fetch character data from SWAPI
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacterData(data.results);
      } catch (error) {
        console.error("Error fetching character data: ", error);
      }
    };

    // Fetch planet data from SWAPI
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/planets/');
        const data = await response.json();
        setPlanetData(data.results);
      } catch (error) {
        console.error("Error fetching planet data: ", error);
      }
    };

    fetchCharacters();
    fetchPlanets();
  }, []); // The effect runs only once when the component mounts.

  useEffect(() => {
    if (characterData.length > 0) {
      const charData = characterData.map(char => ({
        name: char.name,
        height: parseInt(char.height) || 0,
      }));
      setCharacterChartData(charData);
    }
  }, [characterData]); // The effect runs only when 'characterData' changes.

  useEffect(() => {
    if (planetData.length > 0) {
      const planetsData = planetData.map(planet => ({
        name: planet.name,
        population: parseInt(planet.population) || 0,
      }));
      setPlanetChartData(planetsData);
    }
  }, [planetData]); // The effect runs only when 'planetData' changes.

  // Data for the character height bar chart
  const characterHeightData = {
    labels: characterChartData.map(char => char.name),
    datasets: [
      {
        label: 'Character Heights',
        data: characterChartData.map(char => char.height),
        backgroundColor: '#8884d8',
      },
    ],
  };

  // Data for the planet population line chart
  const planetPopulationData = {
    labels: planetChartData.map(planet => planet.name),
    datasets: [
      {
        label: 'Planet Populations',
        data: planetChartData.map(planet => planet.population),
        borderColor: '#82ca9d',
        fill: false,
      },
    ],
  };

  /*
   * Explanation of issues and solutions:
   * 
   * 1. We initially used Recharts but faced warnings and issues with XAxis and YAxis components regarding defaultProps.
   * 2. Switching to Chart.js (via react-chartjs-2) to avoid these issues since Chart.js provides more flexibility and a modern API.
   * 3. Handling the "Canvas is already in use" error by ensuring unique chart instances and proper cleanup if needed.
   * 4. Implemented warning suppressors for specific React warnings related to chart components during development.
   */

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="charts">
        <div className="chart">
          <h2>Character Heights</h2>
          {characterChartData.length > 0 ? <Bar data={characterHeightData} /> : <p>Loading character data...</p>}
        </div>
        <div className="chart">
          <h2>Planet Populations</h2>
          {planetChartData.length > 0 ? <Line data={planetPopulationData} /> : <p>Loading planet data...</p>}
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;