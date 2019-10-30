const { GraphQLServer } = require('graphql-yoga')

// Fake data
const books = [
  {
    guid: '7ce8df97',
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    guid: '595493d1',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
  {
    guid: 'ae3d5f33',
    title: 'Wool',
    author: 'Hugh Howey',
  },
]

// The GraphQL schema in string form
const typeDefs = `
  type Book {
    guid: String!,
    title: String,
    author: String
  }

  type Query {
    books: [Book]
    book(guid: String!): Book
  }

  type Mutation {
    addBook (
      title: String!,
      author: String!
    ): Book
  }
`

function createGuid() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return S4() + S4()
}

// The resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_, { guid }) => books.find((book) => book.guid === guid),
  },

  Mutation: {
    addBook: (_, { title, author }) => {
      const book = {
        guid: createGuid(),
        title,
        author,
      }

      books.push(book)
      return book
    },
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running at http://localhost:4000`))
