import { Box } from "@mui/material";
import "./App.css";
import asset from "./asset_image.png";
import MediaCard from "./Card";

function App() {
  return (
    <div className="App">
      <div className="main">
        <img className="img" src={asset} alt="asset" />
        <h1>P2E</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Box>
      </div>
    </div>
  );
}

export default App;
