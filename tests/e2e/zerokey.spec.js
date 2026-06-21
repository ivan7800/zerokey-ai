const { test, expect } = require('@playwright/test');

test('loads core UI and mobile mode selector', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('.logo')).toContainText('ZeroKey AI');
  await expect(page.locator('#inp')).toBeVisible();
  await expect(page.locator('.mode-btn', { hasText: 'Imagen' })).toBeVisible();
});

test('encrypts API keys into vault without clear-text legacy storage', async ({ page }) => {
  await page.goto('/index.html');
  await page.getByRole('button', { name: /Claves/i }).click();
  await page.locator('#vault-pass').fill('test-password-123');
  await page.locator('#ki_groq').fill('gsk_test_key_not_real');
  await page.getByRole('button', { name: /Guardar bóveda cifrada/i }).click();

  const storage = await page.evaluate(() => ({
    vault: localStorage.getItem('ZK_SECURE_VAULT_V2'),
    legacy: localStorage.getItem('ZK_KEY_groq')
  }));
  expect(storage.vault).toBeTruthy();
  expect(storage.vault).not.toContain('gsk_test_key_not_real');
  expect(storage.legacy).toBeNull();
});

test('blocks obvious XSS markup in rendered messages', async ({ page }) => {
  await page.goto('/index.html');
  await page.evaluate(() => {
    window.__xss = 0;
    addMsgDOM('ai', '<img src=x onerror="window.__xss=1"><script>window.__xss=1</script>', [], false, null);
  });
  await expect(page.locator('.msg-bubble').last()).toContainText('<img src=x');
  await expect(page.locator('.msg-bubble').last()).toContainText('<script>');
  expect(await page.evaluate(() => window.__xss)).toBe(0);
});
