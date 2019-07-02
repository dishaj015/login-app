
export const myValidator = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = "Your Password can't be that short!";
  }
  if (!values.Username) {
    errors.Username = 'Hold on a minute, we need an Username!';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.Username)) {
    // use a more robust RegEx in real-life scenarios
    errors.Username = 'Valid email please!';
  }
  return errors;
};