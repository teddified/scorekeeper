import { configure } from '@storybook/react'

function loadStories() {
  require('../src/stories/storybook')
}

configure(loadStories, module)
