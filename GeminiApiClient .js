// GeminiApiClient.js
const axios = require('axios');

class GeminiApiClient {
    constructor(apiKey) {
        console.log(apiKey)
        this.apiKey = apiKey;
        this.baseURL = 'https://us-central1-aiplatform.googleapis.com/v1';
        this.headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };
    }

    async streamGenerateContent(projectId, modelId, fileUri, text) {
        const apiUrl = `${this.baseURL}/projects/${projectId}/locations/us-central1/publishers/google/models/${modelId}:streamGenerateContent`;

        const requestBody = {
            "contents": {
                "role": "user",
                "parts": [
                    {
                        "fileData": {
                            "mimeType": "image/jpg",
                            "fileUri": fileUri
                        }
                    },
                    {
                        "text": text
                    }
                ]
            }
        };

        try {
            const response = await axios.post(apiUrl, requestBody, { headers: this.headers });
            return response.data;
        } catch (error) {
            throw new Error(`Error making streamGenerateContent API call: ${error.message}`);
        }
    }

    // Add other methods as needed

}

module.exports = { GeminiApiClient };
