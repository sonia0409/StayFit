import React from 'react';
import Box from '@mui/material/Box';

export default function ShowExercise(props) {

    return (
        <li>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 3,
                    fontWeight: 'bold',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 350,
                        width: 350,
                        maxHeight: { xs: 500, md: 300 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="exercise-gif"
                    src={props.gifUrl}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                >
                    <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                    {props.name}
                    </Box>
                    
                </Box>
            </Box>
        </li>
    )
}