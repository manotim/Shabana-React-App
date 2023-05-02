import './App.css'
import Header from './Components/Header'
import TeamsList from './Components/TeamsList'
import AddTeam from './Components/AddTeam'
// import impfixtures from './data/teams'
import { useState, useEffect } from 'react'
// console.log(impfixtures)

function App() {
  const [fixtures, setFixtures] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/fixtures')
      .then((res) => res.json())
      .then((data) => setFixtures(data))
  }, [])

  function addTeam(fixture) {
    fetch('http://localhost:3000/fixtures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(fixture),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    setFixtures((fixtures) => [...fixtures, fixture])
  }
  return (
    <div className='App'>
      <Header />
      <AddTeam addTeam={addTeam} />
      <TeamsList fixtures={fixtures} />
    </div>
  )
}

export default App
