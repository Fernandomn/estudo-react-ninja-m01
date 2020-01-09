'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubUrl (username, type) {
    const internUser = username ? `/${username}` : ''
    const internType = type ? `/${type}` : ''
    return `https://api.github.com/users${internUser}${internType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const key = e.which || e.keyCode
    const ENTER = 13 // confirma
    // const target = e.target
    if (key === ENTER) {
      // target.disabled = true
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubUrl(value))
        .then((result) => {
          // console.log('search result', result)
          this.setState({
            userinfo: {
              username: result.name,
              url: result.url,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              repos_url: result.repos_url,
              starred_url: result.starred_url.replace('{/owner}{/repo}', '')
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  handleAction (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({
              // o parênteses permite o retorno multilinha como se fosse uma linha só. as chaves na sequencia returnam
              // um objeto, como esperado
              id: repo.id,
              name: repo.name,
              html_url: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        // isFetching={this.state.isFetching}
        // userinfo={this.state.userinfo}
        // repos={this.state.repos}
        // starred={this.state.starred}
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.handleAction('repos')}
        getStarred={this.handleAction('starred')}
      />
    )
  }
}

export default App
