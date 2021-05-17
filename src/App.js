import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/favoritos" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
