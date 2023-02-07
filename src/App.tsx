import { useState } from 'react';
import styles from './App.module.scss';
import searchsvg from "./assets/search.svg";
import { GetUserDetail } from './components/GetUserDetail';
import { getUsernameSearch } from './components/getUsernameSearch';
import { LoadingPage } from './components/LoadingPage';
import { showresults } from './components/showresults';

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
  const usernamesearch = getUsernameSearch(setShowDetail, username, setName, setHandle, setBio, setAvatarUrl, setFollowers, setFollowing, setgithublink, setPublicrepos, setjoindate, setShowResults, setRepos)
  const Results = showresults(setShowDetail, avatar_url, name, handle);
  const Loading = LoadingPage();
  const UserDetail = GetUserDetail(githublink, avatar_url, joindate, name, handle, bio, public_repos, followers, following, repos);

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
