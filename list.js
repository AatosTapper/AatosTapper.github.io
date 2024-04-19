//      kappale - artisti
const songs = [
    [ "Villieläin", "Ramses II" ],
    [ "The Joke", "Brandi Carlile" ],
    [ "Graceland Too", "Phoebe Bridgers" ],
    [ "no body, no crime", "Taylor Swift feat. HAIM" ],
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
    [ "Satakielen valssi", "trad." ],
    [ "Bellas Regionals", "Pitch Perfect" ],
    [ "Teenagers", "My Chemical Romance" ]
];

const render_songs = () => {
    const html_containter1 = document.getElementById("container-1");
    const html_list1 = document.createElement("ul");
    const html_list2 = document.createElement("ul");
    
    let index = 0;
    songs.forEach(item_text => {
        if (index >= 8) return;

        const list_item = document.createElement("li");
        list_item.textContent = item_text[0] + " - " + item_text[1];
        html_list1.appendChild(list_item);

        index++;
    });

    index = 0;
    songs.forEach(item_text => {
        index++;
        if (index < 9) return;

        const list_item = document.createElement("li");
        list_item.textContent = item_text[0] + " - " + item_text[1];
        html_list2.appendChild(list_item);
    });

    const middle_part = document.createElement("h3");
    middle_part.textContent = "Väliaika";

    html_containter1.appendChild(html_list1);
    html_containter1.appendChild(middle_part);
    html_containter1.appendChild(html_list2);
}
render_songs();