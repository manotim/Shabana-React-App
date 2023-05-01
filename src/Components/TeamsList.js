import React from 'react'
import TeamItem from './TeamItem'

function TeamsList({ fixtures }) {
  console.log(fixtures)
  const [firstTeam, secondTeam] = fixtures
  return (
    <div className='matches'>
      {fixtures.map((fixture) => (
        <TeamItem {...fixture} key={fixture.id} />
      ))}
    </div>
  )
}

export default TeamsList
