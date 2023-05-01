import React, { useState } from 'react'

function AddTeam({ addTeam }) {
  const [team, setTeam] = useState({})

  function handleChange(event) {
    let key = event.target.id
    setTeam((prevTeam) => {
      return { ...prevTeam, [key]: event.target.value }
    })
    console.log(team)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTeam(team)
  }
  return (
    <div>
      <form action='#' id='game-form' onSubmit={handleSubmit}>
        <legend>Create Friendly Match:</legend>
        <label htmlFor='name'>Team:</label>
        <input
          type='text'
          value={team.team}
          id='team'
          name='name'
          placeholder='Enter your favorite club name'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='name'>Club Logo Link:</label>
        <input
          type='text'
          name='image'
          value={team.logo}
          id='logo'
          placeholder="Enter your club's logo link"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='name'>Fixture Date:</label>
        <input
          type='text'
          name='day'
          value={team.date}
          id='date'
          placeholder='Enter Date'
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='name'>Kick-off:</label>
        <input
          type='text'
          name='time'
          value={team.kickoff}
          id='kickoff'
          placeholder='Enter Kick-off time'
          onChange={handleChange}
          required
        />
        <br />
        <button className='submit' type='submit'>
          Add To Fixtures
        </button>
      </form>
    </div>
  )
}

export default AddTeam
