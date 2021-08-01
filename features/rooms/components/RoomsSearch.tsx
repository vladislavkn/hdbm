import Filter from "@root/features/rooms/components/RoomFilter";
import {
  makeStyles,
  Theme,
  Typography,
  ButtonBase,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Section } from "@/layout";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import { Room, RoomFilterRecord } from "../types";
import React, { useState, useReducer } from "react";
import { joinClasses } from "@root/lib/utils";
import { FETCH_ROOMS_KEY, fetchRooms } from "../api";
import useSWR from "swr";
import { Loading } from "@/utils";
import RoomsList from "./RoomsList";

const useStyles = makeStyles((theme: Theme) => ({
  filterResults: {
    paddingTop: theme.spacing(4),
  },
  filterHidden: {
    display: "none",
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

type RoomsSearchProps = {
  title: string;
  city?: string;
};

const RoomsSearch = (props: RoomsSearchProps) => {
  const { title, city = fakeDefaultFilterRecord.city } = props;

  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [filterRecord, setFilterRecord] = useState<RoomFilterRecord>({
    ...fakeDefaultFilterRecord,
    city,
  });

  const { data, error } = useSWR<Room[], Error>(
    filterRecord ? [FETCH_ROOMS_KEY, filterRecord] : null,
    (_, filterRecord) => fetchRooms(filterRecord)
  );

  const [isFilterShown, toggleFilterShown] = useReducer(
    (prevState) => !prevState,
    true
  );

  return (
    <Section
      title={title}
      actions={
        <ButtonBase
          disableRipple
          className={classes.button}
          onClick={toggleFilterShown}
        >
          <Typography variant={smallScreen ? "body2" : "subtitle2"}>
            {isFilterShown ? "Скрыть фильтр" : "Показать фильтр"}
          </Typography>
        </ButtonBase>
      }
    >
      <div className={joinClasses(!isFilterShown && classes.filterHidden)}>
        <Filter onChange={setFilterRecord} defaultRecord={filterRecord} />
      </div>
      <div className={joinClasses(isFilterShown && classes.filterResults)}>
        <Loading<Room[]> data={data} error={error}>
          {(data) => <RoomsList rooms={data} />}
        </Loading>
      </div>
    </Section>
  );
};

export default RoomsSearch;
