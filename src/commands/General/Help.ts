import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `📝 ɴᴏᴛᴇꜱ

〽 ᴛʜɪꜱ ɪꜱ ᴀ ɴᴇᴢᴜᴋᴏ-ʙᴏᴛᴛᴏ!

🔮 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ɴᴇᴢᴜᴋᴏ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ɴᴇᴢᴜᴋᴏ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

👾 ᴘʀᴇꜰɪx - ${this.client.config.prefix}
────────────────
-ɢᴇɴᴇʀᴀʟ🎗️
────────────────
㋛︎ ${this.client.config.prefix}ᴀᴅᴍɪɴꜱ
㋛︎ ${this.client.config.prefix}ᴇᴠᴇʀʏᴏɴᴇ
㋛︎ ${this.client.config.prefix}ᴍᴏᴅꜱ
㋛︎ ${this.client.config.prefix}ᴘʀᴏꜰɪʟᴇ
㋛︎ ${this.client.config.prefix}ʀᴀɴᴋ
㋛︎ ${this.client.config.prefix}xᴘ
㋛︎ ${this.client.config.prefix}ɪɴᴠɪᴛᴇʟɪɴᴋ
㋛︎ ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ
㋛︎ ${this.client.config.prefix}ʀᴇᴛʀɪᴇᴠᴇ
㋛︎ ${this.client.config.prefix}ʜɪ
㋛︎ ${this.client.config.prefix}ɴᴇᴢᴜᴋᴏ
────────────────
-ᴡᴇᴇʙs🎗️
────────────────
シ︎ ${this.client.config.prefix}ᴀɴɪᴍᴇ
シ︎ ${this.client.config.prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ
シ︎ ${this.client.config.prefix}ᴀɴɪᴍᴇᴄʜᴀʀ
シ︎ ${this.client.config.prefix}ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇʀ
シ︎ ${this.client.config.prefix}ʜᴜꜱʙᴀɴᴅᴏ
シ︎ ${this.client.config.prefix}ʟᴏʟɪ
シ︎ ${this.client.config.prefix}ᴍᴀɴɢᴀ
シ︎ ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ
シ︎ ${this.client.config.prefix}ʀᴘᴀᴘᴇʀ
シ︎ ${this.client.config.prefix}ᴠᴛᴜʙᴇʀ
シ︎ ${this.client.config.prefix}ᴡᴀɪꜰᴜ
シ︎ ${this.client.config.prefix}ᴀᴍᴇᴍᴇ
シ︎ ${this.client.config.prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ
シ︎ ${this.client.config.prefix}ᴄʀᴏꜱꜱᴘʟᴀʏ
シ︎ ${this.client.config.prefix}ʜᴀɪɢᴜꜱʜᴀ
シ︎ ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ
シ︎ ${this.client.config.prefix}ꜱᴀᴜᴄᴇ
シ︎ ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
────────────────
-ғᴜɴ🎗️
────────────────
❀ ${this.client.config.prefix}ᴄʜᴇꜱꜱ
❀ ${this.client.config.prefix}Qᴜᴏᴛᴇ
❀ ${this.client.config.prefix}ʀᴇᴀᴄᴛ
❀ ${this.client.config.prefix}ᴛʀɪɢɢᴇʀ
❀ ${this.client.config.prefix}ᴛʀᴜᴛʜ
❀ ${this.client.config.prefix}ᴄʜᴀᴛ
❀ ${this.client.config.prefix}ᴅᴀʀᴇ
❀ ${this.client.config.prefix}ꜰᴀᴄᴛ
❀ ${this.client.config.prefix}ꜱᴀꜰᴇᴊᴏᴋᴇ
❀ ${this.client.config.prefix}ꜱʜɪᴘ
❀ ${this.client.config.prefix}ᴛʀɪᴠɪᴀ
❀ ${this.client.config.prefix}ᴊᴀɪʟ
❀ ${this.client.config.prefix}ᴡᴀɴᴛᴇᴅ
❀ ${this.client.config.prefix}ʀɪᴘ
❀ ${this.client.config.prefix}ᴛʀᴀsʜ
────────────────
-ᴍᴇᴅɪᴀ🎗️
────────────────
✵ ${this.client.config.prefix}ɪɢ
✵ ${this.client.config.prefix}ᴘʟᴀʏ
✵ ${this.client.config.prefix}ꜱᴘᴏᴛɪꜰʏ
✵ ${this.client.config.prefix}ᴛᴀᴋᴇ
✵ ${this.client.config.prefix}ʏᴛᴀᴜᴅɪᴏ
✵ ${this.client.config.prefix}ʏᴛꜱᴇᴀʀᴄʜ
✵ ${this.client.config.prefix}ʏᴛᴠɪᴅᴇᴏ
✵ ${this.client.config.prefix}ɢᴏᴏɢʟᴇ
✵ ${this.client.config.prefix}ʟʏʀɪᴄꜱ
✵ ${this.client.config.prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
────────────────
-ᴜᴛɪʟs🎗️
────────────────
𖣘 ${this.client.config.prefix}ʙʟᴜʀ
𖣘 ${this.client.config.prefix}ᴋɪᴛᴛᴇɴ
𖣘 ${this.client.config.prefix}ꜱᴛɪᴄᴋᴇʀ
𖣘 ${this.client.config.prefix}ꜱᴜʙʀᴇᴅ
𖣘 ${this.client.config.prefix}ɢᴇᴛɢɪꜰ
𖣘 ${this.client.config.prefix}ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
𖣘 ${this.client.config.prefix}ꜱᴛᴇᴀʟ
𖣘 ${this.client.config.prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
𖣘 ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
𖣘 ${this.client.config.prefix}ᴄɪʀᴄʟᴇ
────────────────
-ᴍᴏᴅʀᴀᴛɪᴏɴ🎗️
────────────────
!
────────────────
-ᴇᴅᴜᴄᴀᴛɪᴠᴇ ɪɴᴅɪᴄᴀᴛᴏʀ🎗️
────────────────
!
────────────────
 -ɴsғᴡ🎗️
────────────────
!
────────────────
  Nezuko
────────────────
` }
        )
    }
}
