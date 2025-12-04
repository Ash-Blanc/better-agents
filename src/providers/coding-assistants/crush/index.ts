import { logger } from '../../utils/logger/index.js';
import type { CodingAssistantProvider } from '../index.js';

/**
 * Crush CLI coding assistant provider.
 * Reference: https://github.com/charmbracelet/crush
 */
export const CrushCodingAssistantProvider: CodingAssistantProvider = {
  id: 'crush',
  displayName: 'Crush',
  command: 'crush',

  async isAvailable() {
    return {
      installed: true,
      installCommand: 'npm install -g crush',
    };
  },

  async launch({ projectPath, targetPath, prompt }) {
    const isCurrentDir = targetPath === '.';

    logger.userPlain('');
    logger.userPlain('To get started with Crush:');
    logger.userPlain('');

    if (isCurrentDir) {
      logger.userPlain(' 1. Run Crush in the current directory:');
      logger.userPlain('');
      logger.userPlain('    crush .');
    } else {
      logger.userPlain(' 1. Navigate to the project:');
      logger.userPlain('');
      logger.userPlain(`    cd ${targetPath}`);
      logger.userPlain('');
      logger.userPlain(' 2. Run Crush:');
      logger.userPlain('');
      logger.userPlain('    crush .');
    }

    logger.userPlain('');
    logger.userPlain(' 3. Follow Crush interactive prompts with guidance:');
    logger.userPlain('');
    logger.userPlain(`    ${prompt}`);
    logger.userPlain('');
  },
};
