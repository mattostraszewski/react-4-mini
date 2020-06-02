import React from 'react' // to use JSX
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import TopicList from './Components/TopicList/TopicList'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/topics' component={TopicList} />
  </Switch>
)
