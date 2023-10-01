import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

const Video =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80X";

const CardComp = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={Video} alt="video" />
      <CardHeader
        //   avatar={
        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //       R
        //     </Avatar>
        //   }
        //   action={
        //     <IconButton aria-label="settings">
        //       <MoreVertIcon />
        //     </IconButton>
        //   }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
};

export default CardComp;
