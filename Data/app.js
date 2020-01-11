let readFile = require('readline').createInterface({
    input: require('fs').createReadStream('./data/emojis.txt')
})

let group = '';
let subgroup = '';

let emojis = []
let id = 0;



readFile.on('line', (line) => {
    line = line.split('\t')

    let hex = line[0].split(' ');

    let hexHtml = '';
    let title;

    if (hex[0] == '#') {
        let isGroup = hex[1] == 'group:' ? true : false;

        hex.shift()
        hex.shift()
        hex = hex.toString()
        hex = hex.replace('-', ' ')
        hex = hex.replace('-', ' ')
        hex = hex.replace(',', ' ')
        hex = hex.replace(',', ' ')
        if (isGroup == true)
            group = hex;
        else
            subgroup = hex;
    }

    else if (hex[0] != '' && hex[0] != '#EOF') {
        hex.forEach(emoji => {
            hexHtml += `&#x${emoji};`
        })

        title = line[1].split('.');
        title.shift()
        title[0] = title[0].toString().substring(2)
        title = title.toString()
        for (let i = 0; i < 10; i++)
            title = title.replace(',', ' ')
        title = title.replace('U S', 'U.S')
        title = title.replace('  ', ' ')
        if (title.charAt(title.length - 1) == '"')
            title = title.substring(0, title.length - 1)
    }

    if (hexHtml.length > 1)
        emojis.push({ id: id++, hex: hexHtml, title, subgroup, group })
})



setTimeout(() => {
    require('fs').writeFile('./client/src/assets/emojis.json', JSON.stringify(emojis), (err) => {
        if (err) console.log(err)
    })
}, 5000); 