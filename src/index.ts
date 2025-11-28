#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ProjectOptions {
  projectName: string;
  framework: 'nextjs' | 'vite';
  typescript: boolean;
  installDeps: boolean;
}

async function main() {
  // Display ASCII art banner
  console.log(chalk.bold.magenta(`
  ╔═══════════════════════════════════════════════════════════════════════════════════════╗
  ║                                                                                       ║
  ║   ██████╗  ██████╗ ██╗  ██╗   ██╗ ██████╗  ██████╗ ███╗  ██╗   ██╗  ██╗██╗████████╗   ║
  ║   ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔════╝ ██╔═══██╗████╗ ██║   ██║ ██╔╝██║╚══██╔══╝   ║
  ║   ██████╔╝██║   ██║██║   ╚████╔╝ ██║  ███╗██║   ██║██╔██╗██║   █████╔╝ ██║   ██║      ║
  ║   ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██║   ██║██║   ██║██║╚████║   ██╔═██╗ ██║   ██║      ║
  ║   ██║     ╚██████╔╝███████╗██║   ╚██████╔╝╚██████╔╝██║ ╚███║   ██║  ██╗██║   ██║      ║
  ║   ╚═╝      ╚═════╝ ╚══════╝╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚══╝   ╚═╝  ╚═╝╚═╝   ╚═╝      ║
  ║                                                                                       ║
  ╚═══════════════════════════════════════════════════════════════════════════════════════╝
`));
  console.log(chalk.bold.cyan('              🚀 Create your next Polygon app in seconds!\n'));

  // Get project name from command line args or prompt
  let projectName = process.argv[2];

  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'What is your project named?',
      initial: 'my-polygon-app',
      validate: (value) =>
        value.length > 0 ? true : 'Project name is required',
    });

    if (!response.projectName) {
      console.log(chalk.red('\n❌ Project creation cancelled'));
      process.exit(1);
    }

    projectName = response.projectName;
  }

  // Check if directory already exists
  const targetDir = path.resolve(process.cwd(), projectName);
  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`\n❌ Directory ${projectName} already exists!`));
    process.exit(1);
  }

  // Prompt for framework and options
  const options = await prompts([
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework would you like to use?',
      choices: [
        { title: 'Next.js', value: 'nextjs', description: 'React framework with SSR' },
        { title: 'Vite', value: 'vite', description: 'Fast build tool with HMR' },
      ],
      initial: 0,
    },
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Would you like to use TypeScript?',
      initial: true,
    },
    {
      type: 'confirm',
      name: 'installDeps',
      message: 'Install dependencies now?',
      initial: true,
    },
  ]);

  if (!options.framework) {
    console.log(chalk.red('\n❌ Project creation cancelled'));
    process.exit(1);
  }

  const projectOptions: ProjectOptions = {
    projectName,
    ...options,
  };

  // Create project
  await createProject(projectOptions);
}

async function createProject(options: ProjectOptions) {
  const { projectName, framework, typescript, installDeps } = options;

  const spinner = ora('Creating project...').start();

  try {
    const targetDir = path.resolve(process.cwd(), projectName);
    const templateDir = path.resolve(
      __dirname,
      '..',
      'templates',
      framework,
      typescript ? 'typescript' : 'javascript'
    );

    // Check if template exists
    if (!fs.existsSync(templateDir)) {
      spinner.fail('Template not found');
      console.log(chalk.red(`\n❌ Template for ${framework} not found`));
      process.exit(1);
    }

    // Copy template
    await fs.copy(templateDir, targetDir);

    // Update package.json with project name
    const packageJsonPath = path.join(targetDir, 'package.json');
    const packageJson = await fs.readJSON(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 });

    spinner.succeed(chalk.green('Project created successfully!'));

    // Install dependencies
    if (installDeps) {
      const installSpinner = ora('Installing dependencies...').start();
      try {
        process.chdir(targetDir);
        execSync('npm install', { stdio: 'ignore' });
        installSpinner.succeed(chalk.green('Dependencies installed!'));
      } catch (error) {
        installSpinner.fail('Failed to install dependencies');
        console.log(chalk.yellow('\n⚠️  You can install them manually by running:'));
        console.log(chalk.cyan(`  cd ${projectName}`));
        console.log(chalk.cyan('  npm install'));
      }
    }

    // Show success message
    console.log(chalk.bold.green('\n✨ Your PolygonKit project is ready!\n'));
    console.log('Next steps:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    if (!installDeps) {
      console.log(chalk.cyan('  npm install'));
    }
    console.log(chalk.cyan('  npm run dev'));
    console.log(chalk.dim('\n📚 Documentation: https://docs.polygonkit.com'));
    console.log(chalk.dim('🐛 Issues: https://github.com/sanketsaagar/polygonKit/issues\n'));
  } catch (error) {
    spinner.fail('Failed to create project');
    console.error(chalk.red('\n❌ Error:'), error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(chalk.red('An error occurred:'), error);
  process.exit(1);
});
