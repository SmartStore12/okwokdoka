const { default: makeWASocket, downloadMediaMessage, downloadContentFromMessage, jidDecode, getContentType, proto, useMultiFileAuthState, delay, PHONENUMBER_MCC, makeInMemoryStore } = require("@whiskeysockets/baileys")
const { Boom } = require("@hapi/boom")
const { parsePhoneNumber } = require("libphonenumber-js")
const pino = require("pino")
const path = require("path")
const colors = require("@colors/colors/safe")
const CFonts = require("cfonts")
const fsx = require("fs-extra")
const fs = require("fs")
const chalk = require("chalk")
const readline = require("readline")
const NodeCache = require("node-cache")
const util = require("util")
const cp = require("child_process")
const exec = util.promisify(cp.exec).bind(cp)
const axios = require("axios")
const Jimp = require("jimp")
const FileType = require("file-type")
const os = require("os")
const crypto = require("crypto")
const ffmpeg = require("fluent-ffmpeg")
const FormData = require("form-data")
const webp = require("node-webpmux")
const request = require("request")
const escapeStringRegexp = require("escape-string-regexp")
const async = require("async")
const MultiStream = require("multistream")
const fakeUa = require("fake-useragent")
const moment = require("moment-timezone")
// SETTING MODULES
global.proto = proto
global.makeWASocket = makeWASocket
global.getContentType = getContentType
global.useMultiFileAuthState = useMultiFileAuthState
global.delay = delay
global.jidDecode = jidDecode
global.PHONENUMBER_MCC = PHONENUMBER_MCC
global.makeInMemoryStore = makeInMemoryStore
global.pino = pino
global.path = path
global.colors = colors
global.CFonts = CFonts
global.fsx = fsx
global.fs = fs
global.chalk = chalk
global.readline = readline
global.Boom = Boom
global.NodeCache = NodeCache
global.parsePhoneNumber = parsePhoneNumber
global.util = util
global.exec = exec
global.axios = axios
global.Jimp = Jimp
global.downloadContentFromMessage = downloadContentFromMessage
global.FileType = FileType
global.os = os
global.ffmpeg = ffmpeg
global.FormData = FormData
global.webp = webp
global.request = request
global.escapeStringRegexp = escapeStringRegexp
global.async = async
global.MultiStream = MultiStream
global.fakeUa = fakeUa
global.moment = moment
global.downloadMediaMessage = downloadMediaMessage

// SETTINGS INFORMASI BOT
global.sessionName = "session"
global.namaBot = "ZiroBOTz-MD"
global.namaOwner = "ZIRO"
global.nomorOwner = "6281228070013"
global.ovo = "-" // Ganti Aja Jika Tidak Ada Isi -
global.gopay = "-" // Ganti Aja Jika Tidak Ada Isi -
global.shopeepay = "-" // Ganti Aja Jika Tidak Ada Isi -
global.pulsa1 = "-" // Ganti Aja Jika Tidak Ada Isi -
global.pulsa2 = "-" // Ganti Aja Jika Tidak Ada Isi -
global.antilink = false

