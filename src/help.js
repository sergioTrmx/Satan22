const help = (prefix) => {
	return `
	┏━━❉ *𝕾𝖊𝖗𝖌𝖎𝖔-𝕭𝖔𝖙.* ❉━━━┓
	┣⊱ *${prefix}owner*
	┣⊱ Dueño del bot
	┣⊱ *${prefix}ping*
	┣⊱ Velocidad del bot
	┣⊱ *${prefix}info*
	┣⊱ Informacion del bot
	┣━━❉ *C̶̨̲̥̻̻̟͙̎̑̋̑̈́͌̃͗̉ṛ̸̨̦̱̦̰̋̍͋͛̏̑̓ę̶̱͍̫̩͕̝̝̈̾͒̕͝ä̵̤͈͇̬̤̳̩̪̪́̽ͅd̷̡̙̱͇͙̬̪̺̑̚ͅo̵̡̡̠̻̗̗̠̭̿͒́̈͆̃̈́͆͝ŗ̵̳͍̩̬͙̬̅̀̽͜* ❉━━━━━━
	┣⊱ *${prefix}sticker*
	┣⊱ Creagor de sticker/Gif
	┣⊱ *${prefix}text3d*
	┣⊱ Creador de texto 3D
	┣⊱ *${prefix}toimg*
	┣⊱ Sticker a imagen
	┣━━❉ *M̸̡̱̼͚̤̉͂̊̇̚͘e̵͖̳̫͉͖͋̊̈́̊̊̊͝d̴̙̜̞́̾̆̀͋͝ȉ̴̡͇̰̰̪̹̥̣̿̀͐̿́̈̈́ȧ̵̧̮̩̹̅̈́ͅ* ❉━━━━━━
	┣⊱ *${prefix}ytmp4*
	┣━━❉ *D̷̼͓̗͔̤̹̉̋̔̔i̷̱̬̐̊́̀̄̈́͝v̶͕͓͙̙̫̲̣̹͉̅̊̀e̵̢̱̳̍͐̄͘͜r̴̢̳̥͎͙͖̲͐͛̓͛̆͜͝ͅt̵̛̻̊͋̀̿̎̎͠i̵̧͈͕͈͕͆̍ḑ̴̛̤̤̞̹̋̊̈́̆͑̓̽̕͝ỏ̸͉̻͇̬̥̘̲̳͕̜̉́͋̎* ❉━━
	┣⊱ *${prefix}rate*
	┣⊱ Porcentaje
	┣━━❉ *N̴͍̣͍͓̖͇̻͈̭͋͂̏͛̏̋̏ṣ̸̡͖̙̉̋̐̀̂̍ͅf̶̺̺̻͙͒ͅͅw̵̢̨̜̬̜͇̼͔̿̾̌̏̚* ❉━━━━━━━
	┣⊱ *${prefix}waifu*
	┣⊱ *${prefix}anime*
	┣⊱ *${prefix}neko*
	┣⊱ *${prefix}pokemon*
	┣━━❉ *Ǒ̷̧͇̤͎͍͇̅̄̉̉̄t̷̢̧̠̠͚̘͙̰̦̠̍̐̌̄̋͗̃͠r̴͖̔̑̕ȯ̴̼͓͍̲̳̫͜ṡ̷͈̬̼̱̀́̏̑̂̐̚͜͝* ❉━━━━━━━
	┣⊱ *${prefix}lirik*
	┣⊱ Letra de la cancion
	┣━━❉ *S̴̪̣͔̭̳̩̥̘̿͜p̴͙̦͚̠͔̭̦̫̮̔̓͐̍̇͒͜͝a̶̧̨͚͚̗͖̬̩̳̻̒͝ḿ̴̯̘̜̓̆̌̿͋̿̀* ❉━━━━━━
	┣⊱ *${prefix}spamcall*
	┣⊱ Llamado a todo el grupo
	┣━━❉ *Ḁ̸͑͊̈́̍͛̕̚u̸̼̙͉̺̬̾͋̋̎̽̿̈́͛͝͝ḑ̵̛̰͓̼̹͍̱͒͆̔́̓̌͋i̶̢̘͉͕̰̳͇̮̔͜ó̴̺̤̞͆̍̈́̎͑̕* ❉━━━━━━
	┣⊱ *${prefix}tts*
	┣⊱ Envia audio del texto puesto
	┣━━❉ *G̵͖̅͌̄̆͘r̸̛̛̠͍̺̳͚͈̅̀̈́̋̉͠ó̷̡̲̗͕̦͉́͐̓́̀̈́͑u̴̯̳͖̍̀̾̋̀͜͝p̸̻̠̿̀͛̓* ❉━━━━━━
	┣⊱ *${prefix}blocklist*
	┣⊱ Lista de bloqueados
	┣⊱ *${prefix}linkgc*
	┣⊱ Link del grupo
	┣⊱ *${prefix}tagall*
	┣⊱ Llamar al grupo
	┣⊱ *${prefix}setpp*
	┣⊱ Cambiar foto del grupo
	┣⊱ *${prefix}add*
	┣⊱ Añadir miembro
	┣⊱ *${prefix}kick*
	┣⊱ Expulsar miembro
	┣⊱ *${prefix}setname*
	┣⊱ Cambiar nombre del grupo
	┣⊱ *${prefix}setdesc*
	┣⊱ Cambiar descripcion del grupo
	┣⊱ *${prefix}demote*
	┣⊱ Quitar admin
	┣⊱ *${prefix}promote*
	┣⊱ Dar admin
	┣⊱ *${prefix}listadmin*
	┣⊱ Lista de admin
	┣⊱ *${prefix}group* [buka/tutup]
	┣⊱ Abrir y cerrar grupo
	┣⊱ *${prefix}nsfw* [1/0]
	┣⊱ Activar contenido NSFW
	┣⊱ *${prefix}welcome* [1/0]
	┣⊱ Activar bienvenida
	┣━━❉ *O̶̗̬̬͑̄̅w̸̢͖͙̺̤̯̟̙̟͋̽̐̈͛̏̆͆͘n̴̬̦̗͛̑̀̔ͅe̷̫̝̯̓̏̍̒̕ŕ̸̳͔̝͙̳̪͎̕͜͠* ❉━━━━━━
	┣⊱ *${prefix}bc*
	┣⊱ Anuncio
	┣⊱ *${prefix}block*
	┣⊱ Bloquear
	┣⊱ *${prefix}unblock*
	┣⊱ Desbloquear
	┣⊱ *${prefix}leave*
	┣⊱ Salir del grupo
	┣⊱ *${prefix}clone*
	┣⊱ Clonar foto de perfil
	┣━━━━━━━━━━━━━━━━
	┃    *BOT BY ♞☞  S̵̙̥̬̥̖̲͈̺̫̾̈́͗̇͝e̶̠̞̦̬̤̲͙̊̒̐̓̽̚̚͝ŗ̵̧̢͍̪̦͕̦̞͒̊̍̿̀̑g̷͕͉͖̺̯͐͐͆i̴̧̯̲̩͙̺̫̟̕͜o̶̢͖͇͉͚̿̑͛̑͜ͅ  🐲🏆*
	┗━━━━━━━━━━━━━━━━

`
}

exports.help = help

