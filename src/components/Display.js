import React, {Component} from 'react';

const styles = {
    imageStyle: {
        height:150,
        width:150,
    }
}

class Display extends Component {

    render () {
        const props = this.props

        return (
            <img style={styles.imageStyle} className='profile m-2 text-center bg-light text-center'
            key={props.id}
            src={props.src}
            alt={props.alt}
            />
        )
    }
}

export default Display;