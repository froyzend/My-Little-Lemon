import InputMask from "react-input-mask";

const PhoneNumberInput = ({ field }) => (
  <InputMask {...field} mask="(999) 999-9999" placeholder="(xxx) xxx-xxxx" />
);

export default PhoneNumberInput;
