import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imgUrl, newsurl, date, source, mode } = this.props;
    return (
      <div>
        <div className="card card-style" style={{ border: mode === 'dark' ? '2px solid white' : '2px solid black' }}>
          <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{'left': '16%', 'top' : '5%','padding' :'8px 8px' }}>{source.slice(0,18)}...
          </span>
          <img src={imgUrl} className="card-img-top imagecss" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
          </div>
          <div className='d-flex justify-content-between align-items-center' style={{ padding: '0px 16px 16px 16px' }}>
            <div>
              <a href={newsurl} target='blank' className="btn btn-dark">Read More</a>
            </div>
            <div>
              <p className="card-text"> <small className="text-muted">{new Date(date).toUTCString()} </small> </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
