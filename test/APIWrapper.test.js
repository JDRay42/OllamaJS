import fetchMock from 'jest-fetch-mock';
import API from '../src/APIWrapper'; 

fetchMock.enableMocks();

describe('APIWrapper', () => {
    let api;

    beforeEach(() => {
        fetchMock.resetMocks();
        api = new API();
    });

    test('getResponse returns text for a given prompt', async () => {
        const prompt = 'Suggest me a book to read';
        fetchMock.mockResponseOnce(JSON.stringify({ text: 'A response from the API' }));
    
        const response = await api.getResponse(prompt);
        
        expect(typeof response).toBe('string');
        expect(response.length).toBeGreaterThan(0);
    });
    
});
