import Page from '../components/Page'
import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import moment from 'moment'
import Link from 'next/link'

export default class Index extends Component {
  static async getInitialProps() {
    const stories = await fetch(
      'https://hacker-news.firebaseio.com/v0/beststories.json'
    )
    const jsonIDs = await stories.json()
    const storiesData = await Promise.all(
      jsonIDs.slice(0, 20).map(id =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        ).then(res => res.json())
      )
    )
    return { storiesData }
  }

  render() {
    return (
      <Page title="Welcome">
        <div>
          {this.props.storiesData.map((story, index )=> (
            <div key={index}>
              <b><a target="_blank" href={story.url}>{story.title}</a></b>
              <div>
                {' '}
                <i>{moment(story.time).format('MMM Do YY')}</i>
                {' '}
                <Link prefetch href={{ pathname: '/item', query: { id: story.id } }}><a>more!</a></Link>
                <style jsx>{`
                  font-size: small
                `}</style>
              </div>
            </div>
          ))}
        </div>
      </Page>
    )
  }
}
