import Sidbar from "./components/Sidbar";
import Righrbar from "./components/Righrbar";
import Navbarr from "./components/Navbarr";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { useState } from "react";
function App() {
  const [drawerType, setDrawerType] = useState("permanent");
  const [noneORblock, setnoneORblock] = useState("none");
  const [mode,setMode]= useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
<Box  bgcolor={"background.default"} color={"text.primary"}>
      {/* الحمدلله */}
      <Box>
        <Navbarr   setnoneORblock={setnoneORblock} setDrawerType={setDrawerType} />
        <Stack
        direction="row"
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems:"center",
          }}
        >
          <Sidbar setMode={setMode} mode={mode} 
          noneORblock={noneORblock}
          drawerType={drawerType}
          setnoneORblock={setnoneORblock}
          setDrawerType={setDrawerType}
          />
          <Feed />
          <Righrbar />
          <Add/>
        </Stack>
      </Box>
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
