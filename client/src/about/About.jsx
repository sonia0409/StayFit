import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function About() {
  return (
    <div>
      <div>
        <h2>Team StayFit</h2>
        <br/>
        <div>"Our common interest towards healthy lifestyle bring us together as a team. 
          We are happy to introduce an app that keep track of the workout routines"</div>
      </div>
      <Stack direction="row" spacing={18} sx={{ justifyContent: 'center' }}>
        <div className="sonia">
          <Avatar alt="Sonia Singh" src="https://avatars.githubusercontent.com/u/89619373?v=4"
            sx={{ width: 200, height: 200 }} />
          <div className="description">
            <h2>Sonia Singh </h2>
            <a href="https://github.com/sonia0409"><GitHubIcon/> Github</a>
            <br/>
            <a href="https://www.linkedin.com/in/soniasingh0409/"><LinkedInIcon/> LinkedIn</a>
          </div>
        </div>
        <div className="olga">
          <Avatar alt="Olga Shilenkova" src="https://avatars.githubusercontent.com/u/74125403?v=4"
            sx={{ width: 200, height: 200 }} />
          <div className="description">
            <h2>Olga Shilenkova</h2>
            <a href=""><GitHubIcon/> Github</a>
            <br/>
            <a href=""><LinkedInIcon/> LinkedIn</a>
          </div>
        </div>
        <div className="nikhil">
          <Avatar alt="Nikhil Tallapureddy" src="https://avatars.githubusercontent.com/u/92130139?v=4"
            sx={{ width: 200, height: 200 }} />
          <div className="description">
            <h2>Nikhil Tallapureddy </h2>
            <a href=""><GitHubIcon/> Github</a>
            <br/>
            <a href=""><LinkedInIcon/> LinkedIn</a>
          </div>
        </div>
      </Stack>
    </div>
  );
}