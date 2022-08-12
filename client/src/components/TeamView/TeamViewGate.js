
import * as React from 'react';
import TeamViewPage from './TeamViewPage'

import { useLocation } from "react-router-dom";

export default function TeamViewGate (props) {  
     const params = useLocation();
     let pathname = params.pathname;
     console.log(pathname)
     var urlString = pathname.substring(1);
     var profileToGet =  urlString.replace('%20', ' ');
     console.log(profileToGet)
    return (
        <> 
        <TeamViewPage teamName={profileToGet}/>                        
        </>
    )  
}  