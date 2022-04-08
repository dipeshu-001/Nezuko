/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "bot",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}bot`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://telegra.ph/file/621c985f4ca375cfd7df7.mp4';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `❤️ *NEZUKO* ❤️\n\n🏮 *Description: lol.*\n\n 🌟*CHITOGE BOT: https://github.com/ShineiIchijo/Chitoge*\n\n 🤍*SIESTA-BOT: https://github.com/Toshiro223/Siesta-Botto*\n\n 〽️*MARIN-BOT:https://github.com/Chey-san/Marin-Kitagawa-Bot*\n\n 🧣*YOUTSUBA-BOT:https://github.com/Whatup364/Yotsuba-Bot*\n\n`,
			}
		);
	};
}
