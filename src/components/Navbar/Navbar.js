import React, { useContext } from "react";
import userContext from '../utils/Context';
import '../Navbar/nav.css'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const context = useContext(userContext)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <div class="navbar-brand">Employee Directory</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => context.handleSearchChange(e)}/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
  </nav>
);
}

export default Navbar;
