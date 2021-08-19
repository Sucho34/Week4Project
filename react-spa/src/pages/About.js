import './About.css';
import React from "react";
import ConditonalRender from '../components/ConditionalRender';

export const About = () => {
    return (
        <div>
            <h1 className="aboutHeader">About</h1>
            <ConditonalRender/>
        </div>
    );
};