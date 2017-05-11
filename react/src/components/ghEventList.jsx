import React from 'react';
import {render} from 'react-dom';
import Firebase from 'firebase';
import GhEventListItem from './ghEventListItem.jsx';

export default class GhEventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }

    this.createItem = this.createItem.bind(this);
    this.loadSnapshotData = this.loadSnapshotData.bind(this);
  }

  // pull the gh_events ref from Firebase using the config provided here
  loadListFromServer(){
    var config = {
      apiKey: "AIzaSyBhi9VrRiukZtuN2z4kbR8Kv836jxp4H4Y",
      authDomain: "dev-board-971fe.firebaseapp.com",
      databaseURL: "https://dev-board-971fe.firebaseio.com",
      storageBucket: "dev-board-971fe.appspot.com"
    };
    var firebase = new Firebase.initializeApp(config);

    var data = [];
    let ref = firebase.database().ref("gh_events");
    ref.on('value', (snapshot) => {
      this.loadSnapshotData(snapshot.val());
    });
  }

  // store the data from the snapshot into the component state
  loadSnapshotData(snapshotData){
    var data = [];
    var listObj = snapshotData;
    for(var i in listObj)
      data.push({key: i, value: listObj[i]});
    this.setState({list: data});
  }

  componentDidMount(){
    this.loadListFromServer();
  }

  // initialize the accordion element after the components load on page
  componentDidUpdate(){
    var elem = new Foundation.Accordion($('.gh-event-list'));
  }

  // render the child components
  createItem(item){
    return <GhEventListItem key={item.key} data={item.value} />
  }

  // set up the accordion element for each item in the list
  render(){
    return(
      <div className='row'>
        <section>
          <ul className='gh-event-list accordion' data-accordion data-multi-expand='true' data-allow-all-closed='true'>
            {this.state.list.map(this.createItem)}
          </ul>
        </section>
      </div>
    )
  }

}
