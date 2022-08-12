
import * as React from 'react';
import LeagueViewPage from './LeagueViewPage'

import { useLocation } from "react-router-dom";

export default function LeagueViewGate (props) {  
     const params = useLocation();
     let pathname = params.pathname;
     console.log(pathname)
     var urlString = pathname.substring(1);
     var profileToGet =  urlString.replace('%20', ' ');
     console.log(profileToGet)
    return (
        <> 
        <LeagueViewPage leagueName={profileToGet}/>                        
        </>
    )  
}  