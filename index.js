/*
Thanks to ZiroMD ^_^
My Partner KirrBOTz

SC ORI ZIRO !!
JANGAN NGAKU" SC ORI LU !!
SUBSCRIBE YT : ZIRO-MD OFFICIAL

JANGAN HAPUS atau UBAH "Thanks to ZiroMD"
Hargai Saya (Ziro) Selaku Creator yg bikin sc ini :)
NGAKU" SC ORI LU ?? MATI LU !!
*/
require("./global")

const useCODE = process.argv.includes("--code")
const useQR = !useCODE

const store = makeInMemoryStore({ "logger": pino({ "level": "silent" }).child({ "level": "silent" })})

store.readFromFile(path.join(__dirname, "./database/store.json"))
setInterval(() => {
store.writeToFile(path.join(__dirname, "./database/store.json"))
}, 3000)

CFonts.say(namaBot, {
font: "tiny",
align: "center",
colors: ["system"],
})
CFonts.say("Mudah Untuk Menghubungkan Bot Whatsapp Gunakan Kode Penyandingan\nDengan Perpustakaan Baileys\nWhatsApp: wa.me/6281228070013", {
colors: ["system"],
font: "console",
align: "center",
})

async function connect() {
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, "./database/" + sessionName))

const nodeCache = new NodeCache()

const client = makeWASocket({
"browser": ["Chrome (Linux)", "", ""],
"logger": pino({ "level": "fatal" }),
"auth": state,
"printQRInTerminal": useQR && !useCODE,
"generateHighQualityLinkPreview": true,
"msgRetryCounterCache": nodeCache,
"markOnlineOnConnect": true,
"defaultQueryTimeoutMs": undefined
})

KirBotz({ "kirbotz": client })
store.bind(client.ev)

const _0x29b858=_0x5dfa;(function(_0x53cfb4,_0x48196f){const _0x5ed9be=_0x5dfa,_0x433c4e=_0x53cfb4();while(!![]){try{const _0x2a45f9=-parseInt(_0x5ed9be(0x164))/0x1*(-parseInt(_0x5ed9be(0x174))/0x2)+parseInt(_0x5ed9be(0x168))/0x3+parseInt(_0x5ed9be(0x161))/0x4+-parseInt(_0x5ed9be(0x15d))/0x5*(parseInt(_0x5ed9be(0x179))/0x6)+parseInt(_0x5ed9be(0x16f))/0x7+parseInt(_0x5ed9be(0x176))/0x8+-parseInt(_0x5ed9be(0x175))/0x9;if(_0x2a45f9===_0x48196f)break;else _0x433c4e['push'](_0x433c4e['shift']());}catch(_0x554497){_0x433c4e['push'](_0x433c4e['shift']());}}}(_0x513a,0xd3316));function hi(){const _0x56b0df=_0x5dfa;console[_0x56b0df(0x167)](_0x56b0df(0x169));}function _0x5dfa(_0x3a81ae,_0x55c725){const _0x513a68=_0x513a();return _0x5dfa=function(_0x5dfa74,_0x244c50){_0x5dfa74=_0x5dfa74-0x15d;let _0x572265=_0x513a68[_0x5dfa74];return _0x572265;},_0x5dfa(_0x3a81ae,_0x55c725);}function _0x513a(){const _0x4c6ce6=['join','Nomor\x20tidak\x20valid\x0a\x1b[36m\x20Contoh\x20\x1b[0m:\x20+6285xxxxxx','285816qZrHiV','match','error','394iJaVvS','LOGIN','stdout','log','3528807HdONtl','Hello\x20World!','createInterface','authState','requestPairingCode','question','Nomor\x20tidak\x20valid,\x20Awali\x20dengan\x20kode\x20negara\x0aContoh\x20:\x20+62xxx','1579298VImHyf','creds','\x0aMasukkan\x20nomor\x20whatsapp\x20anda\x20(Contoh:\x20+6285xxxxxx):\x20+','close','user','7666izltKG','26552340IVlcQd','13160424TVFcBD','replace','isValid','16158GXJOes','1510fYBuWq','info'];_0x513a=function(){return _0x4c6ce6;};return _0x513a();}hi();if(useCODE&&!client[_0x29b858(0x173)]&&!client[_0x29b858(0x16b)][_0x29b858(0x170)]['registered']){async function StartYtta(){const _0x41665e=_0x29b858,_0x4d3897=readline[_0x41665e(0x16a)]({'input':process['stdin'],'output':process[_0x41665e(0x166)]}),_0x29be90=_0x12804e=>new Promise(_0x2561f9=>_0x4d3897[_0x41665e(0x16d)](_0x12804e,_0x2561f9)),_0x59cb47=await _0x29be90(_0x41665e(0x171));numbSetanb=_0x59cb47[_0x41665e(0x177)](/[^0-9]/g,''),numSetan=parsePhoneNumber('+'+numbSetanb);if(!numSetan[_0x41665e(0x178)]())return client[_0x41665e(0x167)]('error',_0x41665e(0x165),_0x41665e(0x160)),_0x4d3897[_0x41665e(0x172)](),StartYtta();const _0x2205e9=PHONENUMBER_MCC[numSetan['countryCallingCode']];if(!_0x2205e9)return client[_0x41665e(0x167)](_0x41665e(0x163),'LOGIN',_0x41665e(0x16e)),_0x4d3897[_0x41665e(0x172)](),StartYtta();const _0x5b6ff7=await client[_0x41665e(0x16c)](numbSetanb);code=_0x5b6ff7?.[_0x41665e(0x162)](/.{1,4}/g)?.[_0x41665e(0x15f)]('-')||_0x5b6ff7,client[_0x41665e(0x167)](_0x41665e(0x15e),'LOGIN','Kode:\x20'+code),_0x4d3897[_0x41665e(0x172)]();}await StartYtta();}

