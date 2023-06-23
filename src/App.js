import {useState} from 'react';
import {getUsers, search} from './api/users';
import './App.css';
import Pagination from './components/pagination';
import Cardview from './components/card_view';
import SearchBar from './components/search_bar';
import SearchBarTeams from './components/search_bar_teams';
import { showAvailable } from './api/users';
import Teams from './components/Teams';
import { domainTags } from './api/users';


function App() {
  const [users, setUsers]= useState({'user_data':getUsers(1, 20),
                                      'limit':20});
  const [tab, setTab] = useState(0);
  const [usersTeams,setUsersTeams] = useState([]);
  const [domain, setDomain] = useState(domainTags());
  // const [team, setTeam] = useState({});  



  function getDomains(param){
    setUsersTeams(showAvailable(param));
  }
                                      
  function navBar(senpai){
    setUsers({'user_data':getUsers(senpai, users.limit),'limit':users.limit});
  }

  function changeLimit(limit){
    setUsers({'user_data':getUsers(1, limit),'limit':limit});
  }

  function Search(data){
    console.log(data)
    console.log(search(data));

    setUsers({'user_data':getUsers(1, users.limit),'limit':users.limit})
  }

  function changeTab(){
    setTab(!tab);
  }

  return (
    <div className="container">
    {tab==0?(<>
    <SearchBar search={Search} changeTab={changeTab}/>
    <Cardview users={users.user_data}/>
    <Pagination  breadCrumbs={navBar} data={users.limit} changeLimit={changeLimit}/>
    </>):(<>
      <SearchBarTeams changeTab={changeTab} domain={domain} getDomains={getDomains}/>
      <Teams usersTeams={usersTeams}></Teams>
    </>)}
  </div>  
  );
}

export default App;
