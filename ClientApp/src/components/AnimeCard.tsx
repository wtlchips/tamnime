import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import AnimeDetails from './AnimeDetails';
import { useState } from 'react'

type AnimeCardProps = {
    anime: any
}

function AnimeCard({ anime }: AnimeCardProps) {
    const [showDetails, setShowDetails] = useState(false);

    const handleOpen = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <Card sx={{ maxWidth: 225 }} onClick={() => handleOpen()}>
                <CardMedia
                    sx={{ width: 225, height: 318 }}
                    image={anime['images']['jpg']['image_url']}
                    title={anime['title']}
                />
                <CardContent>
                    <Typography>
                        {anime['title']}
                    </Typography>
                </CardContent>
            </Card>
            <AnimeDetails
                open={showDetails}
                handleCloseDialog={() => setShowDetails(false)}
                anime={anime}
            />
        </>
    )
}

export default AnimeCard