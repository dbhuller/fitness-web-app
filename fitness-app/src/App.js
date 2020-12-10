import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Build Fit
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
