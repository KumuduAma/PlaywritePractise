import{test, expect} from '@playwright/test'

test('Open Google', async({page})=>{
  await page.goto("https://www.google.com/")

  await page.setViewportSize({width:1290, height:1080})

  await page.waitForTimeout(2000)
})