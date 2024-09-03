import React from 'react'

function Right() {
  return (
    <div class="right">
    <div class="messages">
        <div class="heading">
            <h4>Messages</h4><i class="uil uil-edit"></i>
        </div>
        <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Search messages" id="message-search" />
        </div>
   
        <div class="category">
            <h6 class="active">Primary</h6>
            <h6>General</h6>
            <h6 class="messsage-requests">Requests(7)</h6>
        </div>
     


        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-17.jpg"/>
            </div>
            <div class="message-body">
                <h5>Suha Shukla</h5>
                <p class="text-muted">Hmmmm</p>
            </div>
        </div>

        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-11.jpg"/>
            </div>
            <div class="message-body">
                <h5>Vishal Rite</h5>
                <p class="text-muted">No it's not</p>
            </div>
        </div>


        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-12.jpg"/>
                <div class="active"></div>
            </div>
            <div class="message-body">
                <h5>Namrata</h5>
                <p class="text-muted">Ho</p>
            </div>
        </div>


        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-22.jpg"/>
            </div>
            <div class="message-body">
                <h5>Nachiket Kolte</h5>
                <p class="text-muted">Send it!</p>
            </div>
        </div>



        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-14.jpg"/>
                <div class="active"></div>
            </div>
            <div class="message-body">
                <h5>Rushi</h5>
                <p class="text-muted">..............</p>
            </div>
        </div>



        <div class="message">
            <div class="profile-photo">
                <img src="images/profile-15.jpg"/>
            </div>
            <div class="message-body">
                <h5>Aditya</h5>
                <p class="text-muted">Yup</p>
            </div>
        </div>






    </div>

    <div class="friend-request">
        <h4>Requests</h4>

        <div class="request">
            <div class="info">
                <div class="profile-photo">
                    <img src="images/profile-21.jpg"/>

                </div>
                <div>
                    <h5>Akshay Kumar</h5>
                    <p class="text-muted">
                        8 mutual friends
                    </p>
                   
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary">
                    Accept
                </button>
                <button class="btn">
                    Decline
                </button>
            </div>
        </div>


        <div class="request">
            <div class="info">
                <div class="profile-photo">
                    <img src="images/profile-23.jpg"/>

                </div>
                <div>
                    <h5>Salman Khan</h5>
                    <p class="text-muted">
                        8 mutual friends
                    </p>
                   
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary">
                    Accept
                </button>
                <button class="btn">
                    Decline
                </button>
            </div>
        </div>


        <div class="request">
            <div class="info">
                <div class="profile-photo">
                    <img src="images/profile-4.jpg"/>

                </div>
                <div>
                    <h5>Katrina Kaif</h5>
                    <p class="text-muted">
                        8 mutual friends
                    </p>
                   
                </div>
            </div>
            <div class="action">
                <button class="btn btn-primary">
                    Accept
                </button>
                <button class="btn">
                    Decline
                </button>
            </div>
        </div>

    </div> 



  </div> 
  )
}

export default Right