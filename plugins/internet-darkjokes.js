import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`Dark ga si adick adick(pdhal garink beud🤓)`, wm, res, [['Darkjoke','.darkjoke']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet', 'limitmenu']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler