```md
# Weather Application

This is a weather application built using Node.js, Express, and HTML. It fetches weather data from the OpenWeatherMap API and displays it in the browser. The application demonstrates three different ways to handle asynchronous API calls: using Promises, async/await, and callbacks.

## Features

- Fetch weather data using Promises with Axios
- Fetch weather data using async/await with node-fetch
- Fetch weather data using callbacks with the request package
- Display weather data in a simple HTML template

## Prerequisites

- Node.js
- npm (Node Package Manager)
- OpenWeatherMap API key

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```env
API_KEY=your_api_key_here
```

### Running the Application

1. Start the application:

```bash
node app.js
```

2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

```
weather-app/
|-- app.js
|-- routes/
|   |-- ps4.js
|-- views/
|   |-- index.html
|-- .env
|-- package.json
|-- README.md
```

### API Routes

- `POST /ps4/weather-promise`: Fetch weather data using Promises with Axios.
- `POST /ps4/weather-async`: Fetch weather data using async/await with node-fetch.
- `POST /ps4/weather-callback`: Fetch weather data using callbacks with the request package.

### Notes

- Ensure your `.env` file is not pushed to GitHub by adding it to your `.gitignore`.
- This application serves as an example of how to handle asynchronous operations in Node.js using different methods.
