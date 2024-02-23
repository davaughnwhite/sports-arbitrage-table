import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import ArbsTable from "./components/ArbsTable";

const AppContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Arbs Table
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ my: 2 }}>
          <Paper>
            <ArbsTable />
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default AppContainer;
