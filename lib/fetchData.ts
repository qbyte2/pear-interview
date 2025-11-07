/**
 * Shared server-side fetch function
 * Fetches from example.com to ensure dynamic rendering (SSR)
 */
export async function fetchDynamicData() {
  await fetch('https://example.com', { cache: 'no-store' });
}
