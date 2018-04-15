import 'bulma/css/bulma.css'
import { createElement } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppComp } from './comp/AppComp'
import { rootReducer } from './model/State'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<AppComp />
	</Provider>,
	document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
