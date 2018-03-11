import React, {Component} from 'react';
import construct from './images/constructing.gif';
import './App.css';

import RateMyProfessorNavbar from './RateMyProfessorNavbar';
import RateMyProfessorNavbarCollapse from './RateMyProfessorNavbarCollapse';

const centerParentStyle = {
    display: 'table'
};

const centerChildStyle = {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
};

class App extends Component {
    render() {
        return (
            <div>
                {window.innerWidth < 768 ? <RateMyProfessorNavbarCollapse/> : <RateMyProfessorNavbar/>}
                <div style={{
                    textAlign: 'center', height: window.innerWidth < 768 ? 600 : window.innerHeight,
                    background: `url(${construct}) no-repeat center center`
                }}>
                    <div style={{position:'absolute',width:'100%'}}>
                        <p style={{marginTop: 100, fontSize: window.innerWidth < 768 ? 50 : 100}}>敬请期待</p>
                        <p style={{
                            fontSize: window.innerWidth < 768 ? 40 : 80,
                            marginTop: window.innerWidth < 768 ? -50 : -120
                        }}>Coming Soon</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
