import { useParams } from 'react-router-dom'
import React from 'react'

export default function ProductDetails(){
    const {id} = useParams();
  return (
    <div>ProductDetails</div>
  )
}
