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
                <div style={{textAlign: 'center'}}>
                    <img src={construct} style={{
                        width: '100%',
                    }}/>
                    <p>Coming Soon</p>
                </div>
            </div>
        );
    }
}

export default App;
