import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';
import getGithubInfo from '../utils/helpers';

const base = Rebase.createClass('https://github-note-taker-2a7f0.firebaseio.com');

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }

  componentDidMount(){
    this.init(this.props.params.username)
  }

  componentWillReceiveProps(nextProps){
    base.removeBinding(this.ref)
    this.init(nextProps.params.username)
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  init(username){
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(function(data){
        console.log(data.repos)
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  }

  handleAddNote(newNote){
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }


  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    )

  }
}
export default Profile;