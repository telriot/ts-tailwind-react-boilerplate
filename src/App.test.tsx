import React from 'react'
import App from 'App'
import { render, screen } from 'tests/test-utils'

test('App renders correctly', () => {
    render(<App/>)
    expect(screen.getByLabelText('app-container')).toBeInTheDocument

})