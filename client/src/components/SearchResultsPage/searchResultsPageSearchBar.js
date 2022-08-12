import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';
import SearchSuggestions from './searchSuggestions'


export default class SearchPageSearchBar extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        renderChild: true,
        searchInput: '',
        newInput: 'false',        
        results: []
      }
  }


    handleChildUnmount = () => {
          this.setState({renderChild: false})
    }

  delay = ms => new Promise(res => setTimeout(res, ms));

  delayFunction = async () => {
    await this.delay(500);
  };
  onInputChange = async (event) => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value, newInput: false})
    await this.delayFunction()
    this.setState({newInput: true, renderChild: true})

  }


  render() {
    return (
      <>
        <FormControl fullWidth variant="outlined"     
          sx={{
            zIndex: 10,
            mt: 15,
            // mb: 15,
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '0px',
            paddingRight: '0px',
            width: '100%',
            maxWidth: '100%',
            backgroundColor: '#042a2b',
            borderRadius: '10px',
            border: '1px solid #ffffff',
          }}>

          <OutlinedInput            
            // value={}
            // onChange={}
            startAdornment={<InputAdornment position="start"><SearchIcon sx={{ color: '#ffffff' }} />      
            </InputAdornment>}
            onChange={this.onInputChange} 
            // label="Search"
            placeholder="Search"
            sx={{ color: '#ffffff'}}
          />
          {/* {(this.state.renderChild && this.state.newInput) && this.state.searchInput.length > 2 ? <SearchSuggestions searchInput={this.state.searchInput} unmountMe={this.handleChildUnmount}/> : ''} */}
        </FormControl>
        {(this.state.renderChild && this.state.newInput) && this.state.searchInput.length > 2 ? <SearchSuggestions searchInput={this.state.searchInput} unmountMe={this.handleChildUnmount}/> : ''}
         
  </>
  );
  }

}