const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Registro B)');
});
app.listen(3000, () => {
	console.log('Registro Activado');
});
//////////////////////////////
const Discord = require('discord.js');
require('@weky/inlinereply');
const Aoijs = require("aoi.js")
const disbut = require('discord-buttons');
const client = new Discord.Client();
const { Calculator } = require('weky');
const { WillYouPressTheButton } = require('weky');
const { RockPaperScissors } = require('weky');
const { GuessTheNumber } = require('weky');
const { Snake } = require('weky');
const { QuickClick } = require('weky');
disbut(client);
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});
const bot = new Aoijs.Bot({
fetchinvites: true,
sharding: false,
shardAmount: 2,
mobile: false, 
token: "TOKEN",
prefix: ["PREFIX"],
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
  description: "",
  category: "Utilidad",
  code: `$title[$author[$userTag[$authorID];$authorAvatar] ]
  $description[**$customEmoji[FlechaAzul] ¡Hola $userTag!

  $customEmoji[FlechaAzul] Mi prefix es r.

  $customEmoji[FlechaAzul] Puedes ver mis comandos con r.comandos $customEmoji[Windows]

  $customEmoji[FlechaAzul] Puedes entrar a mi servidor de soporte clickeando [__aquí__](https://is.gd/7eosW4)

  $customEmoji[FlechaAzul] Puedes invitarme por aqui (cumpliendo requisitos): [__Link__](https://is.gd/l4Egwx)
  
  $customEmoji[FlechaAzul] [__Web propia__](https://uwu-server-2.jimdosite.com)

  $customEmoji[FlechaAzul] [A](https://is.gd/WVZvnI) <- Consigue Premium del bot

  Extra:
  $customEmoji[FlechaAzul] Mi creador es: $userTag[$botOwnerID] y DanSecurity#0001**]
  $color[00ffee] 
  `
})


bot.command({
  name: "comandos",
  aliases: ["commands","cmds"],
  description: "Te da la lista de comandos (No esta completada)",
  category: "Utilidad",
  code: `$title[Lista de Comandos]
  $description[comandos-p:Te da los comandos Premium
  comandos-n:Te da los comandos de niveles
  comandos-d:Te da comandos d diversión
  comandos-m:Comandos de moderación]
  `
})


//:
//Uso: 
//Descripción: 
//Moderación:

//Soporte

bot.command({
  name: "soporte",
  code: `$title[Veo que tienes problemas]
  $description[Puedes visitar a este correo electronico para contarme tus problemas y intentare responderte
  **__soporte.registro.server@gmail.com__**]
  $color[00ffee] `
})


//Plantilla

bot.command({
  name: "plantilla",
  code: `$title[Esta es la plantilla de el servidor Oficialmi server :v]
  $description[Que onda a todos, si, apareci en toda su cara diciendo que vayais al server de $userTag[$botOwnerID], pero si os digo que el sabe catalan :v? *toma 2* Pero, si te digo que el server contiene...

  $customEmoji[FlechaAzul] Bots creados por gente: Nosotros ofrecemos a ustedes la oportunidad de invitar vuestro bot al server siempre y cuando cumplan las reglas de los bots

  $customEmoji[FlechaAzul] Bot oficial: Este server tiene su propio bot creado por el propio owner

  $customEmoji[FlechaAzul] -1% de toxicidad: Este server busca estar libre de toxicidad, aún así el humor negro esta permitido

  $customEmoji[FlechaAzul] Currículos para equipo de staff: Damos la oportunidad a la gente de buscar gente para staff
 
  $customEmoji[FlechaAzul] [Link](https://is.gd/7eosW4)]
  $color[00ffee]`
})


//Staff


bot.command({
  name: "registro",
  code: `$title[**__REGISTRO ADMINISTRATIVO__**]
  $description[Tanto para prohibir (ban) como para encarcelar (temp ban), expulsar (kickear), y silencio (mute) se llevará un registro que consistirá en informar de la puesta en acción de alguna de estas sanciones, para luego no encontrar inconvenientes con los usuarios, ni confusiones en los admins, aún asi, los admins tmb pueden salir en esta lista
  Los informes se tendrán que realizar de la siguiente manera:
  **EXPULSIÓN (KICKEAR)**
  KICK/Nombre del expulsado/razones de la expulsión/ID (opcional)
  **PROHIBICIÓN (BAN)**
  BAN/Nombre del baneado/método de ban permanente/ID (obligatorio)
  TEMP-BAN/Nombre del baneado/método de ban temporal/ID (opcional)
  **SILENCIO (MUTE)**
  MUTE/Nombre del muteado/tiempo del muteo/razones del mute/ID (opcional)
  **ADVERTENCIA (WARN)**
  WARN/Nombre del warneado/número de warns que lleva/opcional
  **__EJEMPLOS:__**
  **EXPULSIÓN (KICKEAR)**
  KICK/ Usuario1234/spam/39286304
  **PROHIBICIÓN (BAN)**
  BAN/ Usuario1234/tempban/3d/infracciones cometidas repetidamente/987169724
  **SILENCIO (MUTE)**
  MUTE/ Usuario1234/2h/insultar/234345623457] `
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
  category: "Utilidad",
  nonPrefixed: true,
  code: `$channelSendMessage[$channelID;{title: Comando no encontrado}{description: El comando que $username acaba de poner es inexsistente, Puedes ver los comandos poniendo sr.comandos} {color: FF0000}]
  $onlyIf[$commandinfo[$replaceText[$message[1];sr.;];name]==;]
  $onlyIf[$stringStartsWith[$message;sr.]!=false;]
  `
})


//Bots

bot.command({
  name: "$alwaysExecute",
  category: "Utilidad",
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
  $onlyForChannels[863109197054869525;]`
})


//Eval

bot.command({
  name: "eval",
  error: `$channelSendMessage[$channelID;$error]`,
  aliases: "support",
  category: "Utilidad",
  code: `
  $description[$author[Test]
  $addField[📥 Mensaje; 
  $message]
  $addField[📤 Eval; 
  $eval[$message]]]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;769962376761442315;Lo siento pero ese comando no existe]
  `
})

bot.command({
  name: "djs-eval",
  aliases: "support",
  category: "Utilidad",
  code: `
  $author[Test]
  $addField[📥 Entrada; 
  $message]
  $addField[📤 Salida; 
  $djsEval[$message]]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;Lo siento pero ese comando no existe]
  `
})

//Status

bot.command({
  name: "on",
  category: "Utilidad",
  code: `
  $deletecommand
  $customEmoji[ticksiverde] El bot <@$mentioned> esta activado
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]
  $addReactions[<:ticksiverde:795250923138973727>]
  `
})


bot.command({
  name: "off",
  category: "Utilidad",
  code: `
  $deletecommand
  $customEmoji[cruzpene] El bot <@$mentioned> esta desactivado
  $onlyForIDs[709770108863643649;este comando es solo pal NeonDreamLand, antiguamente llamado Infinity :) (u otras personas)]
  $addReactions[<:ticksiverde:795250923138973727>]
  `
})


//Logs

bot.command({
  name: "pendiente",
  category: "Utilidad",
  code: `
  <@$mentioned[1]>
  $description[$customEmoji[neutro] El bot de <@$mentioned[1]> esta bajo revision en otro server]
  $color[525252]
  $deletecommand
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $addReactions[$customEmoji[neutro]]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;Lo siento pero ese comando no existe]
  `
})


bot.command({
  name: "aceptar",
  category: "Utilidad",
  code: `
  <@$mentioned[1]>
  $title[Felicidades]
  $description[$customEmoji[ticksiverde] El bot de <@$mentioned[1]> a sido aceptado]
  $color[00ff00]
  $deletecommand
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;Lo siento pero ese comando no existe]`
})

bot.command({
  name: "rechazar",
  category: "Utilidad",
  code: `
  <@$mentioned[1]>
  $description[$customEmoji[cruzpene] El bot de <@$mentioned[1]> a sido rechazado, razon: $noMentionMessage]
  $color[ff0000]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderado res pueden usar esto]
  $addReactions[$customEmoji[cruzpene]]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;Lo siento pero ese comando no existe]
  `
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
  $color[00FF00]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})

bot.command({
  name: "anuncio",
  code: `$channelSendMessage[$getServerVar[canalanuncios];{title:$customEmoji[sirena]¡Nuevo Anuncio!$customEmoji[sirena]}
  {description:Anuncio-> \`$noMentionMessage\`}
  {color:RANDOM}
  {reactions:$customEmoji[sirena]}
  {author:$userTag:$authorAvatar}]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $addCmdReactions[$customEmoji[sirena]]
  `
})


bot.command({
  name: "encuesta",
  code: `$channelSendMessage[$getServerVar[canalencuestas];
  {title:📊 ¡Nueva Encuesta!}
  {color:DEB008}
  {field:❔ Pregunta:\`$replaceText[$noMentionMessage[1];-; ]\`}
  {field:1️⃣ Opción 1:\`$replaceText[$noMentionMessage[2];-; ]\`}
  {field:2️⃣ Opción 2:\`$replaceText[$noMentionMessage[3];-; ]\`}
  {field:💬 Tu propia opción:<#863165520986767371>}
  {author:$userTag:$authorIcon}
  {reactions:1️⃣,2️⃣,💬}]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $textSplit[$noMentionMessage;/]
  $argsCheck[>1;**¡Uso Invalido! \`r.encuesta pregunta opción 1 optión 2\`**]
  `
})


bot.command({
  name: "set-encuesta",
  code: `
  $setServerVar[canalencuestas;$mentionedChannels[1]]
  Encuestas puestas en <#$mentionedchannels[1]>
  $deletecommand
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
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
  $image[https://media.discordapp.net/attachments/868232496217747487/868981546290393108/Reglas-2.jpg?width=1050&height=263]
  $addReactions[$customEmoji[ticksiverde]]
  $color[00ffee] `
})

