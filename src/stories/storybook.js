import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'

import EditCard from '../components/EditCard'
import GameScreen from '../components/GameScreen'
import RoundBar from '../components/RoundBar'
import PlayerHeader from '../components/PlayerHeader'
import SummaryScreen from '../components/SummaryScreen'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

stories
  .add('with no points', () => (
    <EditCard
      name={text('name', 'Tom')}
      score={number('number', 0)}
      updateScore={action('yeay')}
    />
  ))
  .add('with some points', () => (
    <EditCard
      name={text('name', 'Jerry')}
      score={number('number', 180)}
      updateScore={action('onClick')}
    />
  ))

stories.add('GameScreen', () => (
  <GameScreen
    players={[{ name: 'John', score: 0 }]}
    updateScore={action('updateScore')}
    deletePlayer={action('deletePlayer')}
    resetScore={action('resetScore')}
    backToStart={action('backToStart')}
  />
))

stories.add('RoundBar', () => (
  <RoundBar player={{ name: 'Tom', score: [20, 10, 10] }} />
))

stories.add('PlayerHeader', () => (
  <PlayerHeader player={{ name: 'Tom', score: 10 }} />
))

stories.add('SummaryScreen', () => (
  <SummaryScreen players={{ name: 'Tom', score: 10 }} />
))
