How to run node locally:
```sh
    node app.js
```

Now, you can test the routes:
- GET request to http://localhost:3000/ps3 should return "Hey now".
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <title>Simple Node App</title>
    </head>

    <body>
        <p>Message: Hey now</p>
    </body>

    </html>
    ```
- POST request to http://localhost:3000/ps3 with a body parameter inputString should return the input string and its length.
    ### If input message was "{key: inputString, value: Bruh}", then:
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <title>Simple Node App</title>
    </head>

    <body>
        <p>Message: bruh</p>
        <p>Length: 4</p>
    </body>

    </html>
    ```

    ### If there is no input message, then:
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <title>Simple Node App</title>
    </head>

    <body>
        <p>Message: No input received</p>
    </body>

    </html>
    ```
- GET request to http://localhost:3000/ps3/{type your name here} will return:
    ```html
    <!DOCTYPE html>
    <html>

    <head>
        <title>Simple Node App</title>
    </head>

    <body>
        <p>Message: Hello there, Bruh. How can we help?</p>
    </body>

    </html>
    ```

