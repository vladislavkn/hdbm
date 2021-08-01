import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useTheme } from "@material-ui/core";
import { DateRange as DateRangeType } from "@root/lib/types";
import { addMonths } from "date-fns";
import { checkDateRange } from "@root/lib/utils";
import { toast } from "material-react-toastify";

type RoomDatePickerProps = {
  dateRange: DateRangeType;
  onSelect: (dateRange: DateRange) => void;
  checkIsDayDisabled?: (day: Date) => boolean;
};

const RoomDatePicker = (props: RoomDatePickerProps) => {
  const {
    checkIsDayDisabled,
    onSelect,
    dateRange: { startDate, endDate },
  } = props;

  const theme = useTheme();
  const handleSelect = ({ selection }) => {
    if (checkIsDayDisabled) {
      if (checkDateRange(selection, checkIsDayDisabled)) onSelect(selection);
      else toast.dark("Вы не можете выбрать эти даты");
    } else onSelect(selection);
  };

  return (
    <DateRange
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      ranges={[{ startDate, endDate, key: "selection" }]}
      onChange={handleSelect}
      disabledDay={checkIsDayDisabled}
      showMonthAndYearPickers={false}
      rangeColors={[theme.palette.primary.main]}
    />
  );
};

export default RoomDatePicker;
