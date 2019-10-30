# refetchQueries error in react-apollo 3.1.3

See issue: https://github.com/apollographql/react-apollo/issues/3647

I made this repo to show that `refetchQueries` is not working properly in react-apollo@3.1.3

Before I used react-apollo@2.5.8, but wanted to upgrade because it throws warnings since React 16.10

Note that I'm using the **HOC** variant to add queries and mutations. That is because currently my main project is using HOC as well.  
I tested with `<Mutation>` and `useMutation` as well, but it gives the same error.

It seems the **QueryManager** is not aware anymore of queries that were done on another "route". But again, this was no issue with react-apollo@2.5.8. You can simply downgrade it in this repo to see it working.

## Usage

- Clone
- Go to terminal
- $ cd backend
- $ yarn && yarn start
- Open second tab
- $ cd frontend
- $ yarn && yarn start

It's create-react-app, so a browser window will open.  
Add a book and see: the book list is not updated. The new book WILL show when refreshing the page.
