import fetch from 'node-fetch';

async function getTags() {
  try {
    const response = await fetch('http://127.0.0.1:11434/api/tags');
    if (!response.ok) {
      console.error('Fetch failed:', response.statusText);
      return;
    }
    const data = await response.json();
    console.log('Received data:', data);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

getTags();
