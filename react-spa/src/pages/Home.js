import React from "react";
import Counter from '../hooks/Counter';
import List from '../components/List';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Counter/>
            <List/>
        </div>
    );
};