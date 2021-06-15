import {
  Box,
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
  href: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 128,
    width: 128,
    borderRadius: 16,
    [theme.breakpoints.down("sm")]: {
      width: 84,
      height: 84,
    },
  },
  content: {
    padding: theme.spacing(1),
  },
  title: {
    fontWeight: 500,
    lineHeight: "1.2",
    textAlign: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: 128,
    cursor: "pointer",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: 84,
    },
  },
}));

const WayCard = (props: WayCardProps) => {
  const classes = useStyles();
  const {
    way: { image, title },
    href,
  } = props;

  return (
    <Link href={href}>
      <Box className={classes.container}>
        <CardMedia image={image} className={classes.media} />
        <Box className={classes.content}>
          <Typography
            variant="subtitle1"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default WayCard;
