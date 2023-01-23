import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Strategy: React.FC = () => {
  return (
    <Fragment>
      <h1>Strategy</h1>
      <NavLink className='btn btn-primary' to="/create-strategy">Create Strategy</NavLink>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        possimus doloribus error cumque autem asperiores, ullam deserunt quidem
        omnis doloremque itaque eius eaque sint facilis unde tenetur reiciendis
        aliquam soluta?
      </p>
    </Fragment>
  )
}
