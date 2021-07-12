const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Soporte Registro B)');
});
app.listen(3000, () => {
	console.log('Soporte Registro Activado');
});
//////////////////////////////
const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
fetchinvites: true,
sharding: false,
shardAmount: 2,
mobile: false, 
token: "ODYyODA3ODk2ODUyNzkxMzQ2.YOdueA.PZA26olFsDgaV-raPuMi-ejHcU4",
prefix: ["r/","R/"],
autoUpdate: false, 

})


//Callbacks

bot.onMessage()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onGuildJoin()
bot.onGuildLeave()


//Comandos

bot.command({
  name: "ayuda",
  aliases: ["help","a","h"],
  code: `$title[$author[$username[$authorID];$authorAvatar] ]
  $description[$customEmoji[FlechaAzul] ¡Hola <@$authorID>!

  **$customEmoji[FlechaAzul] Mi prefix es r/

  $customEmoji[FlechaAzul] Puedes ver mis comandos con sr/comandos <:neutro:795251200110755841>

  $customEmoji[FlechaAzul] Puedes entrar a mi servidor de soporte

  $customEmoji[FlechaAzul] Puedes invitarme por: [__Link__](https://discord.com/oauth2/authorize?client_id=862807896852791346&permissions=8&scope=bot%20applications.commands)**]
  $color[RANDOM] `
})


bot.command({
  name: "comandos",
  aliases: ["commands","cmds"],
  code: `$title[Lista de Comandos]
  $description[ayuda
  alias: "help","a","h"
  Descripción: Comando de ayuda para saber información relevante
  
  eval
  alias: "support"
  Descripción: Comando que evalua codigos desde afuera del Repl.it (solo para creadores)
  
  reglas
  Descripción: Para mostrar las reglas del servidor original (solo para creadores)
  
  lock
  alias: "bloquear"
  Descripción:Este comando sirve para bloquear los canales para el rol mencionado
  
  unlock
  alias: "desbloquear"
  Descripción: Lo mismo de arriba pero desbloquea :v
  
  set-anuncios
  Descripción: Sirve para establecer el canal de los anuncios... ¿un poco obvio no?
  
  set-encuestas
  Descripción: No me suena para nada algo de arriba ¬_¬
  
  anuncio
  Descripción: Para enviar el anuncio al canal establecido
  
  encuesta
  Descripción: ...
  
  giveaway
  alias: "gw"
  Descripción: Comando para hacer sorteos
  
  stats
  Descripción: Muestra los stats del bot
  
  bot-info
  Descripción: Muestra la información del bot ] `
})


//Modulos de exportación

bot.command({
  name: '<@!847901516144312332>',
  aliases: ["<@847901516144312332>"],
  nonPrefixed: true,
  code: `Hola, su no sabes mi prefix, puedes mirar mi estado, pero mi prefix es sr/`
})


//Error

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$channelSendMessage[$channelID;{title: Comando no encontrado}{description: El comando que $username acaba de poner es inexsistente, Puedes ver los comandos poniendo sr/comandos} {color: FF0000}]
  $onlyIf[$commandinfo[$replaceText[$message[1];sr/;];name]==;]
  $onlyIf[$stringStartsWith[$message;sr/]!=false;]
  `
})


//Bots

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$title[¡El bot a sido enviado exitosamente!]
  $author[$username[$authorID];$authorAvatar]
  $description[El bot se envio exitosamente a un canal donde los admins pueden ver, se le enviara a un server donde se probara el bot]
  $color[00FF00]
  $addReactions[$customEmoji[ticksiverde]]
  $addCmdReactions[$customEmoji[ticksiverde]]
  $onlyForChannels[863109197054869525;]
  $channelSendMessage[863128180684357653;{title: ¡Un bot a sido enviado!}
  {description: $message}
  {author:$username[$authorID]:$authorAvatar}
  {color: 00FF00}
  {reactions:$customEmoji[ticksiverde]}]
  $onlyForChannels[863109197054869525;] `
})


//Eval

bot.command({
  name: "eval",
  aliases: "support",
  code: `
  $author[Test]
  $addField[📥 Entrada; 
  $message]
  $addField[📤 Salida; 
  $eval[$message]]
  $onlyForIDs[709770108863643649;708260556288688131;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (y otras personas)]
  `
})


//Status

bot.command({
  name: "on",
  code: `
  $deletecommand
  <@848209401542082580>
  <:onlineaceptado:780804623899557889> El bot <@$mentioned> esta activado
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]
  $addReactions[<:ticksiverde:795250923138973727>]
  `
})


bot.command({
  name: "off",
  code: `
  $deletecommand
  <@848209401542082580>
  <:offline:780810483438714900> El bot <@$mentioned> esta desactivado
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]
  $addReactions[<:ticksiverde:795250923138973727>]`
})


//Logs

bot.command({
  name: "pendiente",
  code: `
  <@$mentioned[1]>
  $description[$customEmoji[neutro] El bot de <@$mentioned[1]> esta bajo revision en otro server]
  $color[525252]
  $deletecommand
  $onlyPerms[admin;Esto es solo pa' admins xd]
  $addReactions[$customEmoji[neutro]]
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]`
})


