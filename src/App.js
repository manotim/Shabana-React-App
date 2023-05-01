import './App.css'
import Header from './Components/Header'
import TeamsList from './Components/TeamsList'
import AddTeam from './Components/AddTeam'
import impfixtures from './data/teams'
import { useState } from 'react'
// console.log(impfixtures)

function App() {
  const [fixtures, setFixtures] = useState(impfixtures)

  function addTeam(fixture) {
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
