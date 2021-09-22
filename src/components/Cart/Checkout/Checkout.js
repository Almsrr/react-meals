import styles from "./Checkout.module.css";

function Checkout(props) {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label id="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label id="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={styles.control}>
        <label id="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label id="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label id="city">City</label>
        <input type="text" id="city" />
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
