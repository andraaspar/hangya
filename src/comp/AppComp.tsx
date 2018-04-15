import { Component, createElement } from 'react'
import { connect, DispatchProp } from 'react-redux'
// import { Dispatch } from 'redux'
import { State } from '../model/State'

export interface AppCompPropsFromStore { }
export interface AppCompPropsDispatch { }
export interface AppCompPropsOwn { }
export interface AppCompProps extends AppCompPropsOwn, AppCompPropsFromStore, AppCompPropsDispatch, DispatchProp<State> { }
export interface AppCompState { }
export interface AppCompSnapshot { }

class AppCompPure extends Component<AppCompProps, AppCompState/* , AppCompSnapshot */> {
	static displayName = __filename

	// constructor(props: AppCompProps) {
	// 	super(props)
	// 	// this.state = {}
	// }
	// componentWillMount() {}
	// getDerivedStateFromProps(nextProps: AppCompProps, prevState: AppCompState): AppCompState | null {}
	// shouldComponentUpdate(nextProps: AppCompProps, nextState: AppCompState): boolean {}
	render() {
		return (
			<section className='section'>
				<div className='container'>
					<h1 className='title'>
						{`Hangya`}
					</h1>
				</div>
			</section>
		)
	}

	// componentDidMount() {}
	// getSnapshotBeforeUpdate(prevProps: AppCompProps, prevState: AppCompState): AppCompSnapshot {}
	// componentDidUpdate(prevProps: AppCompProps, prevState: AppCompState, snapshot: AppCompSnapshot) {}
	// componentWillUnmount() {}
}
export const AppComp = connect<AppCompPropsFromStore, AppCompPropsDispatch, AppCompPropsOwn, State>(
	undefined, // ({}, ownProps) => ({}),
	// (dispatch: Dispatch<State>, ownProps) => ({}),
)(AppCompPure)
