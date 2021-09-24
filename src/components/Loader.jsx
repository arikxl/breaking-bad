import React from 'react';

import loader from '../images/spinner.gif'

const Loader = () => {
    return (
        <img src={loader} alt="Loading..."
            style={{ width: "200px", margin: "auto", display: "block" }} />
    );
};

export default Loader;
