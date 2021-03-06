import React, {Component} from 'react';
import './App.css';
import Search from './screens/search';
import {MuiThemeProvider} from 'material-ui/styles/index';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <CssBaseline/>
                    <Search/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
