import React from 'react';
import person from '../person/Person';

const Sum = (props) => {
    const total = props.hair.reduce((prevSalary, currentSalary) => prevSalary + currentSalary.salary, 0)
    return (
        <div>
            <h1>Added Person : {props.hair.length}</h1>
            <h3>Total : {total}</h3>
            <ul>
                {
                    props.hair.map(person=><li key={person.key}>{person.name}</li>)
                }
            </ul>
        </div>
        
    );
};

export default Sum;