import { logger } from '../../utils/logger/index.js';
import type { CodingAssistantProvider } from '../index.js';

/**
 * Google Gemini CLI coding assistant provider.
 * Reference: https://github.com/google-gemini/gemini-cli
 */
export const GeminiCLICodingAssistantProvider: CodingAssistantProvider = {
  id: 'gemini-cli',
  displayName: 'Gemini CLI',
  command: 'gemini',

  async isAvailable() {
    return {
      installed: true,
      installCommand: 'npm install -g @google/generative-ai-cli',
    };
  },

  async launch({ projectPath, targetPath, prompt }) {
    const isCurrentDir = targetPath === '.';

    logger.userPlain('');
    logger.userPlain('To get started with Gemini CLI:');
    logger.userPlain('');
    logger.userPlain(' 1. Set your Google API key:');
    logger.userPlain('');
    logger.userPlain('    export GEMINI_API_KEY="your-api-key"');
    logger.userPlain('');

    if (isCurrentDir) {
      logger.userPlain(' 2. Initialize Gemini in the current directory:');
      logger.userPlain('');
      logger.userPlain('    gemini init .');
    } else {
      logger.userPlain(' 2. Navigate to the project:');
      logger.userPlain('');
      logger.userPlain(`    cd ${targetPath}`);
      logger.userPlain('');
      logger.userPlain(' 3. Initialize Gemini:');
      logger.userPlain('');
      logger.userPlain('    gemini init .');
    }

    logger.userPlain('');
    logger.userPlain(' 4. Use this prompt for development context:');
    logger.userPlain('');
    logger.userPlain(`    ${prompt}`);
    logger.userPlain('');
  },
};
