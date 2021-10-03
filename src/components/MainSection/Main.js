import React, { useEffect, useState } from 'react';
import Person from './../person/Person';
import Sum from '../Summition/Sum';
import './Main.css'
const Main = () => {
    const [person, setPerson] = useState([]);
    const [hair, setHair] = useState([])
    console.log(hair);
    useEffect( () => {
        fetch('./tool.JSON')
        .then(res => res.json())
        .then(data => setPerson(data))
    }, [])

    const handelAddPerson = (person) => {
        const isMatching = hair.find(existingPerson=>existingPerson.name === person.name);
        console.log(isMatching);
        if(!isMatching){
        const newAdd = [...hair, person]
        setHair(newAdd);
        }else{
            alert('already added')
        }
        
    }

    return (
        <div className="main-container">
            <div className="row">
                <div className="col-md-8">
                        <div className="col">
                            <div className="parson-section">
                                {
                                    person.map(person => <Person key = {person.id} person={person} handelAddPerson={handelAddPerson}></Person>)
                                }
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                    <Sum hair={hair}></Sum>
                </div>
            </div>
        </div>
    );
};




export default Main;