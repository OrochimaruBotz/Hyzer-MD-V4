const handler = async (msg, { client, command }) => {
msg.reply(Only.wait)
client.sendImage(msg.from, Func.pickJson('./system/database/anime/' + command + '.json'), '🚩 Random ' + command + '.', msg, {
isUrl:true,
buttons: [{buttonId: `.${command}`, buttonText: {displayText: 'NEXT'}, type: 1}],
headerType: 5, 
footer: wm
})
}
handler.help = ['waifu','loli','akira','ana','asuna','ayuzawa','boruto','chitoge']
handler.tags = ['anime']
handler.command = /^(waifu|loli|akira|ana|asuna|ayuzawa|boruto|chitoge)$/i

module.exports = handler
