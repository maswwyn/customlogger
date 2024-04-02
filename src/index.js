// custom-logger.js

class CustomLogger {
	constructor(options = {}) {
		this.logLevel = options.logLevel || 'info';
	}

	log(message, level = 'info') {
		if (this.shouldLog(level)) {
			const timestamp = new Date().toISOString();
			console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
		}
	}

	shouldLog(level) {
		const levels = ['debug', 'info', 'warning', 'error'];
		const logIndex = levels.indexOf(this.logLevel);
		const messageIndex = levels.indexOf(level);
		return messageIndex >= logIndex;
	}

	setLogLevel(level) {
		this.logLevel = level;
	}
}

module.exports = CustomLogger;
