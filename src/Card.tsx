import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  let mplAndroidView: any;
  const handleOpen = () => {
    let mplAndroidView: any;
    try {
      mplAndroidView.performAction("OPEN_GAME");
    } catch (er: any) {
      console.log("anroid-error");
      console.log(er.message);
    }
  };

  const handleClose = () => {
    try {
      mplAndroidView.performAction("CLOSE");
    } catch (er: any) {
      console.log("anroid-error");
      console.log(er.message);
    }
  };

  return (
    <Card sx={{ width: 261, height: 172, margin: 0.5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          lorem
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" onClick={handleClose}>
          Close
        </Button>
        <Button size="small" onClick={handleOpen}>
          Open Game
        </Button>
      </CardActions>
    </Card>
  );
}
