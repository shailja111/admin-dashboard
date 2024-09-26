import React from 'react'
import './sideBar.css'
import navList from '../data/navItem'
import NavItem from './NavItem'
import Chat from './Chat.jsx'

function SideBar() {
  return (
    <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className='nav-item'>
                    <a className='nav-link' href="/">
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                    </a>

                </li>

                <li className='nav-item'>
                    <a className='nav-link collapsed'
                    data-bs-target="#components-nav"
                    data-bs-toggle="collapse"
                     href="/">
                    <i className='bi bi-menu-button-wide'></i>
                    <span>Documents</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul 
                    id="components-nav"
                    className="nav-content collapse new-sider"
                    data-bs-parent="sidebar-nav"
                    >

                        <li>
                            <a href="#">
                               
                                <span>Customers</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                               
                                <span>Suppliers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                
                                <span>Logistic</span>
                            </a>
                        </li>

                        
                    </ul>

                </li>




                <li className='nav-item'>
                    <a className='nav-link collapsed'
                    data-bs-target="#forms-nav"
                    data-bs-toggle="collapse"
                     href="#">
                    <i className='bi bi-journal-text'></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul 
                    id="forms-nav"
                    className="nav-content collapse new-sider"
                    data-bs-parent="sidebar-nav"
                    >

                        <li>
                            <a href="#">
                               
                                <span>Application Form</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                               
                                <span>Release Form</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               
                                <span>Cancellation Form</span>
                            </a>
                        </li>
                    </ul>

                </li>


                <li className='nav-item'>
                    <a className='nav-link collapsed'
                    data-bs-target="#tables-nav"
                    data-bs-toggle="collapse"
                     href="#">
                    <i className='bi bi-layout-text-window-reverse'></i>
                    <span>Tables</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul 
                    id="tables-nav"
                    className="nav-content collapse new-sider"
                    data-bs-parent="sidebar-nav"
                    >

                        <li>
                            <a href="#">
                                
                                <span>General Tables</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                
                                <span>Data Tables</span>
                            </a>
                        </li>
                        
                    </ul>

                </li>


                <li className='nav-item'>
                    <a className='nav-link collapsed'
                    data-bs-target="#tables-nav"
                    data-bs-toggle="collapse"
                     href="#">
                    <i className='bi bi-layout-text-window-reverse'></i>
                    <span>Apps</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                    </a>
                    <ul 
                    id="tables-nav"
                    className="nav-content collapse new-sider"
                    data-bs-parent="sidebar-nav"
                    >

                      <li>
                    <a href="/chat">
                     <span>Chat</span>
                </a>
                </li>


                        <li>
                            <a href="#">
                                
                                <span>Email</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                
                                <span>Calendar</span>
                            </a>
                        </li>
                        
                    </ul>

                </li>

                <li className='nav-heading'>Pages</li>

                    {navList.map(nav=>(
                       <NavItem key={nav._id} nav={nav}/>
                    ))}


            </ul>
    </aside>
  )
}

export default SideBar