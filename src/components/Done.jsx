import React from 'react'

const Done = ({compData}) => {
  return (
    <div>
        {compData.map((newData)=>(
            <p>{newData.text}</p>
        ))}
    </div>
  )
}

export default Done