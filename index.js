export default {
  async fetch(request) {
    if (request.method === 'POST') {
     return new Response('File uploaded successfully', { status: 200 });
    } else {
      return new Response('Method not allowed', { status: 405 });
    }
  }
}
