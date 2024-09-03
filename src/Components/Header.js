import React from 'react'
import styled from 'styled-components';
import '../App.css';



function Header() {
  return (
    <div>
        <nav>
        <div class="container">
            <h2 class="log">
                SoCiaL
            </h2>
            <div class="search-bar">
                {/* <i class="uil uil-search"></i> */}
                <input type="search" placeholder="Search for post"/>
            </div>
            <div class="create">
            <label class="btn btn-primary" for="create post">create</label>
                <div class="profile-photo">
                    <img src="./images/profile-1.jpg"/>
                </div>

            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header
