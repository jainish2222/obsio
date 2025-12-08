import React from 'react'
import { useParams } from 'react-router-dom'
const WorkCommon = () => {
  const {id} = useParams();
  return (
    <div>WorkCommon:{id}</div>
  )
}

export default WorkCommon