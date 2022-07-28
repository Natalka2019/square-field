import styles from "./styles.module.css";

const ErrorFallback: React.FC = () => {
  return (
    <div className={styles.ErrorFallback}>
      <h2>Oops!!! Something went wrong!</h2>
    </div>
  );
};

export default ErrorFallback;
