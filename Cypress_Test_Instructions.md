# Cypress Test Instructions

## App Setup

1. **Fork and clone the repository.**
2. At the root directory of the repo, install dependencies by running `yarn` (if
   needed, [install yarn first](https://yarnpkg.com/getting-started)).
3. Run the app by executing:
    ```bash
    yarn start
    ```
    - If you encounter the error:
      ```
      Error: error:0308010C:digital envelope routines::unsupported
      opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
      library: 'digital envelope routines',
      reason: 'unsupported',
      code: 'ERR_OSSL_EVP_UNSUPPORTED'
      ```
      Run the following script and then run yarn start again:
      ```bash
      export NODE_OPTIONS=--openssl-legacy-provider
      ```
      ```bash
      yarn start
      ```
         → Must be work "Compiled successfully!" :) 

## Running Tests

3. **Open Cypress:**
    - Open Cypress Test Runner:
      ```bash
      npx cypress open
      ```

4. **Run Tests:**
    - In the Cypress Test Runner, click on the test file you want to run.
    - Cypress will open a browser window and execute the tests.
    - Run all tests by clicking "Run all specs."

5. **View Test Results:**
    - Real-time feedback will be shown in the Cypress Test Runner.
    - Review results, including any failed tests.

6. **Run Headlessly (Optional):**
    - Run tests in headless mode (without GUI):
      ```bash
      npx cypress run
      ```