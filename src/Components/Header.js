import React, { Component } from 'react'
import logo from '../Assets/logo.svg'
import Search from '../Assets/search.svg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />Phoneix
                        </a>
                        <a><img src={Search} width="30" height="30" class="d-inline-block align-right" alt="" /><strong>Search</strong></a>
                        
                </nav>
            </div>


        )
    }
}
