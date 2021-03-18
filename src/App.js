import {useEffect, useState} from "react";
//import modules
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled from 'styled-components'
//import components
import Header from "./components/Header";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
//import DB
import db from "./firebase";
//import authorisation
import {auth} from "./firebase";


function App() {
  //Upload data from database to state
  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  //From my understanding same method as fetch / axios but for Firebase
  const getChannels = () => {
    db.collection('rooms').onSnapshot(snapshot => {
      setRooms(snapshot.docs.map(doc => {
        return {id: doc.id, name: doc.data().name}
      }))
    })
  }
  //Sign out function
  const signOut= () => {
    auth.signOut().then(()=> {
      localStorage.removeItem('user')
      setUser(null)
    })
  }
  //Update data every virtual dom refresh
  useEffect(() => {
    getChannels()
  }, [])

  return (
    <div>
      <Router>
        {
          !user ?
            <Login setUser={setUser}/>
            :
            <Container>
              <Header user={user} signOut={signOut}/>
              <Main>
                <Sidebar rooms={rooms}/>
                <Switch>
                  <Route path='/room/:channelId'>
                    <Chat user={user}/>
                  </Route>
                  <Route path='/'>
                    Select or create channel
                  </Route>
                </Switch>
              </Main>
            </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`