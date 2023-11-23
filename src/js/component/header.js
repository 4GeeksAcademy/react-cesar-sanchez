import React from "react";


function Header(){
 return(
<div className="container-fluid w-100 ps-5 bg-warning pb-5 mt-1">
  <h1 className="display-4 d-flex justify-content-start fw-semibold">A Warm Welcome!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component.
  </p>
 
  <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
</div>
 
)

}

export default Header;