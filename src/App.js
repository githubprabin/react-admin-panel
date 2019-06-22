import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/sidebar.css';
import 'semantic-ui-css/semantic.min.css'

import { db } from './config/firebase';
import Sidebar from './components/Sidebar';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';

import PermissionManagement from './pages/permission-management/_PermissionManagement';
import CreatePermission from './pages/permission-management/Create';

import RoleManagement from './pages/role-management/_RoleManagement';
import CreateRole from './pages/role-management/Create';

export default class App extends React.Component {
  
  componentDidMount() {
    db.ref('/data').set('my val');
  }

  render() {
    return (
      <div>

        <HashRouter>
          <div className='app'>

            <div className='sidebar-container'>
              <Sidebar />
            </div>

            <main className='main'>
              <Switch>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route path='/user-management' component={UserManagement} />


                <Route path='/role-management/create' component={CreateRole} />
                <Route path='/role-management' component={RoleManagement} />

                <Route exact path='/permission-management' component={PermissionManagement} />
                <Route path='/permission-management/create' component={CreatePermission} />

                {/* <Route path='/menus' component={PermissionManagement} /> */}
              </Switch>
            </main>
          </div>
        </HashRouter>
      </div>
    );
  }
}
