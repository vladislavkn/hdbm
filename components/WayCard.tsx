import {
  Box,
  CardActionArea,
  CardMedia,
  colors,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Way } from "@root/lib/types";
import Link from "next/link";

type WayCardProps = {
  way: Way;
};

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 192,
    borderRadius: 4,
  },
  content: {
    padding: theme.spacing(2, 1),
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    backgroundColor: colors.grey[300],
    margin: "0 4px",
  },
}));

const WayCard = (props: WayCardProps) => {
  const classes = useStyles();
  const { imageUrl, title, text, href, objectsCount } = props.way;

  return (
    <Link href={href}>
      <CardActionArea>
        <CardMedia image={imageUrl} className={classes.media} />
        <Box className={classes.content}>
          <Box className={classes.header}>
            <Typography
              variant="subtitle1"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
            <span className={classes.dot}></span>
            <Typography variant="caption" color="textSecondary">
              {objectsCount} объект
              {[2, 3, 4].includes(objectsCount % 10)
                ? "а"
                : [5, 6, 7, 8, 9, 0].includes(objectsCount % 10)
                ? "ов"
                : ""}
            </Typography>
          </Box>

          <Typography variant="body1" component="p">
            {text}
          </Typography>
        </Box>
      </CardActionArea>
    </Link>
  );
};

export default WayCard;
