import React from 'react';
import Layout from '../components/layout';
import Blog from '../components/blog';
// import { createClient } from 'contentful';

// const client = createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms 
//   space: '07c3fee5zt61',
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app 
//   accessToken: '3674559aa73f2d2b5b461d97299df2df699e9a1eede74a8adb8def371c217be1'
// });

class Post extends React.Component {
  // static async getInitialProps ({ req }) {
  //   // const fetch = window.fetch;
  //   // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //   // const json = await res.json()
  //   const res = await client.getEntries({
  //     content_type: '2wKn6yEnZewu2SCCkus4as'
  //   });

  //   return ({
  //     res
  //   });
  // }

  // static getInitialProps({ req }) {
  //   return {};
  // }
  // static async getInitialProps ({ req }) {
  //   // const fetch = window.fetch;
  //   // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //   // const json = await res.json()
  //   const res = await client.getEntries({
  //     content_type: '2wKn6yEnZewu2SCCkus4as'
  //   });

  //   return ({
  //     res
  //   });
  // }
  render () {
    const { slug } = this.props.url.query;
console.log(slug);
    return (
      <Layout>
        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
        <p>hello, next</p>
      </Layout>
    );
  }
}

export default Blog(Post);