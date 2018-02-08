// @flow
import * as React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'

import type { EpisodeComp } from '../../types'

type Props = {
	episode: EpisodeComp,
	onClick: Function,
}

const episodeTitle = (episode: EpisodeComp) =>
	`${episode.numberText} ${episode.title}`

const EpisodeCell = (props: Props) => {
	const title = episodeTitle(props.episode)

	return (
		<ListItem onClick={props.onClick}>
			<Badge color="primary" badgeContent={4}>
				<Avatar
					style={{ objectFit: 'contain', borderRadius: '4px' }}
					alt="Remy Sharp"
					src={props.episode.work.url}
				/>

				<ListItemText primary={title} secondary={props.episode.work.title} />
			</Badge>
		</ListItem>
	)
}

export default EpisodeCell