import React from 'react'
import '../Styles/Button.scss'

export const Button = ({content,icon="",color='blue'}) => {
  return (
    <button className={`${color}`}>
        {content}  {icon}
    </button>
  )
}
