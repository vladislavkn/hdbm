import Filter from "@components/Filter";
import { makeStyles, Theme } from "@material-ui/core";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import { RoomFilterRecord } from "@root/lib/types";
import { useState } from "react";
import SearchRoomsResults from "./SearchRoomsResults";

const useStyles = makeStyles((theme: Theme) => ({
  filterResults: {
    paddingTop: theme.spacing(4),
  },
}));

const SearchRoomsBundle = () => {
  const classes = useStyles();
  const [filterRecord, setFilterRecord] = useState<RoomFilterRecord>(
    fakeDefaultFilterRecord
  );

  return (
    <>
      <Filter
        onChange={setFilterRecord}
        defaultRecord={fakeDefaultFilterRecord}
      />
      <div className={classes.filterResults}>
        <SearchRoomsResults filterRecord={filterRecord} />
      </div>
    </>
  );
};

export default SearchRoomsBundle;
