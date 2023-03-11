import { AppBar, alpha, styled, Toolbar, Typography, Box, Menu, MenuItem } from "@mui/material"
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import React from 'react'
import { ReactElement } from 'react'

type NavbarProps = {
  title: string
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>
  mode: "light" | "dark"
}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '50%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

const Navbar = ({ title, setMode, mode }: NavbarProps): ReactElement => {
  const [anchorElSettings, setAnchorElSettings] = React.useState<null | HTMLElement>(null);

  const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElSettings(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>{title}</Typography>
        <TvIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Icons>
          <IconButton color="inherit" onClick={handleOpenSettingsMenu}>
            <SettingsIcon></SettingsIcon>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElSettings}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElSettings)}
            onClose={handleCloseSettingsMenu}
          >
            <MenuItem>
              <DarkModeIcon></DarkModeIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}></Switch>
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
