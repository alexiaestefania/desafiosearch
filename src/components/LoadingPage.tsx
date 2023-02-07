import styles from '../App.module.scss';
import idle from "../assets/searchlarge.svg";

export function LoadingPage() {
  return () => (
    <div id="detailresult" className={styles.Loading}>
      <span>PESQUISE UM PERFIL DO GITHUB</span>
      <img src={idle} alt="" />
    </div>
  );
}
