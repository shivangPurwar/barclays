import React, { Component } from 'react'
import '../Components/Container.css';
export default class Container extends Component {
    render() {
        return (
            <div className="Body">
                <div className='fiting'>
                    <h1>Phoneix </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='SmallPara'>
                    <h3>Phoneix</h3>
                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                </div>
            </div>
        )
    }
}
