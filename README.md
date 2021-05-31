# IQVIA_codetest
Solution to IQVIA's FE developer Codetest 

UI Mock: https://zpl.io/ad3B9l7
Username: apollo_code_test
Password: C0deTest!

**Acceptance Criteria**

1-Use of CSS animations, at least once

2-Use of transition, at least once

3-Hover, active styling for links

4-Focus styling for input fields

5-Hover, Focus & Active Visual statuses for Buttons (you can see standby and disabled status in the Zeplin wire)

6-Style radio buttons using HTML/CSS only

7-The component should start in an empty state (no values selected at all) and only the Step 1 in green.

8-Whenever you advance/fill info on the steps, the steps should be checkmarked.

9-If a user selects the “I do not give my consent” option on the first step, the rest of the steps should not be shown.

10-The Step 3 input box can accept any character but if you input anything other than a number an error message should be displayed under the input box showing the following message: “Only numbers are accepted”. Both the input border and the message
should be displayed in red to indicate an error.


**Extra Acceptance Criteria**

1-The component and the lines between steps should be able to expand vertically if more content is added.

2-Make the component reusable (we should be able to insert it in any kind of web page)
3-A message should display when the user clicks on the button on Step 2

  a. The message should be displayed in Step 3 with the content of the selected
method and the number of the selected method.

4-The “Resend code” button should generate a 12-digit number and show it in a message
box prompt. This 12-digit code should also be stored internally either in local storage or a
cookie.

5-Whenever the user clicks on the Verify button, the component will check if the code
entered is valid and matches the one stored in local storage/cookie. There are two
possible outcomes after clicking the Verify button:

  a. If the code is valid, then show an alert/prompt message with the summary of the
values in each step.

  b. If the code is invalid, then show an error message telling the user that the
entered code is not valid.


**User Test Case Scenario**

_Note: This test case is valid only if the Extra Acceptance Criteria is implemented._


1-User loads the form

2-User clicks on Resend Code

3-User receives code in message box prompt and records (copies) it

4-User pastes / types code into the Enter Code input field

5-User clicks Verify button

6-Observe that code is validated (if entered correctly)

7-Observe that code is in error (if entered incorrectly)

