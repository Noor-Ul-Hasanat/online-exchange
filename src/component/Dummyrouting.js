import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import {
  LogInn, DashBoard, VerifyNumber, Welcome, IdentityType,
  ForgettPassPage, CreateNewPassword, Navbar, Mywallet,
  SpotWallet, Notification, Swap, Trade, Transictions,
  Transfer, Withdraw, Deposit, IdentityVerification, Settings, CreateAccount
} from '../MComponents';
import ProtectedRoute from './ProtectedRoute';

const router = createHashRouter([
  {
    path: '/',
    element: <LogInn/>,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/verifynumber',
    element: <VerifyNumber />,
  },
  {
    path: '/createAccount',
    element: <CreateAccount />,
  },
  {
    path: '/login',
    element: <LogInn />,
  },
  {
    path: '/forgetpass',
    element: <ForgettPassPage />,
  },
  {
    path: '/verifypass',
    element: <VerifyNumber />,
  },
  {
    path: '/createnewpass',
    element: <CreateNewPassword />,
  },
  {
    path: '/identitytype',
    element: <IdentityType />,
  },
  {
    path: '/identityverification',
    element: <IdentityVerification />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <Navbar />,
        children: [
          { index: true, element: <DashBoard /> },
          { path: 'wallet', element: <Mywallet /> },
          { path: 'spotwallet', element: <SpotWallet /> },
          { path: 'notification', element: <Notification /> },
          { path: 'swap', element: <Swap /> },
          { path: 'trade', element: <Trade /> },
          { path: 'transictions', element: <Transictions /> },
          { path: 'transfer', element: <Transfer /> },
          { path: 'withdraw', element: <Withdraw /> },
          { path: 'deposit', element: <Deposit /> },
          { path: 'verifications', element: <IdentityVerification /> },
          { path: 'settings', element: <Settings /> },
        ]
      }
    ]
  }
]);

export const Dummyrouting = () => {
  return <RouterProvider router={router} />;
};