bot.command({
  name: "aceptar",
  code: `
  <@$mentioned[1]>
  $title[Felicidades]
  $description[$customEmoji[ticksiverde] El bot de <@$mentioned[1]> a sido aceptado]
  $color[00ff00]
  $deletecommand
  $onlyPerms[admin;Esto es solo pa' admins xd]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]`
})


bot.command({
  name: "rechazar",
  code: `
  <@$mentioned[1]>
  $description[$customEmoji[cruzpene] El bot de <@$mentioned[1]> a sido rechazado, razon: $noMentionMessage]
  $color[ff0000]
  $onlyPerms[admin;Esto es solo pa' admins xd]
  $addReactions[$customEmoji[cruzpene]]
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)
  $deletecommand]`
})


//Server

bot.variables({
  canalanuncios: "",
  canalencuestas: "",
})


bot.command({
  name: "set-anuncios",
  code: `$description[Canal de anuncios establecido $customEmoji[ticksiverde]]
  $addReactions[$customEmoji[ticksiverde]]
  $setServerVar[canalanuncios;$noMentionMessage[1]]
  $color[00FF00] `
})


bot.command({
  name: "anuncio",
  code: `
  $channelSendMessage[$getServerVar[canalanuncios];840980059225456661 {title: __**ANUNCIO**__} {description: $message} {footer: Anuncio hecho por <@$authorID>}]
  $deletecommand
  `
})


bot.command({
  name: "set-encuestas",
  code: `$description[Canal de encuestas establecido $customEmoji[ticksiverde]]
  $addReactions[$customEmoji[ticksiverde]]
  $setServerVar[canalencuestas;$noMentionMessage[1]]
  $color[00FF00] `
})


bot.command({
  name: "encuesta",
  code: `
  $channelSendMessage[$setServerVar[canalencuestas;$noMentionMessage[1]];848606281265709126 {title: __**ENCUESTA**__} {description: $message} {footer: Encuesta hecha por <@$authorID>}]
  $addReactions[<:ticksiverde:795250923138973727>;<:cruzpene:795251210923671552>]
  $deletecommand
  `
})


//Reglas

bot.command({
  name: "reglas",
  code: `
  $description[$customEmoji[normas] Reglas - Rules
  Estas son las reglas servidor, las que tendrás que cumplir, para mantener una buena convivencia entre toda esta comunidad.
  ↢─────────────↣
  These are the server rules, which you will have to comply with, to maintain a good coexistence among this entire community.

  • ───────────── •

  Las reglas son las siguientes / The rules are as follows:

  • ───────────── •

  :one: Respeto / Respect
  $customEmoji[FlechaAzul]  No insultes a los usuarios
  $customEmoji[FlechaAzul]  No hagas bromas de mal gusto
  $customEmoji[FlechaAzul]  No discrimines a los demás
  ↢─────────────↣
  $customEmoji[FlechaAzul]  Do not insult users
  $customEmoji[FlechaAzul]  Do not make jokes in bad taste
  $customEmoji[FlechaAzul]  Do not discriminate against others

  • ───────────── •

  :two: Uso de canales / Channel usage
  $customEmoji[FlechaAzul]  Cada canal tiene un respectivo uso
  $customEmoji[FlechaAzul]  Evita no hacer cosas que no se deben en canales no debidos
  ↢─────────────↣
  $customEmoji[FlechaAzul]  Each channel has a respective use
  $customEmoji[FlechaAzul]  Avoid not doing things that are not due in channels that are not due

  • ───────────── •

  :three: No subir contenido +18 / Don't upload content +18
  $customEmoji[FlechaAzul]  No subir videos pornográficos o hentai
  $customEmoji[FlechaAzul]  No subir contenido gore
  ↢─────────────↣
  $customEmoji[FlechaAzul]  Do not upload pornographic or hentai videos
  $customEmoji[FlechaAzul]  Do not upload gore content

  • ───────────── •

  :four: Personal / Staff
  $customEmoji[FlechaAzul]  Obedece al Staff
  $customEmoji[FlechaAzul]  Acepta las sanciones que se te dé
  $customEmoji[FlechaAzul]  No los insultes, es peligroso
  ↢─────────────↣
  $customEmoji[FlechaAzul]  Obey the Staff
  $customEmoji[FlechaAzul]  Accept the sanctions that are given to you
  $customEmoji[FlechaAzul]  Don't insult them, it's dangerous

  • ───────────── •

  :five: Sentido común / Common sense
  $customEmoji[FlechaAzul]  Si sabes que algo está mal no lo hagas
  $customEmoji[FlechaAzul]  No provoques a otra a realizar estas cosas
  ↢─────────────↣
  $customEmoji[FlechaAzul]  If you know something is wrong, don't do it
  $customEmoji[FlechaAzul]  Don't provoke someone else to do these things
  
  • ───────────── •

  $customEmoji[FlechaAzul]  Reacciona $customEmoji[ticksiverde] para nosotros poder saber si leiste las reglas
  ↢─────────────↣
  $customEmoji[FlechaAzul]  React $customEmoji[ticksiverde] to know if you read the rules]
  $addReactions[$customEmoji[ticksiverde]]
  $color[00ff00] `
})


