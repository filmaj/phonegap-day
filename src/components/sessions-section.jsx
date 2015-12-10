import React from 'react'
import { Link } from 'react-router'

class SessionListItem extends React.Component {
  render() {
    let sessionListItem
    let speakerSlug = this.props.session.speakerSlug
    if (typeof this.props.session.speakerSlug !== 'undefined') {
      if(Array.isArray(speakerSlug)){
        speakerSlug = speakerSlug[0]
      }
      sessionListItem = (
        <div>{this.props.session.time}:
          <Link to={"/us2016/speaker/"+speakerSlug}> {this.props.session.title}</Link>
        </div>)
    } else {
      sessionListItem = (<div>{this.props.session.time}: {this.props.session.title}</div>)
    }
    return (
      <li>
      {sessionListItem}
      </li>
    )
  }
}

export default class SessionsSection extends React.Component {
  render() {
    return (
      <section className="schedule-section">
        <div className="text-bounds">
          <h1>{this.props.heading}</h1>
          <ul className="session-list">
            {this.props.sessions.map((session, index) =>
              <SessionListItem key={"session-" + index} session={session}/>
            )}
          </ul>
        </div>
      </section>
    )
  }
}