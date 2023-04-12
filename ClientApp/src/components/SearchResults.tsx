import { Box, Grid } from '@mui/material'
import AnimeCard from './AnimeCard'

type SearchResultsProps = {
    animeList: any[]
}

function SearchResults({ animeList }: SearchResultsProps) {
    console.log(animeList);
    return (
        <Box p={2}>
            <Grid container spacing={2} columnSpacing={2}>
                {animeList.map(anime => (
                    <Grid item><AnimeCard anime={anime}></AnimeCard></Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default SearchResults