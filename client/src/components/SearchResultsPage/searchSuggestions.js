import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { colors } from "@material-ui/core";


export default class SearchSuggestions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            dataIsLoaded: false
            
        }
    }

    componentDidMount = () => {
        console.log(this.state.results === undefined)
        fetch('http://localhost:3001/search', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'search': this.props.searchInput                
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {   
                this.setState({results: data.results, dataIsLoaded: true})
            }   else {
                   console.log(data)  
                } 
            }
        )
    } 


    render() {
        if (this.state.dataIsLoaded && this.state.results.length > 0) {         
            return(            
                <>  <div 
                        style={{     
                            position: 'absolute',                                                                            
                            height: '100vh',
                            width: '80vw',
                            marginTop: '-35%',
                            marginLeft: '-15%',
                            overflow: 'hidden', 
                            overflowX: 'Hidden',
                            overFlowY: 'Hidden',                   
                            zIndex: '-1'                            
                            }}
                        onClick={
                            this.props.unmountMe
                            }>
                    </div>
                    <div
                        style={{                                 
                            width: '100%',
                            backgroundColor: 'white',
                            zIndex: '1000',                        
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '0 0 20px 20px',
                            boxShadow: '-1px 3px 5px 0px black',
                            zIndex: 2
                            }}>
                        {this.state.results.map(item =>
                            <Link to={'/'}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '68vw'                                    
                                    }}>
                                    <img 
                                        src={item.image}
                                        width="50px"
                                        height="50px"
                                        style={{
                                            boxShadow: "1px 3px 5px 0px black",
                                            mb: 3,    
                                            borderRadius: '50%',
                                            border: '1px solid black'
                                        }}                        
                                    />
                                    {item.firstName !== undefined && item.lastName !== undefined ? 
                                    <Link to={`/${item.type}/${item.name}`} style={{width: '250px', textDecoration: 'none'}}><Typography sx={{textDecoration: 'none'}} variant="h5" style={{color: 'black', marginLeft: '2%', textDecoration: 'none'}}>{item.firstName} {item.lastName}</Typography></Link> :
                                    <Typography variant="h5" style={{color: 'black', marginLeft: '2%', width: '250px', textDecoration: 'none'}} sx={{textDecoration: 'none'}}>{item.name}</Typography>
                                    }
                                    <Link to={`/${item.type}/${item.name}`} name={item.name} style={{width: '250px'}}>
                                        <Typography variant="h5" style={{color: 'black', marginLeft: '2%'}} >{item.type}</Typography>
                                    </Link>                       
                                </div>
                            </Link>
                        )}                               
                    </div>
                </>
            )
        } else {
            return(            
                <>
                    <div style={{    
                        zIndex: 9,                    
                        height: '55px',
                        width: '100%',
                        backgroundColor: 'white',
                        zIndex: '1000',                        
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0 0 20px 20px',
                        boxShadow: '-1px 3px 5px 0px black'
                        }}>
                        <CircularProgress />
                    </div>
                </>
            )
        }
    }
}