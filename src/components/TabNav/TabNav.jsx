import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './TabNav.css';

class TabNav extends Component {

    render() {
    let TabNav = <div id="BoxB">
        <div onClick={() => this.props.handle('README')} id="rm">ReadMe</div>
        <div onClick={() => this.props.handle('DATA')} id="data">4 APIs, 10 Nodes</div>
        <div onClick={() => this.props.handle('TEST')} id="test">Test</div>
    </div>
        return (
            <div>
                {TabNav}
            </div>
        );
    };
}

export default TabNav
    
    
    
    
