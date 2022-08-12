import React from 'react';
import Container from '@mui/material/Container';
import SearchResultsPageSearchBar from './searchResultsPageSearchBar'
import SearchResultsCard from './searchResultCard'

export default class SearchResultsPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (            
            <Container maxWidth="lg" sx={{mt: 25, mb: 10}}>
                <SearchResultsPageSearchBar sx={{mt: 15, mb: 15, display: 'flex', justifyContent: 'center'}}/> 
                {/* FOR EACH OR MAP TO LOOP THROUGH RESULTS AND CREATE <SearchResultsCard /> */}  
                <SearchResultsCard />
            </Container>
        )
    }
}