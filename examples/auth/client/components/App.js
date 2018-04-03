import React from 'react'
import { connectReadModel } from 'resolve-redux'
import Login from './Login'

const getReadModelData = state => {
  try {
    return { me: state.readModels['me']['me'] }
  } catch (err) {
    return { me: null, loading: true }
  }
}

class RootComponent extends React.PureComponent {
  render() {
    if (this.props.data.loading || !this.props.data.me) {
      return (
        <div>
          <h1>You are not logged in.</h1>
          <Login />
        </div>
      )
    }

    return <h1>Hello, {this.props.data.me.name}!</h1>
  }
}

export default connectReadModel(state => ({
  readModelName: 'me',
  resolverName: 'me',
  variables: {},
  data: getReadModelData(state)
}))(RootComponent)