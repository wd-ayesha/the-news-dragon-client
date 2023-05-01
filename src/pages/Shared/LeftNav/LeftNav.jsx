import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    } ,[])
    return (
        <div>
            <h3>Left nav</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                    key={category.id}>
                        <Link className='text-dark text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;