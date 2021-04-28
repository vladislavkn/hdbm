import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

type WayCardProps = {
  imageUrl: string;
  title: string;
  text: string;
  href: string;
};

const useStyles = makeStyles((_: Theme) => ({
  media: {
    height: 140,
  },
}));

const WayCard = (props: WayCardProps) => {
  const classes = useStyles();
  const { imageUrl, title, text, href } = props;

  return (
    <Link href={href}>
      <Card elevation={0}>
        <CardActionArea>
          <CardMedia image={imageUrl} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default WayCard;
