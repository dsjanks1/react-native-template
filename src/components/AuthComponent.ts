// // Example of a component using Redux state
// import React from 'react';
// import {useAppSelector, useAppDispatch} from '../hooks/reduxHooks';
// import {login, logout} from '../slices/authSlice';

// const AuthComponent: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

//   const handleLogin = () => {
//     const user = {
//       name: 'John Doe',
//       email: 'john@example.com',
//       token: '12356543ddfdf',
//     };
//     dispatch(login(user));
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     // Render based on isAuthenticated

//   );
// };

// export default AuthComponent;
