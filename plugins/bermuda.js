let handler = async (m, { isPrems, conn }) => {
let img = 'https://telegra.ph/file/8dfb9a1892b213d7306a9.jpg',
let texto = `» 𝙈𝘼𝙋𝘼 𝘿𝙀 𝘽𝙀𝙍𝙈𝙐𝘿𝘼 ✅`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['bermuda'] 
handler.register = true
handler.admin = true
export default handler
