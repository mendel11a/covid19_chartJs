import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import covid19 from './images/covid19.png';
import HomeScreen from './components/HomeScreen';
import pastDayScreen from './components/pastDayScreen';
import WeeklyScreen from './components/WeeklyScreen';
import MonthlyScreen from './components/MonthlyScreen';
import SearchScreen from './components/SearchScreen';



function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div>
            <Link to='/'>
              <img className="image" src={covid19} />
            </Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/searchByDate" exact={true} component={SearchScreen} />
            <Route path="/monthly" exact={true} component={MonthlyScreen} />
            <Route path="/weekly" exact={true} component={WeeklyScreen} />
            <Route path="/daily" exact={true} component={pastDayScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

      </div>
    </BrowserRouter>

  );

}

export default App;
