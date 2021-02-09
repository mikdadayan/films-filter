import React from 'react';
import './film-Item.css';
// import imgT  from './../../assets/images/1.png'
import { Link } from 'react-router-dom';

function FilmItem({imageUrl, title, year, description, published}){
    return(
        <Link to='/about-film'>
            <div className='filmItem'>
                <img src={imageUrl} alt=''/>
                <h2 className='filmItem-title'>{title}</h2>
                <p className='filmItem-year'>{year}</p>
            </div>
        </Link>
    );
}

export default FilmItem