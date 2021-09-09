import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/navigation/Navigation';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank/Rank';
import './App.css';
import './components/navigation/Navigation.css';

const app = new Clarifai.App({
  apiKey: '5f9481ff8ace4a04a7cb8e0e6a09003a'
})

const particleOptions = {
  "particles": {
      "number": {
          "value": 60,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.02
      },
      "move": {
          "direction": "right",
          "speed": 0.05
      },
      "size": {
          "value": 1
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      },
      "modes": {
          "push": {
              "particles_nb": 1
          }
      }
  },
  "retina_detect": true
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      route: 'signin',
      isSignedIn: false
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  calculateFaceLocation = (data) => {
    console.log(data);
    const image = document.querySelector('#image-input');
    const width = Number(image.width);
    const height = Number(image.height);
    const clarifaiFace = data.outputs[0].data.regions;
    const boxes = clarifaiFace.map(element => {
      // return element.region_info.bounding_box;
      const boxCoordinates = element.region_info.bounding_box;
      return {
        leftCol: boxCoordinates.left_col * width,
        topRow: boxCoordinates.top_row * height,
        rightCol: width - (boxCoordinates.right_col * width),
        bottomRow: height - (boxCoordinates.bottom_row * height)
      }
    })
    return boxes;
    // const clarifaiFace2 = data.outputs[0].data.regions[0].region_info.bounding_box;
    // return {
    //   leftCol: clarifaiFace2.left_col * width,
    //   topRow: clarifaiFace2.top_row * height,
    //   rightCol: width - (clarifaiFace2.right_col * width),
    //   bottomRow: height - (clarifaiFace2.bottom_row * height)
    // }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params= {particleOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ? <>
            <Rank />
            <ImageForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </>
        : (
          route === 'signin' 
          ? <Signin onRouteChange={this.onRouteChange} /> 
          : <Register onRouteChange={this.onRouteChange} />
        )
        }   
      </div>
    );
  }
}

export default App;
