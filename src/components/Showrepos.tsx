import cardstyles from './cards.module.scss';
import { CreatedDate } from './CreatedDate';
import { UpdatedDate } from './UpdatedDate';

export function Showrepos(res: any, setRepos: any) {
  const list = res.data.map((item: any) => (
    <a href={item.html_url}>
      <div key={item.id} className={cardstyles.RepoCard}>
        <a href={item.html_url}>{item.name}</a>
        <span className={cardstyles.Description}>{item.description}</span>
        <span className={cardstyles.LangDot}> </span>
        <span className={cardstyles.Language}> {item.language}</span>
        <div className={cardstyles.RepoDaterapper}>
          <p>{CreatedDate(item.created_at)}</p>
          <p>{UpdatedDate(item.updated_at)}</p>

        </div>
      </div>
    </a>
  ));
  setRepos(list);
}
