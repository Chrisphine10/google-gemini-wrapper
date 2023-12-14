// test.js
const { GeminiApiClient } = require('./index');

const apiKey = 'ogPV3n5djZB011AqU4zl-llp7kD2EPraCgYKAQgSAQ8SFQHGX2MizovoBxlYruJLeXtxAM034Q0423'; // Replace with your actual API key
const projectId = 'trubai'; // Replace with your actual project ID
const modelId = 'gemini-pro-vision'; // Replace with your actual model ID
const fileUri = 'gs://generativeai-downloads/images/scones.jpg'; // Replace with your actual file URI (e.g., a Google Cloud Storage URI)
const text = 'Describe this picture.'; // Replace with text promp

const geminiClient = new GeminiApiClient(apiKey);

geminiClient.streamGenerateContent(projectId, modelId, fileUri, text)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error.message);
    });
