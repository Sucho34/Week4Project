import React from "react";
import Counter from '../hooks/Counter';

export const Home = () => {
    return (
        <div>
            <h1 className="pageHeader">Counter</h1>
            <Counter/>
        </div>
    );
};