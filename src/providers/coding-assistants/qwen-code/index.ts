import { logger } from '../../utils/logger/index.js';
import type { CodingAssistantProvider } from '../index.js';

/**
 * Alibaba Qwen Code CLI coding assistant provider.
 * Reference: https://github.com/QwenLM/qwen-code
 */
export const QwenCodeCodingAssistantProvider: CodingAssistantProvider = {
  id: 'qwen-code',
  displayName: 'Qwen Code',
  command: 'qwen-code',

  async isAvailable() {
    return {
      installed: true,
      installCommand: 'npm install -g @alibabacloud/qwen-code-cli',
    };
  },

  async launch({ projectPath, targetPath, prompt }) {
    const isCurrentDir = targetPath === '.';

    logger.userPlain('');
    logger.userPlain('To get started with Qwen Code:');
    logger.userPlain('');

    if (isCurrentDir) {
      logger.userPlain(' 1. Start Qwen Code in the current directory:');
      logger.userPlain('');
      logger.userPlain('    qwen-code .');
    } else {
      logger.userPlain(' 1. Navigate to the project:');
      logger.userPlain('');
      logger.userPlain(`    cd ${targetPath}`);
      logger.userPlain('');
      logger.userPlain(' 2. Start Qwen Code:');
      logger.userPlain('');
      logger.userPlain('    qwen-code .');
    }

    logger.userPlain('');
    logger.userPlain(' 3. When prompted, provide development context:');
    logger.userPlain('');
    logger.userPlain(`    ${prompt}`);
    logger.userPlain('');
    logger.userPlain(' 4. Select your preferred Qwen model version');
    logger.userPlain('');
  },
};
