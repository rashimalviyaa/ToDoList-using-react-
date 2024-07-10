import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link> 
        </li>
       
       
      </ul>
      {props.searchBar ? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:""}
    </div>
  </div>
</nav>  
       
    )
}
Header.defaultProps ={
    title:"Your title here",// if app.js mai title is not specified for any component and we have used prop.title somewhere, then title ki jagah ye ajayega
    searchBar: false// if app.js mai searchbar isnt defined for any component
}
 Header.propTypes={
    title:PropTypes.string, //its a object so there will be no semicolon
    searchBar:PropTypes.bool.isRequired //isRequired will show an error if the search bar is not shown because its made required by the one who wrote this code
 }
//proptype pass karne se we have said ki jo title hoga it SHOULD be a string, we can also pass other datatype but then it will show error while inspecting, it will be easier to catch bugs