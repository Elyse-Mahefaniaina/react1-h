import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8089/nba';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur de récupération des données:', error);
      });
  }, []);

  return (
    <div className="App">
      <header id='head'>
        <span>NBA STAT</span>
      </header>
      <table>
        <thead>
          <tr>
            <th>CLASSEMENT</th>
            <th>JOUEUR</th>
            <th>ÉQUIPE</th>
            <th>M</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>EFF</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>%LF</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.classement}</td>
              <td>{item.nomJoueur} {item.prenoomJoueur}</td>
              <td>{item.nomEquipe}</td>
              <td>{item.m}</td>
              <td>{item.mj}</td>
              <td>{item.ppm}</td>
              <td>{item.rpm}</td>
              <td>{item.pdpm}</td>
              <td>{item.mpm}</td>
              <td>{item.eff}</td>
              <td>{item.fg}</td>
              <td>{item.threeP}</td>
              <td>{item.ft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
