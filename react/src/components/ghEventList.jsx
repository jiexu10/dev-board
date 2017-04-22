import React from 'react';
import {render} from 'react-dom';
import Firebase from 'firebase';

export default class GhEventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lists: []
    }

    this.createItem = this.createItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  loadListsFromServer(){
    var config = {
      apiKey: "AIzaSyBhi9VrRiukZtuN2z4kbR8Kv836jxp4H4Y",
      authDomain: "dev-board-971fe.firebaseapp.com",
      databaseURL: "https://dev-board-971fe.firebaseio.com",
      projectId: "dev-board-971fe",
      storageBucket: "dev-board-971fe.appspot.com",
      messagingSenderId: "530680591035"
    };
    var firebase = new Firebase.initializeApp(config);

    var data = [];
    let ref = firebase.database().ref("gh_events");
    ref.on('value', (snapshot) => {
      var listsObj = snapshot.val();
      for(var i in listsObj)
        data.push({key: i, value: listsObj[i]});
      this.setState({lists: data});
      console.log(this);
    });
  }

  handleClick(event){
    this.props.onListClicked(event);
  }

  componentDidMount(){
    this.loadListsFromServer();
  }

  createItem(item){
    return(
      <li key={item.key}>
        {item.value}
      </li>
    )
  }

  render(){
    return(
      <div>
        <section>
          <ul className='gh-event-lists'>
            {this.state.lists.map(this.createItem)}
          </ul>
        </section>
      </div>
    )
  }

}
