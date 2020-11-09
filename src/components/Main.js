import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Dimmer, Loader, Pagination, Grid, Segment, Card } from 'semantic-ui-react';
import Footer from './Footer';
import { PAGE_SIZE } from '../constants/constants';
import { changePage } from '../actions';
import './Main.css'

class Main extends Component {

	render() {
		const { data, headline, status } = this.props;
		if (status === "loading")
			return (
				<Dimmer active>
					<Loader />
				</Dimmer>
			)
		else if (status === "success") {
			return (
				<div>
					<Grid container stackable columns={2}>
						<Grid.Column>
							{headline.map((elem, index) => (
								<Card fluid raised key={index} href={elem.url}>
									<Image src={elem.urlToImage && elem.urlToImage.substr(0, 4) === "http" ? elem.urlToImage : ''
									} wrapped ui={false} />
									<Card.Content>
										<Card.Header>{elem.title}</Card.Header>
									</Card.Content>
								</Card>
							)
							)}
						</Grid.Column>

						<Grid.Column>
							<Segment className="stories-segment">
								<p className="top-stories">Top Stories</p>
								{data && data.articles && data.articles.map((elem, index) => (
									<List animated verticalAlign='middle' divided relaxed >
										<List.Item key={index} href={elem.url}>
											<List.Content>
												<List.Header as='a'>{elem.title}</List.Header>
												<List.Description>
													{elem.description}
													<p>
													-{elem.author}, {new Date(elem.publishedAt).toLocaleString()}
													</p>
												</List.Description>
											</List.Content>
										</List.Item>
									</List>
								))
								}

							</Segment>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Pagination
									color="teal"
									ellipsisItem={null}
									inverted
									totalPages={data.totalResults ? Math.ceil(data.totalResults / PAGE_SIZE) : 3}
									activePage={this.props.activePage}
									onPageChange={(ev, { activePage }) => this.props.changePage(activePage)} />
							</div>
						</Grid.Column>
					</Grid>
					<br />
					<Footer />
				</div>
			)
		}
		else
			return null;
	}

}

const mapStateToProps = (state) => {
	return {
		activePage: state.activePage,
		data: state.data,
		headline: state.headlines,
		status: state.status,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (activePage) => dispatch(changePage(activePage)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
