import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useTheme } from "@material-ui/core";
import { DateRange as DateRangeType } from "@root/lib/types";

type RoomDatePickerProps = {
  dateRange: DateRangeType;
  checkIsDayDisabled: (day: Date) => boolean;
  onSelect: (dateRange: DateRange) => void;
};

const RoomDatePicker = (props: RoomDatePickerProps) => {
  const {
    checkIsDayDisabled,
    onSelect,
    dateRange: { startDate, endDate },
  } = props;
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
