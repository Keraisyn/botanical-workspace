import React from 'react';
// import empty from './graphics/empty.svg';
// import third from './graphics/third.svg';
// import twos from './graphics/twos.svg';
// import full from './graphics/full.svg';
// import dead from './graphics/dead.svg';

class Tree extends React.Component {
    state = {
        stage: this.props.stage,
    }

    render() {
        return (
            <img src={this.props.stage} alt={this.props.type} className="w-25 mb-3" />
        )
    }
}

export default Tree;