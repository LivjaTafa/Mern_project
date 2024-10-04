import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList/EventList'; // Sigurohuni që rruga të jetë e saktë
import EventDetails from './pages/EventDetails/EventDetails';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetails />} />
      {/* Shtoni rrugët e tjera këtu */}
    </Routes>
  );
};

export default AppRoutes;
