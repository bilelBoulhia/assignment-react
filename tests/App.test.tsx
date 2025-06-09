import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from '../src/App'

describe('App', () => {
    it('renders the App component', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        );
        screen.debug();
    })
})
