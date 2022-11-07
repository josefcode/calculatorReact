import React from 'react'

export default function Button({name, id, value, onclick}) {
  return (
    <button id = {id} value = {value} onClick = {onclick}>{name}</button>
  )
}
