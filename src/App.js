import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';

import './App.css';

const app = new Clarifai.App({
  apiKey: '41faa463c06f48a58b46475462164553'
})

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
    input: '',
    imageUrl: '',
    boxes: [],
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
      }
    })
  }

  calculateFaceLocation = (result) => {
    const clarifaiFaces = result.outputs[0].data.regions.map(region => region.region_info.bounding_box);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return clarifaiFaces.map(face => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - (face.right_col * width),
        bottomRow: height - (face.bottom_row * height)
      }
    })
  }

  resetImageInputs = () => {
    const inputLink = document.getElementById('imagelink');
    inputLink.value='';
    this.setState({input: initialState.input, imageUrl: initialState.imageUrl, boxes: initialState.boxes});
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (Event) => {
    this.setState({input: Event.target.value});
  }

  onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
        })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state;
    return (
      <div className='App'>
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ? <div>
              <Logo/>
              <Rank 
                name={this.state.user.name} 
                entries={this.state.user.entries}
              />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onPictureSubmit={this.onPictureSubmit}
                resetImageInputs={this.resetImageInputs}
              />
              <FaceRecognition boxes={boxes} imageUrl={imageUrl}/>
            </div>
          : (
            route === 'register'
            ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
          }
      </div>
    );
  }
}

export default App;
