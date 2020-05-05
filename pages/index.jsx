// @flow
import Page from 'components/Page'
import React from 'react'
import { connect } from 'react-redux'
import { Container, List, Image, Rating } from 'semantic-ui-react'
import users from './mockData'

type Props = {
	reduxWorks: boolean
}

const Dashboard = ({reduxWorks}: Props) => {
	return (
		<Container>
			<List>
				{users.map(item =>
					<List.Item key={item.id}>
						<Image avatar src={item.src}/>
						<List.Content>
							<List.Header as='a'>{item.name}</List.Header>
							<Rating icon='star' defaultRating={item.defaultRating} maxRating={item.maxRating} />
						</List.Content>
					</List.Item>
				)}
			</List>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		reduxWorks: state.reduxWorks.really
	}
}

export default Page(connect(mapStateToProps)(Dashboard))
