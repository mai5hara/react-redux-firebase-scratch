import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from "./components/pages/PostDetails"
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/pages/CreatePost';
import Profile from './components/pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/blog/:id" component={PostDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreatePost} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
