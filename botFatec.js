const env = require('../.env')
const Telegraf = require('telegraf') 
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const Stage = require('telegraf/stage')
const WizardScene = require('telegraf/scenes/wizard')
const Composer = require('telegraf/composer')
const session = require('telegraf/session')

bot.start (async (ctx,next) => {
    const from = ctx.update.message.from
    console.log(from)
    await ctx.replyWithPhoto({source: `${__dirname}/doeSangue.jpg`})
    await ctx.reply(`Olá ${from.first_name} aqui quem fala é  o BLOOD 😊 do banco de sangue.E estou aqui pra te falar sobre um assunto realmente importante.`)
    await ctx.reply(`${from.first_name}, com uma doação a cada três meses você pode ajudar até 12 pessoas e suas famílias!`)
    await ctx.reply(`Doar sangue é um ato altruísta e totalmente  voluntário.`)
    await ctx.reply(`Se me permite, posso responder algumas dúvidas frequentes e importantes sobre esse assunto:`, botoes,botoesAgenda)
    next()
})

const botoes = Extra.markup(Markup.inlineKeyboard([ 
   
    Markup.callbackButton('Doenças que impedem a doação de sangue:', 'Q1'), 
    Markup.callbackButton('Quem pode doar?', 'Q2'),
    Markup.callbackButton('Preciso estar em jejum?', 'Q3'),
    Markup.callbackButton('Quanto sangue é retirado?', 'Q4'),
    Markup.callbackButton('Meu corpo não vai sentir falta desse sangue?', 'Q5'),
    Markup.callbackButton('Quanto tempo leva para o organismo repor o sangue doado?', 'Q6'),
    Markup.callbackButton('Quanto tempo demora?', 'Q7'),
    Markup.callbackButton('Quantas vezes no ano posso doar?', 'Q8'),
    Markup.callbackButton('Quem doa sangue tem atestado médico?', 'Q9'),
    Markup.callbackButton('Doar sangue engrossa ou afina o sangue?', 'Q10'),
    Markup.callbackButton('Quem tem tatuagem pode doar sangue?', 'Q11'),
   
], { columns: 1 }))

  
bot.action('Q1',async ctx => {
    
    await ctx.reply(`Doenças infecciosas, como a gripe, e inflamatórias, como aquelas que atacam o intestino, exigem que a doação seja postergada para outra data.`, botoes,botoesAgenda)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})


