import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light" >
    <div className="container-fluid">
      <a class="navbar-brand" href="#">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          </ul>  
         
        
       { props.searchBar ? <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>:"hehe"}
      </div>
    </div>
  </nav>
      
  );
}


Header.propTypes = {
  title:PropTypes.string   //Identifying error is easy in the console datatype entey check is it correct
}