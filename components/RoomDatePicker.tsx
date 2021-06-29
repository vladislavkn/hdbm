import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useTheme } from "@material-ui/core";

type RoomDatePickerProps = {
  startDate: Date;
  endDate: Date;
  checkIsDayDisabled: (day: Date) => boolean;
  onSelect: (dateRange: DateRange) => void;
};

const RoomDatePicker = (props: RoomDatePickerProps) => {
  const { checkIsDayDisabled, onSelect, startDate, endDate } = props;
  const theme = useTheme();

  return (
    <DateRange
      ranges={[{ startDate, endDate, key: "selection" }]}
      onChange={(selections) => onSelect(selections.selection)}
      disabledDay={checkIsDayDisabled}
      showMonthAndYearPickers={false}
      rangeColors={[theme.palette.primary.main]}
    />
  );
};

export default RoomDatePicker;
