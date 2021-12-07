import {Route} from 'react-router-dom'

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Route path='/welcome/new-user'>
        <h1>Welcome New User!</h1>
      </Route>
    </>
  )
}

export default Welcome
