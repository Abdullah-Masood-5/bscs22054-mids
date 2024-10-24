import React, { useEffect, useState } from 'react';
import '../Styles/About.css';
import movieData from "../MovieData";
import "../Styles/ListingMovies.css"; 



const Rating = () => {
    const [filter, setFilter] = useState('all');
    const [filteredUsers, setFilteredUsers] = useState(movieData);


    useEffect(() => {
        let newFilteredUsers;

        if (filter === 'rating: 8') {
            newFilteredUsers = movieData.filter(user => user.rating === 8);
        } else if (filter === 'rating !8') {
            newFilteredUsers = movieData.filter(user => user.rating !== 8);
        } else {
            newFilteredUsers = movieData; // 'all'
        }

        setFilteredUsers(newFilteredUsers);
        console.log(`Filtered Users:`, newFilteredUsers); 
    }, [filter]); 

    return (
        <div className="user-list-container">
            <h1>Movie List</h1>
            <div className="filter-buttons">
                <button onClick={() => setFilter('all')}>Show All</button>
                <button onClick={() => setFilter('rating: 8')}>Show Rating 8</button>
                <button onClick={() => setFilter('rating !8')}>Show Rating Not 8</button>
            </div>
            <div className="user-list">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <h2>{user.title}</h2>
                        <p>Release Date: {user.releaseDate}</p>
                        <p>Rating: {user.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
