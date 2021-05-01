import Filter from "@components/Filter";
import RoomCard from "@components/RoomCard";
import Layout from "@components/Layout";
import Section from "@components/Section";
import WayCard from "@components/WayCard";
import { Box, colors, makeStyles, Theme } from "@material-ui/core";
import { fakeRoom, fakeWays } from "@root/lib/fake";
import Carousel from "react-material-ui-carousel";
import { RoomFilterRecord } from "@root/lib/types";
import { useState } from "react";
import RoomsSearchResults from "@components/RoomsSearchResults";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(0, -1),
    paddingBottom: theme.spacing(2),
    overflowY: "auto",
    display: "flex",
    "&::-webkit-scrollbar": {
      height: theme.spacing(1),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: colors.grey[300],
      borderRadius: 4,
      "&:active": {
        backgroundColor: colors.grey[400],
      },
    },
  },
  item: {
    padding: theme.spacing(0, 1),
    minWidth: 280,
  },
  filterResults: {
    paddingTop: theme.spacing(4),
  },
}));

const defaultFilterRecord: RoomFilterRecord = {
  from: new Date(),
  to: new Date(),
  places: 0,
  city: "Москва",
};

export default function Home() {
  const classes = useStyles();
  const [filterRecord, setFilterRecord] = useState<RoomFilterRecord>(
    defaultFilterRecord
  );

  return (
    <Layout>
      <Section title="Популярные направления">
        <Carousel animation="slide" autoPlay={false} navButtonsAlwaysInvisible>
          {fakeWays.map((way) => (
            <Box className={classes.item} key={way.id}>
              <WayCard {...way} />
            </Box>
          ))}
        </Carousel>
      </Section>
      <Section title="Подобрать отель" mainHeader noDivider>
        <Filter
          onChange={setFilterRecord}
          defaultRecord={defaultFilterRecord}
        />
        <div className={classes.filterResults}>
          <RoomsSearchResults filterRecord={filterRecord} />
        </div>
      </Section>
    </Layout>
  );
}
