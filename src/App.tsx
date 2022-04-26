import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Tape from './pages/tape/Tape';
import Profile from './pages/profile/Profile';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container sx={{ marginTop: 5 }} maxWidth="md">
        <Routes>
          <Route path='/' element={<Tape />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
