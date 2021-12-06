const Protected = ({ children, redirect }) => {
  return 11 > 10 ? children : redirect;
};

export default Protected;

//here check whether localStorage has token
