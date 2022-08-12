import * as React from 'react';
import Typography from '@mui/material/Typography';
import SearchResultsPageSearchBar from '../SearchResultsPage/searchResultsPageSearchBar';

export default class Hero extends React.Component {
    
    render() {
        return (
            //Background image
            <div class="hero-background" 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh'
                }}
            >

                {/* Content */}
                <div style={{ flexDirection: 'column', textAlign: 'center', width: '70%', zIndex: '-5' }}>
                    <Typography mb={1}  sx={{ color: '#ffffff', width: '100%', fontSize: '7vw'}}>The Home of eSports</Typography>
                    <Typography mt={5} variant="h4" sx={{ color: '#ffffff', width: '100%', fontSize: '3vw' }}>Welcome to the best and most versitile eSports platform that has ever exsisted.
                    </Typography>
                    <SearchResultsPageSearchBar sx={{display: 'flex', justifyContent: 'center'}}/>
                </div>
            </div>
        ); 
    }
}