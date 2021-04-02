# Commit step by step notes.

Starting from now I'll change the README with every observation.

## Initial Commit

Creating the public repo.

## Initial setup with create-react-app

I'll be using create-react-app for this challenge since this is a fast way to create a comfortable development environment, I did a few things on the first commit, after bootstrapping the application with create-react-app I did some cleanup of things that I was not going to need from the start, changed the favicon icon, website name and removed some files, styles and comments that the setup left, in the next commit I'll start thinking about how I am going to do the file architecture with the redux store in mind.

Something that I like to do in my personal projects is do a CSS Reset (in ./src/index.css) to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and a few other things.

## Creating redux store

Since I will be creating a React App and Redux is mandatory for this challenge for this commit I coded the boilerplate for the redux store, provider, redux devTools and the first reducer, actions and types also connected the store to <App> because that will be the most parent component, also added Redux and React-redux as dependencies.

## Doing my first request

So after doing the boilerplate for the redux store I began thinking about how I was going to manage requests, initially I will put it in the actions, but in following commits I will abstract into a helper function that can be customized depending on subreddit or HTTP method.

I will be using redux thunk as a middleware in my actions so it can support asynchronous code.

## Showing entries on the page

Now that I have the data formatted and stored in the redux store I have prepared an unfinished draft of the component that I will use to render on the application in following commits I will break it down into different components but before that I will begin to add different actions like remove entry, clear all entries, read post and pagination (client-side).

Also decided to use StyledComponents to style the components separately.

## Added many new features

In this commit I created new actions to manage the Reddit entries array like entriesFetchFailed, selectEntry, dismissEntry also added new fields like selectedEntry, fetched, fetchSuccess & fetchFailed to store the selected entry for the details component and different stages if the request happened to fail; show the user that it actually failed so they do not wait for an infinite loading state.

Also in this commit I introduced redux-persist to persist and rehydrate the redux store if the user happened to leave the application, maybe it would be good to consider adding an "alive" timer so the next time the users comes to de app again in the future they get the newest entries instead of the old ones that they had saved.

## Timestamps and select entry feature

Now we are very close to finish this challenge with one more day to spare, in this commit I added a helper function that accepts the date of the Reddit Entry and converts it into a readeable string, turns out that Reddit UTC comes in seconds instead of miliseconds so I have to adjust it from our side, also in this commit I added the feature to select a entry from the list and change it's state to read.

Now that all the features are ready and working I noticed that the <Main> component is very big and would be very hard to understand, so I will be spliting it up into smaller components easy to read and to test.

## Splitting up Main component

The <Main> component was getting to big and held to much responsabilities, now it is named <List> and was splitted into smallers components like <Entry>, <EntryBody>, <EntryFooter>, <EntryHeader>, <ErrorMessage>, <Loading> & <Pagination>, some of them can be reutilized and some were created to increase the readability of the aplication. I am still debating whether Pagination should have been store in the redux store instead of <List>'s State since only that component is going to use that logic but for simplicity I will leave it there. 