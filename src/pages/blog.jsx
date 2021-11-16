import React, { Component } from 'react'
import BlogCard from '../components/Blog/BlogCard'
import BlogHero from '../components/Blog/BlogHero'
import Layout from '../components/layout'

export default class Blog extends Component {
  state = {
    loading: false,
    posts: [],
    mainPost: [],
    currentPage: 0,
  };

  // fetch API funcitonality
  async fetchBlog() {
    this.setState( {
      loading: true,
    } );
    try {
      const response = await fetch(
        "https://blog.epower.ng/wp-json/wp/v2/posts?per_page=20"
      );
      const data = await response.json();
      const dataArray = [...data];
      this.setState( {
        loading: false,
        posts: [data],
        mainPost: dataArray.splice( 0, 6 ),
      } );
      console.log( this.state.posts )
    } catch ( error ) {
      this.setState( {
        loading: false,
      } );
    }
  }
  componentDidMount() {
    this.fetchBlog();
  }

  chunk = ( size = 6 ) => {
    var result = [];
    const arr = [...this.state.posts[0]];
    for ( var i = 0; i < arr.length; i += size ) {
      result.push( arr.slice( i, i + size ) );
    }
    return result;
  };

  paginate = ( type ) => {
    const currentBlog = this.chunk();
    const nextPage = this.state.currentPage + 1;

    if ( type === "next" && currentBlog.length > nextPage ) {
      this.setState( {
        currentPage: nextPage,
      }, () => {
        this.setState( {
          mainPost: this.chunk()[this.state.currentPage]
        } )
      } );
    } else {
      if ( type === "prev" && this.state.currentPage >= 1 ) {
        this.setState( {
          currentPage: this.state.currentPage - 1,
        }, () => {
          this.setState( {
            mainPost: this.chunk()[this.state.currentPage]
          } )
        } );
      }
    }
  };


  render() {
    return (
      <div>
        <Layout>
          <BlogHero />
          <BlogCard />
        </Layout>
      </div>
    )
  }
}
