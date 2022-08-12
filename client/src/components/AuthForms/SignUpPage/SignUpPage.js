import * as React from "react";
import SignUp from "./SignUp";
import Redirect from "./Redirect";
import Box from "@mui/material/Box";

export default function SignUpPage() {
    return (
        <Box sx={{ //To flex both components in a row 
            display: 'flex',
            flexDirection: 'row',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            m: 'auto',
            padding: '0 5rem',
            bgcolor: 'rgba(4, 42, 43, 0.9)',
            pb: 20, //Space footer away 
            px: 5           
        }}> 
            <SignUp />
            <Redirect />
        </Box>
    );
};