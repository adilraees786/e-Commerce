import { useSelector } from 'react-redux'
import React from 'react'

export const FilterData = () => {
const filterProducts = useSelector(state => state.product.FilterData)

  return (
    <div>FilterData</div>
  )
}
export default FilterData;
