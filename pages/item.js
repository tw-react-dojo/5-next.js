import Page from '../components/Page'
import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

export default class Item extends Component {

  static async getInitialProps({query}) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${query.id}.json`
    )
    const item = await response.json()
    return item
  }

  render() {
    return (
      <Page title="Welcome">
        <div>
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
          <i>{moment(this.props.time).format('MMM Do YY')}</i>
        </div>
      </Page>
    )
  }
}
