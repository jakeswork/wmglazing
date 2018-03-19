import React, { Component } from 'react'
import Loading from './Loading'

class Portfolio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			images: []
		}
	}
	componentDidMount() {
		let Dropbox = window.Dropbox.Dropbox,
				that = this,
				dbx = new Dropbox({
			accessToken: 'tKrZ3ZeMQ-AAAAAAAAAABfwJMdgL_9F7NUnw3CkIiWRgCu6Qg0ajZVr2kjuzruF9'
		})

		dbx.filesListFolder({path: ''})
		.then(function(resp) {
			resp.entries.map(function(entry) {
				dbx.filesGetThumbnail({
					path: entry.path_display,
					format: 'jpeg',
					size: 'w640h480'
				})
				.then(data => that.setState({
					images: [...that.state.images, {
						src: "" + window.URL.createObjectURL(data.fileBlob),
						name: data.name
					}]
				}))
			})
		})
		.catch(err => console.log(err))

	}
	render() {
		return (
			<section className="image-wrapper">
			{
				this.state.images.length ?
				this.state.images.map((img, i) => (
					<div className="item" key={i}>
						<img
							src={img.src}
							alt={img.name}
					 	/>
						<p>{img.name}</p>
					</div>
				))
				: <Loading />
			}
			</section>
		)
	}
}

export default Portfolio
