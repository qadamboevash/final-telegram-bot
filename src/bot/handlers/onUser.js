import { bot } from "../index.js";
import User from "./models/User.js";

async function onUsers(chatId) {
  if (chatId == "875072364") {
    const usersCount = await User.countDocuments();
    bot.sendMessage(chatId, `Foydalanuvchilar soni: ${usersCount}`);
  } else {
    bot.sendMessage(chatId, `Bunday buyruq mavjud emas...`);
  }
}

export default onUsers;