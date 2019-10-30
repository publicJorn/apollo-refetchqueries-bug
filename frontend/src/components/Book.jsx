import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Link } from 'react-router-dom'

class Book extends React.Component {
  render() {
    const { loading, book } = this.props.data

    if (loading) return 'loading...'
    if (!book) return 'Error fetching book'

    const { title, author } = book

    return (
      <>
        <p>
          Title: {title}
          <br />
          Author: {author}
        </p>

        <p>
          <Link to="/">Back to book list</Link>
        </p>
      </>
    )
  }
}

const query = gql`
  query Book($guid: String!) {
    book(guid: $guid) {
      guid
      title
      author
    }
  }
`

const settings = {
  options: (ownProps) => ({
    variables: {
      guid: ownProps.match.params.guid,
    },
  }),
}

export default graphql(query, settings)(Book)
