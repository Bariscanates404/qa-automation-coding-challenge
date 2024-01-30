# Cypress Test Instructions

## Run The App

1. Run the app by executing:
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

## Run The Tests

1. **Open Cypress:**
    - Open Cypress Test Runner:
      ```bash
      npx cypress open
      ```

2. **Run Tests:**
    - In the Cypress Test Runner, click on the automatedTests.cy.js file.
    - Cypress will open a browser window and execute the tests.

3. **View Test Results:**
    - Real-time feedback will be shown in the Cypress Test Runner.
    - Review results, including any failed tests.

4. **Run Headlessly (Optional):**
    - Run tests in headless mode (without GUI):
      ```bash
      npx cypress run
      ```