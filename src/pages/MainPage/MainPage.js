import React from 'react';
import About from "../../components/About/About";
import Title from "../../components/Title/Title";

const MainPage = () => {
    return (
        <div>
            <About info={{title:'word', body:'word2'}}/>
            <Title string={'hello world'}/>
        </div>
    );
};

export default MainPage;