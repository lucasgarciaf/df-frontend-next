import { CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";

interface CardCommentProps {
  avatar: string;
  title: string;
  subheader: string;
}

const CardComment = ({ avatar, title, subheader }: CardCommentProps) => {
  return (
    <Card sx={{ minWidth: 325, borderRadius: 3, padding:".0 0 .5rem 0" }} elevation={3}>
      <CardContent sx={{ padding: "1.4rem 1rem 0rem 2rem" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            marginBottom: "0",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "capitalize",
          }}
        >
          “A quote from a customer.”
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
    </Card>
  );
};

export default CardComment;
