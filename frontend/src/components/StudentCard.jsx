import React from 'react'

const StudentCard = ({ student }) => {
  return (
    <div>
      <p>{student?.name}</p>
      <p>{student?.age}</p>
    </div>
  )
}

export default StudentCard
