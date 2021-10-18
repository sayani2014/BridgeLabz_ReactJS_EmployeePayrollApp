import './App.css';
import Header from './component/header/header';
import Dashboard from './component/dashboard/dashboard';
import Register from './component/register/register';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Header />        
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {Dashboard}></Route>
            <Route path = "/add-employee" component = {Register}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
