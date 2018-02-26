import React, { Component } from 'react'

class CustomerReviews extends Component {
		constructor(props) {
			super(props)
			this.state = {
				i: 1
			}
		}

		makeStars(amount) {
			let stars = []
			for(var i = 0; i < amount; i++) {
				stars.push(<i className="fa fa-star" key={i}/>)
			}
			return stars
		}

		iterateLi() {
			this.state.reviews[this.state.i -1] && Object.assign(this.state.reviews[this.state.i - 1], {className: ''})
			this.state.i === 0 && Object.assign(this.state.reviews[3], {className: ''})
			Object.assign(this.state.reviews[this.state.i], {className: 'show'})

			if(this.state.i > 2) {
				this.setState({
					i: 0
				})
			} else{
				this.setState({
					i: this.state.i + 1
				})
			}
		}

		componentDidMount() {
			let that = this
			that.setState({
				reviews: [
					{
						title: 'Excellent work',
						desc: 'We have used West Midlands Glazing on numerous occasions in the past and have always had prompt courteous response, excellent and efficient work and reasonable pricing.',
						name: 'Merryn Lloyd',
						date: '08/02/2018',
						rating: 5,
						className: 'show'
					},
					{
						title: 'Excellent service!',
						desc: 'The fitter arrived on time and was very amicable! He carried out the window replacement very efficiently and was very professional! An excellent ambassador for West Midland Glazing! Have no hesitation in recommending this company!',
						name: 'Duncan',
						date: '26/01/2018',
						rating: 5
					},
					{
						title: 'Great service',
						desc: 'I would highly recommend West Midlands Glazing. Very friendly and good value and great quality. Would definitely use them again.',
						name: 'Sarah Perks',
						date: '20/09/2017',
						rating: 5
					},
					{
						title: 'Prompt and professional',
						desc: 'All appointments were kept on time and the work was completed efficiently in difficult weather conditions.',
						name: 'Ian',
						date: '15/02/2017',
						rating: 5
					}
				]
			})
			setInterval(this.iterateLi.bind(this), 5000)
		}

		render() {
			return (
				<div className="reviews">
					<ul>
					{
						this.state.reviews && this.state.reviews.map((review, i) => (
							<li key={i} className={review.className}>
								<h4>{review.title}</h4>
								<span className="rating">{this.makeStars(review.rating)}</span>
								<p>{review.desc}</p>
								<p>- {review.name}, {review.date}</p>
							</li>
						))
					}
					</ul>
					<p>Read more reviews on our <a href="https://trustedtraders.which.co.uk/businesses/west-midland-glazing-co-ltd/#reviews" target="_blank" rel="noopener noreferrer"> Which? Trusted Traders page</a>.</p>
				</div>
			)
		}
}

export default CustomerReviews
