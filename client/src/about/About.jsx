import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.scss';



export default function About() {
  return (
    <div className='about-page'>
      <div className='heading'>
        <h2>Team StayFit</h2>
        <br />
        <div>"Our common interest in healthy lifestyle bought us together as a team.
          We are happy to introduce an app that keep track of the workout routines"</div>
      </div>
      <div className='team-info'>
        <Stack direction="column" spacing={2} sx={{ marginTop: '1rem', justifyContent: 'center' }}>
          <div className="person">
            <Avatar alt="Sonia Singh" src="https://avatars.githubusercontent.com/u/89619373?v=4"
              sx={{ width: 125, height: 125 }} />
            <div className="description">
              <div className='name'>Sonia Singh &nbsp; 
              <a href="https://github.com/sonia0409" ><GitHubIcon /> Github</a> &nbsp; 
              <a href="https://www.linkedin.com/in/soniasingh0409/"><LinkedInIcon /> LinkedIn</a></div>
              <div>Sonia is a web developer, and passionate about creating user friendly web application.</div>
            </div>
          </div>
          <div className="person">
      
            <Avatar alt="Olga Shilenkova" src="https://avatars.githubusercontent.com/u/74125403?v=4"
              sx={{ width: 125, height: 125 }} />

            <div className="description">
              <div className='name'>Olga Shilenkova &nbsp; <a href="https://github.com/OlgaShilenkova"><GitHubIcon /> Github</a>
              &nbsp; <a href=""><LinkedInIcon /> LinkedIn</a></div>
              <div>Olga Shilenkova is a Full Stack Web Developer, also has background in professional sport.She really enjoys adding new features to the front-end.
              </div>
            </div>
          </div>
          <div className="person">
            <Avatar alt="Nikhil Tallapureddy" src="https://avatars.githubusercontent.com/u/92130139?v=4"
              sx={{ width: 125, height: 125 }} />
            <div className="description">
            <div className='name'>Nikhil Tallapureddy&nbsp;  <a href="https://github.com/snoopy55619819"><GitHubIcon /> Github</a>
              <a href=""><LinkedInIcon /> LinkedIn</a></div>
            <div>Nikhil is a Full Stack Developer. He has a background in Finance and Compliance and looking forward to build products related to financial services.</div>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}