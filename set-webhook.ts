import { Bot } from "grammy"

const token = process.env.TELEGRAM_BOT_TOKEN
const webhook_url = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/api/webhook`
  : "https://your-project-name.vercel.app/api/webhook"

if (!token) throw new Error("BOT_TOKEN is unset")

const bot = new Bot(token)

async function main() {
  const result = await bot.api.setWebhook(webhook_url)
  console.log(`Set webhook to ${webhook_url}: ${result}`)
}

main().catch((error) => {
  console.error("Error setting webhook:", error)
  process.exit(1)
})

