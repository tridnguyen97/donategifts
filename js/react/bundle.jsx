/* eslint-disable import/first */
/* eslint-disable import/order */
import React from 'react';
import { createRoot } from 'react-dom/client';

window.ReactRoot = createRoot;
window.React = React;

// components
import Community from './components/community/index.jsx';
window.Community = Community;

import Header from './components/header/index.jsx';
window.Header = Header;

import Nav from './components/nav/index.jsx';
window.Nav = Nav;

import WishCards from './components/wishcards/index.jsx';
window.WishCards = WishCards;

import WishCardsCarousel from './components/home/WishCardsCarousel.jsx';
window.WishCardsCarousel = WishCardsCarousel;

// pages
import Detail from './pages/admin/agency/detail.jsx';
window.AdminAgencyDetail = Detail;

import Overview from './pages/admin/agency/overview.jsx';
window.AdminAgencyOverview = Overview;

import AgencyCardsPage from './pages/agencycards.jsx';
window.AgencyCardsPage = AgencyCardsPage;
