import "./sample.css"
import React from 'react'
 
export default function Email() {
  return (
    <div className="App">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="sample.css" />
    <title>Final - Gmail Clone</title>
  </head>
  <body>
    <div class="header">
      <div class="header__left">
        <span class="material-icons"> menu </span>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
 
      <div class="header__middle">
        <span class="material-icons"> search </span>
        <input type="text" placeholder="Search mail" />
        <span class="material-icons"> arrow_drop_down </span>
      </div>
 
      <div class="header__right">
        <span class="material-icons"> apps </span>
        <span class="material-icons"> notifications </span>
        <span class="material-icons"> account_circle </span>
      </div>
    </div>
    <div class="main__body">
      <div class="sidebar">
        <button class="sidebar__compose"><span class="material-icons"> add </span>Compose</button>
        <div class="sidebarOption sidebarOption__active">
          <span class="material-icons"> inbox </span>
          <h3>Inbox</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> star </span>
          <h3>Starred</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> access_time </span>
          <h3>Snoozed</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> label_important </span>
          <h3>Important</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> near_me </span>
          <h3>Sent</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> note </span>
          <h3>Drafts</h3>
        </div>
 
        <div class="sidebarOption">
          <span class="material-icons"> expand_more </span>
          <h3>More</h3>
        </div>
 
        <div class="sidebar__footer">
          <div class="sidebar__footerIcons">
            <span class="material-icons"> person </span>
            <span class="material-icons"> duo </span>
            <span class="material-icons"> phone </span>
          </div>
        </div>
      </div>
      <div class="emailList">
        <div class="emailList__settings">
          <div class="emailList__settingsLeft">
            <input type="checkbox" />
            <span class="material-icons"> arrow_drop_down </span>
            <span class="material-icons"> redo </span>
            <span class="material-icons"> more_vert </span>
          </div>
          <div class="emailList__settingsRight">
            <span class="material-icons"> chevron_left </span>
            <span class="material-icons"> chevron_right </span>
            <span class="material-icons"> keyboard_hide </span>
            <span class="material-icons"> settings </span>
          </div>
        </div>
        <div class="emailList__sections">
          <div class="section section__selected">
            <span class="material-icons"> inbox </span>
            <h4>Primary</h4>
          </div>
 
          <div class="section">
            <span class="material-icons"> people </span>
            <h4>Social</h4>
          </div>
 
          <div class="section">
            <span class="material-icons"> local_offer </span>
            <h4>Promotions</h4>
          </div>
        </div>
        <div class="emailList__list">
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber<span class="emailRow__description">
                  - on Your Channel Future Coders
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">Google</h3>
 
            <div class="emailRow__message">
              <h4>
                Login on New Device<span class="emailRow__description">
                  - is this your Device ?
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">2am</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber<span class="emailRow__description">
                  - on Your Channel Future Coders
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">Google</h3>
 
            <div class="emailRow__message">
              <h4>
                Login on New Device<span class="emailRow__description">
                  - is this your Device ?
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">2am</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber<span class="emailRow__description">
                  - on Your Channel Future Coders
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">Google</h3>
 
            <div class="emailRow__message">
              <h4>
                Login on New Device<span class="emailRow__description">
                  - is this your Device ?
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">2am</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber<span class="emailRow__description">
                  - on Your Channel Future Coders
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">Google</h3>
 
            <div class="emailRow__message">
              <h4>
                Login on New Device<span class="emailRow__description">
                  - is this your Device ?
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">2am</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber
                <span class="emailRow__description"> - on Your Channel Future Coders </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">YouTube</h3>
 
            <div class="emailRow__message">
              <h4>
                You Got a New Subscriber<span class="emailRow__description">
                  - on Your Channel Future Coders
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">10pm</p>
          </div>
          <div class="emailRow">
            <div class="emailRow__options">
              <input type="checkbox" name="" id="" />
              <span class="material-icons"> star_border </span>
              <span class="material-icons"> label_important </span>
            </div>
 
            <h3 class="emailRow__title">Google</h3>
 
            <div class="emailRow__message">
              <h4>
                Login on New Device<span class="emailRow__description">
                  - is this your Device ?
                </span>
              </h4>
            </div>
 
            <p class="emailRow__time">2am</p>
          </div>
        </div>
      </div>
    </div>
  </body>
    </div>
  );
}