const helmiinaJarvinen = "Helmiina Järvinen";
const hiljaEskelinen = "Hilja Eskelinen";
const aileVehvilainen = "Aile Vehviläinen";
const piituMuhonen = "Piitu Muhonen";
const samuelManninen = "Samuel Manninen";
const konstaPenttinen = "Konsta Penttinen";
const heidiNykanen = "Heidi Nykänen";
const hilmaHurme = "Hilma Hurme";
const aaronMuhiya = "Aaron Muhiya";
const samuLamminpaa = "Samu Lamminpää";
const ronjaVirtanen = "Ronja Virtanen";
const samuelWahlstedt = "Samuel Wahlstedt";
const aiviSalminen = "Aivi Salminen";
const nooraKorhonen = "Noora Korhonen";
const siiriNykanen = "Siiri Nykänen";
const susannaSalminen = "Susanna Salminen";
const siljaSalmia = "Silja Salmia";
const elianHoltta = "Elian Hölttä";
const marioPirinen = "Mario Pirinen";
const oosaTourunen = "Oosa Tourunen";
const kaisaKylmalahti = "Kaisa Kylmälahti";
const lottaFalkenbach = "Lotta Falkenbach";
const eeroPartanen = "Eero Partanen";
const antonKivela = "Anton Kivelä";
const hugoIkavalko = "Hugo Ikävalko";
const celinaNiittynen = "Celina Niittynen";
const milkaLoponen = "Milka Loponen";
const antonLinja = "Anton Linja";
const josias = "Josias Myllyaho";
const oskariMiettinen = "Oskari Miettinen";
const valtteriLaitinen = "Valtteri Laitinen";
const viiviMattila = "Viivi Mattila";
const danteMehtalainen = "Dante Mehtäläinen";
const ilariSuortamo = "Ilari Suortamo";

// Songs
const songs_a = [
    ["Mummola", "PMMP", [helmiinaJarvinen, hiljaEskelinen, aileVehvilainen, piituMuhonen, samuelManninen, konstaPenttinen]],
    ["Pettävällä Jäällä", "Suvi Teräsniska", [heidiNykanen, hilmaHurme, aaronMuhiya, samuLamminpaa, ronjaVirtanen, samuelWahlstedt]],
    ["n/A", "Bring Me the Horizon", [aiviSalminen, nooraKorhonen, siiriNykanen, heidiNykanen, susannaSalminen, siljaSalmia]],
    ["Army Dreamers", "Kate Bush", [siljaSalmia, elianHoltta, piituMuhonen, hiljaEskelinen, aileVehvilainen, marioPirinen, oosaTourunen]],
    ["Nuori & Tyhmä", "Jami Faltin", [aaronMuhiya, ronjaVirtanen, celinaNiittynen, heidiNykanen, antonKivela, hugoIkavalko]],
    ["Clocks", "Coldplay", [eeroPartanen, helmiinaJarvinen, marioPirinen, oosaTourunen, konstaPenttinen, elianHoltta]],
    ["Sticker", "NCT 127", [marioPirinen, kaisaKylmalahti, lottaFalkenbach, nooraKorhonen, aiviSalminen, siiriNykanen, samuelWahlstedt]],
    ["Wildflower", "Billie Eilish", [celinaNiittynen, kaisaKylmalahti, milkaLoponen, aileVehvilainen, ilariSuortamo, elianHoltta]],
    ["Honey are you coming", "Måneskin", [lottaFalkenbach, oosaTourunen, helmiinaJarvinen, antonLinja, eeroPartanen, piituMuhonen]],
];

const songs_b = [
    ["Saatanan Zen", "Haloo Helsinki!", [lottaFalkenbach, samuLamminpaa, helmiinaJarvinen, aiviSalminen, oosaTourunen, hilmaHurme, nooraKorhonen, konstaPenttinen, susannaSalminen, piituMuhonen]],
    ["Paparazzi", "Lady Gaga", [lottaFalkenbach, susannaSalminen, helmiinaJarvinen, samuLamminpaa, samuelWahlstedt, marioPirinen]],
    ["Viel yhen kerran", "VIIVI", [marioPirinen, ronjaVirtanen, viiviMattila, susannaSalminen, samuelManninen, heidiNykanen]],
    ["Sinua sinua rakastan", "Kaj Chydenius", [aiviSalminen, eeroPartanen, hilmaHurme, nooraKorhonen, samuLamminpaa, aileVehvilainen, milkaLoponen, hiljaEskelinen, oosaTourunen]],
    ["Shine on me", "Kingston Wall", [antonLinja, josias, konstaPenttinen, samuelManninen, oskariMiettinen, valtteriLaitinen]],
    ["Pissikset", "Lissut", [lottaFalkenbach, susannaSalminen, kaisaKylmalahti, hiljaEskelinen, oosaTourunen, piituMuhonen, aileVehvilainen, ilariSuortamo]],
    ["Tähdet Meren yllä", "Reijo Taipale", [valtteriLaitinen, oskariMiettinen, konstaPenttinen, samuelManninen]],
    ["Would?", "Alice In Chains", [danteMehtalainen, oskariMiettinen, eeroPartanen, konstaPenttinen, antonLinja, elianHoltta]],
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
    const songs = selectedProgram === 'alku' ? songs_a : songs_b;

    songs.forEach(item_text => {
        const html_li = document.createElement("li");
        html_li.textContent = item_text[0] + " - " + item_text[1];
        html_list1.appendChild(html_li);
        html_list1.appendChild(create_player_list(item_text[2]));
    });

    const html_h1 = document.createElement("h1");
    html_h1.textContent = (selectedProgram === 'alku' ? "Ensimmäinen " : "Toinen ") + "puolisko";
    html_h1.id = "ohjelma-header";

    html_main.insertBefore(html_h1, html_containter);
    html_containter.appendChild(html_list1);
}
render_songs();