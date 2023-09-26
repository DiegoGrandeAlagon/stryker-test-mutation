/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render , screen} from '@testing-library/react'
import Button from './Button';

let button: HTMLElement;
describe('Button Component', () => {
    beforeEach(() => {
        render(<Button label='funciona' />)
        button = screen.getByRole('button')

    })
    test('render the component', () => {
        expect(button).toHaveTextContent('funciona')
    })

    test('render the component', () => {
        const component = render(<Button label='test' />)

        component.getByText('test - Nothing')
    })
})