bot.command({
  name: "reglas-bots",
  code: `$description[$customEmoji[normas] Reglas - Rules
  $customEmoji[FlechaAzul]  Estas son las reglas de los bots, estas reglas las tendras que cumplir si quieres meter el bot al servidor.
  ↢─────────────↣
  $customEmoji[FlechaAzul]  These are the bot rules, You will have to comply with these rules if you want to put the bot on the server.
  
  • ───────────── •
  
  :one: **Raiders**
  $customEmoji[FlechaAzul]  No aceptaremos bot raiders, y es un poco obvio, no los aceptaremos aun que no sea contra nosotros
  $customEmoji[FlechaAzul]  Tenemos un servidor de prueba de bots a si que no lo intenten
  $customEmoji[FlechaAzul]  El bot será informado a la SPA (Server Protection Agency)
  ↢─────────────↣
  $customEmoji[FlechaAzul]  We will not accept bot raiders, and it is a bit obvious, we will not accept them even if it is not against us
  $customEmoji[FlechaAzul]  We have a bot testing server so don't try it
  $customEmoji[FlechaAzul]  The bot will be informed to the SPA
  
  • ───────────── •
  
  :two: **Contenido del bot/Content from the bot**
  $customEmoji[FlechaAzul]  El bot no aceptara ningun contenido gore ni NSFW
  $customEmoji[FlechaAzul]  El contenido no puede ser nada en plan "bromita", osea no puede ser algo como que el bot envie un link y que te salga un virus, aún que el virus sea de mentira
  ↢─────────────↣
  $customEmoji[FlechaAzul]  The bot will not accept any gore or NSFW content
  $customEmoji[FlechaAzul]  The content cannot be anything like a "joke", that is, it cannot be something like the bot sending a link and you get a virus, even if the virus is fake
  
  • ───────────── •
  
  :three: **Comandos/Commands**
  $customEmoji[FlechaAzul]  Los comandos del bot son importantes, si no no habria bots, para que entre al server debe tener al menos 10 comandos
  $customEmoji[FlechaAzul]  No puedes poner comandos para tu propio beneficio, por ejemplo: ponerte roles que tienes que legalmente
  $customEmoji[FlechaAzul]  No puedes cambiar canales y menos borrarlos, eso solo tendran permiso los adminsy mods
  $customEmoji[FlechaAzul]  No puedes kickear/banear gente del servidor en cambio los warns se tienen permitido
  $customEmoji[FlechaAzul]  El bot no puede tener el permiso de \`Admin\`
  ↢─────────────↣
  $customEmoji[FlechaAzul]  The bot commands are important, otherwise there would be no bots, to enter the server it must have at least 10 commands
  $customEmoji[FlechaAzul]  You cannot put commands for your own benefit, for example: put on roles that you have to legally
  $customEmoji[FlechaAzul]  You can not change channels and less delete them, that will only have permission the admins and mods
  $customEmoji[FlechaAzul]  You cannot kick / ban people from the server instead warns are allowed
  $customEmoji[FlechaAzul]  The bot cannot have \`Admin\` permission
  
  $customEmoji[FlechaAzul]  Reacciona $customEmoji[ticksiverde] para nosotros poder saber si leiste las reglas de los bots
  ↢─────────────↣
  $customEmoji[FlechaAzul]  React $customEmoji[ticksiverde] to know if you read the bots rules]

  $addReactions[$customEmoji[ticksiverde]]
  $color[00ff00] `
})


bot.command({
  name: "sanciones",
  code: `$description[$customEmoji[tristeza]  Sanciones - Sanctions
  
  $customEmoji[FlechaAzul]  Aqui se muestran] `
})


//Roles

bot.command({
  name: "vip",
  code: `
  $title[NUEVO USER VIP]
  $description[Felicidades <@$mentioned>, conseguiste el role de <@862728403325419541>]
  $giveRole[$mentioned[1];862728403325419541]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyPerms[manageroles;No tienes los sufcientes permisos para hacer esto]`
})


bot.command({
  name: "vip+",
  code: `
  $title[NUEVO USER VIP+]
  $description[Felicidades <@$mentioned>, conseguiste el role de <@862728402998132746>]
  $giveRole[$mentioned[1];862728402998132746]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyPerms[manageroles;No tienes los sufcientes permisos para hacer esto]`
})


bot.command({
  name: "vip++",
  code: `
  $title[NUEVO USER VIP++]
  $description[Felicidades <@$mentioned>, conseguiste el role <@848214057798205440>]
  $giveRole[$mentioned[1];848214057798205440]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyPerms[manageroles;No tienes los sufcientes permisos para hacer esto]`
})


//Info

bot.command({
  name: "bot-info",
  code: `
  $title[**__Soporte Registro__**]
  $description[**__Información__**:
  
  **__Package:__** __Aoi.js__
  
  **__Creador:__** __<@709770108863643649>__
  
  **__Host:__** __Repl.it__
  
  **__Host 24/7:__** __UptimeRobot__]
  $color[53ade0]
  $addReactions[<:ticksiverde:795250923138973727>]
  `
})


