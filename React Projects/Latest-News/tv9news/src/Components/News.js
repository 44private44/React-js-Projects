import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      pageNo: 1,
      pageSize: 9,
    }
  }

  // componentDidMount
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3433bbf108ca41b1bbc25bec3311389f&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false
    });
  }

  // redirect Previous page
  movePreviousPage = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3433bbf108ca41b1bbc25bec3311389f&page= ${this.state.pageNo - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      pageNo: this.state.pageNo - 1,
      articles: parsedData.articles,
      loading: false
    });
  }
  // redirect Next page
  moveNextPage = async () => {

    if (!(this.state.pageNo + 1 > Math.ceil(this.state.totalResult / this.state.pageSize))) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3433bbf108ca41b1bbc25bec3311389f&page= ${this.state.pageNo + 1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        pageNo: this.state.pageNo + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  }


  render() {
    return (
      <>
        <div className='container my-5'>
          <h1>KenNews - Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className='row mt-4'>
            {this.state.articles.map((element) => {

              const { title, description, urlToImage, url } = element;

              if (title && description && urlToImage) {
                return (
                  <div className='col-4 mb-5' key={url}>
                    <NewsItem
                      title={title.slice(0, 60)}
                      description={description.slice(0, 100)}
                      imgUrl={urlToImage}
                      newsurl={url}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className='d-flex justify-content-between'>
            <button className="btn btn-dark" disabled={this.state.pageNo <= 1} onClick={this.movePreviousPage}> &larr; Previous</button>
            <button className="btn btn-dark" disabled={this.state.pageNo + 1 > Math.ceil(this.state.totalResult / this.state.pageSize)} onClick={this.moveNextPage}> &rarr; Next</button>
          </div>
        </div>
      </>

    )
  }
}

export default News


