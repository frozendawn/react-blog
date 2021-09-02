import './App.css';
import BlogList from './Components/BlogList';
import Navigation from './Components/Navigation';
import { Switch, Route } from 'react-router-dom';
import NewBlog from './Components/NewBlog';
import { Redirect } from 'react-router-dom';
import BlogDetail from './Components/BlogDetail';

function App() {
  return (
    <div className="App">
      <Navigation />


      <Switch>
        <Route path="/" exact>
          <Redirect to="/blogs" />
        </Route>

        <Route path="/blogs" exact>
          <BlogList />
        </Route>

        <Route path="/blogs/:id">
          <BlogDetail/>
        </Route>

        <Route path="/new-blog">
          <NewBlog />
        </Route>



      </Switch>
    </div>
  );
}

export default App;
