import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { AppHeader } from './cmps/app-header'

export function RootCmp() {

  return <div>
    <Router>
      <AppHeader />
      <div className="header-place-holder"></div>
      <main className='layout'>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true}
            element={route.component} path={route.path} />)}
        </Routes>
      </main>
    </Router>

  </div>

}