bot.command({
  name: "stats",
  aliases: "status",
  code: `
  $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
  {field:Ping:\`$ping\`:yes}
  {field:Database Ping:\`$dbPing\`:yes}
  {field:CPU:\`$cpu\`:yes}
  {field:RAM:\`$ram\`:yes}
  {field:Runtime:\`24/7 ._.\`:yes}
  {field:Versión:\`$packageVersion\`:yes}
  {field:Desarrollador:\`$userTag[$botOwnerID]\`:yes}
  {color:53ade0}]
 
  $wait[3s]
 
  $botTyping
 
  $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo la RAM...\`}
  {color:53ade0}]
  $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
  $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo CPU...\`}
  {color:53ade0}]
  $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
  $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo Ping...\`}
  {color:53ade0}]
  $wait[$textSlice[x$ping000;1;5]ms]
 
  $botTyping
 
  $let[msgid;$sendMessage[{author:Cargando:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {color:53ade0};yes]]
 
  $serverCooldown[10s;Por favor espera %time%.]
  `
})


//Borrar

bot.command({
  name: "borrar",
  code: `$clear[$noMentionMessage[1]]
  $description[Los mensajes se borraron exitosamente]
  $addReactions[$customEmoji[ticksiverde]]
  $color[00FF00]
  $deleteIn[5s]
  $deletecommand`
})


//Tickets

bot.command({
  name: "$alwaysExecute",
  code: `$onlyForChannels[863165520986767371;]
  $channelSendMessage[863127618865201194;{title: $customEmoji[botlog]__NUEVO MENSAJE__$customEmoji[botlog]} {description:
  👤┇**De**: $username[$authorID]$userTag
  📧┇**Mensaje**: \`$noMentionMessage\`} {footer: Mensaje de $username[$authorID]}
  {color: RANDOM}]
  $title[Mensaje Enviado]
  $description[El mensaje se envió correctamente a los administradores y moderadores, si tiene otros problemas, no dude en contactarnos personalmente]
  $color[00FF00]
  $onlyForChannels[863165520986767371;] `
})


bot.command({
  name: "responder",
  code: `$sendDM[$mentioned[1];{title: ¡Has sido Respondido Por $username[$authorID]!} {description: $noMentionMessage} {footer: $year $month $day    $hour $minute $second} {color: 00FF00}]
  $title[¡Respuesta Enviada A $username[$mentioned[1]]!]
  $description[$noMentionMessage]
  $footer[$author[$username[$authorID];$authorAvatar] $year $month $day $hour:$minute:$second]
  $color[00FF00]
  `
})


//Giveaways

bot.variables({
  giveaway: ""
});
bot.command({
  name: "giveaway",
  aliases: 'gw',
  code: `
  $editMessage[$getServerVar[giveaway];{title:Giveaway Acabado 🎉}{description:Premio: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosteado Por: **$userTag[$authorID]**
  Ganador: $replaceText[$replaceText[$checkCondition [$getTextSplitLength==1];true;Ninguno, no hubo suficientes participantes.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer:Giveaway Acabado.:$authorAvatar}]
  $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;No hubo suficientes participantes.];false;El/La ganador/a del premio: **$replaceText[$message;$message[1];;-1]** es: <@$randomText[$joinSplitText[;]]>, Felicidades!]]
  $textSplit[$replaceText[$getReactions[$channelID;$getServerVar[giveaway];🎉;id];$clientID,;];,]
  $wait[$message[1]]
  $setServerVar[giveaway;$sendMessage[{title:Reacciona 🎉 para participar!.}{description:Premio: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosteado Por: **$userTag[$authorID]**
  Tiempo: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
  $onlyIf[$message[2]!=;{title:Buscando Argumentos}{description:No Has Puesto Ningún Premio Al Sorteo Sigue Este Formato: 
  \`\`\`
  - sr/giveaway(gw) <time> <prize>.\`\`\`
  \`Arguments with<> are required \`
  }{color:ORANGE}]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Formato Invalido}{description:El formato de hora que acaba de ingresar no es válido. Siga este ejemplo:
  \`\`\`
  1s Es 1 segundo 
  1m Es 1 minuto
  1h Es 1 hora
  1d Es 1 dia
  \`\`\`}{color:RED}]

  $onlyPerms[admin;{title:No Tienes Permisos}{description:Tu No Tienes Admistración Para Usar El Comando.}{color:RED}]
  `
})


//Des/Bloquear Canales

bot.command({
  name: "lock",
  code: `$sendmessage[{description: $customEmoji[cruzpene]  | **Canal cerrado por <@$authorID>!**}{color:WHITE};no]
  $textsplitmap[lock]
  $textsplit[$channelOverwrites[$channelid;{mention};/];/]
  $onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;Necesito permisos de **EDITAR CANALES**]
  $onlyperms[managechannels;No tienes los suficientes permisos!]
  `
})
bot.awaitedCommand({
  name: "lock",
  code: `$modifychannelperms[$channelid;-sendmessages;$findnumbers[$message[1]]]
  `
})

bot.command({
  name: "unlock",
  code: `$sendmessage[{description: $customemoji[ticksiverde] | **Canal desbloqueado por <@$authorID>!}{color:WHITE};no]
  $textsplitmap[unlock]
  $textsplit[$channelOverwrites[$channelid;{mention};/];/]
  $onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;Necesito permisos de **EDITAR CANALES**]
  $onlyperms[managechannels;No tienes los suficientes permisos!]
  `
})
bot.awaitedCommand({
  name: "unlock",
  code: `$modifychannelperms[$channelid;+sendmessages;$findnumbers[$message[1]]]`
})


