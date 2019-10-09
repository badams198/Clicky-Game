import React, {Component} from 'react'

class Navbar extends Component{

    render (){
        //const props = this.props

        return (
            <div className= 'row py-3 bg-dark text-light'>
                <div className='offset-lg-1 col-lg-5 text-left'>
                    <h1>Zelda Memory Game</h1>
                    <p>Click a picture to earn a point(Get 12 points to win) and shuffle the pictures. Don't click the same picture more than once!</p>
                </div>
            </div>
        )
    }
}

export default Navbar;