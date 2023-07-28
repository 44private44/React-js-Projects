import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {

  // constructor
  constructor() {
    super();
    this.state = {
      mode: 'dark',
      country: "in",
    };

    this.toggleModeFun = this.toggleModeFun.bind(this);
    this.countryUpdateFun = this.countryUpdateFun.bind(this);

  }
  static defaultProps = {
    apiKey: process.env.REACT_APP_NEWS_API,

    // getting api by the ".env.local" file 
    // 3433bbf108ca41b1bbc25bec3311389f   // sohammodi13@gmail.com  => $oh@m321
    // 3beb4eeed2c14006bafb76809dfd3309   // sohammmodi124421@gmail.com 
    // 4b99ef06be0e4ea39fbfc3cf2fd86c0a   // sohammodi456@gmail.com
    // 386c721da11e4522a3b2771e2cbdd8ee   // modis9842@mail.coml.com
  }

  // component did mount
  async componentDidMount() {
    await this.defaultModeChange();
  }
  async defaultModeChange() {
    if (this.state.mode === 'dark') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white'; // Should this be 'white' instead of 'black'?
    }
  }
  // change the Dark mode
  async toggleModeFun() {

    if (this.state.mode === "light") {
      this.setState({ mode: 'dark' }, this.defaultModeChange);
    }
    else {
      this.setState({ mode: 'light' }, this.defaultModeChange);
    }
  }
  // country Update
  async countryUpdateFun(name) {
    if (!(this.state.country === name)) {
      await this.setState({ country: name });
      await this.newsComponent.fetchArticles();
    }
  }

  // Top-loading bar
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }


  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar mode={this.state.mode} toggleMode={this.toggleModeFun} country={this.state.country} countryUpdate={this.countryUpdateFun} newsComponentRef={(ref) => (this.newsComponent = ref)} />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="general" country={this.state.country} category="general" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="business" country={this.state.country} category="business" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="entertainment" country={this.state.country} category="entertainment" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="health" country={this.state.country} category="health" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="sports" country={this.state.country} category="sports" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="science" country={this.state.country} category="science" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.props.apiKey} key="technology" country={this.state.country} category="technology" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
