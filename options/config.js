/* My Info
* New Base Multi Device By Zero YT7
* Please Follow Me On All Sosial Media
* Instagram : https://instagram.com/FikriiSky
* Tiktok : https://tiktok.com/@FikriiSky
* Github : https://github.com/Fikrii21
* Youtube : https://youtube.com/FikriiSky
* Contact Me on wa.me/6281233738677
*/

/* My Web
* Rest Api : https://zeroyt7-api.xyz
* Olshop : https://zeroyt7.xyz
*/

/* Thanks To
* Zero TT7
* Dhika Ardiant
* Mhankbarbar
* Chaliph
* Allah S.W.T
* Ortu
* All Creator Bot

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
ZeroYT7: 'https://zeroyt7-api.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'Your Apikey',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

global.owner = ['6281233738677']
global.premium = ['6281233738666']
global.botname = 'Fikrii Sky'
global.packname = 'Fikrii Sky'
global.author = 'Fikrii Sky'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
