import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

function ErrorPage(){
    return(
        <div className='errorPage'>
            <h2># 404</h2>
            <Link to='/' className='back'>Go Back</Link>
        </div>
    );
}

export default ErrorPage
