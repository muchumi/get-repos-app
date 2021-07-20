import React from 'react'
import classes from './Results.module.css'

const Results = (props) => {
    // Destructuring
    const {repos} = props;
    console.log(`Repos is: `, repos.data);

    const listRepositories = repos.length !== 0 ? (
        repos.data.slice(0, 5).map(item => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)     
    ) : (
        <li>No repositories found</li>
    );
    return (
        <div className={classes.RepositoriesList}>
            <ul>
                <li>{listRepositories}</li>
            </ul>
        </div>
    )
}

export default Results;