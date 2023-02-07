import axios from 'axios';
import dayjs from "dayjs";
import { useState } from 'react';
import styles from './App.module.scss';
import chevron from "./assets/chevron-right.svg";
import searchsvg from "./assets/search.svg";
import idle from "./assets/searchlarge.svg";
import cardstyles from './cards.module.scss';
import { UserDataRes } from "./types/types";
import colorsJson from "./assets/github-lang-colors.json"

function joinedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Ingressou em ${date.format("DD MMM YYYY")}`
  return formatDate;
}

function CreatedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Criado em ${date.format("DD MMM YYYY")}`
  return formatDate;
}

function UpdatedDate(ISO: string): string {
  const date = dayjs(ISO);
  const formatDate = `Atualizado em ${date.format("DD MMM YYYY")}`
  return formatDate;
}



function App() {
  const [username, setUsername] = useState("");
  const [handle, setHandle] = useState("Aguardando...");
  const [name, setName] = useState("Aguardando");
  const [avatar_url, setAvatarUrl] = useState("Aguardando");
  const [bio, setBio] = useState("Aguardando");
  const [followers, setFollowers] = useState("Aguardando");
  const [following, setFollowing] = useState("Aguardando");
  const [public_repos, setPublicrepos] = useState("Aguardando");
  const [showResults, setShowResults] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [joindate, setjoindate] = useState("Aguardando");
  const [githublink, setgithublink] = useState("Aguardando");
  const [repos, setRepos] = useState();
  
  const usernamesearch = () => {
    
    setShowDetail(false);

    axios
    .get<UserDataRes>(`http://api.github.com/users/${username}`)
    .then((res) => {
      setName(res.data.name);
      setHandle(username);
      setBio(res.data.bio);
      setAvatarUrl(res.data.avatar_url);
      setFollowers(res.data.followers);
      setFollowing(res.data.following);
      setgithublink(res.data.html_url);
      setPublicrepos(res.data.public_repos);
      setjoindate(joinedDate(res.data.created_at));
      setShowResults(true);
    });

    axios
    .get(`http://api.github.com/users/${username}/repos`)
    .then((res) => {
      const list = res.data.map((item : any) => (
        <a href={item.html_url}>
          <div key={item.id} className={cardstyles.RepoCard}> 
            <a href={item.html_url}>{item.name}</a>
            <span className={cardstyles.Description}>{item.description}</span>
              <span className={cardstyles.LangDot}></span>
              <span className={cardstyles.Language}> {item.language}</span>
              <div className={cardstyles.RepoDaterapper}>
                <p>{CreatedDate(item.created_at)}</p>
                <p>{UpdatedDate(item.updated_at)}</p>
              
            </div>
          </div>
        </a>
      ));
      setRepos(list)
      });   

  }

  const Results = () => (
    <div id="results" className={styles.usernamelist}>
        <div onClick={() => { setShowDetail(true) } } className={cardstyles.Indexcard}>
          <img className={cardstyles.in_avi} src={avatar_url} alt="user avatar" />
          <div className={cardstyles.namelist}>
            <span className={cardstyles.in_name}>{name} <br></br>
            <span className={cardstyles.in_username}>@{handle}</span> </span>
          </div>
          <img className={cardstyles.chevron} src={chevron} alt="arrow to the right"/>
      </div> 
    </div>
  );

  const Loading = () => (
    <div id="detailresult" className={styles.Loading}> 
      <span>PESQUISE UM PERFIL DO GITHUB</span>
      <img src={idle} alt="" />
    </div>
  );

  const UserDetail = () => (
    <div id="detailresult"> 
      <h3>Detalhes do Perfil</h3>
      <a href={githublink}>
        <div className={cardstyles.UserDetail}>
          <img className={cardstyles.Avatar} src={avatar_url} alt="User Avatar" />
          <div className={cardstyles.Userdata}>
            <span className={cardstyles.joindate}>{joindate}</span>
            <h1>{name}</h1>
            <h2>@{handle}</h2>
            <span>{bio}</span>
            
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


  return (
    <div className="App">
      <div className={styles.sidebar}>
        <h1>Encontrar Dev</h1>  
        <div className={styles.searchbox}>
          <img src={searchsvg} alt="icone de busca"/>
          <div className={styles.searchtext}>
            <input 
              type="text" 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="GitHub username..."/>
            </div> 
          <button 
            id="srcbtn" 
            onClick={usernamesearch}
            className={styles.searchbutton}>
              Buscar
            </button>
        </div>
        { showResults ? <Results /> : null }
      </div>

      <div className={styles.MainContainer}>
        { showDetail ? <UserDetail /> : <Loading /> }
      </div>
    </div>
  );
}

export default App;