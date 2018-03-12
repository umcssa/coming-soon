import React, {Component} from 'react';
import construct from './images/constructing.gif';
import './App.css';

import RateMyProfessorNavbar from './RateMyProfessorNavbar';
import RateMyProfessorNavbarCollapse from './RateMyProfessorNavbarCollapse';

class App extends Component {
    render() {
        return (
            <div>
                {window.innerWidth < 992 ? <RateMyProfessorNavbarCollapse/> : <RateMyProfessorNavbar/>}
                <img src={construct}
                     style={{height: window.innerHeight, minWidth: '100%', position: 'absolute', top: 0, right: 0}}
                     alt="Coming Soon"/>
                <div style={{position: 'absolute', width: '100%', top: 0, textAlign: 'center'}}>
                    <p style={{marginTop: 100, fontSize: Math.min(window.innerWidth / 10, 100)}}>敬请期待</p>
                    <p style={{
                        fontSize: Math.min(window.innerWidth / 10, 80),
                        marginTop: -Math.min(window.innerWidth / 10, 120)
                    }}>Coming Soon</p>
                </div>
            </div>
        );
    }
}

export default App;
