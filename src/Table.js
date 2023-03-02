import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='container'>
        <table>
        <tbody>
            {items.map((item) => (
                <Row
                item = {item}
                key = {item.id}
                />
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table