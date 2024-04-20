import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Landing from './components/Landing';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<SignIn/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

