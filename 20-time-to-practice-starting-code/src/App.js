import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/quotes' exact/>
      <Route path='/quotes/:quoteId'/>
      <Route path='/new-quote'/>
    </Switch>
  );
}

export default App;
