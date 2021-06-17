import Filter from "@components/Filter";
import {
  makeStyles,
  Theme,
  Typography,
  ButtonBase,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Section from "@components/Section";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import { RoomFilterRecord } from "@root/lib/types";
import { useState, useReducer } from "react";
import SearchRoomsResults from "./SearchRoomsResults";
import { joinClasses } from "@root/lib/utils";

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

type SearchRoomsSectionProps = {
  title: string;
};

const SearchRoomsSection = ({ title }: SearchRoomsSectionProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filterRecord, setFilterRecord] = useState<RoomFilterRecord>(
    fakeDefaultFilterRecord
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
        <Filter
          onChange={setFilterRecord}
          defaultRecord={fakeDefaultFilterRecord}
        />
      </div>
      <div className={joinClasses(isFilterShown && classes.filterResults)}>
        <SearchRoomsResults filterRecord={filterRecord} />
      </div>
    </Section>
  );
};

export default SearchRoomsSection;
