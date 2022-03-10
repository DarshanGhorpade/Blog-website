import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = {name: 'Darshan', age: '22'};
  const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}

          {/* its always good to surround all routes by Switch */}
          <Switch>
            <Route exact path= "/">
              <Home />
            </Route>

            <Route path= "/create">
              <Create />
            </Route>

            {/* Route parameters */}
            <Route path= "/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>


          {/* <h1>{ title }</h1>
        <p>Liked { likes }</p>   */}

          {/* <p>{ person }</p> */}

          {/* <p>{ 10 }</p>

        <p>{ "Hello World" }</p>

        <p>{ [1, 2, 3, 4, 5] }</p>

        <p>{ Math.random() * 10 }</p>

      <a href={ link }>Google Site</a>  */}
        </div>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Router>
  );
}

export default App;