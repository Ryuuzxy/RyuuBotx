import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q",
    mediaType: 2,
    description: "https://youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q", 
    title: 'タRyuuBotあ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['soundultah']
handler.help = ['soundultah']
handler.tags = ['sounds']
export default handler