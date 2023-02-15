import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import RandomChar from '../random-char/random-char';

import './app.scss';

class App extends Component {
     render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                </main>
            </div>
        );
     }
}

export default App;