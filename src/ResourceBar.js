import React from 'react'

const resourceBar = ({setResource}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <button className='resourceBox' autoFocus onClick={() => setResource('users')}>users</button>
        <button className='resourceBox' onClick={() => setResource('posts')}>posts</button>
        <button className='resourceBox' onClick={() => setResource('comments')}>comments</button>
    </form>
  )
}   

export default resourceBar