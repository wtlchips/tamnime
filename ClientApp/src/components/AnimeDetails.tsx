import { AppBar, Box, Dialog, Divider, IconButton, ListItem, Slide, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

type DetailsProps = {
    open: boolean
    handleCloseDialog: (value: React.SetStateAction<boolean>) => void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AnimeDetails = ({ open, handleCloseDialog }: DetailsProps) => {
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
                            Nagi no asu kara
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
                        <img src="https://cdn.myanimelist.net/images/anime/7/53549.jpg" alt="Nagi no Asu kara" style={{ width: 225, height: 318, paddingBottom: 10 }} />
                        <Stack spacing={-1} divider={<Divider orientation="horizontal" flexItem />}>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Score:</Typography>
                                <Typography variant="body2">7.98</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Episodes:</Typography>
                                <Typography variant="body2">26</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Status:</Typography>
                                <Typography variant="body2">Finished Airing</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Aired:</Typography>
                                <Typography variant="body2">Oct 3, 2013 to Apr 3, 2014</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Studios:</Typography>
                                <Typography variant="body2">P.A. Works</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Source:</Typography>
                                <Typography variant="body2">Original</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Genres:</Typography>
                                <Typography variant="body2">Drama, Fantasy, Romance</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline" marginRight={1}>Duration:</Typography>
                                <Typography variant="body2">23 min. per ep.</Typography>
                            </ListItem>
                        </Stack>
                    </Stack>
                    <Typography variant="overline" display="block">Synopsis</Typography>
                    Long ago, all humans lived beneath the sea. However, some people preferred the surface and abandoned living underwater permanently. As a consequence, they were stripped of their god-given protection called "Ena" which allowed them to breathe underwater. Over time, the rift between the denizens of the sea and of the surface widened, although contact between the two peoples still existed. Nagi no Asu kara follows the story of Hikari Sakishima and Manaka Mukaido, along with their childhood friends Chisaki Hiradaira and Kaname Isaki, who are forced to leave the sea and attend a school on the surface. There, the group also meets Tsumugu Kihara, a fellow student and fisherman who loves the sea. Hikari and his friends' lives are bound to change as they have to deal with the deep-seated hatred and discrimination between the people of sea and of the surface, the storms in their personal lives, as well as an impending tempest which may spell doom for all who dwell on the surface. [Written by MAL Rewrite]
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