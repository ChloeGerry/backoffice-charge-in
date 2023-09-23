import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Houses from './pages/Houses';
import Appartments from './pages/Appartments';
import Business from './pages/Business';
import Admins from './pages/Admins';
import ProjectsManagers from './pages/ProjectsManagers';
import Installers from './pages/Installers';
import B2CClients from './pages/B2CClients';
import Terminals from './pages/Terminals';
import Cars from './pages/Cars';
import Accessories from './pages/Accessories';
import Goals from './pages/Goals';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/appartments" element={<Appartments />} />
      <Route path="/business" element={<Business />} />
      <Route path="/admins" element={<Admins />} />
      <Route path="/projects" element={<ProjectsManagers />} />
      <Route path="/installers" element={<Installers />} />
      <Route path="/b2c-clients" element={<B2CClients />} />
      <Route path="/terminals" element={<Terminals />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
