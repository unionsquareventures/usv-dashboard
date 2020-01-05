USV Dashboard
=============

# Note to Nick

I have some buggy things to fix (but I am on it 😜):

1. When you click on a partner, you need to click a second time for that partner to be selected.
2. When you click the next arrow to advance companies, the first company does not advance immediately you need to click the arrow twice (probably the same programming mistake I am making for bug #1)
3. Partners and companies are currently returned in the same order each time and need to be randomized

## The plan for auth

* The dashboard is hosted behind Cloudflare
* We create a Cloudflare access rule that before you can reach the dashboard you must login with your google account and the email must end in @usv.com. 
* We run the dashboard react app on a server on digitalocean or another host that gives you access to the server. On that server we lock access down to just [Cloudflare IPs](https://www.cloudflare.com/ips/).

# Running This Project

This is built with [Next.js](https://nextjs.org/learn) which is a react framework.

Here's how to run the project:

1. Clone/download the repo and cd into it

2. Run `npm install` to install all of the dependencies

3. Create a file called `.env` in the root of the directory. This is where the secrets (`process.env.*`) are pulled from when you run the project locally. In the `.env` file, assign `AIRTABLE_KEY` to your airtable API key. The .env file should look like this:

```
AIRTABLE_KEY=key123456789
```

4. Run `npm run dev` to run the project locally. Then go to localhost:3000 in the browser to view it.

# Project Structure

The project is organized into 4 main directories:
* /pages - the pages of the application
* /components - the components that are combined to form the individual pages
* /utils - javascript functions that are utilities for fetching and dealing with data and auth
* /public - assets publicly accessible from the browser

The top file is `/pages/_app.js`. All of the other pages are nested into that top page.

# React Components

React components can be created in two ways. Stateless components are created like this:

```
const MyComponent = props => {
  return (
      <div>
        my html here
      </div>
  )
}

export default MyComponent
```

Props are "properties" that are passed into the component.
The JSX returned in the return ( ) must be wrapped in a <div></div>.
The component is exported at the end of the file so that it can be imported into other files.

Components that have state are defined like this:

```
import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props) // aka call the constructor of the React.Component constructor
    // setup initial state
  }
  componentDidMount() {
    // stuff that should happen right after the component is rendered to the DOM
    // such as fetching data and passing it to the state
  }
  render() {
    return (
      <div>
        my html here
      </div>
    )
  }
}

export default MyComponent
```

State is set initially in constructor like this:

```
constructor(props) {
  super(props)
  this.state = {
    field1: true,
    field2: 'string',
    field3: 1
  }
}
```

Then state can be updated like this:

```
this.setState({
  field1: !this.state.field1,
  field2: 'newstring',
  field3: 100
})
```

Additional functions can be added to the component. If they are arrow functions they do not need to be declared in the constructor:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    ...
  }
  componentDidMount() {
    ...
  }
  customFunction = () => {
    // do stuff here
  }
  render() {
    ...
  }
}
```

If they are not arrow functions they do need to be declared in the constructor like this:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.customFunction = this.customFunction.bind(this) // declare it in the constructor
  }
  componentDidMount() {
    ...
  }
  customFunction() {
    // do stuff here
  }
  render() {
    ...
  }
}
```

Any javascript inserted into the JSX is inserted between two {  } tags, for example, this code displays a p tag only if this.state.arrayOfStuff is populated:

```
return (
  <div>
    { !this.state.arrayOfStuff.length == 0 &&
      <p>There is stuff in the array!</p>
    }
  </div>
)
```
