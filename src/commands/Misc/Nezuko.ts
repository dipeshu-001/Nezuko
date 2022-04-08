/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "Nezuko",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}nezuko`,
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
				caption: `❤️ *NEZUKO* ❤️\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features based on chitoge.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/ShineiIchijo/Chitoge* \n\n 📒 *Chitoge-Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n\n 🚀 *NEZUKO BOT URL:https://github.com/Toshiro223/Nezuko* \n\n 📒 *Nezuko-Guide: https://github.com/Toshiro223/Nezuko-Guides \n`,
			}
		);
	};
}
