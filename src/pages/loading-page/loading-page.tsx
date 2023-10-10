import styles from './styles.module.css'
import { RingLoader } from "react-spinners";

export default function LoadingPage(): JSX.Element {
  return <div className={styles.spinnerContainer}>
    <RingLoader color="#272828" size={500} speedMultiplier={0.5} />
  </div>;
}
