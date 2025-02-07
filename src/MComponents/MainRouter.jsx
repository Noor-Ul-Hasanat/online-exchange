// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Notification, DashBoard, IdentityVerification, Deposit, Mywallet, Navbar, Settings, SpotWallet, Swap, Trade, Transfer, Transictions, Withdraw } from '../MComponents';
// import ProtectedRoute from '../component/ProtectedRoute';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     children: [
//       {
//         element: <ProtectedRoute />,  // ✅ Wrap all protected routes
//         children: [
//           { index: true, element: <DashBoard /> },
//           { path: '/wallet', element: <Mywallet /> },
//           { path: '/spotwallet', element: <SpotWallet /> },
//           { path: '/notification', element: <Notification /> },
//           { path: '/swap', element: <Swap /> },
//           { path: '/trade', element: <Trade /> },
//           { path: '/exchange', element: <Trade /> },
//           { path: '/transictions', element: <Transictions /> },
//           { path: '/transfer', element: <Transfer /> },
//           { path: '/withdraw', element: <Withdraw /> },
//           { path: '/deposit', element: <Deposit /> },
//           { path: '/verifications', element: <IdentityVerification /> },
//           { path: '/settings', element: <Settings /> },
//         ],
//       },
//     ],
//   },
// ]);

// export default function MainRouter() {
//   return <RouterProvider router={router} />;
// }
