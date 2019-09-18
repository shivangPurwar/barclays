import React, { Component } from 'react'
import '../Components/Footer.css'

export class Footer extends Component {
    render() {
        return (
        
            <div className=" footerpad row container-fluid">
                <br/>
                <div className="col"><h2>Section One</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="btn btn-primary">Button One</button>
                </div>
                <div className="col"><h2>Section Two</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="btn btn-primary">Button One</button></div>
                <div className="col"><h2>Section Three</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="btn btn-primary">Button One</button></div>
                <div className="col"><h2>Section Four</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="btn btn-primary">Button One</button></div>
            </div>
        )
    }
}

export default Footer
