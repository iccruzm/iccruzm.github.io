import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';

function App() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Card>
					<CardMedia
						component="img"
						alt="Corazón latiendo"
						height="300"
						image="corazon1.gif"
						title="Corazón latiendo"
					/>
					<CardContent>
						<Typography variant="h2" component="h2">
							Karen, eres mi corazón
						</Typography>
						<Typography variant="body1" component="p">
							Te quiero más que ayer, pero menos que mañana.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardMedia
						component="img"
						alt="Estrella brillante"
						height="150"
						image="estrella.gif"
						title="Estrella brillante"
					/>
				</Card>
			</Grid>
			<Grid item xs={6}>
				<Card>
					<CardMedia
						component="img"
						alt="Fuego ardiente"
						height="150"
						image="fuego.gif"
						title="Fuego ardiente"
					/>
				</Card>
			</Grid>
		</Grid>
	);
}

export default App;