import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-50 mx-auto'>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;