bot.action('Q2',async ctx => {
    
    await ctx.reply(`Qualquer pessoa com idade entre 18 e 67 anos que pese mais de 50 quilos. Jovens de 16 ou 17 anos também estão aptos, desde que tenham o consentimento dos pais ou dos responsáveis.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})


bot.action('Q3',async ctx => {
    
    await ctx.reply(`O doador não deve estar em jejum de nenhuma forma, pelo contrário, deve estar alimentado e descansado, evitando alimentação gordurosa nas 3 horas que antecedem a doação.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q4',async ctx => {
    
    await ctx.reply(`São 450 mililitros. Esse volume pode salvar a vida de até quatro pessoas.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q5',async  ctx => {
    
    await ctx.reply(`Não.O volume coletado não ultrapassa 10-15% da quantidade de sangue que o doador possui.Nós possuímos cerca de 5 litros do líquido vermelho circulando pelos vasos. A retirada não prejudica em nada. O organismo repõe e alcança os níveis normais em até 72 horas`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q6',async ctx => {
    
    await ctx.reply(`O organismo repõe o volume de sangue doado nas primeiras 24 horas após a doação.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q7', async ctx => {
    
    await ctx.reply(`A coleta do sangue é bem rápida: leva de 8 a 12 minutos. Antes, o doador faz uma triagem e passa algumas informações de saúde para os funcionários do local.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q8', async ctx => {
    
    await ctx.reply(`Homens podem doar sangue até quatro vezes por ano, com intervalo de 60 dias entre cada doação. Já as mulheres podem doar três vezes ao ano, com intervalo de 90 dias.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q9', async ctx => {
    
    await ctx.reply(`O inciso IV do artigo 473 da CLT (Consolidação das Leis do Trabalho) dispõe que o empregado poderá deixar de comparecer ao serviço, sem prejuízo do salário, por um dia, a cada 12 meses, em caso de doação voluntária de sangue devidamente comprovada.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q10',async ctx => {
    
    await ctx.reply(`Não engrossa nem afina o sangue. Isso é um mito.`, botoes)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
})

bot.action('Q11',async ctx => {
    
    await ctx.reply(`Sim, desde que tenha feito a tatuagem há mais de um ano.`, botoes,)
    await ctx.reply(`Então ${ctx.from.first_name}, vamos agendar uma doação?`,botoesAgenda)
    
})


let data = null
//botes**************************************************************************************
const botoesAgenda = Extra.markup(Markup.inlineKeyboard([ 
    Markup.callbackButton('SIM 💙 eu quero salvar vidas!', 'S'), 
    Markup.callbackButton('NÂO, talvez em uma próxima oportunidade.', 'N'),
   
], { columns: 1 }))

const botoesConfirmacao = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Sim', 'C'),
    Markup.callbackButton('Não', 'D'),
]))

//botão recomendações
const botaoRecomendacoes = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('Recomendações/n Para o dia da doação', 'R'),
]))

//action recomendações
bot.action('R',async ctx => {
    
    await ctx.reply(`
.É obrigatório apresentar documento oficial com foto, preferencialmente o R.G.
.Dormir bem, pelo menos 6 horas antes da doação;
.Evitar o jejum. Fazer refeições leves e não gordurosas. Em refeições fartas, como o almoço e jantar, só doar após 03 horas.
.Evitar uso de bebidas alcoólicas nas últimas 12 horas;
.Ingerir bastante água antes e depois da doação;
.Não fumar por no mínimo uma hora antes e uma hora após a doação;
.Não praticar exercícios físicos exagerados e atividades perigosas, como subir em locais altos ou dirigir veículos em rodovias, etc.
.Permanecer no serviço hemoterápico após a doação por 15 minutos.
.Não forçar o braço em que foi realizada a punção no dia da doação, para evitar sangramentos e hematomas.`)
})

//composers **********************************************************************************

//handlers para confirmar doações
const doaHandler = new Composer()
    doaHandler.action('N',  async ctx => {
        await ctx.reply(`Tudo bem ${ctx.from.first_name}, esperamos contar com você em um futuro próximo.😊`)
        await ctx.reply(`Se preferir você também pode tirar mais dúvidas no link abaixo ou agendar pelo telefone: (12)3519-3766 `)
        await ctx.replyWithHTML(`<a href="https://salvovidas.com">Salvo Vidas</a> `)
        await ctx.scene.leave()

    })
    
    doaHandler.action('S', async ctx => {
        await ctx.reply(`Ótimo, então vamos agendar uma doação.`)
        await ctx.reply(`Lembrando o nosso horário de funcionamento: segunda a sexta-feira: 07h00 às 12h30.`)
        await ctx.reply(`Entre com uma data no formato dd/MM/YYYY`)
        await ctx.wizard.next()
    
    })
doaHandler.use(ctx => ctx.reply(`Então ${ctx.update.message.first_name}, vamos agendar uma doação?`,botoesAgenda))


//handlers para preencher e confirmar data.
const dataHandler = new Composer()
dataHandler.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    data = ctx.match[1]
    ctx.reply(`Data:
        📆 ${data}
        Confirma?`, botoesConfirmacao)
    ctx.wizard.next()
})
dataHandler.use(ctx => ctx.reply('Entre com uma data no formato dd/MM/YYYY'))


//Em caso positivo handler para confirmar e agradecer
const confirmacaoHandler = new Composer()
confirmacaoHandler.action('C', async ctx => {
    await ctx.reply('✔ A sua doação está agendada!', botaoRecomendacoes)
    //await ctx.reply(botaoRecomendacoes)
    await ctx.reply('Há, antes que eu me esqueça aqui esta a localização do nosso Hemocentro')
    await ctx.replyWithLocation(-23.186712, -45.881703)
    await ctx.reply(`Nosso Hemocentro agradece e ansiosamente te aguarda, para maiores informações também estamos disponíveis no telefone: (12)3519-3766 😊 `)
    await ctx.scene.leave()
})

//Em caso negativo handler para excluir ou reagendar outa data.
confirmacaoHandler.action('D', async ctx => {
    await ctx.reply('Doação excluída!')
    await ctx.reply('Gostaria de reagendar uma data?',botoesAgenda)
    ctx.scene.leave()
        
    })
confirmacaoHandler.use(ctx => ctx.reply('Apenas confirme', botoesConfirmacao))



const wizardAgenda = new WizardScene('agenda', ctx => {
  
    ctx.wizard.next()
    
},
doaHandler,
dataHandler,
confirmacaoHandler
)


const stage = new Stage([wizardAgenda], {default: 'agenda'})
bot.use(session())
bot.use(stage.middleware())

bot.startPolling()
//location -23.186712, -45.881703
