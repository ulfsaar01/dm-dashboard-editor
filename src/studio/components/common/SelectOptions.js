import React from 'react'
const categories = require('../../store/data/categories.json')

export const CategoryOptions = () => {
  if(!categories) return <></>
  if(categories === null) return <></>
  return (
    <>
      <option key="none" value="">none</option>
      {categories.map((item) => (
        <option key={item.value} value={item.value}>
        {item.name}
      </option>
      ))}
    </>
  )
}

export const SubcategoryOptions = ({catid}) => {
  if(!catid) return <option key="none" value="">none</option>
  if(catid === '') return <option key="none" value="">none</option>
  if(!categories) return <option key="none" value="">none</option>
  if(categories === null) return <option key="none" value="">none</option>

  const findex = categories.findIndex(x => x.value === catid)
  if(findex === -1) return <option key="none" value="">none</option>
  const sub = categories[findex].children
  return (
    <>
      <option key="none" value="">none</option>
      {sub.map((item) => (
        <option key={item.value} value={item.value}>
        {item.name}
      </option>
      ))}
    </>
  )
}
