import App from 'next/app'
import Head from 'next/head'


class USVDashboard extends App {
  state = { loggedInUser: true }

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
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/styles.css" />
          <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"></script>
        </Head>
        <div className="container-fluid">
        <Component {...pageProps} login={this.login} loggedInUser={loggedInUser} />
        </div>
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
