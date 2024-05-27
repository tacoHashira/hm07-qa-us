# Sprint 7 Project

# Project Description
    Setting up the environment and writing code to test GET, POST, PUT, and DELETE requests for endpoints from the Urban Grocer app on VS Code

# Documentation Source
    * apiDoc (Urban Grocer)

# Technologies & Techniques Used
    Git Bash, GitHub, VS Code, apiDoc, Postman
    JavaScript, JSON, HTML, API testing (GET, POST, PUT, DELETE)

# Test Instructions
Preparing test environments:

    *Cloning the hm07-qa-us repository for local access
        1. Open the Git Bash terminal emulator
        2. Use the following process to create a directory to store project:
             cd ~               # make sure you're in your home directory
             mkdir projects     # create a folder called projects
             cd projects        # change directory into the new projects folder
        3. Use the following command to clone the repo using ssh authentication:
             git clone git@github.com:username/hm07-qa-us.git
    *In VS Code
        1. Select File → Open Folder and then select the hm07-qa-us folder
        2. Run npm install from the console in your project folder
        3. In config.js, replace the API URL with the unique link generated after the launch of Urban Grocers server
    *Open Urban Grocers in apiDoc using:
        https://cnt-d8b4f3bd-1395-4b5e-8146-958daf311d50.containerhub.tripleten-services.com/docs/
 
Running tests:

Test 1: GET test (Checking for "Fresh Food" warehouse & 200 Status Code)
    URL: https://cnt-d8b4f3bd-1395-4b5e-8146-958daf311d50.containerhub.tripleten-services.com/api/v1/warehouses
    *In VS Code:
        1. Open getHandlers.test.js
        2. Use given test format to write code to test chosen endpoint response and status code
        3. Enter npx jest command in terminal
    *In Postman:
        1. Open new blank GET request
        2. Enter above URL
        3. Send request

Test 2: POST test (Availability of goods in "Fresh Food" warehouse & 200 Status Code)
    URL: https://cnt-d8b4f3bd-1395-4b5e-8146-958daf311d50.containerhub.tripleten-services.com/api/v1/warehouses/check
    *In VS Code:
        1. Open postHandlers.test.js
        2. Use given test format to write code to test chosen endpoint response and status code
        3. Enter npx jest command in terminal
    *In Postman:
        1. Open new blank POST request
        2. Enter above URL
        3. Enter following request body (raw/JSON)
            {"products": [{"id": 5, "quantity": 1}, {"id": 4, "quantity": 5}]}
        4. Send request

Test 3: PUT test (Changing the price of an item & 200 Status Code)
    URL: https://cnt-d8b4f3bd-1395-4b5e-8146-958daf311d50.containerhub.tripleten-services.com/api/v1/products/7
    *In VS Code:
        1. Open putHandlers.test.js
        2. Use given test format to write code to test chosen endpoint response and status code
        3. Enter npx jest command in terminal
    *In Postman:
        1. Open new blank PUT request
        2. Enter above URL
        3. Enter following request body (raw/JSON)
            {"price": 175}
        4. Send request

Test 4: DELETE test (Deleting a kit & 200 Status Code)
    URL: https://cnt-d8b4f3bd-1395-4b5e-8146-958daf311d50.containerhub.tripleten-services.com/api/v1/kits/7
    *In VS Code:
        1. Open deleteHandlers.test.js
        2. Use given test format to write code to test chosen endpoint response and status code
        3. Enter npx jest command in terminal
    *In Postman:
        1. Open new blank DELETE request
        2. Enter above URL
        3. Send request
