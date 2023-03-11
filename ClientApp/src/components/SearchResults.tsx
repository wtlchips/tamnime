import { Box, Grid } from '@mui/material'
import AnimeCard from './AnimeCard'

function SearchResults() {
    return (
        <Box p={2}>
            <Grid container spacing={2} columnSpacing={2}>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
                <Grid item><AnimeCard></AnimeCard></Grid>
            </Grid>
        </Box>
    )
}

export default SearchResults