import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



 const mockData = [{'pk': 1, 'category': 1, 'author': 1, 'title': 'Vallish Pork with Garlic Flan', 'description': 'Vallish Pork with Garlic Flan Description', 'date_published': '2023-12-01T08:55:36.025567Z', 'prep_time': 15, 'cook_time': 35, 'directions': 'Vallish Pork with Garlic Flan Directions', 'comments_amount': 3}, {'pk': 2, 'category': 3, 'author': 1, 'title': 'Softy Potato Mash', 'description': 'Softy Potato Mash Description', 'date_published': '2023-12-01T08:57:23.999753Z', 'prep_time': 7, 'cook_time': 15, 'directions': 'Softy Potato Mash Directions', 'comments_amount': 0}, {'pk': 3, 'category': 2, 'author': 1, 'title': 'Super fast Breakfast', 'description': 'Super fast Breakfast Description', 'date_published': '2023-12-06T10:44:37.762863Z', 'prep_time': 15, 'cook_time': 16, 'directions': 'Super fast Breakfast Directions', 'comments_amount': 0}, {'pk': 4, 'category': 3, 'author': 1, 'title': 'Boiled Rice', 'description': 'Boiled Rice Description', 'date_published': '2023-12-06T10:45:29.848730Z', 'prep_time': 25, 'cook_time': 12, 'directions': 'Boiled Rice Directions', 'comments_amount': 0}];


 export default function MainPage(){
    // This component shows a list of recipes

    // define a state variable for fetched data
    const [recipes, setData] = useState([])
    

    // define a function which will
    // consume api data and update
    // the state variable 'data'
    const getData = () => {
        fetch('http://localhost:8000/recipes')
        .then((response) => response.json())
        .then((recipes) => setData(recipes))
        
    }

    useEffect(()=>{
          getData()
        }, [])

    // return (
    //     <>
    //         {recipes?.map((recipe)=>{
                return (
                    <>
                        <Row xs={1} md={2} className="g-4">
                            {mockData.map((recipe) => (
                                <Col key={recipe.pk}>

                                <Card>
                                    <Card.Body>
                                    <Card.Title>{recipe.title}</Card.Title>
                                    <Card.Subtitle>{recipe.comments_amount} Comments</Card.Subtitle>
                                    <Button>Open</Button>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                )
            }
            // )}
        // </>
    // )
//  }