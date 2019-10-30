import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Link } from 'react-router-dom'

class AddBook extends React.Component {
  state = {
    title: '',
    author: '',
  }

  submit = (evt) => {
    evt.preventDefault()

    this.props.mutate({
      variables: {
        ...this.state
      },
      refetchQueries: ['BookList'],
      awaitRefetchQueries: true
    }).then(() => {
      this.props.history.push('/')
    })
  }

  change = (name) => (evt) => {
    this.setState({
      [name]: evt.target.value,
    })
  }

  render() {
    const { title, author } = this.state

    return (
      <>
        <h2>Add a book</h2>

        <form onSubmit={this.submit}>
          <label>
            Title: <input name="title" value={title} onChange={this.change('title')} />
          </label>
          <br />
          <label>
            Author: <input name="author" value={author} onChange={this.change('author')} />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>

        <p>
          <Link to="/">Back to book list</Link>
        </p>
      </>
    )
  }
}

const mutation = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      guid
    }
  }
`

export default graphql(mutation)(AddBook)
