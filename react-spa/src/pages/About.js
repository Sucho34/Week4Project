import './Pages.css';
import React from "react";
import ConditonalRender from '../components/ConditionalRender';

export const About = () => {
    return (
        <div>
            <h1 className="pageHeader">About</h1>
            <ConditonalRender/>
        </div>
    );
};