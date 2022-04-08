/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "nezuko",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}nezuko`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://telegra.ph/file/fa673b13abda5660d7f37.mp4';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `❤️ *NEZUKO* ❤️\n\n🏮 *Description: A Fully Oriented Whatsapp Bot Based on Chitoge Don't forget to give a star to the repo before fork.*\n\n 🌟*CHITOGE: https://github.com/ShineiIchijo/Chitoge*\n\n 📒*Chitoge-Guide: https://github.com/ShineiIchijo/Chitoge-Guides*\n\n ❤️*NEZUKO:https://github.com/Toshiro223/Nezuko*\n\n 📒*Nezuko-Guide:https://github.com/Toshiro223/Nezuko-Guides*\n\n`,
			}
		);
	};
}
