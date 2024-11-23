const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *NETHMINA OFFICIAL*

> *NETHMINA-OFC BOT REPO:*
*|* *https://github.com/NethminaOfficial/NETHMINA-OFC-WA-BOT*

> *MAIN BOT GROUP:*
*|* *https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8*
*╰──────────────●●►*

> *POWERED BY NETHMINA OFC COMMUNITY*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "SILENTLOVER432",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SILENT-SOBX-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/SILENTLOVER40/SILENT-SOBX-MD" ,
thumbnailUrl: "https://telegra.ph/file/2a06381b260c3f096a612.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
