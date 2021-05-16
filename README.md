## React Testing Library

- Not just a library, also a philosophy ("opinionated")
  - Test your software the way users actually use it
  - Not internal implementation
- Find elements by accessibility markers, not test IDs

### React Testing Library vs Jest

- React Testing Library
  - Provides virtual DOM for tests
- Jest
  - Test runner that find tests, run tests, determines whether tests pass or fail

### Breaking down syntax

#### render

- create virtual DOM for argument JSX
- access virtual DOM via _screen_ 

#### screen.getByText()

- find element by display text

#### /learn react/i

- regular expression
- case insensitive (i)
- Could be string 'Learn React'

#### expect(linkElement).toBeInTheDocument()

- assertion, causes test to succeed or fail

### Assertions

- What determines tests pass or fail

#### expect

- Jest global, starts the assertion

#### expect argument: linkElement

- subject of the assertion

#### matcher: toBeInTheDocument

- type of assertion
- this matcher comes from Jest-DOM

#### matcher argument: ()

- refines matcher

### Examples

#### expect(element.textContent).toBe("hello");

- In English: Expects element's text content to be "Hello"

#### expect(elementsArray).toHaveLength(7);

- In English: Expects elementsArray to have length 7

### jest-dom

- comes with create-react-app
- src/setupTests.js imports it before each test, makes matchers available for every test
- DOM-based matchers
  - E.g. toBeVisible() or toBeChecked()

## Jest

- Rendering components into virtual DOM
- Searching virtual DOM
- Interacting with virtual DOM
- Needs a test runner
  - Find tests, run them, make assertions
- Recommended by Testing Library
- Comes wtih create-react app
- npm test runs an npm script that runs Jest in watch mode

### Jest Watch Mode

- Watch for changs in files since last commit
- Only run tests related to these files
- No changes? No tests
  - Type a to run all tests

### How does Jest Work?

- gloabl test method that has 2 arguments
  - string description
  - test function
- Test fails if error is thrown when running function
  - assertions throw erros when expectation fails
- No error -> Tests pass
  - Empty test passes












