//      kappale - artisti
const songs = [
    [ "Villieläin", "Ramses II" ],
    [ "The Joke", "Brandi Carlile ???" ],
    [ "Graceland Too", "Phoebe Bridgers" ],
    [ "no body, no crime", "Taylor Swift" ],
    [ "Kylmästä lämpimään", "Jukka Poika" ],
    [ "Kaipaava", "Rajaton" ],
    [ "Turn Loose the Mermaids", "Nightwish" ],
    [ "Opi Tuntemaan Sienet", "Kuha" ],
    [ "Fade Into You", "Mazzy Star" ],
    [ "Ignorance", "Paramore" ],
    [ "Valentine", "Laufey" ],
    [ "Body", "Mother Mother" ],
    [ "Njet Njet", "Eppu Normaali" ],
    [ "Katastrofin laajuus", "Lyyti" ],
    [ "Satakielen valssi", "??? (sori en tiiä)" ],
    [ "Pitch Perfect", "??? (sori en tiiä)" ],
    [ "Teenagers", "My Chemical Romance" ],
    [ "Yhteisbiisi", "Salainen artisti" ]
];

const render_songs = () => {
    const html_containter = document.getElementById("ohjelma-container");
    const html_list = document.createElement("ul");
    
    songs.forEach(item_text => {
        const list_item = document.createElement("li");
        list_item.textContent = item_text[0] + " - " + item_text[1];
        html_list.appendChild(list_item);
    });

    html_containter.appendChild(html_list);
}
render_songs();