import ollama from '../src/index.mjs';
let availableModels = [];

async function setup() {
    const api = ollama.createAPI;
    availableModels = await api.getAvailableModels();
    console.log('Available models: ', availableModels);
    
    if (!Array.isArray(availableModels) || availableModels.length === 0) {
        throw new Error("Setup failed: availableModels must be a non-empty array");
    }
}

async function testConstructor() {
    const apiEndpoint = 'http://127.0.0.1:11434/api/';
    const defaultModel = availableModels[0];
    const api = ollama.createAPI(apiEndpoint, defaultModel);
    
    if (api.apiEndpoint !== apiEndpoint || api.defaultModel !== defaultModel) {
        throw new Error("Test failed: constructor initializes properties incorrectly");
    }
}

async function testGetResponseFirstModel() {
    const api = ollama.createAPI();
    const prompt = 'Suggest me a book to read';
    const response = await api.getResponse(prompt, availableModels[0]);
    
    if (typeof response !== 'string' || response.length === 0) {
        throw new Error("Test failed: getResponse returns incorrect text for the first model");
    }
}

async function testGetResponseSecondModel() {
    const api = ollama.createAPI();
    const prompt = 'Suggest me a book to read';
    const response = await api.getResponse(prompt, availableModels[1]);
    
    if (typeof response !== 'string' || response.length === 0) {
        throw new Error("Test failed: getResponse returns incorrect text for the second model");
    }
}

async function runTests() {
    try {
        await setup();
        await testConstructor();
        await testGetResponseFirstModel();
        await testGetResponseSecondModel();
        // ... run more tests here
        
        console.log("All tests passed");
    } catch (error) {
        console.error("Test failed:", error);
    }
}

runTests();
