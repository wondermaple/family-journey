import React from 'react';
import {createRoot} from 'react-dom/client';
import Journey from '../app/journey';
import Guests from '../app/guests-client';
import '../app/globals.css';
const guest=window.location.pathname.includes('/guests');
createRoot(document.getElementById('root')!).render(guest?<Guests/>:<Journey/>);