bot.command({
  name: "reglas-alianza",
  code: `$title[Estas son las reglas de alianza del server]
  $description[$customEmoji[FlechaAzul] Meter al bot en su server $customEmoji[Tests]

  $customEmoji[FlechaAzul] Cumplir las reglas del server $customEmoji[normas]

  $customEmoji[FlechaAzul] Que no haya toxicidad $customEmoji[Seguridad]

  $customEmoji[FlechaAzul] Una plantilla para poner en el server $customEmoji[dou]

  $customEmoji[FlechaAzul] Si se sale del server se tendra 2 dias para que vuelva a entra o si no la alianza se rompera automaticamente $customEmoji[tristeza]]
  $color[00ffee]`
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
  ↢─────────────↣
  $customEmoji[FlechaAzul]  The bot commands are important, otherwise there would be no bots, to enter the server it must have at least 10 commands
  $customEmoji[FlechaAzul]  You cannot put commands for your own benefit, for example: put on roles that you have to legally
  $customEmoji[FlechaAzul]  You can not change channels and less delete them, that will only have permission the admins and mods
  $customEmoji[FlechaAzul]  You cannot kick / ban people from the server instead warns are allowed
  
  • ───────────── •

  :fourth: **Permisos/Permissions**

  $customEmoji[FlechaAzul]  El bot no puede tener el permiso de \`Admin\`
  $customEmoji[FlechaAzul]  El bot no puede tener el permiso de modificar canales
  ↢─────────────↣
  $customEmoji[FlechaAzul]  The bot cannot have \`Admin\` permission
  $customEmoji[FlechaAzul]  The bot cannot have the permission to modify channels

  $customEmoji[FlechaAzul]  Reacciona $customEmoji[ticksiverde] para nosotros poder saber si leiste las reglas de los bots
  ↢─────────────↣
  $customEmoji[FlechaAzul]  React $customEmoji[ticksiverde] to know if you read the bots rules]

  $addReactions[$customEmoji[ticksiverde]]
  $color[00ffee] `
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
  $description[Felicidades <@$mentioned>, conseguiste el role de <@863089867466211328>]
  $giveRole[$mentioned[1];863089867466211328]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


bot.command({
  name: "vip+",
  code: `
  $title[NUEVO USER VIP+]
  $description[Felicidades <@$mentioned>, conseguiste el role de <@863089867440128010>]
  $giveRole[$mentioned[1];863089867440128010]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


bot.command({
  name: "vip++",
  code: `
  $title[NUEVO USER VIP++]
  $description[Felicidades <@$mentioned>, conseguiste el role <@863089865473523761>]
  $giveRole[$mentioned[1];863089865473523761]
  $addReactions[$customEmoji[ticksiverde]]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


//Info

bot.command({
  name: "bot-info",
  category: "Utilidad",
  code: `
  $title[**__Soporte Registro__**]
  $description[**__Información__**:
  
  **__Package:__** __Aoi.js__
  
  **__Creador:__** __<@709770108863643649>__
  
  **__Host:__** __Repl.it__
  
  **__Host 24/7:__** __UptimeRobot__]
  $color[53ade0]
  $addReactions[$customEmoji[ticksiverde]]
  `
})


bot.command({
  name: "stats",
  aliases: "status",
  category: "Utilidad",
  code: `
  $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
  {field:Ping:\`$ping\`:yes}
  {field:Database Ping:\`$dbPing\`:yes}
  {field:CPU:\`$cpu\`:yes}
  {field:RAM:\`$ram\`:yes}
  {field:Runtime:\`24/7 ._.\`:yes}
  {field:Versión:\`$packageVersion\`:yes}
  {field:Desarrollador:\`$userTag[$botOwnerID]\`:yes}
  {field:Package:\`Aoi.js\`:yes}
  {field:Host:\`Repl.it\`:yes}
  {color:00ffee}
  {reactions:$customEmoji[verificadorcyan],$customEmoji[dou]}]
 
  $wait[3s]
 
  $botTyping
 
  $editMessage[$get[msgid];{author:Cargando...:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo la RAM...\`}
  {color:00ffee}]
  $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
  $editMessage[$get[msgid];{author:Cargando...:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo CPU...\`}
  {color:00ffee}]
  $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
  $editMessage[$get[msgid];{author:Cargando...:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {description:\`Obteniendo Ping...\`}
  {color:00ffee}]
  $wait[$textSlice[x$ping000;1;5]ms]
 
  $botTyping
 
  $let[msgid;$sendMessage[{author:Cargando:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
  {color:00ffee};yes]]
 
  $serverCooldown[10s;Por favor espera 10 segundos.]
  `
})


//Borrar

bot.command({
  name: "borrar",
  category: "Utilidad",
  code: `$clear[$noMentionMessage[1]]
  $description[Los mensajes se borraron exitosamente]
  $addReactions[$customEmoji[ticksiverde]]
  $color[00FF00]
  $deleteIn[5s]
  $deletecommand
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
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
  $onlyForChannels[863165520986767371;]
  ]`
})


bot.command({
  name: "responder",
  code: `$sendDM[$mentioned[1];{title: ¡Has sido Respondido Por $username[$authorID]!} {description: $noMentionMessage} {footer: $year $month $day    $hour $minute $second} {color: 00FF00}]
  $title[¡Respuesta Enviada A $username[$mentioned[1]]!]
  $description[$noMentionMessage]
  $footer[$author[$username[$authorID];$authorAvatar] $year $month $day $hour:$minute:$second]
  $color[00FF00]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})


//Giveaways

bot.variables({
  giveaway: ""
});
bot.command({
  name: "giveaway",
  category: "Utilidad",
  aliases: 'gw',
  code: `
  $editMessage[$getServerVar[giveaway];{title:Giveaway Acabado $customEmoji[fiesta]}{description:Premio: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosteado Por: **$userTag[$authorID]**
  Ganador: $replaceText[$replaceText[$checkCondition [$getTextSplitLength==1];true;Ninguno, no hubo suficientes participantes.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer:Giveaway Acabado.:$authorAvatar}]
  $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;No hubo suficientes participantes.];false;El/La ganador/a del premio: **$replaceText[$message;$message[1];;-1]** es: <@$randomText[$joinSplitText[;]]>, Felicidades!]]
  $textSplit[$replaceText[$getReactions[$channelID;$getServerVar[giveaway];$customEmoji[fiesta];id];$clientID,;];,]
  $wait[$message[1]]
  $setServerVar[giveaway;$sendMessage[{title:Reacciona $customEmoji[fiesta] para participar!.}{description:Premio: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosteado Por: **$userTag[$authorID]**
  Tiempo: **$message[1]**}{timestamp}{color:RED}{reactions:$customEmoji[fiesta]};yes]]
  $onlyIf[$message[2]!=;{title:Buscando Argumentos}{description:No Has Puesto Ningún Premio Al Sorteo Sigue Este Formato: 
  \`\`\`
  - r.giveaway(gw) [tiempo] [precio].\`\`\`
  \`Los argumentos dentro de los [] esta requerido\`
  }{color:ORANGE}]
  $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Formato Invalido}{description:El formato de hora que acaba de ingresar no es válido. Siga este ejemplo:
  \`\`\`
  1s Es 1 segundo 
  1m Es 1 minuto
  1h Es 1 hora
  1d Es 1 dia
  \`\`\`}{color:RED}]

  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


//Des/Bloquear Canales

bot.command({
  name: "lock",
  code: `$sendmessage[{description: $customEmoji[cruzpene]  | **Canal cerrado por <@$authorID>!**}{color:WHITE};no]
  $textsplitmap[lock]
  $textsplit[$channelOverwrites[$channelid;{mention};/];/]
  $onlyif[$checkcontains[$channelpermissionsfor[$clientid];Embed Links;Manage Channels]==true;Necesito permisos de **EDITAR CANALES**]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
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
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})
bot.awaitedCommand({
  name: "unlock",
  code: `$modifychannelperms[$channelid;+sendmessages;$findnumbers[$message[1]]]`
})


//Emoji

bot.command({
  name: "agarrar-emoji",
  category: "Utilidad",
  code: `$color[RANDOM]
  $title[Descargador De Emojis]
  $description[[Clickea Aqui](https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096) descargar **$advancedtextsplit[$message[1];:;2]** Emoji]
  $image[attachment://$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $attachment[https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096;$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $onlyIf[$stringstartswith[$message[1];<]==true;Se proporcionó un emoji no válido o tal vez se proporcionó un emoji predeterminado, ¡el emoji predeterminado no se puede descargar!]
  $onlyIf[$message[1]!=;**Usage:** r.descargar <emoji>]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
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
  code: `Hola, si no sabes mi prefix, puedes mirar mi estado, pero mi prefix es "r."
  `
})

//Nuke

bot.command({
  name: "nuke",
  code: `$deleteChannels[$channelID]
  $channelSendMessage[$cloneChannel[$channelID;yes];{title:Nukeado B) 💥} {color:ff0000}]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


//Estado

bot.status({
  text:"como miras mi estado",
  type:"WATCHING",
  status:"dnd",
  time: 12
})


//Kick

bot.command({
  name: "kick",
  aliases: ["kickear"],
  code: `  $channelSendMessage[$channelID;$title[Usuario Kickeado]$description[
  El usuario $message[1] fue kickeado
  Administrador: <@$authorID>
  Razon: $message[2]]
  $color[D1BBBB]]
  $sendDM[$findMember[$message[1]];{title:Kickeado}{description:
  Fuiste kickeado de **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: FF0000}]
  $kick[$findMember[$message[1]]]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes kickear a ti mismo!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


//Ban

bot.command({
  name: "ban",
  aliases: ["banear"],
  code: `  $channelSendMessage[$channelID;$title[Usuario Baneado]$description[
  El usuario $message[1] fue baneado
  Administrador: <@$authorID>
  Razon: $message[2]]
  $color[D1BBBB]]
  $sendDM[$findMember[$message[1]];{title:Baneado}{description:
  Fuiste baneado de **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]}]
  $ban[$findMember[$message[1]]]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes banear a ti mismo!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  `
})


//Avatar

bot.command({
  name: "avatar",
  category: "Utilidad",
  aliases: ['av', 'pfp'],
  code: `
  $title[$username[$findUser[$message]] Avatar]

  $description[[[PNG\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) ╏ [WEBP\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) ╏ [JPEG\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]

  $image[$userAvatar[$findUser[$message]]]

  $color[RANDOM]
  $addTimestamp
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})


//Warns

bot.command({
  name: "warn",
  aliases: ["warnear"],
  code: `$sum[$setUserVar[warns;$mentioned];1]
  $channelSendMessage[$channelID;{title: Usuario Warneado}
  {description: El usuario $message[1] fue warneado
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: D1BBBB}
  Warns Llevados: $getUserVar[warns;$mentioned[1]]]
  $sendDM[$findMember[$message[1]];{title: Fuiste warneado}{description:
  Fuiste baneado en **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]
  Warns Llevados: $getUserVar[warns;$mentioned[1]]}
  {color: FF0000}]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes warnear a ti mismo!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto] `
})

bot.command({
  name: "unwarn",
  aliases: ["deswarnear"],
  code: `$sub[$setUserVar[warns;$mentioned];1]
  $channelSendMessage[$channelID;{title: Usuario Des Warneado}
  {description: El usuario $message[1] fue des warneado
  Administrador: <@$authorID>
  Razon: $message[2]}
  {color: D1BBBB}
  Warns Llevados: $getUserVar[warns;$mentioned[1]]]
  $sendDM[$findMember[$message[1]];{title: Fuiste des warneado}{description:
  Fuiste baneado en **$serverName**
  Administrador: <@$authorID>
  Razon: $message[2]
  Warns Llevados: $getUserVar[warns;$mentioned[1]]}
  {color: FF0000}]
  $onlyIf[$authorID!=$mentioned[1];:x:| No te puedes des warnear a ti mismo!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})

//Embed

bot.command({
  name: "embed",
  category: "Utilidad",
  code: `$title[$replaceText[$noMentionMessage[1];-; ;-1]]
  $description[$replaceText[$noMentionMessage[2];-; ;-1]]
  $footer[$replaceText[$noMentionMessage[3];-; ;-1]]
  $color[$noMentionMessage[4]]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  $argsCheck[>1;Pon algo :v (pon "-" para simular los espacios)]
  `
})


//Permisos

///$onlyPerms[permiso;:x: No tienes los suficientes permisos. Permisos necesarios: **Permiso**]

///$onlyForIDs[$botOwnerID;]


//Report

bot.command({
  name: "set-rc",
  aliases: ["src"],
  code: `
  $setServerVar[reportchannel;$mentionedChannels[1]] 
  Configuro los reportes a <#$mentionedChannels[1]> 
  $argsCheck[>1;Por favor, menciona un canal] 
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
});

bot.command({
  name: "reportar",
  category: "Utilidad",
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
  <@$authorID>
  $title[VERIFICACIÓN CAPTCHA]
  $description[**¡Aqui esta tu codigo $userTag!** - Codigo: \`$randomString[8]\`]
  $color[00FF00]
  $footer[Sistema De Verificación Captcha]
  $addField[Reminder;Usa \`r.verificar\` Y Tu Codigo.]
  $setuserVar[captcha;$randomstring[8]]`
})


bot.command({
  name: "verificar",
  usage: "verificar <code>",
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
  $onlyIf[$message==$getuserVar[captcha];¡Lo siento, pero el codigo que pusiste es invalido! $customEmoji[tristeza]]
  $argsCheck[>1;$customEmoji[tristeza] Por favor, pon el codigo que se te puso al lado de la mención] `
})

//AFK

bot.command({
  name: "afk",
  category: "Utilidad",
  code: `> **Puse tu AFK encendido con la razon: "$message"**
  _💡 Tip: Usa \`r.removeafk\` para apagar el AFK_
  $changeNickname[$authorID;$nickname[$authorID] [AFK]
  $setUserVar[afk;1]
  $setUserVar[afkwhy;$message]
  $onlyIf[$message!=;> **¡Necesitas poner una razón!**]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})

bot.command({
  name: "<@",
  nonPrefixed: true,
  code: `> **Hey <@$authorID>, <@$mentioned[1]> Esta AFK con una razón: "$getUserVar[afkwhy;$mentioned[1]]"**
  $onlyIf[$getUserVar[afk;$mentioned[1]]==1;]
  $onlyIf[$mentioned[1]!=;]`
})

bot.command({
  name: "remover-afk",
  category: "Utilidad",
  code: `> **¡Bienvenido de vuelta $username! Tu AFK fue desactivado.**
  $changeNickname[$authorID;$username[$authorID]]
  $setUserVar[afk;0]
  $setUserVar[afkwhy;undefinied]
  $onlyIf[$getUserVar[afk]==1;> **No estas AFK.**]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})


//Emojify

bot.command({
  name: "emojify",
  category: "Utilidad",
  aliases: ['emoji'],
  code: `$jsonRequest[https://api.devs-hub.xyz/emojify?text=$toLowercase[$replaceText[$message; ;+;-1]];emojify;Errör]
  $argsCheck[>1;You need to provide some text to emojify]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})


//Device

bot.command({
  name: "device",
  category: "Utilidad",
  code: `$title[Device]
  $description[<@$findMember[$message]> is on $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None ✖️];web;Web 🌐];mobile;Mobile 📱];desktop;PC 🖥]]
  $thumbnail[$authorAvatar]
  $addTimestamp
  $color[#303136]
  `
})


//Descargar

bot.command({
  name: "download",
  category: "Utilidad",
  code: `
  $color[RANDOM]
  $title[Emoji Downloader]
  $description[[Click Here](https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096) to Download **$advancedtextsplit[$message[1];:;2]** Emoji]
  $image[attachment://$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $attachment[https://cdn.discordapp.com/emojis/$advancedtextsplit[$message[1];:;3;>;1].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]?size=4096;$advancedtextsplit[$message[1];:;2].$replaceText[$replaceText[$stringstartswith[$message[1];<a];true;gif];false;png]]
  $onlyIf[$stringstartswith[$message[1];<]==true;Invalid Emoji given or maybe a default emoji is given, Default emoji cant be downloaded!]
  $onlyIf[$message[1]!=;**Usage:** \`r.download <emoji>\`]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})


//RendomEmoji

bot.command({
  name: "random-emoji",
  aliases: ["re"],
  code: `
  $randomEmoji[$randomGuildID]
  `
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


//Server Info

bot.command({
  name: "server-info",
  category: "Utilidad",
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
  $color[RANDOM]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


//User Info

bot.command({
  name: "user-info",
  category: "Utilidad",
  code: `$color[RANDOM]
  $author[$userTag[$noMentionMessage[1]] Info;$authorAvatar]
  $description[**\`Peticion de $userTag\`**
 
  **__Informacion__**
  📛| Nombre;**$username[$noMentionMessage[1]]**
  🏷️| Tag;**#$user[$noMentionMessage[1];discrim]**
  🆔| ID;**$user[$noMentionMessage[1];id]**
  📆| Cuenta;**$user[$noMentionMessage[1];created]**
  ⏳| Edad;**$getGlobalUserVar[edad]**
 
  **__Otra Informacion__**
  🤖| Bot;**$replaceText[$replaceText[$isBot[$noMentionMessage[1]];true;Si es un Bot];false;No es un Bot]**
  💯| Owner del bot;$if[$noMentionMessage[1]==$botOwnerID]
  **Si, es mi creador :>**
  $else
  **Non, este no es mi creador :<**
  $endIf
  📷| Avatar;[[PNG\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) ╏ [WEBP\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) ╏ [JPEG\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]]
  $supressErrors
  $argsCheck[>1;¡Tienes que poner el ID de alguien! $customEmoji[tristeza]]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


bot.command({
  name: "user-info",
  code: `$color[RANDOM]
  $thumbnail[$userAvatar[$noMentionMessage[1]]]
  $title[Información Del Usuario]
  $addField[**Estado Customizado**;$getCustomStatus[$noMentionMessage[1]];yes]
  $addField[**Avatar**;[User Avatar\\]($userAvatar[$noMentionMessage[1];2048;yes]);yes]
  $addField[** 💿 Server**;**Unido**: $memberJoinedDate[$noMentionMessage[1];time] ago
  \`🔝\` **Role Mas Alto**: <@&$highestRole[$noMentionMessage[1]]>
  \`📃\` **Roles**: $userRoles[$noMentionMessage[1];mentions]
  \`✅\` **Permisos**: $userPerms[$noMentionMessage[1]];yes]
  $addField[** :adult: Información Basica**; \`📛\` **Nombre**: $username[$noMentionMessage[1]]#$discriminator[$noMentionMessage[1]]
  \`💳\` **ID**: $noMentionMessage[1]
  \`🌈\` **Estado**: $status[$noMentionMessage[1]]
  \`🔶\` **Insignias**: $getUserBadges[$noMentionMessage[1]]
  \`💻\` **Plataforma**: $platform[$noMentionMessage[1]]
  \`👶\` **Fecha De Creación**: $creationDate[$noMentionMessage[1];date] ($creationDate[$noMentionMessage[1];time]);yes]`
})


//Chat Bot

bot.variables({
chatbotChannel: "",
botGender: "MALE"
})

bot.command({
  name: "chatbot-channel",
  code: `
  $setServerVar[chatbotChannel;$findChannel[$message[1]]]
  Chat Bot esta puesto en el canal de: <#$findChannel[$message[1]]>
  $onlyIf[$mentionedChannels[1]!=;¡Tienes que mencionar un canal!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})

//perms
//Mod Mail




//Edit/Snipe

bot.onMessageDelete()
bot.deletedCommand({
  channel: "$channelID",
  code: `
  $setChannelVar[user_message;$message]
  $setChannelVar[user_ID;$authorID]`
});

bot.command({
  name: "snipe",
  category: "Utilidad",
  code: `
  $author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
  $addTimestamp
  $description[
  $getChannelVar[user_message]]
  $color[RANDOM]
  $onlyIf[$getChannelVar[user_message]!=undefinied;{description: ¡No encontre el mensaje eliminado! $customEmoji[tristeza]}{color:#ff0000}]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})


bot.updateCommand({
  channel: "$channelID",
  code: `$setChannelVar[msgEditorID;$authorID]
  $setChannelVar[esnipeOldMsg;$oldMessage]`
})
bot.onMessageUpdate();


bot.command({
  name: "editsnipe",
  category: "Utilidad",
  aliases: ["esnipe"],
  code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
  $description[$getChannelVar[esnipeOldMsg]]
  $addTimestamp
  $color[RANDOM]
  $onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: ¡No encontre el mensaje editado! $customEmoji[tristeza]}{color: RED}]
  $onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: ¡No encontre el mensaje editado! $customEmoji[tristeza]}{color: RED}]
  $suppressErrors[¡No encontre el mensaje editado! $customEmoji[tristeza]]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]
  `
})

bot.variables({
  user_ID: "",
  user_message: "",
  msgEditorID: "undefined",
  esnipeOldMsg: "undefined"
})


//Exec

bot.command({
name: "exec",
code: `$exec[$message]
$log[(console@$username) $message]
$onlyIf[$authorID=$botOwnerID;Uhg...]
`
})


//Rango

bot.command({
  name: "comandos-p",
  code: `$title[Comandos VIP]
  $description[$addField[embed;Te permite hacer un embed (poner "-" para simular los espacios dentro del embed);yes]
  $addField[avatar;Te permite agarrar el avatar de un usuario;yes]
  $addField[afk;Te permite hacer un mensaje cuando estes AFK cuando alguien te pinguee;yes]
  $addField[remove-afk;Te permite restablecer lo del AFK para que no ponga el mensaje cuando te pingueen;yes]
  $addField[emojify;Permite hacer que el bot haga tu texto pero hecho con emojis;yes]
  $addField[download/agarrar-emoji;Te permite descargar un emoji del server en el que estas;yes]
  $addField[server-info;Te permite ver la información del server en el que estas;yes]
  $addField[user-info;Te permite ver la información de un usuario mediante su ID;yes]
  $addField[texto-a-binario;Te permite traducir del texto normal a binario;yes]
  $addField[binario-a-texto;Lo mismo que \`texto-a-binario\` pero al revés;yes]
  $addField[clima;Te permite ver el clima de la localidad que pongas;yes]
  $addField[a-url;Te permite acortar URL sin el bit.ly para navegar seguro;yes]
  $addField[color;Te da una imagen de un color mediante su HEX;yes]
  $addField[colores;Te da una imagen donde te da las HEX's para los colores;yes]] `
})

bot.command({
  name: "premium-infinito",
  code: `$setGlobalUserVar[premium;true;$noMentionMessage[1]]
  $description[$userTag[$noMentionMessage[1]] Consiguio el VIP infinito $customEmoji[rainbowstickman]]
  $color[00FFEE]
  $onlyIf[$getGlobalUserVar[premium;$noMentionMessage[1]]==false;Ese usuario actualmente ya tiene el Premium $customEmoji[Pana]]
  $onlyForIDs[$botOwnerID;] `
})


bot.command({
  name: "sacar-premium",
  code: `$setGlobalUserVar[premium;false;$noMentionMessage[1]]
  $description[$userTag[$noMentionMessage[1]] Srry brother, pero te sacamos tu VIP por un problema $customEmoji[tristeza]]
  $color[ff0000]
  $onlyIf[$getGlobalUserVar[premium;$noMentionMessage[1]]==true;Ese usuario no tiene actualmente el Premium $customEmoji[tristeza]]
  $onlyForIDs[$botOwnerID;] `
})


bot.command({
  name: "premium-1s",
  code: `$setGlobalUserVar[premium;true;$noMentionMessage[1]]
  $description[$userTag[$noMentionMessage[1]] Consiguio el Premium de un semana $customEmoji[rainbowtickman]]
  $setTimeout[7d]
  $onlyIf[$getGlobalUserVar[premium;$noMentionMessage[1]]==false;Ese usuario actualmente ya tiene el Premium $customEmoji[Pana]]
  $onlyForIDs[$botOwnerID;]`
});


bot.timeoutCommand({
  code: `$sendDM[$noMentionMessage[1];$userTag[$noMentionMessage[1]] Srry brother, pero te sacamos tu VIP por por que ya se acabo el tiempo $customEmoji[tristeza]]
  $setUserVar[premium;false;$noMentionMessage[1]]`
})


bot.command({
  name: "premium-1m",
  code: `$setGlobalUserVar[premium;true;$noMentionMessage[1]]
  $description[$userTag[$noMentionMessage[1]] Consiguio el Premium de un mes $customEmoji[rainbowtickman]]
  $setTimeout[30d]
  $onlyIf[$getGlobalUserVar[premium;$noMentionMessage[1]]==false;Ese usuario actualmente ya tiene el Premium $customEmoji[Pana]]
  $onlyForIDs[$botOwnerID;]`
});


bot.timeoutCommand({
  code: `$sendDM[$noMentionMessage[1];$userTag[$noMentionMessage[1]] Srry brother, pero te sacamos tu VIP por por que ya se acabo el tiempo $customEmoji[tristeza]]
  $setUserVar[premium;false;$noMentionMessage[1]]`
})


bot.command({
  name: "premium-1a",
  code: `$setGlobalUserVar[premium;true;$noMentionMessage[1]]
  $description[$userTag[$noMentionMessage[1]] Consiguio el Premium de un AÑO $customEmoji[rainbowtickman]]
  $setTimeout[365d]
  $onlyIf[$getGlobalUserVar[premium;$noMentionMessage[1]]==false;Ese usuario actualmente ya tiene el Premium $customEmoji[Pana]]
  $onlyForIDs[$botOwnerID;]`
});


bot.timeoutCommand({
  code: `$sendDM[$noMentionMessage[1];$noMentionMessage[1]] Srry brother, pero te sacamos tu VIP por por que ya se acabo el tiempo $customEmoji[tristeza]]
  $setUserVar[premium;false;$mentioned]`
})


bot.command({
  name: "premium",
  code: `$if[$getGlobalUserVar[premium]==true]
  @$userTag, Sigues teniendo el Premium $customEmoji[Pana]
  $else
  @$userTag, Ya no tienes Premium $customEmoji[tristeza]
  $endIf `
})


bot.command({
  name: "check-premium",
  code: `$if[$getGlobalUserVar[premium;$noMentionMessage[1]]==true]
  El usuario $userTag[$noMentionMessage[1]] sigue teniendo el Premium $customEmoji[Pana]
  $else
  El usuario $userTag[$noMentionMessage[1]] ya no tiene mas Premium $customEmoji[tristeza]
  $endIf`
})


////$onlyIf[$getGlobalUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]


//Edad

bot.command({
  name: "edad",
  category: "Utilidad",
  code: `$title[Ya tengo tu edad]
  $description[Tengo informado que tu edad es de \`$message\`]
  $addTimestamp
  $color[RANDOM]
  $setGlobalUserVar[edad;$message]
  `
})


//Binario

bot.command({
  name: "textoabinario",
  category: "Utilidad",
  code: `$jsonRequest[https://no-api-key.com/api/v1/binary?text=$message;binary]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})

bot.command({
  name: "binarioatexto",
  category: "Utilidad",
  code: `$jsonRequest[https://no-api-key.com/api/v1/binary-text?binary=$message;text]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


//Antilink

bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
  $onlyIf[$checkContains[https://;www.;discord.gg;top.gg;discord.io]]
  $onlyIf[$getServerVar[word]==true;]
  ¡$nickname[$authorID] No puedes mandar ningun link dentro del server de \`$serverName\`!
  Razón: \`Antilink Encendido\`
  $suppressErrors
  `
})

bot.command({
  name: "antilinkon",
  category: "Utilidad",
  code: `$setServerVar[word;true]
  $onlyBotPerms[managemessages;**¡Tu requieres el permiso de: \`GESTIONAR MENSAJES\` para poder usar esto!**]
  $title[Sistema Antilink]
  $description[Antilink Encendido]
  $addTimestamp
  $color[WHITE]
  $suppressErrors
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})

bot.command({
  name: "antilinkoff",
  category: "Utilidad",
  code: `$setServerVar[word;no]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $title[Sistema Antilink]
  $description[Antilink Apagado]
  $addTimestamp
  $color[WHITE]
  $suppressErrors
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})

bot.variables({
  word: "no",
})


//Clima

bot.command({
  name: "clima",
  code: `$title[Clima En $message] 
  $description[
  Localidad: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**
  Temperatura: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]**
  Humedad: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]**
  Velocidad de viento: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]**
  Pantalla De Viento: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]**
  Tiempo De Observación: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]**]
  $argsCheck[>1;❌Por favor, pon una localidad]
  $color[#f2f2f2]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


//RR

bot.command({
  name: "RR",
  code: `$deletecommand
  $reactionCollector[865255047687569418;everyone;4w;$customEmoji[Support],$customEmoji[FlechaAzul],$customEmoji[botlog],$customEmoji[fiesta],$customEmoji[normas];awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5;yes]
  $textSplit[$sendMessage[{title:Autoroles:} {description: $customEmoji[Support] Anuncios
  $customEmoji[FlechaAzul] Encuestas
  $customEmoji[botlog] Bots Logs
  $customEmoji[fiesta] Giveaways
  $customEmoji[normas] Novedades}
  {color:RANDOM};yes];] `
})

bot.command({
  name: "RR",
  code: `$setTimeout[4w] `
})

bot.timeoutCommand({
  code: `$sendDM[$borOwnerID;Renovar roles reactivos] `
})

bot.awaitedCommand({
    name: "awaitReaction5",
    code: `
    $giveRole[$authorID;864995343421800490] `
})

bot.awaitedCommand({
    name: "awaitReaction4",
    code: `
    $giveRole[$authorID;864155409995792395]`
})

bot.awaitedCommand({
    name: "awaitReaction3",
    code: `
    $giveRole[$authorID;863877892643618896]`
})

bot.awaitedCommand({
    name: "awaitReaction2",
    code: `
    $giveRole[$authorID;863877112872304680]`
})

bot.awaitedCommand({
    name: "awaitReaction1",
    code: `
    $giveRole[$authorID;863876874089660416]`
})


//SM

bot.command({
  name:"sm",
  code:`$slowmode[$channelID;$findNumbers[$noMentionMessage]]
  
  Modo lento se a puesto en: **$findNumbers[$noMentionMessage]**.
  
  $if[$checkContains[$message;remove]==true]
  
  $slowmode[$channelID;0]
  
  $endif
  
  $argsCheck[>1;¡Tienes que poner una cantidad!
  2s=2 segundos
  2h=2 horas]
  
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  
  $suppressErrors`
})

///$onlyPerms[managechannels;:x: **!Tu requieres el permiso de: \`Gestionar Canales\` para usar eso!**]


//Sugerencias

	
bot.command({
  name:"establecer-sug",
  category:"Moderación",
  aliases:['sug-on'],
  description:"Habilita y configura el módulo de sugerencias para el servidor.",
  usage:"establecer-sug <Canal de sugerencias> <Canal donde se ponen las sugerencias>",
  code:`$author[Módulo de sugerencias;$useravatar[$clientid]]
  $description[$customemoji[blue_heart] Las sugerencias serán redirigidas a <#$mentionedchannels[1]>, y la gente solo puede poner el comando en <#$mentionedchannels[2]>!]
  $color[f200f2]
  $footer[¡Gracias por el soporte!;$authoravatar]
  $setservervar[suggest_channel;$mentionedchannels[1]]
  $setservervar[suggest_where;$mentionedchannels[2]]
  $onlyif[$mentionedchannels[2]!=;¡Menciona 2 canales por favor! Primer canal para donde se enviaran las sugerencias y segundo donde tienen que poner el comando]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $author[$userTag[$authorID];$authorAvatar] `
})
 
 
bot.command({
  name:"sugerir",
  category: "Utilidad",
  aliases:['idea'],
  description:"Envia una sugerencia al canal establecido de sugerencias.",
  usage:"sugerir [sugerencia]",
  code:`$setServerVar[suggest_count;$sum[$getservervar[suggest_count];1]]
  $setServerVar[su;$getServerVar[su]$sum[$getServerVar[suggest_count];1].$authorid.$splittext[1]/]
  $textsplit[$channelsendmessage[$getservervar[suggest_channel];{author:$usertag:$authoravatar}{title:Sugerencia #$sum[$getservervar[suggest_count];1]}{description:$message $messageAttachment}{color:RED}{timestamp}{footer:$authorid};yes]; ]
  $deletecommand
  $onlyif[$channelid==$getservervar[suggest_where];¡Solo puedes sugerir en <#$getservervar[suggest_where]>!]
  $onlyif[$serverchannelexists[$getservervar[suggest_where]]==true;¡Supongo que alguien eliminó el canal donde la gente puede sugerir!]
  $onlyif[$serverchannelexists[$getservervar[suggest_channel]]==true;¡Supongo que alguien borró el canal de sugerencias.!]
  $onlyif[$getservervar[suggest_channel]!=;¡El módulo de sugerencias aún no está habilitado!]`
})
 
 
//Code 3: Reset Suggestions
bot.command({
  name:"resetear-sug",
  category: "Utilidad",
  aliases:['sug-off'],
  description:"Desactiva el módulo de sugerencias para el servidor.",
  usage:"resetar-sug",
  code:`$author[¡Módulo de sugerencias inhabilitado!;$useravatar[$clientid]]
  $description[¡Has inhabilitado correctamente el módulo de sugerencias.!]
  $color[FF0000]
  $setservervar[suggest_channel;]
  $setservervar[suggest_count;0]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]
  $author[$userTag[$authorID];$authorAvatar] `
})
 
 
//Code 4: Reply To A Suggestion
bot.command({
  name:"responder-sug",
  description:"Responde una sugerencia.",
  usage:"responder-sug [Numero de sugerencia] [aceptar/negar] [mensaje]",
  category:"Moderación",
  code:`$editmessage[$splittext[3];{author:Sugerencia $replacetext[$replacetext[$message[2];accept;accepted];negar;negada]!:$useravatar[$splittext[2]]}{field:Sugerencia Original:$getembed[$getservervar[suggest_channel];$splittext[3];descripción]:no}{field:Razón por $replacetext[$replacetext[$message[2];aceptar;aceptada];negar;negada] de la sugerencia:$messageslice[2]}{color:$replacetext[$replacetext[$message[2];aceptar;GREEN];negar;FF0000]}{footer:$replacetext[$replacetext[$message[2];aceptar;aceptada];negar;negada] por $usertag($authorid):$authoravatar};$getservervar[suggest_channel]]
  $senddm[$splittext[2];¡Tu sugerencia ha sido respondida por $usertag!{author:Tu sugerencia $message[1] a sido $replacetext[$replacetext[$message[2];aceptar;aceptada];negar;negada] in $servername!:$useravatar[$splittext[2]]}{description:¡A continuación se muestran los detalles!}{field:Tu sugerencia original:$getembed[$getservervar[suggest_channel];$splittext[3];description]:no}{field:Razón de la $replacetext[$replacetext[$message[2];aceptar;aceptación de la sugerencia];negar;negación de la sugerencia]:$messageslice[2]}{color:$replacetext[$replacetext[$message[2];aceptar;GREEN];negar;FF0000]}{timestamp}]
  $textsplit[$splittext[$message[1]];.]
  $textsplit[$getservervar[su];/]
  $deletecommand
  $sendmessage[¡Respondió exitosamente a la sugerencia! {delete:3s};no]
  $onlyif[$checkcontains[$message[2];aceptar;negar]==true;Use either \`aceptar\` or \`negar\` in place of $message[2]!]
  $onlyif[$message[1]<=$getservervar[suggest_count];¡Solo \`$getservervar[suggest_count]\` se han enviado sugerencias!]
  $onlyif[$isnumber[$message[1]]==true;Invalid number!]
  $onlyif[$message[3]!=;Invalid syntax. Try \`r.responder-sug [Numero de sugerencia] [aceptar/negar] [mensaje]\`.]
  $onlyif[$getservervar[suggest_channel]!=;¡El módulo de sugerencias aún no está habilitado!]
  $onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto] `
})
 
 
bot.variables({
  su: "0",
  suggest_channel:"",
  suggest_count:"0",
  suggest_where:"",
})


//Regalo Covid

bot.command({
  name:"coronaregalo",
  category: "Diversión",
  code:`$title[¡Regalo de Covid GRATIS!]
  $description[¡$username le regalo a $username[$mentioned[1]] el mejor regalo del mundo! ¡COVID-19 GRATIS! $customEmoji[rainbowstickman]]
  $image[https://media.discordapp.net/attachments/805333945558106132/822810685570154526/IMG_9534.jpg?width=856&height=406]
  $footer[Aww, un regalo perfecto para $username[$mentioned[1]] $customEmoji[fiesta]]
  $onlyIf[$mentioned[1]!=;Amigo quien quiere covid de ti. Al menos menciónalos lol]
  $onlyIf[$mentioned[1]!=$authorID;Está bien, estás infectado con Covid. ¡Recupérate pronto, distribuidor de regalos covid! $customEmoji[tristeza]]`
})


//PPT Botones

bot.command({
 name: "pp",
 category: "Diversión",
 code: `
 $let[e;$apiMessage[;{title:Piedra Papel o Tijeras}
{thumbnail:$authorAvatar}
{color:#5865F2};{actionRow:Roca,2,1,RockButton,:Tijeras,2,1,ScissorButton,:Papel,2,1,PaperButton,};;yes]]`
})

bot.onInteractionCreate()
bot.interactionCommand({
 name: "RockButton",
 prototype:"button",
 code:`
$interactionReply[;{field:Tu elijes:🌑}{field:Y escoji:$randomText[🌑;📰;✂]}{thumbnail:$authorAvatar}{color:#7C7876};`
})

bot.interactionCommand({
 name: "ScissorButton",
 prototype:"button",
 code:`
$interactionReply[;{field:Tu elijes:✂}{field:Y escoji:$randomText[🌑;📰;✂]}{thumbnail:$authorAvatar}{color:#F0340A};`
})
bot.interactionCommand({
 name: "PaperButton",
 prototype:"button",
 code:`$interactionReply[;{{field:Tu elijes:📰}{field:Y escoji:$randomText[🌑;📰;✂]}{thumbnail:$authorAvatar}{color:#128BBE};`
})


//Nivel




bot.command({
 name: "leaderboard",
 code: `
$title[**__$serverName[$guildID]'s__** Levelling Leaderboard]
$description[$replaceText[$userLeaderBoard[lvl;asc;⟨{top}⟩ {username} : {value}];⟨1⟩; ⟨1⟩ 🏅]]
$footer[$randomText[Tip- Chat more to be on top;Tip- Don't spam to be on top!;Tip- Follow server rules and keep chat safe!;Do you know that you can invite me by invite!]]
$thumbnail[$authorAvatar]
$addTimestamp
`
});

bot.variables({
 lvl: ''
})


//Acortar URL

bot.command({
  name: "a-url",
  description: "Recorta una URL",
  usage: "a-URL [URL]",
  category: "Utilidad",
  code: `
  $title[🔗URL Acortada!]
  $thumbnail[$authorAvatar]
  $addField[🔗 | URL Acortada;> \`\`\`$jsonRequest[https://is.gd/create.php?format=simple&url=$message]\`\`\`]
  $description[[**View URL**]($jsonRequest[https://is.gd/create.php?format=simple&url=$message])]
  $addField[ 🔗 | URL Normal;> \`\`\`$message[1]\`\`\`;no]
  $footer[Solicitado por $userTag[$authorID];$authorAvatar]
  $addTimestamp
  $color[BLUE]
  $onlyIf[$message[1]!=;{author:ERROR:$authorAvatar}{description:¡No proporcionaste un URL/Link para recortar!}{color:FF0000}]
  $onlyIf[$getUserVar[premium]==false;Srry pero es solo pa' ciertos usuarios]`
});


//Funcion prefix

bot.command({
    name: "funcion",
    aliases: ['funciones', 'commandlist'],
    code: `
$title[$get[name];https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[\`\`\`
$get[desc]
\`\`\`
$addField[Usage:;\`\`\`
$get[usage]
\`\`\`
[Haga click en mí para obtener documentación]($get[link])]
]
$color[BLUE]
$footer[Aoi.js Version: 4.2.1 latest]
$onlyIf[$get[name]!=$get[usage];{execute:function}]
$onlyIf[$get[usage]!=Error 404 Function not found;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] The function \`$message[1]\` does not exist}{color:RED}]
$onlyIf[$checkCondition[$message[1]!=]$isNumber[$message[1]]!=falsefalse;{execute:function2}]
$let[link;https://aoi.leref.ga/functions/$toLowercase[$replaceText[$get[name];$;usd]]]
$let[desc;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc;]]
$let[name;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name;]]
$let[usage;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage;{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] The function \`$message\` does not exist}{color:RED}]]
$onlyIf[$stringStartsWith[$message[1];$]==true;{execute:function3}]
$onlyIf[$isNumber[$message[1]]!=true;{execute:function2}]
$onlyIf[$message[1]!=;{execute:function3}]
`
})
 
bot.awaitedCommand({
    name: "function",
    code: `
$title[$get[name];https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[\`\`\`
$get[desc]
\`\`\`
[Haga click en mí para obtener documentación]($get[link])]
$color[BLUE]
$footer[Aoi.js Version: 4.2.1 latest]
$let[link;https://aoi.leref.ga/functions/$replaceText[$get[name];$;usd]]
$let[desc;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]]
$let[name;$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name]]
`
})
 
bot.awaitedCommand({
    name: "function2",
    code: `
$title[Aoi.JS - Command List Aoi.JS Version: 4.2.1 latest;https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[0].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[1].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[2].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[3].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[4].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[5].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[6].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[7].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[8].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[9].usage]
]
$color[BLUE]
$footer[Página $get[msg] de $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages].
Se muestran 10 de $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;length].
Use r.commandlist $[funcion] para obtener más información.
]
$let[msg;$replaceText[$replaceText[$checkCondition[$message[1]==];true;1];false;$message[1]]]
$onlyIf[$message[1]<=$jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages];{execute:function3}]
$onlyIf[$message[1]!=;{execute:function3}]
`
})
 
bot.awaitedCommand({
    name: "function3",
    code: `
$title[Aoi.JS - Command List Aoi.JS Version: 4.2.1 latest;https://npmjs.com/package/aoi.js]
$thumbnail[https://media.discordapp.net/attachments/852052322045001740/868139372048953364/9438025f5847afab3a2ca040076b23f5.png]
$description[
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[0].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[1].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[2].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[3].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[4].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[5].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[6].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[7].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[8].usage]
$jsonRequest[https://api.leref.ga/functions?limit=10&page=$get[msg];data[9].usage]
]
$color[BLUE]
$footer[Página $get[msg] de $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;pages].
Se muestran 10 de $jsonRequest[https://api.leref.ga/functions?limit=10&page=1;length].
Use r.commandlist $[funcion] para obtener más información.
]
$let[msg;1]
`
})


//Funcion de estos comandos

bot.command({
  name: "cmd-info",
  description: "Comando util para saber la información de otro comando",
  usage: "cmd-info [Nombre del comando]",
  category: "Utility",                                                                                           
  code: `
  $title[$toLocaleUppercase[$commandInfo[$message[1];name]]]
  $description[<> - Menciones
  [] - Texto]
  $color[RANDOM]
  $addField[Uso;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;None];yes]
  $addField[Alias;$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,;, ]];false;None]]]
  $addField[Descripción;$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;None]]
  $addField[Categoria;$toLocaleUpperCase[$replaceText[$replaceText[$checkCondi>tion[$commandInfo[$message[1];category]!=];true;$commandInfo[$message[1];category]];false;None]];yes]
  $onlyIf[$commandInfo[$message[1];name]!=;{description:❌ Ese no es un comando valido}{color:RANDOM}]
  $onlyIf[$message!=;{description:Tienes que especificar el comando}{color:RANDOM}]
  $addTimestamp
  `
})
//Les hago entrar en contexto, la SPA (Server Protection Agency) es un server anti raider con muchas cosas utiles, en lo que destaca su bot, es un bot anti maliciosos

//Ayuda

bot.command({
  name: "comandos",
  code: `$setChannelVar[ayuda;$splitText[1]]
  $let[e;$apiMessage[;{title:Comando De Ayuda}
{thumbnail:$authorAvatar}
{color:#5865F2};{actionRow:Moderación,2,1,Moderación,:Utilidad,2,1,Utilidad,:Premium,2,1,Premium,};;yes]]`
})

bot.interactionCommand({
 name: "Moderación",
 prototype:"button",
 code:`
$interactionReply[;{field:Comandos pronto}{description: Aqui tenemos los comandos de Moderación}{thumbnail:$authorAvatar}{color:RANDOM};]`
})

bot.interactionCommand({
 name: "Utilidad",
 prototype:"button",
 code:`
$interactionReply[;{field:Comandos pronto}{description: Aqui tenemos los comandos de Utilidad}{thumbnail:$authorAvatar}{color:RANDOM};]`
})
bot.interactionCommand({
 name: "Premium",
 prototype:"button",
 code:`$editMessage[$getChannelVar[ayuda];{description:Comandos pronto}] `
})


//Prueba

bot.command({
name:"avatar-circulo",
category:"Fun",
explanation:"Make a pfp circled!",
bot:"Embed Links",
user:"None",
usage:"avatar <user>",
example:"circle @stickman",
explain:"Get a circled avatar of Stickman!",
code:`$author[$username[$mentioned[1;yes]]'s :>!;$authoravatar]
$description[<@$authorid>, $username[$mentioned[1;yes]] :>!]
$image[https://api.avux.ga/circle?avatar=$replacetext[$useravatar[$mentioned[1;yes]];.webp;.png]]
$color[RANDOM]
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`
})


//Reportar Bug

bot.command({
name:"reportar-bug",
category:"Info",
usage: "reportar-bug [texto]",
code:`$addcmdreactions[$customemoji[ticksiverde]]
$senddm[$botownerid;{author:¡Nuevo reporte de bug!:$servericon}{title:¡Reporte de bug de $usertag!}{description:$addField[$message]}{author:$authorid:$authoravatar}{footer: $day $month $year   $second $minute $hour}{timestamp}]
$onlyif[$message[10]!=;¡Elabora tu problema, con un MÍNIMO de 10 palabras. Los informes sin sentido pueden tener consecuencias!]
$cooldown[$replacetext[$replacetext[$checkcondition[$message[10]==];true;1s];false;2h];¡Wow chill, acabas de informar sobre mí en muy poco tiempo! **%time%** es el tiempo que necesitas esperar.]`
})


//Numero Random


bot.command({
  name: "random",
  code: `$random[0;99999999999999999999999999999999999]`
})


//Color

bot.command({
  name: "colores",
  code: `
  $description[$image[https://media.discordapp.net/attachments/868232496217747487/876513235292024854/a590388e6d20d8d4952653132bebb12c.jpg]]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


bot.command({
  name: "color",
  code: `
  $title[Este es tu color]
  $description[$image[https://api.alexflipnote.dev/color/image/$noMentionMessage]]
  $color[$noMentionMessage]
  $argsCheck[>1;Tienes que poner el color HEX, por ejemplo "r.color 000000", si no te sabes los codigos pone t/colores]
  $onlyIf[$getUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})


//Pixelar

bot.command({
name: "pixelar",
code: `$title[¡Pixeleado!]
$color[GREEN]
$image[https://api.willz.repl.co/image/pixel?image=$message]`
})

bot.command({
name: "pixelar-avatar",
code: `$title[¡Pixeleado!]
$color[GREEN]
$image[https://api.willz.repl.co/image/pixel?image=$authorAvatar]`
})


//SUS

bot.command({
  name:"sus",
  code:`$description[
  ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
  ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
  ⬛🔴🔴🌐🌐🌐🌐⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛
  ⬛🔴🔴🌐🌐🌐🌐⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛
  ⬛🔴🔴🔴🔴🔴⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛
  ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬛
  ⬛⬛🔴🔴🔴🔴⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛]`
})


//Mensajes

bot.command({
  name: "$alwaysExecute",
  code:`$setUserVar[mensajes;$sum[$getUserVar[mensajes];1]]`
}) 


bot.command({
  name: "mensajes",
  code: `$title[Cuenta de Mensajes]
  $thumbnail[$userAvatar[$findMember[$noMentionMessage[1]]]]
  $description[<@$findMember[$noMentionMessage[1]]> tiene $getUserVar[mensajes;$findMember[$noMentionMessage[1]]] mensajes]
  $footer[Pedido por $userTag]
  $color[#303136]`
})


bot.command({
  name: "mensajeslb",
  code: `
  $title[LeaderBoard de Mensajes]
  $thumbnail[$serverIcon]
  $author[$serverName]
  $color[#303136]
  $description[$userLeaderboard[mensajes;asc;{top}# <@{id}> - \`{value}\` mensajes]]
  $footer[Guild ID: $guildID]`
})


bot.command({
  name: "añadir-mensajes",
  code: `
  $title[Dar Mensajes]
  $description[Dar $userTag[$noMentioneMessage[1]] $message[2] mensajes]
  $setUserVar[mensajes;$sum[$getUserVar[mensajes;$mentioned[1]];$message[2]];$mentioned[1]]
  $argsCheck[2;✖️ To Use: \`r.añadir <usuario> <cantidad>\`]
  $onlyForIDs[$botOwnerID;No.]
  $color[#303136]`
})


bot.command({
  name: "establecer-mensajes",
  aliases: ["setm", "sm", "smensajes"],
  code: `$title[Mensajes establecidos exitosamente]
  $description[Successfully set $userTag[$noMentioneMessage[1]]'s mensajes amount to **$numberSeparator[$noMentionMessage]**!]
  $color[#303136]
  $footer[Guild ID: $guildID]
  $setUserVar[mensajes;$noMentionMessage;$findMember[$message]]
  $onlyForIDs[$botOwnerID; ]`
})


//Moderación

bot.command({
  name: "comandos-m",
  code: `$title[Comandos De Moderación]
  $description[$addField[pendiente;;]
  $addField[aceptar;]
  $addField[rechazar;]
  $addField[set-anuncios;]
  $addField[anuncio;]
  $addField[set-encuentas;]
  $addField[encuesta;]
  $addField[vip;]
  $addField[vip+;]
  $addField[vip++;]
  $addField[borrar;]
  $addField[giveaway;]
  $addField[lock;]
  $addField[unlock;]
  $addField[nuke;]
  $addField[kick;]
  $addField[ban;]
  $addField[warn;]
  $addField[unwarn;]
  $addField[set-rc;]
  $addField[chatbot-channel;]
  $addField[antilink-on;]
  $addField[antilink-off;]
  $addField[sm;]
  $addField[establecer-sug;]
  $addField[resetar-sug;]
  $addField[responder-sug;]] `
})

bot.command({
  name: "establecer-mod",
  code: `$setUserVar[mod;true;$noMentionMessage[1]]
  El usuario $userTag[$noMentionMessage[1]] ahora puede usar comandos de moderación
  $onlyForIDs[$botOwnerID;$ownerID;755178107140571187; ] `
})

bot.command({
  name: "sacar-mod",
  code: `$setUserVar[mod;false;$noMentionMessage[1]]
  El usuario $userTag[$noMentionMessage[1]] ya no puede usar comandos de moderación
  $onlyForIDs[$botOwnerID;$ownerID;755178107140571187; ] `
})

bot.command({
  name: "mod",
  code: `$if[$getUserVar[mod]==true]
  @$userTag, Tienes permisos para los comandos de mod $customEmoji[Pana]
  $else
  @$userTag, No tienes permisos para los comandos de mod $customEmoji[tristeza]
  $endIf`
})

bot.command({
  name: "check-mod",
  code: `$if[$getUserVar[mod;$noMentionMessage[1]]==true]
  El usuario $userTag[$noMentionMessage[1]] tiene permisos para comandos de moderación $customEmoji[Pana]
  $else
  El usuario $userTag[$noMentionMessage[1]] no tiene permisos para comandos de moderación $customEmoji[tristeza]
  $endIf`
})

////$onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]


//Niveles

bot.command({
  name: "comandos-n",
  code: `$description[[] = texto
  <> = mención
  establecer-nivelación:
  Uso: [reset]/<canal-opcional> [mensaje opcional]
  Descripción: Establezca su nivelación. Si no se especifica ningún mensaje, se envía el mensaje original.
  Moderación: Si
  Premium: No

  nrole:
  Uso: r.nrole añadir/remover [nivel] [role]
  Descripción: Agrega un rol de nivel superior
  Moderación: Si
  Premium: No

  nmsg:
  Uso: r.nmsg añadir/remover [nivel] [role]
  Descripción: Agrega un mensaje personalizado para subir de nivel para un nivel específico
  Moderación: Si
  Premium: No

  rango:
  Uso: r.rango
  Descripción: Verificar el rango de un usuario.
  Moderación: No
  Premium: No

  establecer-tarjeta:
  Uso: r.establecer-tarjeta [link]
  Descripción: Establecer una tarjeta de rango personalizada
  Moderación: No
  Premium: Si

  establecer-color:
  Uso: r.establecer-color [Codigo HEX (sin el #)]
  Descripción: Establecer un color de tarjeta de rango personalizada
  Moderación: No
  Premium: Si] `
})

bot.command({
name:"establecer-nivelacion",
usage:"establecer-nivelación [reset]/<optional channel> [optional message]",
description:"Establezca su nivelación. Si no se especifica ningún mensaje, se envía el mensaje original.",
category:"Nivelación",
code:`$if[$message==reset]
$setservervar[levelling;false]
¡Restablecí con éxito la nivelación para este servidor!
$else
$setservervar[levelling;true]
$setservervar[level_channel;$findchannel[$message[1]]]
$setservervar[level_msg;$replacetext[$replacetext[$checkcondition[$message[2]==];true;$getservervar[level_msg]];false;$nomentionmessage]]
¡Sistema de nivelación configurado correctamente! Si no usó marcadores de posición y desea usarlos, marque a continuación ->
{user.name} -> $username
{user.mention} -> <@$authorid>
{level} -> 1
$onlyif[$mentionedchannels[1]!=;¡No se pudo encontrar el canal!]
$endif
$onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})

bot.command({
name:"nrole",
aliases:"nivel-role",
category:"Nivelación",
usage:"nrole añadir/remover [nivel] [role]",
description:"Agrega un rol de nivel superior",
code:`$if[$message[1]==añadir]
$setservervar[level_order;$getservervar[level_order]$message[2]/]
$setservervar[level_roles;$getservervar[level_roles]$findrole[$messageslice[2]]/]
Exitosamente añadi el $rolename[$findrole[$messageslice[2]]] al nivel \`$message[2]\`
$argscheck[>2;Ingrese al menos 3 argumentos. r.nrole añadir/remover [nivel] [role]]
$elseif[$message[1]==remover]
$setservervar[level_order;$replacetext[$getservervar[level_order];$message[2]/;;1]]
$setservervar[level_roles;$replacetext[$getservervar[level_roles];$splittext[$findtextsplitindex]/;;1]]
Exitosamente removí el role del nivel \`$message[2]\`
$onlyif[$findtextsplitindex[$message[2]]!=0;¡No encontre el role!]
$textsplit[$getservervar[level_order];/]
$endelseif
$else
Utilice \`añadir \` o \`remover\`!
$endif
$onlyif[$isnumber[$message[2]]==true;¡No es un numero valido!]
$onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})
//add/remove
bot.command({
name:"nmsg",
aliases:"nivel-message",
category:"Nivelación",
usage:"nmsg añadir/remover [nivel] [role]",
description:"Agrega un mensaje personalizado para subir de nivel para un nivel específico",
code:`$if[$message[1]==añadir]
$setservervar[level_morder;$getservervar[level_morder]$message[2]/]
$setservervar[level_msges;$getservervar[level_msges]$messageslice[2]/]
Agregué exitosamente el mensaje **$messageslice[2]** al nivel \`$message[2]\`
$argscheck[>2;Ingrese al menos 3 argumentos. r.nmsg añadir/remover [nivel] [role]]
$elseif[$message[1]==remove]
$setservervar[level_morder;$replacetext[$getservervar[level_morder];$message[2]/;;1]]
$setservervar[level_msges;$replacetext[$getservervar[level_msges];$advancedtextsplit[$getservervar[level_msges];/;$findtextsplitindex[$message[2]]]/;;1]]
Exitosamente removí el role del nivel \`$message[2]\`
$textsplit[$getservervar[level_morder];/]
$onlyif[$findtextsplitindex[$message[2]]!=0;¡No se pudo encontrar el nivel!]
$endelseif
$else
Use either \`añadir\` or \`remove\`!
$endif
$onlyif[$isnumber[$message[2]]==true;¡No es un numero valido!]
$onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})

bot.command({
name:"rango",
aliases:["level","nivel","rank"],
category:"Nivelación",
description:"Verificar el rango de un usuario.",
usage:"rango <usuario opcional>",
code:`$if[$message==]
$author[Rango de $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getGlobalUserVar[level_card]&xpcolor=$randomString[6]&isboosting=false]
$color[$getglobaluservar[color]]
$addtimestamp
$let[user;$authorid]
$else
$suppresserrors
$addtimestamp
$color[$getglobaluservar[color]]
$author[Rango de $usertag[$get[user]];$authoravatar]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getGlobalUserVar[level_card]&xpcolor=#00FF00&isboosting=false]
$let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
$endif
$onlyif[$getservervar[levelling]==true;El sistema de niveles esta apagado]`
})

bot.command({
name:"establecer-tarjeta",
description:"Establecer una tarjeta de rango personalizada",
usage:"establecer-tarjeta [link]",
category:"Nivelación",
code:`$setglobaluservar[level_card;$nomentionmessage]
$description[¡Establecí con éxito su tarjeta de clasificación! Vista previa a continuación:]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$authorID]; ;+;-1]&avatar=$userAvatar[$authorID]?size=4096&level=$getUserVar[rank;$authorID]&rank=&currentxp=$getUserVar[exp;$authorID]&nextlevelxp=$getUserVar[req;$authorID]&previouslevelxp=0&custombg=$getGlobalUserVar[level_card]&xpcolor=&isboosting=$isboosting[$authorid]]
$color[RANDOM]
$let[user;$authorid]
$cooldown[$replacetext[$replacetext[$isvalidlink[$message];true;1s];false;1s];Tienes que esperar para usar esto de nuevo]
$onlyif[$isvalidlink[$message]==true;No es un link valido]
$onlyif[$getGlobalUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})

bot.command({
name:"establecer-color",
description:"Establecer un color de tarjeta de rango personalizada",
usage:"establecer-color [Codigo HEX]",
category:"Nivelación",
code:`$setglobaluservar[color;$nomentionmessage]
$description[¡Establecí con éxito su color de tarjeta de clasificación! Vista previa a continuación:]
$image[https://api.alexflipnote.dev/color/image/$nomentionmessage]
$let[user;$authorid]
$cooldown[5s;Tienes que esperar para usar esto de nuevo]
$onlyif[$getGlobalUserVar[premium]==true;Srry pero es solo pa' usuarios Premium]`
})

bot.command({
  name: "niveleslb",
  code: `
  $title[LeaderBoard de Niveles]
  $thumbnail[$serverIcon]
  $author[$serverName]
  $color[#303136]
  $description[$userLeaderboard[rank;asc;{top}# <@{id}> - \`{value}\` niveles]]
  $footer[Guild ID: $guildID]`
})

bot.command({
name:"$alwaysExecute",
code:`$suppresserrors
$giverole[$authorid;$advancedtextsplit[$getservervar[level_roles];/;$findtextsplitindex[$getuservar[rank]]]]
$textsplit[$getservervar[level_order];/]
$setuservar[rank;$sum[$getuservar[rank];1]]
$setUserVar[req;$truncate[$sum[$getuservar[req];$math[$getuservar[req]*1/2]]]]
$setuservar[exp;0]
$channelsendmessage[$replacetext[$replacetext[$checkcondition[$getservervar[level_channel]==];true;$channelid];false;$getservervar[level_channel]];<@$authorid>{author:$usertag levelled up!:$authoravatar}{thumbnail:$authoravatar}{timestamp}{description:$replacetext[$replacetext[$replacetext[$get[msg];{user.name};$username];{user.mention};<@$authorID>];{level};$sum[$getUserVar[rank];1]]}{color:BLUE}]
$let[msg;$getservervar[$replacetext[$replacetext[$checkcondition[$findtextsplitindex[$sum[$getuservar[rank]];]==0];true;level_msg];false;level_msges]]]
$textsplit[$getservervar[level_morder];/]
$onlyIf[$getUserVar[exp]>=$getUserVar[req];]
$onlyif[$getservervar[levelling]==true;]
$suppresserrors`
})

bot.command({
name:"$alwaysExecute",
code:`$setUserVar[exp;$sum[$getUserVar[exp];$random[4;8]]]
$cooldown[7s]
$onlyif[$getservervar[levelling]==true;]`
})


//Weky

client.on('message', async (message) => {
	if(message.content === 'r.calculadora') {
		await Calculator({
			message: message,
			embed: {
				title: 'Calculadora',
				color: '#5865F2',
				footer: ':>',
				timestamp: true,
			},
			disabledQuery: 'La calculadora esta apagada',
			invalidQuery: 'La ecuacuación que dieron esta prohibida',
			othersMessage: 'Solo el que puso el comando puede usar los botones',
		});
	}
});

client.on('message', async (message) => {
	if(message.content === 'r.si-o-no') {
		await WillYouPressTheButton({
	    message: message,
	    embed: {
		    title: '¿Presionarás el botón?',
		    description: '```{{statement1}}```\n**pero**\n\n```{{statement2}}```',
		    color: '#7289da',
        footer: ':>',
		    timestamp: true
	    },
	    button: { yes: 'Si', no: 'No' },
	    thinkMessage: 'Estoy pensando',
	    othersMessage: 'Solo el que puso el comando puede usar los botones'
    });
  }
});

client.on('message', async (message) => {
	if(message.content === 'r.ppt') {
		await RockPaperScissors({
	    message: message,
	    opponent: message.mentions.users.first(),
	    embed: {
		    title: 'Piedra Papel o Tijeras',
		    description: 'Presione el botón de abajo para elegir su elemento.',
		    color: '#7289da',
        footer: ':>',
		    timestamp: true,
	    },
	    buttons: { 
        rock: 'Piedra',
        paper: 'Papel', 
        scissors: 'Tijeras', 
        accept: 'Aceptar', 
        deny: 'Denegar',
      },
	    time: 60000,
	    acceptMessage: '¡<@{{challenger}}> reto a <@{{opponent}}> para un juego de Piedra Papel o Tijeras!',
	    winMessage: '¡GG, <@{{winner}}> Gano!',
	    drawMessage: '¡Este juego está en punto muerto!',
	    endMessage: "¡<@{{opponent}}> no respondió a tiempo. Entonces, dejé caer el juego!",
	    timeEndMessage:"¡Ambos no eligieron algo a tiempo. Entonces, dejé caer el juego!",
	    cancelMessage:'<@{{opponent}}> se negó a tener un juego de piedra, papel y tijeras contigo, F',
	    choseMessage: 'Elegiste {{emoji}}',
	    noChangeMessage: '¡No puedes cambiar tu selección!',
	    othersMessage: 'Solo el que puso el comando puede usar los botones',
	    returnWinner: false,
    });
  }
});

client.on('message', async (message) => {
  if(message.content === 'r.adivinar') {
    await GuessTheNumber({
	    message: message,
	    embed: {
		    title: 'Adivina El Numero',
		    description: 'Tienes **{{time}}** para adivinar el numero',
		    color: '#7289da',
        footer: ':>',
		    timestamp: true
	    },
      publicGame: true,
	    number: 6,
	    time: 60000,
	    winMessage: {
		  publicGame:'GG, El número que supuse era **{{number}}**. <@{{winner}}> lo hizo en **{{time}}**.\n\n__**Estadísticas del juego:**__\n**Duración**: {{time}}\n**Numero de participantes**: {{totalparticipants}} Participants\n**Participantes**: {{participants}}',
		  privateGame:'GG, El número que supuse era **{{number}}**. Lo hiciste en **{{time}}**.',
	  },
	  loseMessage:'¡Mejor suerte la próxima vez! El número que supuse era **{{number}}**.',
	  bigNumberMessage: 'Nop, Mi numero es mayor que **{{number}}**.',
	  smallNumberMessage:'Nop, Mi número es menor que **{{number}}**.',
	  othersMessage: 'Solo el que puso el comando puede usar los botones',
	  buttonText: 'Cancelar',
	  ongoingMessage:"",
	  returnWinner: false
    });
  }
});

client.on('message', async (message) => {
  if(message.content === 'r.snake') {
    await Snake({
	    message: message,
	    embed: {
		    title: '¡Snake!',
		    description: 'GG, ¡Has anotado **{{score}}** puntos!',
		    color: '#7289da',
        footer: ':>',
		    timestamp: true
	    },
	    emojis: {
		    empty: '⬛',
		    snakeBody: '🟩',
		    food: '🍎',
		    up: '⬆️',
		    right: '⬅️',
		    down: '⬇️',
		    left: '➡️',
	    },
	    othersMessage: 'Solo el que puso el comando puede usar los botones',
	    buttonText: 'Cancelar'
    });
  }
})

client.on('message', async (message) => {
  if(message.content === 'r.click-rapido') {
    await QuickClick({
	    message: message,
	    embed: {
		    title: 'Clic rápido',
		    color: '#7289da',
        footer: ':>',
		    timestamp: true
	    },
	    time: 60000,
	    waitMessage: 'Los botones pueden aparecer en cualquier momento ahora',
	    startMessage:'La primera persona que presione el botón correcto ganará. Tienen **{{time}}**!',
	    winMessage: 'GG, <@{{winner}}> presionó el boton en **{{time}} segundos**.',
	    loseMessage: 'Nadie presionó el botón a tiempo. Entonces, dejé caer el juego',
	    emoji: '👆',
	    ongoingMessage:"Ya se está ejecutando un juego <#{{channel}}>. No puedes empezar uno nuevo!"
    });
  }
})

client.login('ODYyODA3ODk2ODUyNzkxMzQ2.YOdueA.6HumXBN1JIZLdtokpvkO-LjLPAk');

//API

bot.command({
  name: "gay",
  code: `$jsonRequest[https://api.willz.repl.co/image/gay?image=$authorAvatar]
  `
})


//Bot Logs

bot.command({
name:"bot-logs",
aliases:"bl",
category:"Mod",
description:"Configure los registros de bot del servidor. **Todas** las acciones de moderación realizadas a través del bot se envían allí.",
usage:"bot-logs <canal>",
code:`$if[$message==reset]
**Restablecí** con éxito los registros del bot del servidor
$setservervar[bl;]
$elseif[$serverchannelexists[$findchannel[$message[1];no]]==true]
Configuré con éxito <#$findchannel[$message[1];no]> cuando el bot registra
$setservervar[bl;$findchannel[$message[1];no]]
$endelseif
$else
Ingrese **restablecer** o ingrese un canal válido
$endif
$onlybotperms[embedlinks;{description:¡Necesito los permisos \`Embed Links\` para la ejecución de este!}{color:FF0000}]
$onlyif[$message!=;{description:¡Ingresa algo! Restablecer para restablecer, o un canal válido para configurar.}{color:FF0000}]
$onlyIf[$getUserVar[mod]==true;Lo siento, pero solo moderadores pueden usar esto]`
})


//BlackLists

bot.command({
  name: "blacklist",
  code:`$setGlobalUserVar[blacklist;true;$noMentionMessage[1]]
  **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] estas en la BlackList ahora**
  $onlyIf[$findUser[$message[1]]!=$authorID;**⛔ No te puedes BlackListear a ti mismo**]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;769962376761442315;**⛔ Solo los creadores del bot y compañia pueden usar este comando**]`
})

bot.command({
  name: "unblacklist",
  code: `$setGlobalUserVar[blacklist;false;$findUser[$message[1]]]
  **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] ✅ Ya no estas en la BlackList**
  $onlyIf[$findUser[$message[1]]!=$authorID;**⛔ No te puedes BlackListear a ti mismo, osea que no te puedes sacar de la BlackList**]
  $onlyForIDs[709770108863643649;708260556288688131;758668057077481502;748945133692649602;755178107140571187;769962376761442315;**⛔ Solo los creadores del bot y compañia pueden usar este comando**]`
})

////$onlyIf[$getUserVar[Blacklist]==false;]


//Owofy

bot.command({
  name: 'owoify',
  description: ' turn any word into nonsensical babyspeak',
  usage: `r.owoify [message]`,
  code: `$jsonRequest[https://api.willz.repl.co/owoify?text=$message&key=<KEY>]`
})


////ID: 60973875
//Variables

bot.variables({
  blacklist: "False",
  no: "❌",
  mensajes: "0",
  color: "RANDOM",
  levelling: "false",
  level_msg:"{user.mention}, Tu acabas de avanzar de nivel al nivel {level}",
  level_channel:"",
  level_roles:"",
  level_order:"",
  exp:"0",
  level_card:"https://wallpapercave.com/wp/wp2704825.jpg",
  level_msges:"",
  level_morder:"",
  req:"100",
  rank:"0",
  mod: "false",
  ayuda: "",
  afk: "",
  afkwhy: "",
  edad: "0",
  premium: "false",
  captcha: "",
  afk: "off",
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

//AFK //user
