import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Link } from 'react-router-dom'

class BookList extends React.Component {
  render() {
    const { loading, books } = this.props.data

    if (loading) return 'loading...'
    if (!books) return 'Error fetching books'

    return (
      <>
        <ul>
          {books.map(({ guid, title }) => (
            <li key={guid}>
              <Link to={`book/${guid}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <p>
          <Link to="book/add">Add a book</Link>
        </p>
      </>
    )
  }
}

const query = gql`
  query BookList {
    books {
      guid
      title
    }
  }
`

export default graphql(query)(BookList)
