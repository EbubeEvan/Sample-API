import React from 'react'
import ObjectData from './ObjectData'

const Row = ({item}) => {
  return (
    <tr>
       {Object.entries(item).map(([key, value]) => (<ObjectData
                key = {key}
                value = {JSON.stringify(value)}
            />))} 
    </tr>
  )
}

export default Row