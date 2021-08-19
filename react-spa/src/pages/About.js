import './Pages.css';
import React from "react";
import ConditonalRender from '../components/ConditionalRender';

export const About = () => {
    return (
        <div>
            <h1 className="pageHeader">Render</h1>
            <ConditonalRender/>
        </div>
    );
};