import cardstyles from './cards.module.scss';

export function GetUserDetail(githublink: string, avatar_url: string, joindate: string, name: string, handle: string, bio: string, public_repos: string, followers: string, following: string, repos: undefined) {
  return () => (
    <div id="detailresult">
      <h3>Detalhes do Perfil</h3>
      <a href={githublink}>
        <div className={cardstyles.UserDetail}>
          <img className={cardstyles.Avatar} src={avatar_url} alt="User Avatar" />
          <div className={cardstyles.Userdata}>
            <span className={cardstyles.joindate}>{joindate}</span>
            <h1>{name}</h1>
            <h2>@{handle}</h2>
            <span className={cardstyles.desc}>{bio}</span>

            <div className={cardstyles.UserStats}>
              <div className={cardstyles.StatsGridH}>Repositórios</div>
              <div className={cardstyles.StatsGridH}>Seguidores</div>
              <div className={cardstyles.StatsGridH}>Seguindo</div>
              <div className={cardstyles.StatsGridItem}>{public_repos}</div>
              <div className={cardstyles.StatsGridItem}>{followers}</div>
              <div className={cardstyles.StatsGridItem}>{following}</div>
            </div>
          </div>
        </div>
      </a>

      <h3>Repositórios</h3>
      <div className={cardstyles.UserRepos}>
        {repos}
      </div>
    </div>

  );
}
