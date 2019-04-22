import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataFeedService from '../../utils/dataFeedService';

class Stats extends Component {

    state = {

    };

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div id="rmstats">
                    <div id="ppc">price per call</div>
                    <div id="nod">
                        <div>nodes offering data</div>
                        <div>chart</div>
                    </div>
                    <div id="adpt">
                        <div>adapter repository</div>
                        <a href="">github</a>
                    </div>
                    <div id="datsrc">
                        <div>data sources</div>
                        <div># of data sources</div>
                    </div>
                    <div id="oracadd">
                        <div>oracle address</div>
                        <div>#0x235y...12</div></div>
                </div>
            </>
        );
    }
};

export default Stats;