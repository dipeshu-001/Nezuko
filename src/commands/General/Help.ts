import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'list', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/463596a2638f7da7e2435.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `(❤️ω❤️)Konnichiwa👋 I'm ℕ𝕖𝕫𝕦𝕜𝕠^ℂ𝕙𝕒𝕟!

╭────────────┈
│ ᴜꜱᴇʀ: *${M.sender.username}*
│ ɴᴀᴍᴇ: *𝗡𝗲𝘇𝘂𝗸𝗼 (◍•ᴗ•◍)*
│ ᴘʀᴇꜰɪx: *${this.client.config.prefix}*
╰────────────┈
🧣 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

〽️𝐓𝐲𝐩𝐞 ${this.client.config.prefix}𝐧𝐞𝐳𝐮𝐤𝐨 𝐅𝐨𝐫 𝐁𝐨𝐭 𝐆𝐢𝐭𝐇𝐮𝐛 𝐋𝐢𝐧𝐤!
━━━❰ 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 ❱━━━

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

━━━❰ 𝗪𝗲𝗲𝗯𝘀 ❱━━━

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

━━━❰ 𝗙𝘂𝗻 ❱━━━

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

━━━❰ 𝗠𝗲𝗱𝗶𝗮 ❱━━━

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

━━━❰ 𝗨𝘁𝗶𝗹𝘀 ❱━━━

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

━━━❰ 𝗠𝗼𝗱𝗿𝗮𝘁𝗶𝗼𝗻 ❱━━━

☯︎ ${this.client.config.prefix}ᴀᴄᴛɪᴠᴀᴛᴇ
☯︎ ${this.client.config.prefix}ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ
☯︎ ${this.client.config.prefix}ᴅᴇᴍᴏᴛᴇ
☯︎ ${this.client.config.prefix}ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ
☯︎ ${this.client.config.prefix}ᴘʀᴏᴍᴏᴛᴇ
☯︎ ${this.client.config.prefix}ᴘᴜʀɢᴇ
☯︎ ${this.client.config.prefix}ʀᴇᴍᴏᴠᴇ
☯︎ ${this.client.config.prefix}ᴄʟᴏꜱᴇ
☯︎ ${this.client.config.prefix}ᴏᴘᴇɴ
☯︎ ${this.client.config.prefix}ʀᴇᴠᴏᴋᴇ
☯︎ ${this.client.config.prefix}ᴘᴘᴄᴏᴜᴘʟᴇ

━━━❰ 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝘃𝗲 ❱━━━

ꕥ ${this.client.config.prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
ꕥ ${this.client.config.prefix}ᴄᴏᴠɪᴅ
ꕥ ${this.client.config.prefix}ᴅᴇꜰɪɴᴇ
ꕥ ${this.client.config.prefix}ᴇʟᴇᴍᴇɴᴛꜱ
ꕥ ${this.client.config.prefix}ɢɪᴛʜᴜʙ
ꕥ ${this.client.config.prefix}ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ
ꕥ ${this.client.config.prefix}ᴡᴇᴀᴛʜᴇʀ

━━━❰ 𝗡𝘀𝗳𝘄 ❱━━━

🍒 ${this.client.config.prefix}ᴀɴᴀʟ
🍒 ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴅᴏᴜᴊɪɴ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡʟᴏʟɪ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴘᴀᴘᴇʀ
🍒 ${this.client.config.prefix}ᴛʜɪɢʜꜱ
🍒 ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
🍒 ${this.client.config.prefix}ᴍᴀɪᴅ
🍒 ${this.client.config.prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
🍒 ${this.client.config.prefix}ɴᴄᴏᴅᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ᴡᴀɪꜰᴜ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡᴊᴏᴋᴇ
🍒 ${this.client.config.prefix}ɴꜱꜰᴡ-ɴᴇᴋᴏ
🍒 ${this.client.config.prefix}ᴘᴜꜱꜱʏ
🍒 ${this.client.config.prefix}ᴛʀᴀᴘ
╭────────────────
│ ℕ𝕖𝕫𝕦𝕜𝕠-𝔹𝕠𝕥𝕥𝕠
│ © 𝐒𝐲𝐧𝐭𝐡𝐞𝐬𝐢𝐳𝐞𝐝 𝐈𝐧𝐢𝐟𝐢𝐧𝐢𝐭𝐲
╰────────────────
` }
        )
    }
}
