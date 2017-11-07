import Head from 'next/head'

export default ({title, children}) =>
  <div>
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"/>
    </Head>
    <div className="container">
      <header className="header clearfix">
        <h3 className="text-muted">Hacker News Clone!</h3>
      </header>
      {children}
    </div>
  </div>