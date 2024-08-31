import React from 'react'
import ubaid from '../components/image/ubaid.jpg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="card" style={{width: '100%'}}>
  <img src={ubaid} className="card-img-top" style={{width:'12%'}} alt="..." />
  <div className="card-body">
    <h5 className="card-title">Todo App</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Todo-List</li>
    <li className="list-group-item">Using React</li>
  </ul>
  <div className="card-body">
    <NavLink to='/' className="card-link">Todo App</NavLink>
    <NavLink to='https://github.com/Ubaid-Ullah-tech/TodoApp-Using-MERN-Stack' target='_blank' className="card-link">See Code On Github</NavLink>
    <NavLink  to='/About'  className="card-link">About</NavLink>
      
  </div>
</div>
    </div>
  )
}

export default Footer
