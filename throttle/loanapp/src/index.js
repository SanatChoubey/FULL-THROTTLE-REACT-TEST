import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
ReactDOM.render(<div>
    
    <AppBar  color="default">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            FULL THROTTLE
          </Typography>
        </Toolbar>
      </AppBar>
    
    
    <App /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