//Emoji

bot.command({
  name: "agarrar-emoji",
  code: `$color[RANDOM]
  $title[Descargador De Emojis]
  $description[[Clickea Aqui](https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096) descargar **$advancedtextsplit[$message[1];:;2]** Emoji]
  $image[attachment://$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $attachment[https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096;$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $onlyIf[$stringstartswith[$message[1];<]==true;Se proporcionó un emoji no válido o tal vez se proporcionó un emoji predeterminado, ¡el emoji predeterminado no se puede descargar!]
  $onlyIf[$message[1]!=;**Usage:** sr/descargar <emoji>]
  `
})


//PPT

bot.command({
name: "piedra",
code: `
  $title[🧠 Juego de PPT]
  $thumbnail[$userAvatar[$clientID]]
  $description[
  $randomText[
  **$username[$clientID] ✊ Vs ✊ Tu**

  🟡 │ Es un **Empate**.;
  **$username[$clientID] 📄 Vs ✊ Tu**

  🔴 │ You **Perdiste**.;
  **$username[$clientID] ✂ Vs ✊ Tu**

  🟢 │ Tu **Ganaste**]

  $randomText[🎉 Bien Jugado !;🎉 Buen Juego !]]
  $color[RANDOM]
  $footer[Solicitado por $username[$authorID];$authorAvatar]
  $addTimestamp
  `
})

bot.command({
name: "papel",
code: `
  $title[🧠 Juego de PPT]
  $thumbnail[$userAvatar[$clientID]]
  $description[
  $randomText[
  **$username[$clientID] 📄 Vs 📄 Tu**

  🟡 │ Es un **Empate**.;
  **$username[$clientID] ✂ Vs 📄 Tu**

  🔴 │ Tu **Perdiste**.;
  **$username[$clientID] ✊ Vs 📄 Tu**

  🟢 │ Tu **Ganaste**.]

  $randomText[🎉 Bien Jugado !;🎉 Buen Juego !]]
  $color[RANDOM]
  $footer[Solicitado por $username[$authorID];$authorAvatar]
  $addTimestamp
  `
})

bot.command({
name: "tijeras",
code: `
  $title[🧠 Juego de PPT]
  $thumbnail[$userAvatar[$clientID]]
  $description[
  $randomText[
  **$username[$clientID] ✂ Vs ✂ Tu**

  🟡 │ Es un **Empate**.;
  **$username[$clientID] ✊ Vs ✂ Tu**

  🔴 │ Tu **Perdiste**.;
  **$username[$clientID] 📄 Vs ✂ Tu**

  🟢 │ Tu **Ganaste**.]

  $randomText[🎉 Bien Jugado !;🎉 Buen Juego !]]
  $color[RANDOM]
  $footer[Solicitado por $username[$authorID];$authorAvatar]
  $addTimestamp
  `
})


//Mención

bot.command({
  name: "<@!847901516144312332>",
  aliases: ["<@847901516144312332>"],
  nonPrefixed: true,
  code: `Hola, si no sabes mi prefix, puedes mirar mi estado, pero mi prefix es "sr/"
  `
})

//Nuke

bot.command({
  name: "nuke",
  code: `$deleteChannels[$channelID]
  $channelSendMessage[$cloneChannel[$channelID;yes];{title:Nukeado B) 💥} {color:ff0000}]
  $onlyPerms[admin;managemessages;Permisos Faltantes: \`ADMINISTRADOR\` \`ADMINISTRAR MENSAJES\`]
  `
})


//Cambiador de Status

bot.status({
  text:"$getVar[estado]",
  type:"$getVar[tipo]",
  status:"dnd",
  time: 12
})

bot.command({
  name: "set-status",
  code: `$setVar[estado;$noMentionMessage[1] $replaceText[$noMentionMessage[1];-; ;-1]]
  $setVar[tipo;$noMentionMessage[2]]
  $title[El estado del bot fue cambiado]
  $description[Nuevo estado: $message]
  $color[$getRoleColor[$highestRole[$clientID]]]
  `
});
bot.variables({
  estado: "",
  tipo: "",
});


//Kick

bot.command({
  name: "kick",
  aliases: ["kickear"],
  code: `  $channelSendMessage[$channelID;$title[Usuario Kickeado]$description[
  El usuario $message[1] fue kickeado
  Administrador: <@$authorID>
  Razon: $message[2]]
  $color[D1BBBB]
  $setGlobalUserVar[bl;$mentioned[1]]
  $sendDM[$findMember[$message[1]];{title:Kickeado}{description:
  Fuiste kickeado de **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: FF0000}]
  $kick[$findMember[$message[1]]]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes kickear a ti mismo!]
  $onlyPerms[kick;:x: No tienes los suficientes permisos. Permisos necesarios: **Kickear**]`
})


//Ban

bot.command({
  name: "ban",
  aliases: ["banear"],
  code: `  $channelSendMessage[$channelID;$title[Usuario Baneado]$description[
  El usuario $message[1] fue baneado
  Administrador: <@$authorID>
  Razon: $message[2]]
  $color[D1BBBB]
  $setGlobalUserVar[bl;$mentioned[1]]
  $sendDM[$findMember[$message[1]];{title:Baneado}{description:
  Fuiste baneado de **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]}]
  $ban[$findMember[$message[1]]]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes banear a ti mismo!]
  $onlyPerms[ban;:x: No tienes los suficientes permisos. Permisos necesarios: **Banear**] `
})


