import React from 'react';
import Intro from './intro/Intro';
import MarketStrat from './marketstrat/MarketStrat';
import Query from './query/Query';

const Home = () => {
    return (
        <div>
          <Intro></Intro>
          <MarketStrat></MarketStrat>
          <Query></Query>
        </div>
    );
};

export default Home;