import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies'
import ScrollToTop from './scrollToTop'
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies />
        <ScrollToTop />
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

