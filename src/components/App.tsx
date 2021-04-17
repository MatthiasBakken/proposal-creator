import './App.css';

import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import { buildersData } from '../dummy-data/builders-data';
import BuildersAvailability from './BuildersAvailability';


const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" >
          <BuildersAvailability data={buildersData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
