import { Alert } from "@material-ui/lab";

type DisplayErrorProps = {
  message: string;
};

const DisplayError = ({ message }: DisplayErrorProps) => (
  <Alert severity="error">
    Ошибка:{" "}
    <p style={{ display: "inline", fontFamily: "monospace" }}>{message}</p>
  </Alert>
);

export default DisplayError;