// SETTING FUNCTION
const smsg = (client, msg) => {
let M = proto.WebMessageInfo
msg = M.fromObject(msg)
if (msg.key) {
msg.id = msg.key.id
msg.isBaileys = msg.id && msg.id.length === 16 || msg.id.startsWith('3EB0') && msg.id.length === 12 || false
msg.chat = client.decodeJid(msg.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
msg.now = msg.messageTimestamp
msg.isGroup = msg.chat.endsWith('@g.us')
msg.sender = client.decodeJid(msg.key.fromMe && client.user.id || msg.participant || msg.key.participant || msg.chat || '')
}
if (msg.message) {
let mtype = Object.keys(msg.message)
msg.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || 
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || 
mtype[mtype.length - 1]
msg.type = getContentType(msg.message)
msg.msg = (msg.mtype == 'viewOnceMessage' ? msg.message[msg.mtype].message[getContentType(msg.message[msg.mtype].message)] : msg.message[msg.type])
if (msg.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(msg.mtype)) msg.chat = (msg.key.remoteJid !== 'status@broadcast' && msg.key.remoteJid) || msg.sender
if (msg.mtype == 'protocolMessage' && msg.msg.key) {
if (msg.msg.key.remoteJid == 'status@broadcast') msg.msg.key.remoteJid = msg.chat
if (!msg.msg.key.participant || msg.msg.key.participant == 'status_me') msg.msg.key.participant = msg.sender
msg.msg.key.fromMe = client.decodeJid(msg.msg.key.participant) === client.decodeJid(client.user.id)
if (!msg.msg.key.fromMe && msg.msg.key.remoteJid === client.decodeJid(client.user.id)) msg.msg.key.remoteJid = msg.sender
}
msg.text = msg.msg || ''
msg.mentionedJid = msg.msg?.contextInfo?.mentionedJid?.length && msg.msg.contextInfo.mentionedJid || []
let quoted = msg.quoted = msg.msg?.contextInfo?.quotedMessage ? msg.msg.contextInfo.quotedMessage : null
if (msg.quoted) {
let type = Object.keys(msg.quoted)[0]
msg.quoted = msg.quoted[type]
if (typeof msg.quoted === 'string') msg.quoted = { text: msg.quoted }
msg.quoted.mtype = type
msg.quoted.id = msg.msg.contextInfo.stanzaId
msg.quoted.chat = client.decodeJid(msg.msg.contextInfo.remoteJid || msg.chat || msg.sender)
msg.quoted.isBaileys = msg.quoted.id && msg.quoted.id.length === 16 || false
msg.quoted.sender = client.decodeJid(msg.msg.contextInfo.participant)
msg.quoted.text = msg.quoted.text || msg.quoted.caption || msg.quoted.contentText || ''
msg.quoted.mentionedJid = msg.quoted.contextInfo?.mentionedJid?.length && msg.quoted.contextInfo.mentionedJid || []
let vM = msg.quoted.fakeObj = M.fromObject({
key: {
fromMe: msg.quoted.fromMe,
remoteJid: msg.quoted.chat,
id: msg.quoted.id
},
message: quoted,
...(msg.isGroup ? { participant: msg.quoted.sender } : {})
})
msg.getQuotedObj = msg.getQuotedMessage = async () => {
if (!msg.quoted.id) return null
let q = M.fromObject(await client.loadMessage(msg.quoted.id) || vM)
return exports.smsg(client, q)
}
if (msg.quoted.url || msg.quoted.directPath) msg.quoted.download = () => client.downloadMediaMessage(msg.quoted)
msg.quoted.copy = () => exports.smsg(client, M.fromObject(M.toObject(vM)))
}
}
if (msg.msg && msg.msg.url) msg.download = (saveToFile = false) => client.downloadM(msg.msg, msg.mtype.replace(/message/i, ''), saveToFile)
return msg
}
const runtime = function(seconds) {
seconds = Number(seconds)
var d = Math.floor(seconds / (3600 * 24))
var h = Math.floor(seconds % (3600 * 24) / 3600)
var m = Math.floor(seconds % 3600 / 60)
var s = Math.floor(seconds % 60)
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : ""
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : ""
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : ""
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : ""
return dDisplay + hDisplay + mDisplay + sDisplay
}
const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer)
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG))
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
async function getRandom(ext) {
ext = ext || ""
return `${Math.floor(Math.random() * 100000)}.${ext}`
}
async function imageToWebp (media) {
const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
ffmpeg(tmpFileIn)
.on("error", reject)
.on("end", () => resolve(true))
.addOutputOptions([
"-vcodec",
"libwebp",
"-vf",
"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
])
.toFormat("webp")
.save(tmpFileOut)
})
const buff = fs.readFileSync(tmpFileOut)
fs.unlinkSync(tmpFileOut)
fs.unlinkSync(tmpFileIn)
return buff
}
async function videoToWebp (media) {
const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
ffmpeg(tmpFileIn)
.on("error", reject)
.on("end", () => resolve(true))
.addOutputOptions([
"-vcodec",
"libwebp",
"-vf",
"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
"-loop",
"0",
"-ss",
"00:00:00",
"-t",
"00:00:05",
"-preset",
"default",
"-an",
"-vsync",
"0"
])
.toFormat("webp")
.save(tmpFileOut)
})
const buff = fs.readFileSync(tmpFileOut)
fs.unlinkSync(tmpFileOut)
fs.unlinkSync(tmpFileIn)
return buff
}
async function writeExifImg (media, metadata) {
let wMedia = await imageToWebp(media)
const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
const img = new webp.Image()
const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
await img.load(tmpFileIn)
fs.unlinkSync(tmpFileIn)
img.exif = exif
await img.save(tmpFileOut)
return tmpFileOut
}
}
async function writeExifVid (media, metadata) {
let wMedia = await videoToWebp(media)
const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
const img = new webp.Image()
const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
await img.load(tmpFileIn)
fs.unlinkSync(tmpFileIn)
img.exif = exif
await img.save(tmpFileOut)
return tmpFileOut
}
}
async function writeExif (media, metadata) {
let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : ""
const tmpFileIn = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
const tmpFileOut = path.join(os.tmpdir(), `${crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
const img = new webp.Image()
const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
await img.load(tmpFileIn)
fs.unlinkSync(tmpFileIn)
img.exif = exif
await img.save(tmpFileOut)
return tmpFileOut
}
}
async function uptotelegra (Path) {
return new Promise (async (resolve, reject) => {
if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
try {
const form = new FormData()
form.append("file", fs.createReadStream(Path))
const data = await  axios({
url: "https://telegra.ph/upload",
method: "POST",
headers: {
...form.getHeaders()
},
data: form
})
return resolve("https://telegra.ph" + data.data[0].src)
} catch (err) {
return reject(new Error(String(err)))
}
})
}
const fetchJson = (url, options) => new Promise(async (resolve, reject) => { fetch(url, options).then(response => response.json()).then(json => { resolve(json)}).catch((err) => { reject(err)})})
global.smsg = smsg
global.runtime = runtime
global.generateProfilePicture = generateProfilePicture
global.getRandom = getRandom
global.imageToWebp = imageToWebp
global.videoToWebp = videoToWebp
global.writeExifImg = writeExifImg
global.writeExifVid = writeExifVid
global.writeExif = writeExif
global.uptotelegra = uptotelegra
global.fetchJson = fetchJson

// SETTING DATABASE
global.testi = []

const file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})