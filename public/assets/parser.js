const fs = require('fs');
const path = require('path');

const config = require('./config.json');

async function parseTerraformFile(file) {
  const terraformCode = fs.readFileSync(file).toString();
  const terraformBlocks = terraformCode.split(/[\n\s]+/);
  const providers = [];
  const resources = [];

  for (const block of terraformBlocks) {
    if (block.includes('provider')) {
      const providerName = block.split(' ')[1];
      providers.push({ name: providerName });
    } else if (block.includes('resource')) {
      const [resourceType, resourceName] = block.split(' ');
      resources.push({ type: resourceType, name: resourceName });
    }
  }

  return { providers, resources };
}

async function main() {
  const filePath = path.join(__dirname, 'path/to/your/terraform/file.tf');
  const parsedFile = await parseTerraformFile(filePath);
  console.log(parsedFile);
}

main();