# <p style="text-align:center">Coverage and Prioritization</p>

| Priority | ID  | Test Description |
|----------|-----|------------------|
| **High** | 2   | **Search Functionality**: Check if searching for GitHub users and handling missing or empty input works smoothly. |
| **High** | 3   | **Navigation Ease**: Ensure users can easily navigate from search results to a repository's page. |
| **High** | 4   | **Secure Communication**: Verify the app communicates securely with GitHub to protect sensitive data. |
| **High** | 5   | **Feedback Mechanism**: Test if the app gives helpful feedback on successful searches and error cases. |
| **Mid**  | 6   | **Edge Cases Handling**: Confirm the app gracefully handles missing values in various scenarios. |
| **Mid**  | 7   | **Device Compatibility**: Test the app's compatibility with different devices and browsers. |
| **Low**  | 8   | **Data Exposure Prevention**: Check how the app handles potential data exposure scenarios. |
| **Cosmetic** | 1   | **UI Aesthetics**: Ensure the UI looks good and functions well, creating a pleasant user experience. |



# <p style="text-align:center">Test Scenarios</p>

## Main Functionality Tests - Search Functionality

### Test Case: Negative functionality test with empty search input
1. **Test Steps:**
   - Focus on the search input
   - Leave the search input empty
   - Press enter
   - Click on the "Go" button
2. **Expected Result:**
   - Search is triggered
   - Error message is displayed for empty input
   - No repositories listed in the result section
   - Feedback message about the error is displayed above the search field for a short duration
3. **Actual Result:** Search is triggered, error message is displayed for non-exist user, no repositories listed, feedback message about the error is displayed above the search field for a short duration
4. **Passed/Failed:** <span style="color:green">Passed</span>

### Test Case: Positive functionality test with a valid username but no repositories
1. **Test Steps:**
   - Perform a search with a username that has no GitHub repositories
2. **Expected Result:**
   - Success message is visible
   - User has "No repos"
3. **Actual Result:** Success message is visible, user has "No repos"
4. **Passed/Failed:** <span style="color:green">Passed</span>

### Test Case: Positive functionality test with a valid username has repositories
1. **Test Steps:**
   - Perform a search with a username that has repositories
   - Verify that the repository count is displayed correctly
   - Verify that the number of repository name links matches the expected count
   - Iterate over each repository description and assert that it contains a hyphen or any string
2. **Expected Result:**
   - Repository count exists and contains the expected count
   - Number of repository name links matches the expected count
   - Each repository description contains a hyphen or any string
3. **Actual Result:** Repository count exists and contains the expected count, number of repository name links matches the expected count, each repository description contains a hyphen or any string
4. **Passed/Failed:** <span style="color:green">Passed</span>

## Main Functionality Tests - Navigation Test

### Test Case: Check repository links for proper href attributes
1. **Test Steps:**
   - Perform a search with a username that has repositories
   - Define a regular expression to check for "http", "www", or ".com"
   - Iterate through each repository link
2. **Expected Result:**
   - Each repository link should have a proper href attribute
   - Each repository link's href attribute should not be empty
   - Each repository link's href attribute should contain "http", "www", or ".com"
3. **Actual Result:** Each repository link has a proper href attribute, each href attribute is not empty, each href attribute contains "http", "www", or ".com"
4. **Passed/Failed:** <span style="color:green">Passed</span>



## Priority Explanation:
These tests are top priority (in my opinion) because they focus on the heart of Adam's web development school app—search functionality and navigation. The "Empty search input" test ensures the app responds gracefully to mistakes, giving users clear feedback. The "Positive functionality tests" guarantee that the app accurately displays repositories, catering to different user scenarios. Lastly, the "Check repository links" test ensures users can seamlessly navigate to repositories by validating the correctness of repository links. These tests are crucial as they form the backbone of the app, ensuring users can easily find and explore relevant information. Their high priority stems from their fundamental role in maintaining a reliable and user-friendly experience.