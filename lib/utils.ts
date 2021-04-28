export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");
