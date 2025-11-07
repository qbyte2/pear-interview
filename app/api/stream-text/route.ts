export async function GET() {
  const encoder = new TextEncoder();

  const markdown = `# Hello, I'm an AI Assistant!

This is a **streaming response** demonstration.

## Features
- Real-time text streaming
- Markdown formatting support
- Character-by-character rendering

### Code Example
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Why Streaming?
Streaming responses provide better user experience by showing content as it arrives, rather than waiting for the entire response.

**Thank you for watching!**`;

  const stream = new ReadableStream({
    async start(controller) {
      let i = 0;

      while (i < markdown.length) {
        // Random chunk size: 1-10 characters
        const chunkSize = Math.floor(Math.random() * 10) + 1;
        const chunk = markdown.slice(i, i + chunkSize);
        controller.enqueue(encoder.encode(chunk));
        i += chunkSize;

        // Random delay: 80-500ms
        const delay = Math.floor(Math.random() * 420) + 80;
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  });
}
