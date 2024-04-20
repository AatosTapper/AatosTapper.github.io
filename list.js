// ihmiset
const helmi     = "Helmi Papinniemi";
const kohonen   = "Peppi Kohonen";
const isabella  = "Isabella Rinne";
const jutta     = "Jutta Virsunen";
const saphir    = "Saphir Piotelat";
const aatos     = "Aatos Tapper";
const kalle     = "Kalle Vilander";
const viljo     = "Viljo Nurmeksela";
const stella    = "Stella Lindström";
const pinja     = "Pinja Moilanen";
const miranda   = "Miranda Smith";
const elsa      = "Elsa Silpola";
const elena     = "Elena Kaasinen";
const stels     = "Stella Rautiainen";
const otso      = "Otso Tukiainen";
const roosa     = "Roosa Koskenkorva";
const ainosi    = "Aino Simula";
const tinka     = "Tinka Väisänen";
const sara      = "Sara Inkinen";
const sade      = "Sade Kokkinen";
const ainosa    = "Aino Saarela";
const vuotila   = "Peppi Vuotila";
const krista    = "Krista Keränen";
const merina    = "Merina Lampela";
const ilari     = "Ilari Suortamo";
const minttu    = "Minttu Pohjola";
const ainoliina = "Aino-Liina Miettinen";
const jeremias  = "Jeremias Tahkola";

// kappale - artisti - soittajat[]
const songs = [
    [ "Villieläin", "Ramses II", [
        helmi,
        kohonen,
        isabella,
        jutta,
        saphir,
        aatos,
        kalle, 
        viljo
    ]],
    [ "The Joke", "Brandi Carlile", [
        stella,
        pinja,
        miranda,
        kohonen,
        viljo
    ]],
    [ "Graceland Too", "Phoebe Bridgers", [
        pinja,
        elsa,
        elena,
        stels,
        otso,
        roosa,
        ainosi,
        miranda,
        tinka
    ]],
    [ "no body, no crime", "Taylor Swift", [
        sara,
        stella,
        elsa,
        sade,
        ainosa,
        kohonen,
        vuotila,
        ainosi
    ]],
    [ "Kylmästä lämpimään", "Jukka Poika", [
        vuotila,
        kohonen,
        helmi,
        jutta,
        aatos,
        saphir,
        krista,
        isabella,
        roosa,
        stels
    ]],
    [ "Kaipaava", "Rajaton", [
        merina,
        sade,
        tinka,
        ainosi
    ]],
    [ "Turn Loose the Mermaids", "Nightwish", [
        jutta,
        elena,
        sade,
        saphir,
        vuotila,
        kohonen,
        krista,
        ilari,
        stels,
        ainosa
    ]],
    [ "Opi Tuntemaan Sienet", "Kuha", [
        kalle,
        ilari,
        helmi,
        sade,
        minttu,
        otso
    ]],
    [ "Fade Into You", "Mazzy Star", [
        miranda,
        stella,
        otso
    ]],
    [ "Ignorance", "Paramore", [
        sara,
        ilari,
        roosa,
        viljo,
        kalle,
        minttu
    ]],
    [ "Valentine", "Laufey", [
        elsa,
        pinja,
        ainoliina,
        sade,
        aatos,
        kalle
    ]],
    [ "Body", "Mother Mother", [
        ainosi,
        sade,
        ainosa,
        ilari,
        helmi,
        ainoliina,
        elsa,
        stels
    ]],
    [ "Njet Njet", "Eppu Normaali", [
        helmi,
        isabella,
        kohonen,
        aatos,
        otso
    ]],
    [ "Katastrofin laajuus", "Lyyti", [
        vuotila,
        elsa,
        ainoliina,
        stella,
        aatos,
        sade,
        viljo,
        sara
    ]],
    [ "Satakielen valssi", "trad.", [
        ainosi,
        ainosa,
        tinka
    ]],
    [ "Bellas Regionals", "Pitch Perfect", [
        stels,
        tinka,
        roosa,
        ainosi,
        krista,
        pinja,
        helmi
    ]],
    [ "Teenagers", "My Chemical Romance", [
        sara,
        jeremias,
        ilari,
        aatos,
        pinja,
        otso,
        ainosi,
        jutta
    ]]
];

const create_player_list = (player_list) => {
    player_list.sort((a, b) => Math.random() - 0.5);

    const html_li = document.createElement("li");
    html_li.classList.add("soittajat-li");
    const html_div = document.createElement("div");
    html_div.classList.add("soittajat-container");

    for (let i = 0; i < player_list.length; i++) {
        const html_text = document.createElement("p");
        html_text.textContent = player_list[i];
        html_div.appendChild(html_text);
    }

    html_li.appendChild(html_div);
    return html_li;
}

const render_songs = () => {
    const html_containter = document.getElementById("container-1");
    const html_list1 = document.createElement("ul");
    const html_list2 = document.createElement("ul");
    
    let index = 0;
    songs.forEach(item_text => {
        if (index >= 8) return;

        const html_li = document.createElement("li");
        html_li.textContent = item_text[0] + " - " + item_text[1];
        html_list1.appendChild(html_li);
        html_list1.appendChild(create_player_list(item_text[2]));
        
        index++;
    });

    // Goofy ahh systeemi väliaikaa varten
    
    index = 0;
    songs.forEach(item_text => {
        index++;
        if (index < 9) return;

        const html_li = document.createElement("li");
        html_li.textContent = item_text[0] + " - " + item_text[1];
        html_list2.appendChild(html_li);
        
        html_list2.appendChild(create_player_list(item_text[2]));
    });

    const middle_part = document.createElement("h3");
    middle_part.textContent = "Väliaika";

    html_containter.appendChild(html_list1);
    html_containter.appendChild(middle_part);
    html_containter.appendChild(html_list2);
}
render_songs();