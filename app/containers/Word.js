import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

let input

class Word extends Component {
  render() {
    const { words, addWord } = this.props
    return (
      <div>
        {words.map((word) => (
          <p>{word.text}</p>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            addWord(input.value)
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add Word2
        </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Word)