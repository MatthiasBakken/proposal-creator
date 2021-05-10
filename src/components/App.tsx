import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import { buildersData } from '../dummy-data/builders-data';
import BuildersAvailability from './BuildersAvailability';
import CreateProposal from './CreateProposal';
import Header from './Header';

import './App.css';


const App: React.FC = () => {
  const [ title, setTitle ] = useState( "Proposal Creator" );

  const pageTitleHandler = ( title: string ): void => {
    setTitle( title );
  };

  return (
    <div className="App">
      <Header
        propsTitle={title} />
      <Menu />
      <Switch>
        <Route exact path="/" >
          <BuildersAvailability data={buildersData} handlePageTitle={pageTitleHandler} />
        </Route>
        <Route path="/create-proposal" >
          <CreateProposal data={buildersData} handlePageTitle={pageTitleHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
