import React from 'react';
import Container from '@mui/material/Container';
import IndexContentCard from './indexContentCard';
import Hero from './hero';
import Heading from './heading';
import './index.css';
import ProductCategories from './ProductCategories';

export default class IndexPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (  
            <>
                <Hero />
                <Container maxWidth="lg" >
                    <Heading />
                    {/* <ProductCategories /> */}
                    <IndexContentCard />
                </Container>
            </>     
        )
    }
}