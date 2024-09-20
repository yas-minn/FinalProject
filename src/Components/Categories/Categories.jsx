import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const Img = ["/Images/electronics.jpg",
        "/Images/jewelry.jpeg",
        "/Images/men.jpg",
        "/Images/women.webp"];

    // Map categories to images based on index
    const getImageForCategory = (category) => {
        const index = categories.indexOf(category);
        return Img[index];
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h2 className="Header">Categories</h2>
            <div id="Categories" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {categories.map((category) => (
                    <div key={category} id="ImageContainer" style={{ margin: '10px' }}>
                        <Link to={`/Shop/${category}`}>
                            <img src={getImageForCategory(category)} alt={category} style={{ width: '200px', height: '200px' }} />
                        </Link>
                        <p>{category}</p>



                    </div>
                ))}
            </div>
        </>
    );
}

export default Categories;
