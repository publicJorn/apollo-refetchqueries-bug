# refetchQueries error in react-apollo 3.1.3

I made this repo to show that `refetchQueries` is not working properly in react-apollo@3.1.3

Before I used react-apollo@2.5.8, but wanted to upgrade because it throws warnings since React 16.10

Note that I'm using the **HOC** variant to add queries and mutations. That is because currently my main project is using HOC as well.  
I tested with `<Mutation>` and `useMutation` as well, but it gives the same error.

It seems the **QueryManager** is not aware anymore of queries that were done on another "route". But again, this was no issue with react-apollo@2.5.8. You can simply downgrade it in this repo to see it working.
