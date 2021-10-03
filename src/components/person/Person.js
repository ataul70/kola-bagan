import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const Person = (props) => {
    // console.log(props.person)
    const {name, country, salary, language, position, img} = props.person;
    return (
        <div className="container">
                <div className="person">
                    <img className="person-img" src={img} alt=""/>
                    <h4>{name}</h4>
                    <h5>football players: {country}</h5>
                    <h5>Salary :$ {salary}</h5>
                    <p>football: {language}</p>
                    <p>{position}</p>
                    <Button onClick ={()=> props.handelAddPerson(props.person)}  className="btn-regular"><FontAwesomeIcon icon={faPhoneVolume} /> Hire</Button>
                </div>
        </div>
    );
};

export default Person;