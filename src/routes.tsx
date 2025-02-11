import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { App } from './pages/App';
import { Login } from './pages/login/index';
import { Layout } from './pages/layout';
import { DataSource } from './pages/dataIntegration/dataSource';
import { SyncTasks } from './pages/dataIntegration/syncTasks';
import { Outline } from './pages/outline';
import { Resource } from './pages/resource';
import { WorkSpaces } from './pages/workSpaces';
import { Workflow } from './pages/dataStudio/workflow';
import { DataMap } from './pages/dataGovern/map';
import { DataQuality } from './pages/dataGovern/quality';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="outline" index element={<Outline />} />
          <Route path="resource" element={<Resource />} />
          <Route path="spaces" element={<WorkSpaces />} />

          <Route>
            <Route path="dataSource" element={<DataSource />} />
            <Route path="syncTasks" element={<SyncTasks />} />
          </Route>

          <Route>
            <Route path="workflow" element={<Workflow />} />
          </Route>

          <Route>
            <Route path="dataMap" element={<DataMap />} />
            <Route path="dataQuality" element={<DataQuality />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

// function PrivateRoute({ children, ...rest }: { children: React.ReactNode }) {
//   const { isAuth } = store.getState().user;

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuth ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
