import React from 'react';

const About = ({info}) => {
    return (
        <div>
         <p>{info.title}-{info.body}</p>

        </div>
    );
};

export default About;