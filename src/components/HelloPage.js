import React from 'react';
import {User} from './User';

//import store from '../store/configureStore';

// import Footer from '../common/Footer';
// import Navigation from '../common/Navigation';
// import Header from '../common/Header';

class HelloPage extends React.Component {
    render() {
        return (
            <div className="HelloPage">
                <User />
            </div>
        );
    }
}

export default HelloPage;
