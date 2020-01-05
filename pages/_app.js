import App from 'next/app'
import Head from 'next/head'


class USVDashboard extends App {
  state = { loggedInUser: false }

  login = (response) => {
    if (response.profileObj.email.split("@")[1] === "usv.com") {
      this.setState({ loggedInUser: true })
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const { loggedInUser } = this.state
    return (
      <div>
        <Head>
          <title>USV Dashboard</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/styles.css" />
        </Head>
        <Component {...pageProps} login={this.login} loggedInUser={loggedInUser} />
      </div>
    )
  }
}

USVDashboard.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default USVDashboard
