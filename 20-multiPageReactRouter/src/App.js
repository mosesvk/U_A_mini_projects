import {Route} from 'react-router-dom '
import Products from './components/Products';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Route path='/welcome' component={Welcome}/>
      <Route path='/products' component={Products}/>
    </>
  );
}

export default App;
