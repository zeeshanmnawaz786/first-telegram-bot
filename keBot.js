const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((bot_informations) => {
  bot.options.username = bot_informations.username;
  console.log(
    "Server has initialized bot nickname. Nick: " + bot_informations.username
  );
});

bot.command("Duplicate_Bill", (ctx) => ctx.reply("Duplicate Bill"));
bot.command("Go_Green_Subscribe_for_E_Bill", (ctx) =>
  ctx.reply("Go Green Subscribe for E_Bill")
);
bot.command("Technical_Complains", (ctx) => ctx.reply("Technical Complains"));
bot.command("Billing_Complains", (ctx) => ctx.reply("Billing Complains"));
bot.command("Power_Status_and_Load_Shedding_Schedule", (ctx) =>
  ctx.reply("Power Status and Load Shedding Schedule")
);
bot.command("Income_Tax_Certificate", (ctx) =>
  ctx.reply("Income Tax Certificate")
);
bot.command("New_Connections", (ctx) => ctx.reply("New Connections"));
bot.command("Bill_Payment", (ctx) => ctx.reply("Bill Payment"));
bot.command("Language_Selection", (ctx) => ctx.reply("Language Selection"));
bot.command("Find_Us", (ctx) => ctx.reply("Find Us"));

bot.use((ctx, next) => {
  const firstName = ctx.update.message.from.first_name;
  ctx.reply(`Hi ${firstName}!

Welcome To K Electric Whatsapp Self Service!
For the desired service, reply with the option number.

1. /Duplicate_Bill
2. /Go_Green_Subscribe_for_E_Bill
3. /Technical_Complains
4. /Billing_Complains
5. /Power_Status_and_Load_Shedding_Schedule
6. /Income_Tax_Certificate
7. /New_Connections
8. /Bill_Payment
9. /Language_Selection
10. /Find_Us`);

  return next();
});

bot.launch();
