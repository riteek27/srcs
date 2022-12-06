import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Appointments from '../Appointments';
import Patient from '../Patient/Patient';
import Doctors from '../Doctor/Doctors';
import Users from '../Users';


function mainListItems() {
  return (
    <Router>
      <React.Fragment>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link to="/users"><ListItemText primary="Users" /></Link>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link to="/patients"><ListItemText primary="Patients" /></Link>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <Link to="/doctors"><ListItemText primary="Doctors" /></Link>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BookOnlineIcon />
          </ListItemIcon>
          <Link to="/appointments"><ListItemText primary="Appointments" /></Link>
        </ListItemButton>
      </React.Fragment>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/patients" element={<Patient />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/appointments" element={<Appointments />}></Route>
      </Routes>
    </Router>
  )
}

export default mainListItems;