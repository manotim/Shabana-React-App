import React from 'react'

function TeamItem({ team, logo, date, kickoff, attendance }) {
  return (
    <div className='ticket-details'>
      <div className='tickets'>
        <div className='ticket-details'>
          <div className='ticket-card'>
            <h2>
              <strong>VS</strong> <span>{team}</span>
            </h2>
            <img src={logo} alt='Black Stars' />
            <br></br>
            <h4>
              {date} <em>{kickoff}</em>
            </h4>
          </div>
          <h5 id='commit${game.id}'>{attendance} fans will attend!</h5>
          <button
            id='commit-btn${game.id}'
            className='btn'
            data-id='${game.id}'
          >
            Commit to Attend
          </button>
        </div>
        <button className='btn' id='delete${game.id}'>
          Remove Ticket
        </button>
      </div>
      TeamItem
    </div>
  )
}

export default TeamItem
