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
const joonia    = "Joonia Marttio";

// kappale - artisti - soittajat[]

const songs_aamu = [
    [ "Kiss Me", "Sixpence None The Richer", []],
    [ "Animal", "Sir Chloe", []],
    [ "Nature boy", "Celine Dion", []],
    [ "Paper bag", "Fiona Apple", []],
    [ "Get him back", "Olivia Rodrigo", []],
    [ "Kohta sataa", "Pete Parkkonen", []],
    [ "Champagne Problems X Illict Affairs", "Taylor Swift", []],
    [ "Seksi vie ja takaisin tuo", "Nylon Beat", []],
    [ "Maasta taivaaseen", "pehmoaino", []],
    [ "Muistan sen niin", "Saimaa", []],
    [ "Heartbreaker", "Pat Benatar", []]
];

const songs_ilta = [
    [ "Kiss Me", "Sixpence None The Richer", []],
    [ "*** Hotelli", "Josén Pimeä Puoli", []],
    [ "Nature boy", "Celine Dion", []],
    [ "Paper bag", "Fiona Apple", []],
    [ "Get him back", "Olivia Rodrigo", []],
    [ "Kohta sataa", "Pete Parkkonen", []],
    [ "Champagne Problems X Illict Affairs", "Taylor Swift", []],
    [ "Seksi vie ja takaisin tuo", "Nylon Beat", []],
    [ "Maasta taivaaseen", "pehmoaino", []],
    [ "Muistan sen niin", "Saimaa", []],
    [ "And I hear you call", "Kingston Wall", []]
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
    const html_main = document.getElementById("main-container");
    const html_containter = document.getElementById("container-1");
    const html_list1 = document.createElement("ul");

    const selectedProgram = localStorage.getItem('selected_time');
    const songs = selectedProgram === 'aamu' ? songs_aamu : songs_ilta;

    songs.forEach(item_text => {
        const html_li = document.createElement("li");
        html_li.textContent = item_text[0] + " - " + item_text[1];
        html_list1.appendChild(html_li);
        html_list1.appendChild(create_player_list(item_text[2]));
    });

    const html_h1 = document.createElement("h1");
    html_h1.textContent = "Esitys " + (selectedProgram === 'aamu' ? "9:55" : "13:25");
    html_h1.id = "ohjelma-header";

    html_main.insertBefore(html_h1, html_containter);
    html_containter.appendChild(html_list1);
}
render_songs();