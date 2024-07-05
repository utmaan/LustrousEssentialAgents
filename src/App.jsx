import styled from '@emotion/styled';
import './App.css'

import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit
//       <CardMedia></CardMedia>
//     </main>
//   )
// }

export default function App() {
return (
<Container id="projects" sx={{ py: 4 }}>
<Box
sx={{
textAlign: 'center',
mb: 4,
}}
>
<Typography variant="h4" component="h2" gutterBottom>
Projects
</Typography>
</Box>
<Grid container spacing={3}>
{projects.map((project, index) => (
<Grid item xs={12} sm={6} md={4} key={index}>
<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
<CardMedia
component="img"
height="200"
image={project.imageUrl}
alt={project.title}
/>
<CardContent sx={{ flexGrow: 1 }}>
<Typography gutterBottom variant="h5" component="div">
{project.title}
</Typography>
<Typography variant="body2" color="text.secondary">
<strong>Architect:</strong> {project.architect}
</Typography>
<Typography variant="body2" color="text.secondary">
{/* <LocationOnIcon fontSize="small" /> {project.location} */}
</Typography>
<Typography variant="body2" mt={2}>
{project.description}
</Typography>
</CardContent>
</Card>
</Grid>
))}
</Grid>
</Container>
);
};
 const projects = [
{
title: 'Modern Residence',
description: 'Contemporary design with spacious interiors and eco-friendly features.',
architect: 'John Smith Architects',
location: 'Los Angeles, CA',
imageUrl: 'https://picsum.photos/id/237/200/300', // Placeholder image URL
}]
 const StyledBox = styled('div')(({ theme }) => ({
alignSelf: 'center',
width: '100%',
height: 400,
marginTop: theme.spacing(8),
borderRadius: theme.shape.borderRadius,
outline: '1px solid',
boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
backgroundImage: `url(${'https://architectsgmr.com/img/projects/project-05.webp'})`,
outlineColor: 'hsla(220, 25%, 80%, 0.5)',
backgroundSize: 'cover',
[theme.breakpoints.up('sm')]: {
marginTop: theme.spacing(10),
height: 700,
},
...theme.applyStyles('dark', {
boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
backgroundImage: `url(${'https://architectsgmr.com/img/projects/nighttime.jpg'})`,
outlineColor: 'hsla(210, 100%, 80%, 0.1)',
}),
}));