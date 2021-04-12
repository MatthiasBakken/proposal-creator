import './App.css';

import { buildersData } from '../dummy-data/builders-data';
import BuildersAvailability from './BuildersAvailability';


const App: React.FC = () => {
  return (
    <div className="App">
      <BuildersAvailability data={buildersData} />
    </div>
  );
}

export default App;
