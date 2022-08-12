import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import Typography, { typographyClasses } from '@mui/material/Typography';

import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';



export default class TeamViewPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: this.props.teamName.replace("team/", ""),
            teamData: [],
            teamPlayerData: [],
            dataIsLoaded: false
        }
    }
    delay = ms => new Promise(res => setTimeout(res, ms));

    delayFunction = async () => {
      await this.delay(1000);
    };
  
    // Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    componentDidMount = async () => {
        console.log(this.state.results === undefined)
        fetch('http://localhost:3001/getTeam', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'team': this.state.teamName              
            })
        })
        .then(response => response.json())
        .then(await this.delayFunction())
        .then(data => {
            console.log(data)
            if (data.status === 'success') {      
              this.setState({
                    teamData: data.teamData,
                    teamPlayerData: data.teamPlayerData,
                    dataIsLoaded: true                   
                    })
            }   else {
                   console.log(data)  
                } 
            }
        )
     
    }

    render() {
    
    const { dataIsLoaded, teamName, teamData } = this.state
     if (!dataIsLoaded) {
        return (    
             <Container maxWidth="lg" sx={{mt: 25, p: 0}} style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,minHeight: '70vh'}}>  
             <Typography>loading {teamName}</Typography>                  

                <CircularProgress />                    

            </Container>
        )} else {
        return (                    
            <Container maxWidth="lg" sx={{mt:10}}style={{minHeight: '90vh'}}>
                <div style={{width: "100%", height: '300px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={this.state.teamData[0].image} width={"200px"} height={"200px"} style={{borderRadius: '50%'}}/>
                        <div style={{ marginLeft: '50px'}}>
                            <div style={{display: 'flex', alignItems: 'baseline'}}>
                            <Typography variant="h3">{this.state.teamData[0].name}</Typography>
                            <Typography variant="h4" sx={{ml: 2}} >{this.state.teamData[0].game}</Typography>
                            </div>
                            <Typography variant="h4">{this.state.teamData[0].country}</Typography>
                        </div>
                    </div>
                </div>
                <div>
                <Typography variant="h2">About</Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet, conseectur adipisicing
                     elit, sed, sed do eiusmof tempor incidunt ut labore
                      et dolore magna aliqua.
                </Typography>
                <div style={{width: '100%',padding: '5% 5%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {this.state.teamPlayerData.map(item => 
                    <Grid item xs={12} md={6} lg={4}>
                        <div style={{width: '100%',display: 'flex', alignItems: 'baseline', paddingBottom: '50px'}}>
                            <Typography variant={"h5"}>{item.name},</Typography>
                            <Typography variant={"h6"} sx={{ml: 1}}>{item.role}</Typography>
                        </div>
                    </Grid>
                )}
                    </Grid>                    
                
                 </div>    
                </div>
                <div style={{border: '2px solid green', width: '100%', height: '600px', marginBottom: '100px'}}></div>
            </Container>
        )
    }    
    }}