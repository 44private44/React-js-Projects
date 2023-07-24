import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Spinner2 from './Spinner2';
import defaultImage from '../Components/default-image.jpg';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      pageNo: 1,
      pageSize: 9,
      totalResult: 0,
    }
    // this.fetchMoreData = this.fetchMoreData.bind(this);
    document.title = `${this.capitalization(this.props.category)} - KensNews`;
  }

  static defaultProps = {
    country: "in",
    category: "general"
  }

  static PropType = {
    country: PropTypes.String,
    category: PropTypes.String
  }
  // componentDidMount
  async componentDidMount() {
    await this.fetchArticles();
  }

  // function getting article correct with filter
  async fetchArticles() {

    this.setState({ loading: true, pageNo : 1 });
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3433bbf108ca41b1bbc25bec3311389f&page=${this.state.pageNo}&pageSize=${this.state.pageSize}`; // sohammodi13@gmail.com  => $oh@m321
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3beb4eeed2c14006bafb76809dfd3309&page=${this.state.pageNo}&pageSize=${this.state.pageSize}`;     // sohammmodi124421@gmail.com 
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b99ef06be0e4ea39fbfc3cf2fd86c0a&page=${this.state.pageNo}&pageSize=${this.state.pageSize}`; // sohammodi456@gmail.com
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=386c721da11e4522a3b2771e2cbdd8ee&page=${this.state.pageNo}&pageSize=${this.state.pageSize}`; // modis9842@mail.coml.com

    let data = await fetch(url);
    let parsedData = await data.json();

    // // Filter Articles
    // let filteredArticles = parsedData.articles.filter(
    //   (article) => article.title && article.description && article.urlToImage
    // );

    let filteredArticles = parsedData.articles.map((article) => {
      return {
        title: article.title || "Title",
        description: article.description || "Description",
        urlToImage: article.urlToImage || `${defaultImage}`,
        url: article.url,
        date: article.publishedAt,
        source: article.source.name
      };
    });

    this.setState({
      articles: filteredArticles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  // redirect Previous page
  movePreviousPage = async () => {
    if (this.state.pageNo > 1) {
      this.setState({ pageNo: this.state.pageNo - 1 }, async () => {
        await this.fetchArticles();
      });
    }
  }
  // redirect Next page
  moveNextPage = async () => {

    if (!(this.state.pageNo + 1 > Math.ceil(this.state.totalResult / this.state.pageSize))) {
      this.setState({ pageNo: this.state.pageNo + 1 }, async () => {
        await this.fetchArticles();
      });
    }
  }

  // convert into the uppercase of first letter
  capitalization = (Word) => {
    return Word.charAt(0).toUpperCase() + Word.slice(1);
  }
  // make a function that reload the data 
  fetchMoreData = async () => {

    // increment the page
    const nextPageNo = this.state.pageNo + 1;
    this.setState({ loading: true, pageNo: nextPageNo });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=386c721da11e4522a3b2771e2cbdd8ee&page=${nextPageNo}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    let filteredArticles = parsedData.articles.map((article) => {
      return {
        title: article.title || "Title",
        description: article.description || "Description",
        urlToImage: article.urlToImage || `${defaultImage}`,
        url: article.url,
        date: article.publishedAt,
        source: article.source.name
      };
    });

    this.setState({
      articles: this.state.articles.concat(filteredArticles),
      loading: false,
    });
  }

  render() {
    return (
      <>
        <div className='container my-5'>
          <h2 className={`text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>KensNews - Top {this.capitalization(this.props.category)} Headlines </h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResult}
            loader={<></>}
            style={{ 'overflow': 'hidden' }}>
            <div className='row mt-4'>
              {/* {!this.state.loading && this.state.articles.map((element) => { */}
              {this.state.articles.map((element) => {

                const { title, description, urlToImage, url, date, source } = element;

                if (title && description && urlToImage) {
                  return (
                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mb-5' key={url}>
                      <NewsItem
                        title={title.slice(0, 60)}
                        description={description.slice(0, 100)}
                        imgUrl={urlToImage}
                        newsurl={url}
                        date={date}
                        source={source}
                        mode={this.props.mode}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              {this.state.pageNo !== 1 ? (
                < div className='col-12 text-center'>
                  {this.state.loading && <Spinner2 />}
                </div>
              ) : null}

            </div>
          </InfiniteScroll >

          {/* {!this.state.loading &&
            <div className='d-flex justify-content-between'>
              <button className="btn btn-dark" disabled={this.state.pageNo <= 1} onClick={this.movePreviousPage}> &larr; Previous</button>
              <button className="btn btn-dark" disabled={this.state.pageNo + 1 > Math.ceil(this.state.totalResult / this.state.pageSize)} onClick={this.moveNextPage}> &rarr; Next</button>
            </div>
          } */}
        </div >
      </>

    )
  }
}

export default News


//// getting the correct Articles
// async correctArticles() {
//   this.setState({ loading: true });
//   let pageSize = 20;
//   let currentPage = 1;
//   let allArticles = [];

//   // getting the correct relevent article by all with validation
//   while (true) {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3433bbf108ca41b1bbc25bec3311389f&page=${currentPage}&pageSize=${pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();

//     // if no article then break;
//     if (parsedData.articles.length === 0) {
//       break;
//     }

//     let filteredArticles = parsedData.articles.filter(
//       (article) => article.title && article.description && article.urlToImage
//     );

//     // add filter article to array
//     allArticles = [...allArticles, ...filteredArticles];

//     currentPage++; // next page move
//   }
//   this.setState({
//     totalResult: allArticles.length,
//     articles: allArticles
//   });
//   console.log(this.state.articles);
// }