//Avatar

bot.command({
  name: "avatar",
  aliases: ['av', 'pfp'],
  code: `
  $title[$username[$findUser[$message]] Avatar]

  $description[[[PNG\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) ╏ [WEBP\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) ╏ [JPEG\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]

  $image[$userAvatar[$findUser[$message]]]

  $color[RANDOM]
  $addTimestamp
  `
})


//Warns

bot.command({
  name: "warn",
  aliases: ["warnear"],
  code: `$channelSendMessage[$channelID;{title: Usuario Warneado}
  {description: El usuario $message[1] fue warneado
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: D1BBBB}]
  $sum[$setUserVar[warns];1]
  $sendDM[$findMember[$message[1]];{title: Fuiste warneado}{description:
  Fuiste baneado de **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: FF0000}]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes warnear a ti mismo!]
  `
})


//Embed

bot.command({
  name: "embed",
  code: `$title[$replaceText[$noMentionMessage[1];-; ;-1]]
  $description[$replaceText[$noMentionMessage[2];-; ;-1]]
  $footer[$replaceText[$noMentionMessage[3];-; ;-1]]
  $color[$noMentionMessage[4]]
  $argsCheck[>1;Pon algo :v (pon "-" para simular los espacios)]
  `
})


//Permisos

//$onlyPerms[permiso;:x: No tienes los suficientes permisos. Permisos necesarios: **Permiso**]

//$onlyForIDs[]


//Otro




//Calculos

bot.command({
  name: "sumar",
  code: `
  $math[$noMentionMessage[1]+$noMentionMessage[2]] `
})


bot.command({
  name: "restar",
  code: `
  $math[$noMentionMessage[1]-$noMentionMessage[2]] `
})


bot.command({
  name: "multiplicar",
  code: `
  $math[$noMentionMessage[1]*$noMentionMessage[2]] `
})


bot.command({
  name: "dividir",
  code: `
  $math[$noMentionMessage[1]/$noMentionMessage[2]] `
})


//Report

bot.command({
  name: "set-rc",
  aliases: ["src"],
  code: `
  $setServerVar[reportchannel;$mentionedChannels[1]] 
  Configuro los reportes a <#$mentionedChannels[1]> 
  $argsCheck[>1;Por favor, menciona un canal] 
  $onlyPerms[managechannels;Necesitas los permisos de manejar canales]`
});

bot.command({
  name: "reportar",
  aliases: ["r","report"],
  code: `
  $useChannel[$getServerVar[reportchannel]]
  $title[**Nuevo Reporte**]
  $description[
  Reporte Por: $username[$authorID]
  Usuario Reportado: $username[$mentioned[1]]
  Reporte: $noMentionMessage]
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $addCmdReactions[$customEmoji[ticksiverde]]
  $addReactions[$customEmoji[cruzpene];$customEmoji[neutro];$customEmoji[ticksiverde]] 
  $onlyIf[$getServerVar[reportchannel]!=;]`
});


bot.variables({
  reportchannel: "",
})


//Beneficios VIPS

bot.command({
  name: "b-bt",
  code: `$title[Beneficios del Beta Tester]
  $description[Beta Tester:
  $customEmoji[FlechaAzul] Gestionar emojis y pegatinas

  $customEmoji[FlechaAzul] Ver el registro de auditoría

  $customEmoji[FlechaAzul] Gestionar apodos

  $customEmoji[FlechaAzul] Expulsar miembros

  $customEmoji[FlechaAzul] Prioridad de palabra

  $customEmoji[FlechaAzul] Silenciar miembros

  $customEmoji[FlechaAzul] Ensordecer miembros

  $customEmoji[FlechaAzul] Mover miembros

  $customEmoji[FlechaAzul] Oportunidad de llevar el bot de Soporte Registro a sus servers
  
  $customEmoji[FlechaAzul] Ver el servidor donde testeamos los bots

  Sanciones:
  $customEmoji[FlechaAzul] Expulsar/Mover/Silenciar/Ensordecer miembros a sus propios beneficios sera una expulsión

  $customEmoji[FlechaAzul] Una vez sea el usuario este expulsado/baneado no volvera a tener Beta Tester]
  $color[efff00] `
})


//Verificación

bot.command({
 name: "captcha",
 code: `
  $title[VERIFICACIÓN CAPTCHA]
  $description[**¡Aqui esta tu codigo <@$authorID>!** - $randomString[8]]
  $color[00FF00]
  $footer[Captach Verification Systeam 2.0]
  $addField[Reminder;Usa \`r/RBXVerify\` Y Tu Codigo.]
  $setuserVar[Captcha;$randomstring[8]]`
})


