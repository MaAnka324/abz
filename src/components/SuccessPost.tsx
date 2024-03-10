import React from 'react';
import successImg from './success-image.jpg'

const SuccessPost = () => {
    return (
        <div>
            <h1>User successfully registered</h1>
            <img alt='success' src={successImg}/>
        </div>
    );
};

export default SuccessPost;