import styles from '../App.module.scss';
import chevron from "../assets/chevron-right.svg";
import cardstyles from './cards.module.scss';

export function showresults(setShowDetail : any, avatar_url: string, name: string, handle: string) {
  return () => (
    <div id="results" className={styles.usernamelist}>
      <div onClick={() => { setShowDetail(true); }} className={cardstyles.Indexcard}>
        <img className={cardstyles.in_avi} src={avatar_url} alt="user avatar" />
        <div className={cardstyles.namelist}>
          <span className={cardstyles.in_name}>{name} <br></br>
            <span className={cardstyles.in_username}>@{handle}</span> </span>
        </div>
        <img className={cardstyles.chevron} src={chevron} alt="arrow to the right" />
      </div>
    </div>
  );
}
