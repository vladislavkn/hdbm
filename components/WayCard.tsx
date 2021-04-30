import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import Link from "next/link";

type WayCardProps = {
  imageUrl: string;
  title: string;
  text: string;
  href: string;
  objectsCount: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  media: {
    height: 180,
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
    },
  },
  content: {
    padding: theme.spacing(1, 2),
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(-4),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(-4),
      marginRight: theme.spacing(1),
    },
  },
  description: {
    marginBottom: theme.spacing(2),
  },
}));

const WayCard = (props: WayCardProps) => {
  const classes = useStyles();
  const { imageUrl, title, text, href, objectsCount } = props;

  return (
    <Link href={href}>
      <Card elevation={0}>
        <CardActionArea>
          <div className={classes.root}>
            <CardMedia image={imageUrl} className={classes.media} />
            <CardContent>
              <Paper className={classes.content}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.description}
                >
                  {text}
                </Typography>
                <Typography variant="caption" color="primary">
                  {objectsCount} объект
                  {[2, 3, 4].includes(objectsCount % 10)
                    ? "а"
                    : [5, 6, 7, 8, 9, 0].includes(objectsCount % 10)
                    ? "ов"
                    : ""}
                </Typography>
              </Paper>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default WayCard;
