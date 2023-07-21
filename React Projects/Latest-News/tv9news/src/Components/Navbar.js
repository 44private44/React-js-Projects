import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">TV9 News</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"> <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink></li>
                                <li className="nav-item"> <NavLink to="/business" className="nav-link" activeclassname="active" >Business</NavLink> </li>
                                <li className="nav-item"> <NavLink to="/sports" className="nav-link" activeclassname="active" >Sports</NavLink> </li>
                                <li className="nav-item"> <NavLink to="/entertainment" className="nav-link" activeclassname="active" >Entertainment</NavLink> </li>
                                <li className="nav-item"> <NavLink to="/health" className="nav-link" activeclassname="active" >Health</NavLink> </li>
                                <li className="nav-item"> <NavLink to="/science" className="nav-link" activeclassname="active" >Science</NavLink> </li>
                                <li className="nav-item"> <NavLink to="/technology" className="nav-link" activeclassname="active" >Technology</NavLink> </li>
                            </ul>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Country
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item">India</Link></li>
                                    <li><Link className="dropdown-item">USA</Link></li>
                                    {/* <li><Link className="dropdown-item" onClick={this.props.countryUpdate('in')}>India</Link></li> */}
                                </ul>
                            </div>
                            <div className={`form-check form-switch text-light ms-4`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode {this.props.mode === 'light' ? 'Enable' : 'Disable'}  </label>
                            </div>
                            {/* <form className="d-flex ms-3" role="search">
                                <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success ms-2" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
