# Custom Logger

Custom Logger is a simple logging package for Node.js applications, providing functionality to log messages to the console with different levels of severity.

## Installation

You can install Custom Logger via npm:

```bash
npm install custom-logger
```

## Usage

```javascript
const CustomLogger = require('custom-logger');

// Create a new instance of CustomLogger with optional log level
const logger = new CustomLogger({ logLevel: 'info' });

// Log messages with different levels
logger.log('This is an informational message');
logger.log('This is a warning message', 'warning');
logger.log('This is a debug message', 'debug');

// Change log level dynamically
logger.setLogLevel('error');
logger.log('This is an error message', 'error');
logger.log('This will not be logged because log level is set to error');
```

## API

### `CustomLogger(options)`

- `options`: (optional) An object containing configuration options.
  - `logLevel`: (optional) Initial log level. Default is `'info'`.

### `logger.log(message, level)`

Logs a message with an optional level. If no level is provided, it defaults to `'info'`.

### `logger.setLogLevel(level)`

Sets the log level dynamically. All log messages with severity lower than the specified level will be ignored.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
