import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from 'features/auth/components/login/login';
import Home from 'shared/components/home/home';
import paths from '../../constants/paths';
import AllotTable from '../../../features/allot-table/pages';
import ProtectedRoutes from '../protected-routes/protected-routes';

const Shell = () => {
  return (
    <Routes>
      <Route path={paths.login} element={<Login />} />
      <Route
        path={paths.index}
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      >
        <Route
          path={paths.allotTable}
          element={
            <ProtectedRoutes>
              <AllotTable />
            </ProtectedRoutes>
          }
        />
      </Route>
    </Routes>
  );
};

export default Shell;
