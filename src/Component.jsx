import react from 'react'
import ReactDOM from 'react-dom'

export default function Component(props){
  return (
    <div>
      <h1>Naam: {props.naam}</h1>
      <h2>Kaam: {props.kaam}</h2>
    </div>
  )
}