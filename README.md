# Commit step by step notes.

Starting from now I'll change the Readme with every observation.

## Initial Commit

Creating the public repo.

## Initial setup with create-react-app

I'll be using create-react-app for this challenge since this is a fast way to create a comfortable development environment, I did a few things on the first commit, after bootstraping the application with create-react-app I did some cleanup of things that I was not going to need from the start, changed the favicon icon, website name and removed some files, styles and comments that the setup left, in the next commit I'll start thinking about how I am going to do the file architecture with the redux store in mind.

Something that I like to do in my personal projects is do a CSS Reset (in ./src/index.css) to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and a few other things.

## Creating redux store

Since I will be creating a React App and Redux is mandatory for this challenge for this commit I coded the boilerplate for the redux store, provider, redux devTools and the first reducer, actions and types also connected the store to <App> because that will be the most parent component, also added Redux and React-redux as dependecies.