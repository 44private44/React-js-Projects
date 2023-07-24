import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
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
      await this.setState({ country: name});
      await this.newsComponent.fetchArticles();
    }
  }

  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar mode={this.state.mode} toggleMode={this.toggleModeFun} country={this.state.country} countryUpdate={this.countryUpdateFun} newsComponentRef={(ref) => (this.newsComponent = ref)} />
            <Routes>
              <Route exact path="/" element={<News key="general" country={this.state.country} category="general" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/business" element={<News key="business" country={this.state.country} category="business" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/entertainment" element={<News key="entertainment" country={this.state.country} category="entertainment" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/health" element={<News key="health" country={this.state.country} category="health" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/sports" element={<News key="sports" country={this.state.country} category="sports" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/science" element={<News key="science" country={this.state.country} category="science" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
              <Route exact path="/technology" element={<News key="technology" country={this.state.country} category="technology" mode={this.state.mode} ref={(ref) => (this.newsComponent = ref)} />} />
            </Routes>
          </Router>
        </div>
      </>
    )
  }
}
