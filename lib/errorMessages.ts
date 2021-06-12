const createErrorMessages = ({
  minLength,
  maxLength,
}: {
  minLength?: number;
  maxLength?: number;
}) => ({
  maxLength: `Максимальная длина ${maxLength} символов`,
  minLength: `Минимальная длина ${minLength} символов`,
  required: "Это поле обязательно",
  pattern: "Поле не соответствует формату",
});

export default createErrorMessages;
