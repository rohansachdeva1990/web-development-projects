import React, { Component } from 'react';


const Scroll = (props) => {
    //console.log(props);
    //return props.children;
    // Demonstrating  how to add inline style in JSX
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '500px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;
