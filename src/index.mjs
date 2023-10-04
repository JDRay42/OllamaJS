/**
 * Creates and returns an instance of the API wrapper.
 * @param {string} [apiEndpoint='http://localhost:11434/api/'] - The API endpoint.
 * @param {string} [defaultModel=null] - The default model to use.
 * @returns {API} An instance of the API wrapper.
 */

import OllamaAPIWrapper from './APIWrapper.mjs';

function createAPI(apiEndpoint = 'http://localhost:11434/api/', defaultModel = null) {
    return new OllamaAPIWrapper(apiEndpoint, defaultModel);
}

/**
 * The default API wrapper instance.
 * @type {API}
 */
const ollama = createAPI();

export default ollama;