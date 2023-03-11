import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import AnimeDetails from './AnimeDetails';
import { useState } from 'react'

function AnimeCard() {
    const [showDetails, setShowDetails] = useState(false);

    const handleOpen = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <Card sx={{ maxWidth: 225 }} onClick={() => handleOpen()}>
                <CardMedia
                    sx={{ width: 225, height: 318 }}
                    image="https://cdn.myanimelist.net/images/anime/7/53549.jpg"
                    title="Nagi no Asu kara"
                />
                <CardContent>
                    <Typography>
                        Nagi no Asu kara
                    </Typography>
                </CardContent>
            </Card>
            <AnimeDetails
                open={showDetails}
                handleCloseDialog={() => setShowDetails(false)}
            />
        </>
    )
}

export default AnimeCard