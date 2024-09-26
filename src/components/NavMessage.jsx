import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
    <a className='nav-link nav-icon ' href="#"  data-bs-toggle="dropdown">
    <i className='bi bi-chat-left-text'></i>
    <span className='badge bg-success badge-number'>3</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
            You have 3 new messages
            <a href="#">
                <span className='badge rounded-pill bg-primary p-2 m-2'>
                    View all
                </span>
            </a>

        </li>
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>
           <a href='#'>
        <img src="./assets/item/messages-1.png" alt="" className="round-circle" />
            
          
            <div>
                <h4>Maria Hudson</h4>
                <p>Velit iddh Quae dolorem earum verituar</p>
                <p>4 hrs. ago</p>
            </div>
            </a>
        </li>

        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li className='message-item'>
           <a href='#'>
        <img src="./assets/item/messages-2.png" alt="" className="round-circle" />
            
          
            <div>
                <h4>Anna Nelson</h4>
                <p>Velit iddh Quae dolorem earum verituar</p>
                <p>6 hrs. ago</p>
            </div>
            </a>
        </li>

        <li>
            <hr className='dropdown-divider'/>
        </li>


        <li className='message-item'>
           <a href='#'>
        <img src="./assets/item/messages-3.png" alt="" className="round-circle" />
            
          
            <div>
                <h4>Erica Hudson</h4>
                <p>Velit iddh Quae dolorem earum verituar</p>
                <p>5 hrs. ago</p>
            </div>
            </a>
        </li>

        <li>
            <hr className='dropdown-divider'/>
        </li>

        
        <li>
            <hr className='dropdown-divider'/>
        </li>

        <li className='dropdown-footer'>
            <a href="#"> Show all messages</a>
        </li>


    </ul>
   </li>
  )
}

export default NavMessage