client.ev.on("connection.update", ({ connection }) => {
if (connection === "open") {
client.log("primary", "KONEKSI", "Terhubung(" + client.user?.["id"]["split"](":")[0] + ")")

}
if (connection === "close") {
connect()
}
if (connection === "connecting") {
if (client.user) {
client.log("primary", "KONEKSI", "Menghubungkan ulang(" + client.user?.["id"]["split"](":")[0] + ")")
} else if (!useQR && !useCODE) {
client.log("info", "CONNECTION", "Autentikasi dibutuhkan\nGunakan perintah \x1B[36mnpm run code\x1B[0m untuk terhubung menggunakan nomor telepon\n\n\x1B[1m\x1B[41m Full Tutorial Check di Youtube: @KirBotz \x1B[0m\n\n")
}
}
})

client.ev.on("creds.update", saveCreds)

client.ev.on("contacts.upsert", UpTocon => {
if (!UpTocon.name || !UpTocon.id) {
return
}
if (UpTocon.imgUrl) {
client.log("info", "PENGGUNA", "Sudah ada dikontak " + UpTocon.name + "(+" + UpTocon.id.split("@")[0] + ")")
} else {
client.log("info", "PENGGUNA", "Sudah ada dikontak " + UpTocon.name + "(+" + UpTocon.id.split("@")[0] + ")")
}
})

client.ev.on("contacts.update", UpTote => {
if (!UpTote.notify) {
return
}
client.log("info", "PENGGUNA", UpTote.notify + "(+" + UpTote.id.split("@")[0] + ")")
})

client.ev.on("messages.upsert", async ({ messages }) => {
    const meg = messages[0]
    const msg = smsg(client, meg)
    if (!msg.message || msg.key && msg.key.remoteJid === "status@broadcast") {
        return
    }
    const type = Object.keys(msg.message)[0]
    const body = type === "conversation" ? msg.message.conversation : type === "extendedTextMessage" ? msg.message.extendedTextMessage.text : type === "imageMessage" ? msg.message.imageMessage.caption : type === "videoMessage" ? msg.message.videoMessage.caption : ''
    const budy = msg.mtype === "conversation" ? msg.message.conversation : msg.mtype === "extendedTextMessage" ? msg.message.extendedTextMessage.text : ""
    const from = msg.key.remoteJid
    const isGroup = from.endsWith("g.us")
    const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
    const pushName = msg.pushName
    const fromMe = msg.key.fromMe
    const isOwner = msg.sender === client.owner.number || client.number
    const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const isCmd = body.replace(/.(.+?)\s*\b/i, '')
    const args = body.trim().split(/ +/).slice(1)
    const text = q = args.join(" ")
    const quoted = msg.quoted ? msg.quoted : msg
    const mime = (quoted.msg || quoted).mimetype || ''
    const noOwn = [client.owner.number.split("@")[0]]
    const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
    const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const groupMetadata = isGroup? await client.groupMetadata(msg.chat).catch(e => {}) : ""
    const pwkdnwn = isGroup? await groupMetadata.participants : ""
    const groupAdmins = isGroup? await pwkdnwn.filter(v => v.admin !== null).map(v => v.id) : ""
    const isBotAdmins = isGroup ? groupAdmins.includes(client.number) : false
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false

function consolemek() {
client.log("info", '' + command.toUpperCase(), "Dari: " + pushName + "(" + sender.split("@")[0] + ")")
}

let list = []
for (let i of noOwn) {
list.push({
displayName: `Creator ZiroBotz-MD`,
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:Creator ZiroBotz-MD\n
FN:Creator ZiroBotz-MD\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
END:VCARD`
})
}

if (msg.isGroup && !msg.key.fromMe && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
setTimeout(() => {
client.sendMessage(from, { text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${sender.split("@")[0]} Maaf Link Yang Kamu Kirim Di Dalam Group Ini Akan Di Hapus Oleh Bot`, mentions: [sender]}, { quoted: msg })
}, 1000)
setTimeout(() => {
client.sendMessage(from, { delete: msg.key })
}, 2000)
}
}

