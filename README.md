# google-gemini-wrapper NPM Package

google-gemini-wrapper is an npm package that provides a convenient way to interact with the Google AI Platform using Node.js. This package allows users to make API calls to Gemini for generating content using a provided API key.

## Installation

To use the google-gemini-wrapper npm package, follow these steps:

1. **Install Node.js:**
   Ensure that Node.js is installed on your machine. If not, download and install it from [Node.js website](https://nodejs.org/).

2. **Create a new Node.js project:**
   Create a new directory for your project and navigate into it using your terminal.

   ```bash
   mkdir my-gemini-ai-project
   cd my-gemini-ai-project
   ```

3. **Initialize NPM:**
   Initialize a new Node.js project by running:

   ```bash
   npm init -y
   ```

4. **Install the google-gemini-wrapper npm package:**
   Install the google-gemini-wrapper npm package by running:

   ```bash
   npm install google-gemini-wrapper
   ```

## Configuration

Before using the google-gemini-wrapper npm package, you need to set up your Google Cloud project and configure the necessary credentials.

### Cloud Shell (Online Terminal)

If you are using Cloud Shell, the gcloud CLI is already set up. Activate Cloud Shell by clicking the "Activate Cloud Shell" button on this page.

### Local Development Environment

If you are using a local development environment, follow these steps:

1. **Install and Initialize the gcloud CLI:**
   Install the gcloud CLI by following the instructions on the [Google Cloud SDK installation page](https://cloud.google.com/sdk/docs/install).

   After installation, initialize the gcloud CLI by running:

   ```bash
   gcloud init
   ```

   Follow the on-screen instructions to configure your gcloud environment.

2. **Configure Environment Variables:**
   Set the necessary environment variables, replacing `PROJECT_ID` with the ID of your Google Cloud project.

   ```bash
   export PROJECT_ID="your-google-cloud-project-id"
   ```

   For example:

   ```bash
   export PROJECT_ID="your project Id"
   ```

3. **Provision the Endpoint:**
   Run the following command to provision the endpoint:

   ```bash
   gcloud beta services identity create --service=aiplatform.googleapis.com --project=$PROJECT_ID
   ```

## Usage

Once you have set up your Google Cloud project and configured the environment variables, you can start using the google-gemini-wrapper npm package in your Node.js application.

### Example Usage:

```javascript
// index.js
const { GeminiApiClient } = require('google-gemini-wrapper');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const projectId = 'Your project ID;
const modelId = 'gemini-pro-vision';
const fileUri = 'gs://generativeai-downloads/images/scones.jpg';
const text = 'Describe this picture.';

const geminiClient = new GeminiApiClient(apiKey);

geminiClient.streamGenerateContent(projectId, modelId, fileUri, text)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error.message);
    });
```

Replace `'YOUR_API_KEY'` with your actual Google token which you get by running ```gcloud auth print-access-token``` in your Google Console CLI. Ensure your Google Cloud project ID is set in the `PROJECT_ID` environment variable.

For more details on the available methods and options, please take a look at the [google-gemini-wrapper npm package documentation](https://github.com/Chrisphine10/google-gemini-wrapper).

That's it! You've successfully installed and configured the google-gemini-wrapper npm package for your Node.js project. Feel free to explore additional features and customize the package according to your needs.
