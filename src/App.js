// import HelloWorld from './components/HelloWorld';
// import Counter from './components/Counter';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './views/About';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <HelloWorld name="codytang" /> */}
      {/* <Counter /> */}

      <Router>
        <Header></Header>

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
