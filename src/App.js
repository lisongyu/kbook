import React, { Fragment } from 'react'

import { Route, Switch } from 'react-router-dom'
import { routes } from "./route"
// import BackBtn from './backBtn';
// import HookBack from './HookBack';
import Nav from './component/nav';




function App() {
  return <Fragment>
    <Nav />
    <Switch>
      {routes.map(item => {
        return <Route
          key={item.path}
          exact={item.exact}
          path={item.path}
          render={item.render}
        ></Route>
      })}
    </Switch>
  </Fragment>
}
export default App
