import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2', contrastText: '#fff' },
    secondary: { main: '#757575' },
    background: { default: '#f5f5f5', paper: '#fff' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } } },
    MuiCard: { styleOverrides: { root: { transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' } } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 8, textTransform: 'none' } } },
  },
});

export default theme;