switch (command) {
case "menu": {
consolemek()
let tg = "```"
let txt1 = `Hallo Kak @${sender.split("@")[0]}, `
let txt2 = `*⊷ Script By : ${namaOwner}*
*⊷ Bot Name : ${namaBot}*
*⊷ Owner Number : @${client.owner.number.split("@")[0]}*
*⊷ Version BOT: v10.0*
*⊷ SUBSCRIBE YT :*
_youtube.com/@Ziro-MD_Official_


*乂* ${tg}FITUR OWNER${tg}
*⥁* .eval *query*
*⥁* .exec *query*
*⥁* .block *nomor/tag*
*⥁* .unblock *nomor/tag*
*⥁* .setbiobot *query*
*⥁* .setnamabot *query*
*⥁* .setppbot *reply foto*
*⥁* .uploadtesti *reply foto*
*⥁* .resettesti *( Reset All Testi )*

*乂* ${tg}FITUR PUSHKONTAK${tg}
*⥁* .idgroup *( Cek List Group )*
*⥁* .jpm *( Chat All Group Ke Tagall )*
*⥁* .jpm1 *( Chat All Group No Tag )*
*⥁* .pushcontacts *( Pushkontak Dalam Group )*
*⥁* .pushcontactsid *( Push Kontak Pake Id Group )*
*⥁* .savecontacts *( Savecontact Di Dalam Group )*
*⥁* .savecontactsid *( Savecontact Di Pake Id Group )*

*乂* ${tg}FITUR STORE${tg}
*⥁* .formatpost
*⥁* .formatneed
*⥁* .testimoni
*⥁* .payment
*⥁* .proses
*⥁* .tunda
*⥁* .batal
*⥁* .done

*乂* ${tg}FITUR RANDOM${tg}
*⥁* .owner
*⥁* .script
*⥁* .runtime
*⥁* .qc *query*
*⥁* .tiktok *link*
*⥁* .openai *query*
*⥁* .toimg *reply sticker*
*⥁* .tourl *reply foto*
*⥁* .sticker *reply foto*`
client.reply(msg, txt1 + "Saya", txt2, "https://telegra.ph/file/0ed16d48e11e065f914ed.jpg", sender)
}
break
case "antilink": {
if (!isGroup) return client.sendMessage(from, { "text": "Khusus Dalam Group" }, { "quoted": msg })
if (!isAdmins && !isOwner) return client.sendMessage(from, { "text": "Khusus Admin Group" }, { "quoted": msg })
if (!isBotAdmins) return client.sendMessage(from, { "text": "Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menyalakan Antilink" }, { "quoted": msg })
if (args[0] == 'on') {
if (antilink) return client.sendMessage(from, { "text": '*Sudah Aktif*' }, { "quoted": msg })
antilink = true
client.sendMessage(from, { "text": '*Berhasil Mengaktifkan Antilink*' }, { "quoted": msg })
} else if (args[0] == 'off') {
if (!antilink) return client.sendMessage(from, { "text": '*Belum Aktif*' }, { "quoted": msg })
antilink = false
client.sendMessage(from, { "text": '*Berhasil Mematikan Antilink*' }, { "quoted": msg })
} else {
client.sendMessage(from, { "text": `Command .${command} on = Untuk Menyalakan Antilink\nCommand .${command} off = Untuk Mematikan` }, { "quoted": msg })
}
}
break
case "done": {
consolemek()
if (!q) return client.sendMessage(from, { text: `Penggunaan .${command} barang,nominal` }, { quoted: msg })
let barang = q.split(",")[0]
let nominal = q.split(",")[1]
client.sendMessage(from, { text: `*━━ TRANSAKSI BERHASIL BY ${namaBot.toUpperCase()} ━━*

_• *Barang:* ${barang}_
_• *Nominal:* Rp${nominal}_
_• *Nama Store:* ${namaBot} Store_

*TERIMA KASIH TELAH ORDER DI ${namaBot.toUpperCase()}*
*JANGAN LUPA ORDER LAGI YA*🙏` 
}, { quoted: msg })
}
break
case "proses": {
consolemek()
client.sendMessage(from, { text: "*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH KAKAK*" }, { quoted: msg })
return client.sendMessage(client.owner.number, { text: `KAKAK ${namaBot.toUpperCase()} ADA YANG MESEN NIH DARI @${sender.split("@")[0]}, CEPETAN PROSES DONG NANTI BUYER NGAMOK`, contextInfo:{ forwardingScore: 99999, isForwarded: true, mentionedJid: [sender] }})
}
break
case "tunda": {
consolemek()
const text14 = `*TRANSAKSI MENGALAMI PENDING*

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

*AKAN KAMI PROSES SEGERA*`
client.sendMessage(from, { text: text14 }, { quoted: msg })
}
break
case "batal": {
consolemek()
const text15 = `*TRANSAKSI DI BATALKAN*

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

*SELURUH TRANSAKSI BATAL*`
client.sendMessage(from, { text: text15 }, { quoted: msg })
}
break
case "payment": {
consolemek()
client.reply(msg, "Payment", `QRIS : SCAN QR DI ATAS
OVO : ${ovo}
GOPAY : ${gopay}
SHOPEEPAY : ${shopeepay}
PULSA 1 : ${pulsa1}
PULSA 2 : ${pulsa2}

*SS BUKTI TRANSFER, KIRIM KE WHATSAPP @${client.owner.number.split("@")[0]}!!*`, "https://payment.kirbotz.repl.co/qris.jpg", sender)
}
break
case "formatpost": {
consolemek()
const text12 = `*FORMAT JASA POST ${namaBot.toUpperCase()} !*  
( BUKAN MILIK ADMIN )

⭔ ITEM : 
⭔ SPEK : 
⭔ HARGA : 
⭔ NO WA : 

✅ TAWAR MENAWAR LANGSUNG HUBUNGI KONTAK DI ATAS !
✅ WAJIB MENGGUNAKAN JASA ADMIN *${namaBot.toUpperCase()}* SUPAYA TERHINDAR DARI PENIPUAN  !
✅ BE SMART BUYYER`
client.sendMessage(from, { text: text12 }, { quoted: msg })
}
break
case "formatneed": {
consolemek()
const text13 = `*FORMAT JASA NEED AKUN BY ${namaBot.toUpperCase()}*
*( BUKAN ADMIN YANG NEED )*

⭔ ITEM : 
⭔ SPEK : 
⭔ HARGA : 
⭔ NO WA : 
  
✅ TAWAR MENAWAR LANGSUNG HUBUNGI KONTAK DI ATAS !
✅ WAJIB MENGGUNAKAN JASA ADMIN *${namaBot.toUpperCase()}* SUPAYA TERHINDAR DARI PENIPUAN  !
✅ BE SMART BUYYER`
client.sendMessage(from, { text: text13 }, { quoted: msg })
}
break
case "uploadtesti": {
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
try {
let mee = await client.downloadAndSaveMediaMessage(quoted)
let mem = await uptotelegra(mee)
testi.push(mem)
fs.writeFileSync("./database/testi.json", JSON.stringify(mem))
client.reply(msg, "Upload Testimoni", "Sukses Upload Testimoni Kalau Mau Cek Silahkan Ketik .testimoni\nMaka Semua Foto Testimoni Akan Muncul")
} catch (err) {
client.sendMessage(from, { text: `Reply Image Nya Bang` + "\n" + util.format(err) }, { quoted: msg })
}
}
break
case "resettesti":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
const clearAllDatabase = (_dir) => {
Object.keys(_dir).forEach((i) => {
_dir.splice(_dir[i], 1)
fs.writeFileSync('./database/testi.json', JSON.stringify(_dir))
})
client.reply(msg, "Reset Testimoni", "Reset Testimoni Berhasil Jika Ingin Upload Lagi Silahkan Gunakan\n.uploadtesti *reply foto nya*")
}
return clearAllDatabase(testi)
}
break
case "testimoni": {
consolemek()
for (let i = 0; i < testi.length; i++) {
client.sendMessage(from, { image: { url: testi[i] }})
}
}
break
case "tourl": {
consolemek()
try {
let mee = await client.downloadAndSaveMediaMessage(quoted)
let mem = await uptotelegra(mee)
client.sendMessage(msg.chat, { text: mem },{ quoted: msg })
} catch (err) {
client.sendMessage(from, { text: `Reply Image Nya Bang` }, { quoted: msg })
}
}
break
case "toimg": {
consolemek()
if (!quoted) return client.sendMessage(from, { text: `Balas sticker dengan caption *.${command}*` }, { quoted: msg })
if (!/webp/.test(mime)) return client.sendMessage(from, { text: `Balas sticker dengan caption *.${command}*` }, { quoted: msg })
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return client.sendMessage(from, { text: util.format(err) }, { quoted: msg })
let buffer = fs.readFileSync(ran)
client.sendMessage(from, { image: buffer }, { quoted: msg })
fs.unlinkSync(ran)
})
}
break
case "script": {
consolemek()
client.sendMessage(from, { text: `Script? Buy For @${client.owner.number.split("@")[0]}\nKelebihan Script Ini Bisa Run Tanpa 2 Handpone Bisa Pake 2 Handpone\n • Qris Barcode ❌\n • Pairing Code ✔️`, mentions: [client.owner.number] }, { quoted: msg })
}
break
case "owner": {
consolemek()
client.sendMessage(from, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [msg.sender] }}, { quoted: msg })
}
break
case "idgroup":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
await client.showGroups(msg)
}
break
case "jpm": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (isGroup) {
return client.sendMessage(from, { "text": "Khusus Private Chat" }, { "quoted": msg })
} else {
if (!isCmd) {
await client.reply(msg, "CHAT ALL GROUP", `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
return
} else {
consolemek()
client.sendChatAllGroupTag(msg, isCmd)
}
}
}
}
break
case "jpm1": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (isGroup) {
return client.sendMessage(from, { "text": "Khusus Private Chat" }, { "quoted": msg })
} else {
if (!isCmd) {
await client.reply(msg, "CHAT ALL GROUP", `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
return
} else {
consolemek()
client.sendChatAllGroup(msg, isCmd)
}
}
}
}
break
case "pushcontacts": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (!isGroup) {
return client.sendMessage(from, { "text": "Khusus Dalam Group" }, { "quoted": msg })
} else {
if (!isCmd) {
await client.reply(msg, "PUSH CONTACTS", `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
return
} else {
consolemek()
client.pushContacts(msg, msg.chat, isCmd)
}
}
}
}
break
case "pushcontactsid": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (!isCmd) {
client.log("error", "PUSH CONTACTS ID", "*Pastikan Format Yang Anda Berikan Valid*\nContoh: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
return client.reply(msg, "PUSH CONTACTS ID", "*Pastikan Format Yang Anda Berikan Valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
} else {
const isMeki = isCmd.split("|")[2]
if (!isMeki) {
client.log("error", "PUSH CONTACTS ID", "*Pastikan Format Yang Anda Berikan Valid*\nContoh: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
return client.reply(msg, "PUSH CONTACTS", "*Pastikan format yang anda berikan valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
} else {
consolemek()
client.pushContacts(msg, isMeki, isCmd)
}
}
}
}
break
case "savecontacts": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (!isGroup) {
return client.sendMessage(from, { "text": "Khusus Dalam Group" }, { "quoted": msg })
} else {
consolemek()
const { participants } = await client.groupMetadata(from)
client.saveContacts(msg, participants)
}
}
}
break
case "savecontactsid": {
if (!isOwner) {
return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
} else {
if (!isCmd) {
client.log("error", "SAVE CONTACTS ID", "Pastikan format yang anda berikan valid\nContoh: .savecontactsid 286472837748382882@g.us")
return client.reply(msg, "SAVE CONTACTS ID", "*Pastikan format yang anda berikan valid*\n*Contoh*: .savecontactsid 286472837748382882@g.us")
} else {
consolemek()
const prtpnt = await client.groupMetadata(isCmd)
client.saveContacts(msg, prtpnt.participants)
}
}
}
break
case "setnamabot":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": `Pertanyaan Nya Mana?\nContoh .${command} text` }, { "quoted": msg })
await client.updateProfileName(q)
client.reply(msg, "Ubah Nama Bot", `Berhasil Mengubah Nama Bot Menjadi *${q}*`)
}
break
case "setbiobot":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": `Pertanyaan Nya Mana?\nContoh .${command} text` }, { "quoted": msg })
await client.updateProfileStatus(q)
client.reply(msg, "Ubah Bio Bot", `Berhasil Mengubah Bio Nomor Bot Menjadi *${q}*`)
}
break
case "setppbot": {
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!quoted) return client.sendMessage(from, { "text": `Reply Image Dengan Caption .${command}` }, { "quoted": msg })
if (!/image/.test(mime)) return client.sendMessage(from, { "text": `Reply Image Dengan Caption .${command}` }, { "quoted": msg })
if (/webp/.test(mime)) return client.sendMessage(from, { "text": `Reply Image Dengan Caption .${command}` }, { "quoted": msg })
var medis = await client.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await client.query({
tag: 'iq',
attrs: {
to: client.number,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
client.reply(msg, "Ubah Foto Profil", `Sukses Mengganti Foto Profil Bot`)
} else {
var memeg = await client.updateProfilePicture(client.number, { url: medis })
fs.unlinkSync(medis)
client.reply(msg, "Ubah Foto Profil", `Sukses Mengganti Foto Profil Bot`)
}
}
break
case "block":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": `Command Salah\n.${command} Nomor Yang Ingin Di Block\n\nContoh :\n.${command} 628xxxx` }, { "quoted": msg })
let nomorNya = q
await client.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block")
client.sendMessage(from, { "text": `Sukses Di Block` }, { "quoted": msg })
}
break
case "unblock":{
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": `Command Salah\n.${command} Nomor Yang Ingin Di Unblock\n\nContoh :\n.${command} 628xxxx` }, { "quoted": msg })
let nomorNya = q
await client.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
client.sendMessage(from, { "text": `Sukses Di Unblock` }, { "quoted": msg })
}
break
case "eval": {
consolemek()
try {
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": "Pertanyaan Nya Mana?" }, { "quoted": msg })
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await client.sendMessage(msg.chat, { text: evaled }, { quoted: msg })
} catch (err) {
m = String(err)
await client.sendMessage(msg.chat, { text: util.format(m) }, { quoted: msg })
}
}
break
case "exec": {
consolemek()
if (!isOwner) return client.sendMessage(from, { "text": "Khusus Owner" }, { "quoted": msg })
if (!q) return client.sendMessage(from, { "text": "Pertanyaan Nya Mana?" }, { "quoted": msg })
try {
o = await exec(q)
} catch (e) {
o = e
} finally {
const { stdout, stderr } = o
if (stdout) client.sendMessage(from, { "text": stdout }, { "quoted": msg })
if (stderr) client.sendMessage(from, { "text": stderr }, { "quoted": msg })
}
}
break
case "openai": {
consolemek()
if (!q) return client.sendMessage(from, { "text": "Pertanyaan Nya Mana?" }, { "quoted": msg })
const getai = await axios.get(`https://xzn.wtf/api/openai?text=${q}&apikey=memekwyu`)
client.reply(msg, "CHAT GPT AI BY", util.format(getai.data.result))
}
break
case "runtime": {
consolemek()
client.reply(msg, "Runtime", runtime(process.uptime()))
}
break
case "sticker": {
consolemek()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendStimg(from, media, msg, { packname: "", author: client.name })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return client.sendMessage(from, { "text": `Reply Gambar/Video Dengan Caption .${command}\nDurasi Video 1-9 Detik` }, { "quoted": msg })
let media = await quoted.download()
let encmedia = await client.sendStvid(from, media, msg, { packname: "", author: client.name })
await fs.unlinkSync(encmedia)
} else {
client.sendMessage(from, { "text": `Reply Gambar/Video Dengan Caption .${command}\nDurasi Video 1-9 Detik` }, { "quoted": msg })
}
}
break
case "tiktok": {
consolemek()
if (!q) return client.sendMessage(from, { "text": `Penggunaan Salah Contoh .${command} https://vm.tiktok.com/ZSLdF9NYN` }, { "quoted": msg })
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${q}`)
let vidtik = await client.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: `❒ Download Video & Audio Tiktok

⭔ Author : ${tik.author.name} ( https://www.tiktok.com/@${tik.author.unique_id} )
⭔ ID : ${tik.id}
⭔ Title : ${tik.title}
⭔ Created At : ${tik.created_at}
⭔ Like : ${tik.stats.likeCount}
⭔ Comment : ${tik.stats.commentCount}
⭔ Shared : ${tik.stats.shareCount}
⭔ Watched : ${tik.stats.playCount}
⭔ Saved : ${tik.stats.saveCount}
⭔ Duration : ${tik.video.durationFormatted}
⭔ Quality Video : ${tik.video.ratio}
⭔ Audio Title : ${tik.music.title}
⭔ Audio Author : ${tik.music.author}` }, { quoted: msg })
}
break
case "qc": {
consolemek()
if (!q) return client.sendMessage(from, { "text": `Command .${command} text` }, { "quoted": msg })
try {
var linkppuserp = await client.profilePictureUrl(msg.sender, 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": msg.pushName,
"photo": {
"url": linkppuserp
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: "", author: client.name }
client.sendStimg(from, buffer, msg, opt)
})
}
break
default:
}
})
}

function KirBotz({ kirbotz }) {
kirbotz.name = `${namaBot} \u30C5`
kirbotz.number = kirbotz.user?.["id"]["split"](":")[0] + "@s.whatsapp.net"
kirbotz.owner = {
"name": `${namaBot} WhatsApp`,
"number": `${nomorOwner}@s.whatsapp.net`
}
kirbotz.log = (get1, get2, get3) => {
const newDt = new Date()
const DtHours = newDt.getHours().toString().padStart(2, "0")
const DtMinutes = newDt.getMinutes().toString().padStart(2, "0")
const DtSeconds = newDt.getSeconds().toString().padStart(2, "0")
const AllDt = DtHours + ":" + DtMinutes + ":" + DtSeconds
let IsiWk = ''
switch (get1.toLowerCase()) {
case "primary":
IsiWk = "4"
break
case "success":
IsiWk = "2"
break
case "info":
IsiWk = "6"
break
case "warning":
IsiWk = "3"
break
case "error":
IsiWk = "1"
break
default:
IsiWk = "5"
break
}
console.log("\n\x1B[1m\x1B[4" + IsiWk + "m " + kirbotz.name + " \x1B[0m " + AllDt + "\n\x1B[1m\x1B[4" + IsiWk + "m " + get2 + " \x1B[0m\n\x1B[1m\x1B[3" + IsiWk + "mMessage \x1B[0m: " + get3)
}
kirbotz.downloadM = async (m, type, filename = '') => {
if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
const stream = await downloadContentFromMessage(m, type)
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
if (filename) await fs.promises.writeFile(filename, buffer)
return filename && fs.existsSync(filename) ? filename : buffer
}
kirbotz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.type ? message.type.replace(/Message/gi, '') : mime.split('/')[0]
let stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
kirbotz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
kirbotz.sendStimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await kirbotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
kirbotz.sendStvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await kirbotz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
kirbotz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
kirbotz.reply = async (mesegs, teks1, teks2, urlImage, getSend) => {
if (!urlImage) {
try {
await kirbotz.sendMessage(mesegs.chat, {
"text": "*" + teks1 + "* || *" + kirbotz.name + "*\n\n" + teks2 + "\n"
}, { "quoted": mesegs })
} catch (error) {
kirbotz.log("error", '' + teks1, '' + error)
}
} else {
try {
await kirbotz.sendMessage(mesegs.chat, {
"image": { "url": '' + urlImage },
"caption": "*" + teks1 + "* *" + kirbotz.name + "*\n\n" + teks2 + "\n",
"mentions": [getSend, kirbotz.number, kirbotz.owner.number]
}, { "quoted": mesegs })
} catch (error) {
kirbotz.log("error", '' + teks1, '' + error)
}
}
}
kirbotz.users = {
"notSaved": Object.values(store.contacts).filter(ntSvd => ntSvd.id.endsWith(".net") && ntSvd.notify && !ntSvd.name),
"saved": Object.values(store.contacts).filter(YSvd => YSvd.id.endsWith(".net") && YSvd.name)
}
kirbotz.usersLength = messegss => {
try {
const { saved, notSaved } = kirbotz.users
kirbotz.reply(messegss, "TOTAL USERS", "*Total users yang belum tersimpan dikontak*: " + notSaved.length + "\n*Total users yang sudah tersimpan dikontak*: " + saved.length)
} catch (Err) {
kirbotz.reply(messegss, "TOTAL USERS", '' + Err)
kirbotz.log("error", "TOTAL USERS", '' + Err)
}
}
kirbotz.showUsers = msges => {
try {
const { saved, notSaved } = kirbotz.users
const getDtbsv = saved.map((Dtb1, Dtb2) => {
const Dtbsi = [Dtb2 + 1 + ". *Name*: " + Dtb1.name + "\n    *Number*: " + Dtb1.id.split("@")[0]].join("\n")
return Dtbsi
}).join("\n")
const getDtbNsv = notSaved.map((Dtbs1, Dtbs2) => {
const Dtbsu = [Dtbs2 + 1 + ". *Name*: " + Dtbs1.notify + "\n    *Number*: " + Dtbs1.id.split("@")[0]].join("\n")
return Dtbsu
}).join("\n")
kirbotz.reply(msges, "SHOW ALL USERS", "*Total users belum tersimpan dikontak*: " + notSaved.length + "\n" + getDtbNsv + "\n\n*Total users yang sudah tersimpan dikontak*: " + saved.length + "\n" + getDtbsv)
} catch (Erro) {
kirbotz.reply(msges, "SHOW ALL USERS", '' + Erro)
kirbotz.log("error", "SHOW ALL USERS", '' + Erro)
}
}
kirbotz.groups = async () => {
const pArtiCpnts = await kirbotz.groupFetchAllParticipating()
return Object.values(pArtiCpnts)
}
kirbotz.groupsLength = async mossgs => {
try {
const getAllgc = await kirbotz.groups()
kirbotz.reply(mossgs, "TOTAL GROUPS", "*Total groups*: " + getAllgc.length)
} catch (ErrOr) {
kirbotz.reply(mossgs, "TOTAL GROUPS", '' + ErrOr)
kirbotz.log("error", "TOTAL GROUPS", '' + ErrOr)
}
}
kirbotz.showGroups = async msgse => {
const getDlgc = await kirbotz.groups()
try {
const All1 = getDlgc.map((txty1, txty2) => {
const meksh = ["*NAME*: " + txty1.subject + "\n*ID*: " + txty1.id.split("@")[0] + "@g.us" + "\n*JUMLAH MEMBER*: " + txty1.participants.length + " Member"].join("\n\n")
return meksh
}).join("\n\n")
kirbotz.reply(msgse, "List Group", '' + All1)
} catch (Ror) {
kirbotz.reply(msgse, "List Group", '' + Ror)
kirbotz.log("error", "List Group", '' + Ror)
}
}
kirbotz.pushContacts = async (nsgegs, idgcnye, txt1ortxt2) => {
try {
const mtData = await kirbotz.groupMetadata(idgcnye)
let { participants } = mtData
participants = participants.map(v => v.id)
const Txt1 = txt1ortxt2.split("|")[0]
const Txt2 = parseInt((txt1ortxt2.split("|")[1] || 15) + "000")
if (!Txt1 || !Txt2 || isNaN(Txt2)) {
kirbotz.log("error", "PUSH CONTACTS", "Format yang anda berikan tidak valid\nContoh: .pushcontacts Hallo ... Pesan|5")
return kirbotz.reply(nsgegs, "PUSH CONTACTS", "*Format yang anda berikan tidak valid*\n*Contoh*: .pushcontacts Hallo ... Pesan|5*")
} else {
await kirbotz.reply(nsgegs, "PUSH CONTACTS", "*Push Contacts Start*:\n*Target*: " + participants.length + " members\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
kirbotz.log("info", "PUSH CONTACTS", "Push Contacts Start:\nTarget: " + participants.length + " members\nText: " + Txt1 + "\nDelay: " + Txt2)
let prtcpnts = 0
const stIntvral = setInterval(async () => {
if (prtcpnts === participants.length) {
await kirbotz.reply(nsgegs, "PUSH CONTACTS", "*Push Contacts selesai*\n*" + prtcpnts + " pesan telah berhasil dikirim*")
kirbotz.log("success", "PUSH CONTACTS", "Push Contacts selesai, " + prtcpnts + " pesan telah berhasil dikirim")
return clearInterval(stIntvral)
} else {
if (Object.keys(nsgegs.message)[0] === "imageMessage") {
const urlImeg = await downloadMediaMessage(nsgegs, "buffer", {}, {
"logger": Pino
})
await kirbotz.sendMessage(participants[prtcpnts], {
"image": {
"url": urlImeg
},
"caption": '' + Txt1
})
kirbotz.log("primary", "PUSH CONTACTS", "Pesan dikirim ke: " + participants[prtcpnts].split("@")[0])
} else {
await kirbotz.sendMessage(participants[prtcpnts], {
"text": '' + Txt1
})
kirbotz.log("primary", "PUSH CONTACTS", "Pesan dikirim ke: " + participants[prtcpnts].split("@")[0])
}
prtcpnts++
}
}, Txt2)
}
} catch (conError) {
kirbotz.reply(nsgegs, "PUSH CONTACTS", '' + conError)
kirbotz.log("error", "PUSH CONTACTS", '' + conError)
}
}
kirbotz.saveContacts = async (messgs, Prtcipnts) => {
try {
const getPrtpnts = Prtcipnts.map((send1, send2) => {
const SvdQ = "[" + send2 + "] Auto saved by " + kirbotz.name + " (" + send1.id.split("@")[0x0] + ")"
const hsilDtbs = ["BEGIN:VCARD", "VERSION:3.0", "FN:" + SvdQ, "ORG:" + kirbotz.name, "TEL;type=CELL;type=VOICE;waid=" + send1.id.split("@")[0x0] + ":+" + send1.id.split("@")[0x0], "END:VCARD", ''].join("\n")
return hsilDtbs
}).join('')
await kirbotz.sendMessage(messgs.key.remoteJid, {
"document": Buffer.from(getPrtpnts, "utf8"),
"fileName": "contacts.vcf",
"caption": "*Auto save contacts DONE!!!*",
"mimetype": "text/vcard"
}, {
"quoted": messgs
})
} catch (SvdError) {
kirbotz.reply(messgs, "AUTO SAVE CONTACTS", '' + SvdError)
kirbotz.log("error", "AUTO SAVE CONTACTS", '' + SvdError)
}
}
kirbotz.sendChatAllGroupTag = async (mesegesp, txt1txt2) => {
const getidnya = await kirbotz.groupFetchAllParticipating()
const groups = Object.entries(getidnya).slice(0).map((entry) => entry[1])
const anu = groups.map((v) => v.id)
try {
const Txt1 = txt1txt2.split("|")[0]
const Txt2 = parseInt((txt1txt2.split("|")[1] || 15) + "000")
if (!Txt1 || !Txt2 || isNaN(Txt2)) {
kirbotz.log("error", "CHAT ALL GROUP", "Format yang anda berikan tidak valid\nContoh: .jpm Hallo ... Pesan|5")
return kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Format yang anda berikan tidak valid*\n*Contoh*: .jpm Hallo ... Pesan|5*")
} else {
await kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Jpm Start*:\n*Target*: " + anu.length + " groups\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
kirbotz.log("info", "CHAT ALL GROUP", "Jpm Start:\nTarget: " + anu.length + " groups\nText: " + Txt1 + "\nDelay: " + Txt2)
let idgcwy = 0
const stIntvral = setInterval(async () => {
if (idgcwy === anu.length) {
await kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Jpm selesai*\n*" + idgcwy + " pesan telah berhasil dikirim*")
kirbotz.log("success", "CHAT ALL GROUP", "Jpm selesai, " + idgcwy + " pesan telah berhasil dikirim")
return clearInterval(stIntvral)
} else {
let metadata01 = await kirbotz.groupMetadata(anu[idgcwy])
let prtpnscht = await metadata01.participants
if (Object.keys(mesegesp.message)[0] === "imageMessage") {
const urlImeg = await downloadMediaMessage(mesegesp, "buffer", {}, {
"logger": Pino
})
await kirbotz.sendMessage(anu[idgcwy], {
"image": {
"url": urlImeg
},
"caption": '' + Txt1,
"mentions": prtpnscht.map(a => a.id)
})
kirbotz.log("primary", "CHAT ALL GROUP", "Pesan dikirim ke: " + anu[idgcwy])
} else {
await kirbotz.sendMessage(anu[idgcwy], {
"text": '' + Txt1,
"mentions": prtpnscht.map(a => a.id)
})
kirbotz.log("primary", "CHAT ALL GROUP", "Pesan dikirim ke: " + anu[idgcwy])
}
idgcwy++
}
}, Txt2)
}
} catch (ErrorK) {
kirbotz.reply(mesegesp, "CHAT ALL GROUP", '' + ErrorK)
kirbotz.log("error", "CHAT ALL GROUP", '' + ErrorK)
}
}
kirbotz.sendChatAllGroup = async (mesegesp, tx1tx2) => {
const getidnya = await kirbotz.groupFetchAllParticipating()
const groups = Object.entries(getidnya).slice(0).map((entry) => entry[1])
const anu = groups.map((v) => v.id)
try {
const Txt1 = tx1tx2.split("|")[0]
const Txt2 = parseInt((tx1tx2.split("|")[1] || 15) + "000")
if (!Txt1 || !Txt2 || isNaN(Txt2)) {
kirbotz.log("error", "CHAT ALL GROUP", "Format yang anda berikan tidak valid\nContoh: .jpm Hallo ... Pesan|5")
return kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Format yang anda berikan tidak valid*\n*Contoh*: .jpm Hallo ... Pesan|5*")
} else {
await kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Jpm Start*:\n*Target*: " + anu.length + " groups\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
kirbotz.log("info", "CHAT ALL GROUP", "Jpm Start:\nTarget: " + anu.length + " groups\nText: " + Txt1 + "\nDelay: " + Txt2)
let idgcwy = 0
const stIntvral = setInterval(async () => {
if (idgcwy === anu.length) {
await kirbotz.reply(mesegesp, "CHAT ALL GROUP", "*Jpm selesai*\n*" + idgcwy + " pesan telah berhasil dikirim*")
kirbotz.log("success", "CHAT ALL GROUP", "Jpm selesai, " + idgcwy + " pesan telah berhasil dikirim")
return clearInterval(stIntvral)
} else {
if (Object.keys(mesegesp.message)[0] === "imageMessage") {
const urlImeg = await downloadMediaMessage(mesegesp, "buffer", {}, {
"logger": Pino
})
await kirbotz.sendMessage(anu[idgcwy], {
"image": {
"url": urlImeg
},
"caption": '' + Txt1
})
kirbotz.log("primary", "CHAT ALL GROUP", "Pesan dikirim ke: " + anu[idgcwy])
} else {
await kirbotz.sendMessage(anu[idgcwy], {
"text": '' + Txt1
})
kirbotz.log("primary", "CHAT ALL GROUP", "Pesan dikirim ke: " + anu[idgcwy])
}
idgcwy++
}
}, Txt2)
}
} catch (ErrorK) {
kirbotz.reply(mesegesp, "CHAT ALL GROUP", '' + ErrorK)
kirbotz.log("error", "CHAT ALL GROUP", '' + ErrorK)
}
}
}

connect()