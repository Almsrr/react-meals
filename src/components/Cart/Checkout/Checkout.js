import useInput from "../../../hooks/use-input";
import styles from "./Checkout.module.css";

const isEmpty = (str) => str.trim() === "";
const invalidPostalCodeFormat = (str) => str.trim().length < 5;
const invalidEmailFormat = (email) => !email.includes("@");

function Checkout(props) {
  const {
    value: name,
    invalidValue: invalidName,
    invalidInput: invalidNameInput,
    changeInputHandler: changeNameInputHandler,
    blurInputHandler: blurNameInputHandler,
    resetInput: resetNameInput,
  } = useInput(isEmpty);

  // const {
  //   value: email,
  //   invalidValue: invalidEmail,
  //   invalidInput: invalidEmailInput,
  //   changeInputHandler: changeEmailInputHandler,
  //   blurInputHandler: blurEmailInputHandler,
  //   resetInput: resetEmailInput,
  // } = useInput(invalidEmailFormat);

  const {
    value: postalCode,
    invalidValue: invalidPostalCode,
    invalidInput: invalidPostalCodeInput,
    changeInputHandler: changePostalCodeInputHandler,
    blurInputHandler: blurPostalCodeInputHandler,
    resetInput: resetPostalCodeInput,
  } = useInput(invalidPostalCodeFormat);

  const {
    value: street,
    invalidValue: invalidStreet,
    invalidInput: invalidStreetInput,
    changeInputHandler: changeStreetInputHandler,
    blurInputHandler: blurStreetInputHandler,
    resetInput: resetStreetInput,
  } = useInput(isEmpty);

  const {
    value: city,
    invalidValue: invalidCity,
    invalidInput: invalidCityInput,
    changeInputHandler: changeCityInputHandler,
    blurInputHandler: blurCityInputHandler,
    resetInput: resetCityInput,
  } = useInput(isEmpty);

  const invalidForm =
    invalidName || invalidPostalCode || invalidStreet || invalidCity;

  const submitHandler = (event) => {
    event.preventDefault();
    blurNameInputHandler();
    // blurEmailInputHandler();
    blurPostalCodeInputHandler();
    blurStreetInputHandler();
    blurCityInputHandler();

    if (invalidForm) {
      return;
    }
    props.onConfirm({
      name,
      // email,
      postalCode,
      street,
      city,
    });
    resetNameInput();
    // resetEmailInput();
    resetPostalCodeInput();
    resetStreetInput();
    resetCityInput();
  };

  const nameClasses = invalidNameInput
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  // const emailClasses = invalidEmailInput
  //   ? `${styles.control} ${styles.invalid}`
  //   : `${styles.control}`;
  const postalCodeClasses = invalidPostalCodeInput
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  const streetClasses = invalidStreetInput
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;
  const cityClasses = invalidCityInput
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label id="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={changeNameInputHandler}
          onBlur={blurNameInputHandler}
        />
        {invalidNameInput && (
          <p className={styles.errorText}>Name must be not empty</p>
        )}
      </div>
      {/* <div className={emailClasses}>
        <label id="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={changeEmailInputHandler}
          onBlur={blurEmailInputHandler}
        />
        {invalidEmailInput && <p className={styles.errorText}>Invalid email</p>}
      </div> */}
      <div className={postalCodeClasses}>
        <label id="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postalCode}
          onChange={changePostalCodeInputHandler}
          onBlur={blurPostalCodeInputHandler}
        />
        {invalidPostalCodeInput && (
          <p className={styles.errorText}>Five characters required</p>
        )}
      </div>
      <div className={streetClasses}>
        <label id="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={changeStreetInputHandler}
          onBlur={blurStreetInputHandler}
        />
        {invalidStreetInput && (
          <p className={styles.errorText}>Street must be not empty</p>
        )}
      </div>
      <div className={cityClasses}>
        <label id="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={changeCityInputHandler}
          onBlur={blurCityInputHandler}
        />
        {invalidCityInput && (
          <p className={styles.errorText}>City must be not empty</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
