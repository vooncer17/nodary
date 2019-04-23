import React, {Component} from 'react';
import './TabNav.css';

class TabNav extends Component {

    render() {
    let TabNav = <div id="BoxB">
        <div onClick={() => this.props.handle('README')} style={{'background-color': (this.props.selOption==='README')? 'rgb(252, 245, 219)': 'white'}} id="rm">ReadMe</div>
        <div onClick={() => this.props.handle('DATA')} style={{'background-color': (this.props.selOption==='DATA')? 'rgba(203, 56, 55, 0.2)': 'white'}} id="data">4 APIs, 10 Nodes</div>
        <div onClick={() => this.props.handle('TEST')} style={{'background-color': (this.props.selOption==='TEST')? 'rgb(236, 217, 241)': 'white'}} id="test">Test</div>
    </div>
        return (
            <div>
                {TabNav}
            </div>
        );
    };
}

export default TabNav
    
    
    
    
