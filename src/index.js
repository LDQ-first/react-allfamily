import React from 'react'
import ReactDom from 'react-dom'
import getRouter from './router/router'
import {AppContainer} from 'react-hot-loader'
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './components/App/App'



const renderWithHotReload = (RootElement) => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <RootElement/>
            </Provider>
        </AppContainer>, 
    document.getElementById('app'))
}


/*初始化*/
renderWithHotReload(App)

/*热更新*/
if (module.hot) {
    module.hot.accept('./components/App/App', () => {
        const NextApp = require('./components/App/App').default
        renderWithHotReload(NextApp)
    })
}



