import React, { Suspense } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Iphone";

declare global {
  interface Window {
    mplAndroidView: any;
    openingFromAndroid: any;
  }
}

export default function MediaCard() {
  React.useEffect(() => {
    if ("undefined" !== typeof window.openingFromAndroid) {
      alert("android is calling web");
    }
  }, []);

  const handleOpento = () => {
    console.log("OPEN_GAME_TO");
    if ("undefined" !== typeof window.mplAndroidView)
      try {
        console.log("Inside Try Block");
        window.mplAndroidView.performAction("OPEN_GAME2");
      } catch (er: any) {
        console.log("anroid-error");
        console.log(er.message);
      }
  };

  const handleOpen = () => {
    console.log("OPEN_GAME");
    if ("undefined" !== typeof window.mplAndroidView)
      try {
        console.log("Inside Try Block");
        window.mplAndroidView.performAction("OPEN_GAME");
      } catch (er: any) {
        console.log("anroid-error");
        console.log(er.message);
      }
  };

  const handleClose = () => {
    console.log("CLOSE");
    if ("undefined" !== typeof window.mplAndroidView)
      try {
        console.log("Inside Try Block");
        window.mplAndroidView.performAction("CLOSE");
      } catch (er: any) {
        console.log("anroid-error");
        console.log(er.message);
      }
  };

  return (
    <Card sx={{ width: 350, height: 300, margin: 0.5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          lorem
        </Typography>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" onClick={handleClose}>
          Close
        </Button>
        <Button size="small" onClick={handleOpen}>
          Open Game
        </Button>
        <Button size="small" onClick={handleOpento}>
          Open Game2
        </Button>
      </CardActions>
    </Card>
  );
}
