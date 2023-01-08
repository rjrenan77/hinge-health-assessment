import React, {useState, useEffect} from 'react';
import './index.css'
import data from './data.json'
import { Col, Container, Row } from "reactstrap";


export default function Tree() {

    const [newAnimal, setNewAnimal] = useState('')

   

    const handleSubmit = (event) => {
    
        event.preventDefault();
        data.push({'name':newAnimal})
        setNewAnimal('')
    }

    function animals() {
        return (
            <>
                <div >
                    {data.slice(0,1).map(i => {return <div>{i.name}</div>})}
                    
                </div>

                
                <div>
                    {data.slice(1,3).map(i => {return <div className='low-space'>{i.name}</div>})}
                </div>
                
                <div>
                    {data.slice(3,5).map(i => {return <div className='medium-space'>{i.name}</div>})}
                </div>
                
                <div>
                    {data.slice(5,6).map(i => {return <div className='large-space'>{i.name}</div>})}
                </div>
                
                <div>
                    {data.slice(6,data.length).map(i => {return <div className='low-space'>{i.name}</div>})}
                </div> 
            </>   
        )
    }
   
    return ( 
        <div className="tree">
              {animals()}
        </div>         
    )

}