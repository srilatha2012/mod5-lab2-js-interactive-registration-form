# Interactive User Registration Form 

This project is a simple user registration form built with HTML, CSS, and Javascript

## Features
 - Structured registration form with username, email, password, confirm password fields
 - Real-time validations using Javascript 'input' event listener
 - HTML5 validation attributes such as 'required', 'minLength' ,'maxLength', and 'pattern'
 - Custom error messages displayed next to each input field
 - Final form validation after submitting using event.preventDefault()
 - Username stored in local storage after successful registration
 - Saved username loaded again when the page is refreshed

## Technologies used
 - HTML5
 - CSS
 - Javascript

## Validation Implemented
### Username:
 - Required
 - minimum 3 char
 - maximun 20 char

 ### Email
 - required
 - Minimum 8 char
 - max 50 char
 
### Password
 - required
 - min 8 char
 - max 20 char
 - must include at least one uppercase letter, one lowercase letter and one number

### Confirm Password
- required
- Must match the password field

## How it works
- The form uses HTML5 validation attributes for basic checks.
- Javascript - 'input' event listener provide real-time validation
- The Constraint validation API is used to check validity and display custom errors
- on successfull submission, the username stored in localstorage

## What I learned
- How to use Constraint validation API
- How to store and retrieve simple data using 'localstorage'

## Reflection Questions  and answers
1. How did event.preventDefault() help in handling form submission?
writing this event.preventDefault() helped to stop the form's default submission behaviour, so the page did not refresh. This allowed me to validate the form with Javascript first and show error messages before submitting

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation attributes provide built-in browser validation for common rules like required fields, email format, minLength, maxLength, and pattersn.
Javascript based validation gives more control. such as custom error messages, real-time feedback
Using both is helpful because HTML5 handles basic validation easily. while javascript adds flexibility and improves user experiance.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I used localstorage to save username in the browser after successful form submission.
In the submit event I used localstorage.setItem("username" , username.value) to store username as a key-value pair.
if a username was found, I assigned it back to the username field. so, it will appear in the page after refresh

localstorage is useful for simple data persistence, but we should not persist sensitive data like password info. 
It is better suited for non-sensitive data like usernames, theme preferences, or small user settings

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
one challenge I faced was handling confirm password field correctly. At first, it only checked for errors when the user typed in the confirm password field itself. This caused an issue because if the user entered matching passwords first and then later changed the original password, the confirm password field will still look valid even though two values no longer matched.

I solved this by adding extra check inside the password input event listerner. Whenever the password field chagnes, the code now re-checks confirm password value and updates its error message if the two password do not match

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I made the error messages user-friendly by using simple and clear words, so the user can easily understand what is wrong. 
ex:- Please enter username

I displayed at the right time by using input event listener, so the messages appear as the user types.