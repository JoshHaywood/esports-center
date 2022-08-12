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




export default class LeagueViewPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leagueName: this.props.leagueName.replace("league/", "").replaceAll("%20", " "),
            roundCount: 0,
            rounds: [],
            leagueData: [],
            leagueTeams: [],
            dataIsLoaded: false
        }
    }
    delay = ms => new Promise(res => setTimeout(res, ms));

    delayFunction = async () => {
      await this.delay(1000);
    };

    componentDidMount = async () => {
        console.log(this.state.results === undefined)
        fetch('http://localhost:3001/getLeague', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'league': this.state.leagueName              
            })
        })
        .then(response => response.json())
        .then(await this.delayFunction())
        .then(data => {
            console.log(data)
            if (data.status === 'success') {      
              this.setState({  
                leagueName: data.leagueData[0].name,
                leagueData: data.leagueData[0],
                leagueTeams: data.leagueTeams,   
                roundCount: data.leagueData[0].rounds,          
                dataIsLoaded: true                   
                })
            }   else {
                   console.log(data)  
                } 
            }
        )     
    }
    

    render() {
        let round1Opponents = []
        let round2Opponents = []
        let round3Opponents = []
        let round4Opponents = []
        let round5Opponents = []
        let round6Opponents = []
        const round1Switch = (opponent) => {
            round1Opponents.push(opponent);
        }
        const round2Switch = (opponent) => {
            round2Opponents.push(opponent);
        }
        const round3Switch = (opponent) => {
            round3Opponents.push(opponent);
        }
        const round4Switch = (opponent) => {
            round4Opponents.push(opponent);
        }
        const round5Switch = (opponent) => {
            round5Opponents.push(opponent);
        }
        const round6Switch = (opponent) => {
            round6Opponents.push(opponent);
        }
       

    const { dataIsLoaded, leagueName, leagueData } = this.state
     if (!dataIsLoaded) {
        return (    
            <Container maxWidth="lg" sx={{mt: 25, p: 0}} style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,minHeight: '70vh'}}>  
                <Typography>
                    loading {leagueName}
                </Typography>
                <CircularProgress />
            </Container>
        )} else {
        return (                    
            <Container maxWidth="lg" sx={{mt:10}}style={{minHeight: '90vh'}}>
                <div style={{width: "100%", height: '300px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img  width={"200px"} height={"200px"} style={{borderRadius: '50%'}}/>
                        <div style={{ marginLeft: '50px'}}>
                            <div style={{display: 'flex', alignItems: 'baseline'}}>
                                <Typography variant="h3">{leagueName}</Typography>
                                <Typography variant="h4" sx={{ml: 2}}></Typography>
                            </div>
                            <Typography variant="h4"></Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant="h2">About</Typography>
                    <Typography variant="h5">
                        {leagueData.description}
                    </Typography>
                    <div style={{width: '100%',padding: '5% 5%'}}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {this.state.leagueTeams.map(item => 
                                <Grid item xs={12} md={6} lg={4}>
                                    <div style={{width: '100%',display: 'flex', alignItems: 'baseline', paddingBottom: '50px'}}>
                                        <Typography variant={"h5"}>{item.teamName}</Typography>
                                            {/* <Typography variant={"h6"} sx={{ml: 1}}>{item.role}</Typography> */}
                                    </div>
                                </Grid>
                            )}
                        </Grid>              
                    </div>    
                </div>

                <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '800px', marginBottom: '100px'}}>                    
                    <div style={{ width: `${100 / (this.state.roundCount)}%`, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>          
                        {this.state.leagueTeams.map(item => 
                            (item.round1 & !round1Opponents.includes(item.teamName) ? (<>{round1Switch(item.round1Opponent)}         
                            <Button variant="contained" sx={{width: '50%'}}>{item.teamName}</Button>
                            <Button variant="contained" sx={{width: '50%'}}>{item.round1Opponent}</Button></>) : ''))} 
                    </div>
                    {/* <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '800px', marginBottom: '100px'}}>

                     </div>   */}
                    <div style={{ width: `${100 / this.state.roundCount}%`, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        {this.state.leagueTeams.map(item => 
                            (item.round2 & !round2Opponents.includes(item.teamName) ? (<>{round2Switch(item.round2Opponent)}                    
                            <Button variant="contained" sx={{width: '50%'}}>{item.teamName}</Button>
                            <Button variant="contained" sx={{width: '50%'}}>{item.round2Opponent}</Button></>) : ''))}
                    </div>
                    <div style={{ width: `${100 / this.state.roundCount}%`, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        {this.state.leagueTeams.map(item => 
                            (item.round3 & !round3Opponents.includes(item.teamName) ? (<>{round3Switch(item.round3Opponent)}        
                            <Button variant="contained" sx={{width: '50%'}}>{item.teamName}</Button>
                            <Button variant="contained" sx={{width: '50%'}}>{item.round3Opponent}</Button></>) : ''))}
                    </div>
                </div>
            </Container>
        )}
    }
}