import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imgUrl, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '24rem', 'height': '48vh' }}>
          <img src={imgUrl} className="card-img-top imagecss" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target='blank' className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
