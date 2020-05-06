import React from 'react'
import users from './mockData'
import 'semantic-ui-css/semantic.css'
import { Container, List, Image, Rating } from 'semantic-ui-react'

const Dashboard = () => {
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

export default Dashboard
