import{test, expect} from '@playwright/test'

test('Open Google', async({page})=>{
  await page.goto("https://www.google.com/")

  await page.waitForTimeout(2000)
})