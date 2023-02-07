import axios from 'axios';
import { UserDataRes } from "../types/types";
import { joinedDate } from './joinedDate';
import { Showrepos } from './Showrepos';

export function getUsernameSearch(setShowDetail: any, username: string, setName: any, setHandle: any, setBio: any, setAvatarUrl: any, setFollowers: any, setFollowing: any, setgithublink: any, setPublicrepos: any, setjoindate: any, setShowResults: any, setRepos: any) {
  return () => {

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
        Showrepos(res, setRepos);
      });

  };
}