bot.command({
  name: "RBXVerify",
  usage: "RBXVerify <code>",
  code: `$author[$username[$authorID];$authorAvatar]
  $title[**¡Verificación Completa!**]
  $description[**¡Fuiste Exitosamente Verificado $username[$authorID]!**]
  $footer[Sistema De Verificación Captcha]
  $color[00FF00]
  $giveRole[$authorID;$findRole[Verificado]]
  $giveRole[$authorID;$findRole[¡------STAFF------!]]
  $giveRole[$authorID;$findRole[¡------Usuarios------!]]
  $giveRole[$authorID;$findRole[¡------Bots------!]]
  $giveRole[$authorID;$findRole[¡------F------!]]
  $giveRole[$authorID;$findRole[¡------Verificación------!]]
  $giveRole[$authorID;$findRole[Usuario]]
  $takeRole[$authorID;$findRole[No Verificado]]
  $onlyIf[$message==$getuserVar[Captcha];¡Lo siento, pero el codigo que pusiste es invalido! $customEmoji[tristeza]]
  $argsCheck[>1;$customEmoji[tristeza] Por favor, pon el codigo que se te puso al lado de la mención] `
})

//AFK

bot.command({
  name: "afk",
  code: `
  $setUserVar[AFK;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;on];false;off]/$replaceText[$replaceText[$checkCondition[$message==];true;AFK];false;$message]]

  $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$splitText[1]==on];true;Bienvenido de vuelta <@$authorID>, El AFK esta removido];false;<@$authorID> Establecí tu AFK: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;AFK];false;$noMentionMessage]]] 

  $setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$dateStamp];false;]]
  $changeNickname[$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$clientID];false;$authorID];$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];true;$username[$clientID]];false;⟨AFK⟩$nickname[$authorID]]];false;$replaceText[$replaceText[$checkCondition[$ownerID==$authorID];false;$username];true;$username[$clientID]]]]
  $textSplit[$getUserVar[AFK];/]
  $onlyIf[$getUserVar[command;$commandName]!=disabled;]`
})


bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
  $channelSendMessage[$channelID;$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] esta AFK: $splitText[2] - hace $parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time] {delete:10s}]
  $onlyIf[$splitText[1]==on;]
  $textSplit[$getUserVar[AFK;$mentioned[1]];/]
  $onlyIf[$checkContains[$message;<@$mentioned[1]>;<@!$mentioned[1]>]==true;]`
})


//Emojify

bot.command({
  name: "emojify",
  aliases: ['emoji'],
  code: `$jsonRequest[https://api.devs-hub.xyz/emojify?text=$toLowercase[$replaceText[$message; ;+;-1]];emojify;Errör]
  $argsCheck[>1;You need to provide some text to emojify]`
})


module.exports = ({
  name: "emojify",
  code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toUppercase[$message];; ];A;🇦];B;🇧];C;🇨];D;🇩];E;🇪];F;🇫];G;🇬];H;🇭];I;🇮];J;🇯];K;🇰];L;🇱];M;🇲];N;🇳];O;🇴];P;🇵];Q;🇶];R;🇷];S;🇸];T;🇹];U;🇺];V;🇻];W;🇼];X;🇽];Y;🇾];Z;🇿];1;1️⃣];2;2️⃣];3;3️⃣];4;4️⃣];5;5️⃣];6;6️⃣];7;7️⃣];8;8️⃣];9;9️⃣];#;#️⃣];!;❕];?;❔];0;0️⃣]
  $deleteCommand
  $onlyIf[$noMentionMessage!=;You need to write something for converting it to emoji.]
  $onlyIf[$mentioned[1]==;Please dont mention anyone. As i cant emojify mentions]
  $suppressErrors`
})


//Device

bot.command({
  name: "device",
  code: `$title[Device]
  $description[<@$findMember[$message]> is on $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None ✖️];web;Web 🌐];mobile;Mobile 📱];desktop;PC 🖥]]
  $thumbnail[$authorAvatar]
  $addTimestamp
  $color[#303136]`
})


//Descargar

bot.command({
  name: "download",
  code: `
  $color[RANDOM]
  $title[Emoji Downloader]
  $description[[Click Here](https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096) to Download **$advancedtextsplit[$message[1];:;2]** Emoji]
  $image[attachment://$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $attachment[https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096;$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $onlyIf[$stringstartswith[$message[1];<]==true;Invalid Emoji given or maybe a default emoji is given, Default emoji cant be downloaded!]
  $onlyIf[$message[1]!=;**Usage:** \`r/download <emoji>\`]
`
})


//RendomEmoji

bot.command({
name: "random-emoji",
aliases: ["re"],
code: `
$randomEmoji[$randomGuildID]`
})


//Welcome

bot.variables({
  wchannel: "",
  wmessage: "",
  lchannel: "",
  lmessage: "",
})


bot.command({
  name: "setjoinchannels",
  code: `$setServerVar[wchannel;$mentionedChannels[1]]
  El canal a sido establecido a <#$mentionedChannels[1]>.`
})


bot.command({
  name: "setjoinmessage",
  code: `$setServerVar[wmessage;$message] 
  El mensaje ha sido establecido
  Mensaje: $message `
})


bot.command({
  name: "setleavechannels",
  code: `$setServerVar[lchannel;$mentionedChannels[1]]
  El canal a sido establecido a <#$mentionedChannels[1]>.`
})


bot.command({
  name: "setleavemessage",
  code: `$setServerVar[lmessage;$message] 
  El mensaje ha sido establecido
  Mensaje: $message `
})


