import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import RandomChar from '../random-char/random-char';
import CharContent from '../char-content/char-content';

import './app.scss';

class App extends Component {
     render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <CharContent />
                    <img class="bg-decoration" src="img/vision.png" alt="vision" />
                </main>
            </div>
        );
     }
}

export default App;