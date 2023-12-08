
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useGetPokemonQuery } from '../store/api/recipes';
import { Link } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';


// const mockData = [
//     {
//       "pk": 1,
//       "category": "meat",
//       "author": "john123",
//       "title": "Vallish Pork with Garlic Flan",
//       "date_published": "2023-12-01T08:55:36.025567Z",
//       "comments_amount": 3
//     },
//     {
//       "pk": 2,
//       "category": "side dish",
//       "author": "john123",
//       "title": "Softy Potato Mash",
//       "date_published": "2023-12-01T08:57:23.999753Z",
//       "comments_amount": 0
//     },
//     {
//       "pk": 3,
//       "category": "summer",
//       "author": "john123",
//       "title": "Super fast Breakfast",
//       "date_published": "2023-12-06T10:44:37.762863Z",
//       "comments_amount": 0
//     },
//     {
//       "pk": 4,
//       "category": "side dish",
//       "author": "john123",
//       "title": "Boiled Rice",
//       "date_published": "2023-12-06T10:45:29.848730Z",
//       "comments_amount": 0
//     }
//   ];


export default function MainPage(){
    const {data, isLoading, isFetching, isError} = useGetPokemonQuery('bulbasaur')
    
    return (
        <>
            {data?.map((recipe)=>{
                return (
                    <>
                        <Card id={recipe.pk.toString()}>
                            <Card.Header>
                                <Card.Text>{recipe.category}</Card.Text>
                                <Card.Text>Published on {recipe.date_published} by <Card.Link>{recipe.author}</Card.Link></Card.Text>
                                </Card.Header>
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <Card.Text>{recipe.comments_amount} Comments</Card.Text>
                                <Button>Visit</Button>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </>
    )
}