bot.joinCommand({
  channel: "$getServerVar[wchannel]",
  code: `<@$authorID>
  $title[¡Holaaa!]
  $description[$getServerVar[wmessage]]
  $thumbnail[$authorAvatar]
  $addTimestamp 
  $footer[¡Disfruta!]
  $color[RANDOM]` 
})
bot.onJoined()


bot.leaveCommand({
  channel: "$getServerVar[wchannel]",
  code: `<@$authorID>
  $title[¡Adios!]
  $description[$getServerVar[wmessage]]
  $thumbnail[$authorAvatar]
  $addTimestamp 
  $footer[¡Hasta Pronto!]
  $color[RANDOM]` 
})
bot.onLeave()


//Status Cuztomizada

bot.command({
 name:"user-status",
 code: `
 $title[**STATUS**]
 $description[[<@$mentioned[1]>]
 $status $if[$status==online]
 $customemoji[online]
 $elseif[$status==idle]
 $customemoji[idle]
 $endelseIf
 $elseif[$status==dnd]
 $customemoji[dnd]
 $endelseIf
 $elseif[$status==offline]
 $customemoji[ofline]
 $endelseIf
 $endif
 
 **Status Customizada** 
 $getCustomStatus[$authorID]]`
})


//Server Info

bot.command({
  name: "server-info",
  code: `
  $title[Server Info]
  $addField[**Verification Level**;$serverVerificationLevel;yes]
  $addField[**Members**;
  \`\`\`Todo: $membersCount\`\`\`
  \`\`\`Usuarios: $sub[$membersCount;$botcount]\`\`\`
  \`\`\`Bots: $botCount\`\`\`;yes]
  $addField[**Channels**;
  \`\`\`Todo: $channelCount\`\`\`
  \`\`\`Canales de Texto: $channelCount[text]\`\`\`
  \`\`\`Canales de Voz: $channelCount[voice]\`\`\`;yes]
  $addField[**Roles**;$guildRoles;yes]
  $addField[**Emojis Customizados**;| $serverEmojis |;yes]
  $addField[**Fecha de Creación**;\`\`\`$creationDate[$guildID]\`\`\`;yes]
  $addField[**Nivel de Boost**;\`\`\`$serverBoostLevel\`\`\`;yes]
  $addField[**Numeros de Boosts**;\`\`\`$serverBoostCount\`\`\`;yes]
  $addField[**Región**;\`\`\`$serverRegion\`\`\`;yes]
  $addField[**Invitación del Server**;\`\`\`$getServerInvite\`\`\`;yes]
  $addField[**Owner**;\`\`\`$username[$ownerID]$userTag[$ownerID]\`\`\`;yes]
  $addField[**Nombre del Server**;\`\`\`$serverName[$guildID]\`\`\`;yes]
  $image[$serverIcon]
  $color[RANDOM]`
})


//User Info

bot.command({
  name: "user-info",
  code: `$color[RANDOM]
  $author[$userTag[$mentioned[1]] Info;$authorAvatar]
  $description[**\`Peticion de $userTag\`**
 
  **__Informacion__**
  📛| Nombre - **$username[$mentioned[1]]**
  🏷️| Tag - **#$user[$mentioned[1];discrim]**
  🆔| ID - **$user[$mentioned[1];id]**
  📆| Cuenta - ** $user[$mentioned[1];created] **
 
  **__Otra Informacion__**
  🤖| Bot - **$replaceText[$replaceText[$isBot[$mentioned[1]];true;Si es un Bot];false;No es un Bot]**
  📷| Avatar - **[Here]($userAvatar[$mentioned[1]])**]
  $argsCheck[>1;¡Tienes que mencionar a alguien! $customEmoji[tristeza]]`
})


//Chat Bot

bot.command({
  name: "$alwaysExecute", 
  code: `$onlyIf[$channelID==$getServerVar[chatbotchannel;]
  $description[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&botname=Ori&ownername=Boost-Studios;message]]`
})


bot.command({
  name: "setchatbot",
  code: `$title[Successfully set chatbot channel!]$description[chabot is set to $mentionedChannels[1].]
  $setServerVar[chatbotchannel;$mentionedChannels[1]]
  $onlyPerms[admin;You need the admin permission to set the chat-bot channel.]`
})


bot.variables({
  chatbotchannel: "Not Set",
})


//Mod Mail




//Snipe

bot.onMessageDelete()
bot.deletedCommand({
  channel: "$channelID",
  code: `
  $setChannelVar[user_message;$message]
  $setChannelVar[user_ID;$authorID]`
});

bot.command({
  name: "snipe",
  code: `
  $author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
  $addTimestamp
  $description[
  $getChannelVar[user_message]]
  $color[RANDOM]
  $onlyIf[$getChannelVar[user_message]!=undefinied;{description: ¡No encontre el mensaje eliminado! $customEmoji[tristeza]}{color:#ff0000}
  ]`
})

bot.variables({
  user_ID: "",
  user_message: "",
})




//Variables

bot.variables({
  Captcha: "",
  AFK: "off",
  command: "",
  time: "",
  kicks: "0",
  bans: "0",
  warns: "0",
  invites: "0",
  canalanuncios: "",
  canalencuestas: "",
  deletedMessage: "",
  deletedIcon: "",
  deletedChannel: "",
  deletedAuthor: "",
})