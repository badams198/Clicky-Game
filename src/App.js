import React, { Component } from 'react';
import images from './images'; // array of image objects
import './App.css'; // default styling
import Display from './components/Display'; // sends images to DOM
import Navbar from './components/Navbar'; 

class App extends Component {

  state = {
    images,
  }

  render () {
    const style = {
      backgroundStyle: {
        backgroundgImage: 'url(https://imgur.com/gallery/CiX7q)',
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
      }
    };

    return (
      <div style={style.backgroundStyle}>
        <Navbar/>
        <div className= "container" key="picsContainer">
          <div className='row' key='imageRow'>
            {
              this.state.images.map(image => (
                <a
                href='/'
                key={image.id}
                className= 'col-sm-4 text-center'
                >
                  <Display
                  key={image.id}
                  id={image.id}
                  src={image.image}
                  alt={image.name} />
                </a>
              ))
            }
          </div>

        </div>
      </div>
    );
  }
}

export default App;