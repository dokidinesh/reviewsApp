// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const review = reviewsData[activeReviewIndex]
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="app-container">
        <div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
        </div>

        <div className="review-container">
          <h1>Reviews</h1>
          <img src={imgUrl} alt={`${username}-avatar`} />
          <p>{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
