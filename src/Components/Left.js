import React from 'react'
import '../App.css';
function Left() {
  return (
    <div class="left">


            <a class="profile">
                <div class="profile-photo">
                    <img src="./images/profile-1.jpg"/>
                </div>
                <div class="handle">
                    <h4>Pranit Gaikwad</h4>
                        <p class="text-muted">
                            @pranit9876
                        </p>
                </div>
            </a>
      
         <div class="sidebar">
             <a class="menu-item active">
                 <span><i class="uil uil-home"></i></span><h3>Home</h3>
             </a>
             <a class="menu-item" id="explore">
                <span><i class="uil uil-compass"></i></span><h3>Explore</h3>
            </a>
            <a class="menu-item" id="notifications">
                <span><i class="uil uil-bell"><small class="notifiaction-count">8+</small></i></span><h3>Notificatios</h3>
        
                <div class="notifications-popup">

                    <div>
                        <div class="profile-photo">
                            <img src="images/profile-5.jpg"/>
                        </div>
                        <div class="notification-body">
                            <b>Neha Dubey</b> accepted your request
                            <small class="text-muted">2 DAYS AGO</small>
                        </div> 
                    </div>

                    <div>
                        <div class="profile-photo">
                            <img src="images/profile-2.jpg" alt=""/>
                        </div>
                        <div class="notification-body">
                            <b>jay</b> accepted your request
                            <small class="text-muted">2 DAYS AGO</small>
                        </div> 
                    </div>

                    <div>
                        <div class="profile-photo">
                            <img src="images/profile-3.jpg" alt=""/>
                        </div>
                        <div class="notification-body">
                            <b>Shreya</b> accepted your request
                            <small class="text-muted">3 DAYS AGO</small>
                        </div> 
                    </div>

                    <div>
                        <div class="profile-photo">
                            <img src="images/profile-4.jpg" alt=""/>
                        </div>
                        <div class="notification-body">
                            <b>Riya</b> accepted your request
                            <small class="text-muted">4 DAYS AGO</small>
                        </div> 
                    </div>

                    <div>
                        <div class="profile-photo">
                            <img src="images/profile-5.jpg"/>
                        </div>
                        <div class="notification-body">
                            <b>Nita</b> accepted your request
                            <small class="text-muted">5 DAYS AGO</small>
                        </div> 
                    </div>
                </div>

            </a>
            <a class="menu-item" id="messages-notifications">
                <span><i class="uil uil-envelope"><small class="notifiaction-count">6</small></i></span><h3>Messages</h3>
            </a>
            <a class="menu-item" id="bookmarks">
                <span><i class="uil uil-bookmark"></i></span><h3>Bookmarks</h3>
            </a>
            <a class="menu-item" id="insight">
                <span><i class="uil uil-lightbulb-alt"></i></span><h3>Insights</h3>
            </a>
            <a class="menu-item" id="theme">
                <span><i class="uil uil-palette"></i></span><h3>Themes</h3>
            </a>
            <a class="menu-item" id="settings">
                <span><i class="uil uil-setting"></i></span><h3>Settings</h3>
            </a>
         </div>
         <label for="create-post" class="btn btn-primary">Create Post</label>
</div> 
  )
}

export default Left