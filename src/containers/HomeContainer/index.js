// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import type { State, AnnictUser } from '../../types'
import { getUser } from '../AuthContainer/selectors'
import { doLogout } from '../AuthContainer/logic'
import { loadRecords } from './logic'
import MyEpisodeList from '../MainEpisodeContainer/MyEpisodeList'
import NavBarContainer from '../NavBarContainer'

type OProps = {}
type Props = {
	user: AnnictUser,
	doLogout: Function,
	loadRecords: Function,
	requestToken: ({ code: string }) => void,
}

class HomeContainer extends React.Component<Props> {
	componentDidMount() {
		this.props.loadRecords()
	}
	render() {
		return (
			<div>
				<NavBarContainer />
				<MyEpisodeList />
			</div>
		)
	}
}

const ms = (state: State) => ({
	user: getUser(state),
})

const conn: Connector<OProps, Props> = connect(ms, { doLogout, loadRecords })

export default withRouter(conn(HomeContainer))
