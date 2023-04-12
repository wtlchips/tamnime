import { AppBar, Box, Dialog, Divider, IconButton, ListItem, Slide, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

type DetailsProps = {
    open: boolean
    handleCloseDialog: (value: React.SetStateAction<boolean>) => void
    anime: any
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AnimeDetails = ({ open, handleCloseDialog, anime }: DetailsProps) => {
    const handleClose = () => {
        handleCloseDialog(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ flex: 1 }} variant="h6" component="div">
                            {anime['title']}
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box p={2}>
                    <Stack sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                        <a href={anime['url']} target="_blank" rel="noopener noreferrer">
                            <img src={anime['images']['jpg']['image_url']} alt={anime['title']} style={{ width: 225, height: 318, paddingBottom: 10 }} />
                        </a>
                        <Stack spacing={-1} divider={<Divider orientation="horizontal" flexItem />}>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Score:</Typography>
                                <Typography variant="body2">{anime['score']}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Episodes:</Typography>
                                <Typography variant="body2">{anime['episodes']}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Status:</Typography>
                                <Typography variant="body2">{anime['status']}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Aired:</Typography>
                                <Typography variant="body2">{anime['aired']['airedString']}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Studios:</Typography>
                                <Typography variant="body2">{anime['studios'].map((item: { [x: string]: any; }) => { return item['name']; }).join(', ')}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Source:</Typography>
                                <Typography variant="body2">{anime['source']}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Genres:</Typography>
                                <Typography variant="body2">{anime['genres'].map((item: { [x: string]: any; }) => { return item['name']; }).join(', ')}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Duration:</Typography>
                                <Typography variant="body2">{anime['duration']}</Typography>
                            </ListItem>
                        </Stack>
                    </Stack>
                    <Typography variant="overline" display="block">Synopsis</Typography>
                    {anime['synposis']}
                    <TextField
                        label="Notes"
                        multiline
                        rows={4}
                        placeholder="Enter personal notes here"
                        fullWidth
                        margin="normal"
                    />
                </Box>
            </Dialog>
        </div>
    )
}

export default AnimeDetails