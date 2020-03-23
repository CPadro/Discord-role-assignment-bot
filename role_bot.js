//REQUIRE DISCORD LIBRARY
const Discord = require('discord.js')

//BOT
const bot = new Discord.Client();

//ROLES
const Volumen = '691274895166013452';
const Diseño = '691274943807225918';
const Cultura_Audiovisual1 = '691275015190216707';
const Tecnicas = '691275113701703700';
const Dibujo_Artistico = '691276874026057818';
const Cultura_Audiovisual2 = '691593236028063796';
const Fundamentos = '691593483290411028';

//ADD ROLES
bot.on('message', (message) => {
    //split the message in two parts
    let msg = message.content.split(' ');

    //HELP
    if(msg[0] == '?help') {
        message.reply('Para agregarte a cualquier rol que necesites, escribe !role rol (Por ejemplo !role Volumen)\n Para ver el listado de roles consulta ?roles');
    }

    //SEE ROLES
    else if(msg[0] == '?roles') {
        message.reply('Los roles son:\n -Volumen\n -Diseño\n -Cultura_Audiovisual1\n -Tecnicas\n -Dibujo_Artistico\n -Cultura_Audiovisual2\n -Fundamentos\n');
    }

    //ASSIGN ROLES
    else if(msg[0] == '!role') {
        if(msg[1] == 'Volumen') {
            message.member.roles.add(Volumen);
            message.reply('Añadido a Volumen');
        }
        else if(msg[1] == 'Diseño') {
            message.member.roles.add(Diseño);
            message.reply('Añadido a Diseño');
        }
        else if(msg[1] == 'Cultura_Audiovisual1') {
            message.member.roles.add(Cultura_Audiovisual1);
            message.reply('Añadido a Cultura_Audiovisual1');}
        else if(msg[1] == 'Cultura_Audiovisual2') {
            message.member.roles.add(Cultura_Audiovisual2);
            message.reply('Añadido a Cultura_Audiovisual2');
        }
        else if(msg[1] == 'Tecnicas') {
            message.member.roles.add(Tecnicas);
            message.reply('Añadido a Tecnicas');
        }
        else if(msg[1] == 'Dibujo_Artistico') {
            message.member.roles.add(Dibujo_Artistico);
            message.reply('Añadido a Dibujo_Artistico');
        }
        else if(msg[1] == 'Fundamentos') {
            message.member.roles.add(Fundamentos);
            message.reply('Añadido a Fundamentos');
        }
    }
});

//LOGIN THE BOT
bot.login('NjkxNTc2MDkzMjMyMjAxNzQ4.Xnh-dg.RS4RWLlRCc7kJ0M8330_4n6kobw');
