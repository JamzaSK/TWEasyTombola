// ==UserScript==
// @name TW Easy Tombola
// @description Send Tombola currency to all your friends

// @author Jamza
// @version 1.1
// @license GPL-3.0 http://www.gnu.org/licenses/gpl-3.0.txt

// @include http*://*.the-west.*/game.php*
// @include http*://*.the-west.*.*/game.php*
// @exclude https://classic.the-west.net*

// @namespace https://greasyfork.org/cs/users/153384/
// @grant none

// @updateURL https://jamzask.github.io/TWEasyTombola/code.user.js
// @downloadURL http://greasyfork.org/scripts/410123-tw-easy-tombola/code/TW%20Easy%20Tombola.user.js
// @supportURL https://github.com/JamzaSK/TWEasyTombola/issues
// @homepage https://greasyfork.org/scripts/410123-tw-easy-tombola
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=97jamza%40gmail.com&item_name=TW+Easy+Tombola&currency_code=EUR&source=url

// ==/UserScript==

/*  Copyright (C) 2020  Jamza <97jamza@gmail.com>
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You have received a copy of the GNU General Public License
    along with this program.
*/

!function(e) {
    var t = document.createElement("script");
    t.setAttribute("type", "application/javascript"), t.textContent = "(" + function() {
        isDefined(window.EzT) ? new west.gui.Dialog(EzT.script_name, '<div class="txcenter"><b><br>The UserScript ' + EzT.script_name + " is installed twice. You will have to uninstall older version for the script to work properly!</br></b></div>", west.gui.Dialog.SYS_WARNING).addButton("OK").show() : (window.EzT_lang = {}, 
        window.EzT_update = {}, window.EzT = {
            script_name: "TW Easy Tombola",
            version: "1.1",
            author: "Jamza",
            minGame: "2.04",
            maxGame: Game.version.toString(),
            website: "https://greasyfork.org/cs/scripts/410123-tw-easy-tombola",
            base_url: "https://jamzask.github.io/TWEasyTombola/",
            langs: {
                br: {
                    /*! Thanks to Venozmat */
                    already_sent: "%ses_currency enviado para %1 de %2 amigos",
                    all_sent: "%ses_currency foi enviado para todos amigos",
                    send: "Enviar",
                    sent_msg: "Enviar para amigo %1",
                    cancel: "Cancelar",
                    hide: "Esconder",
                    update_message: "Script foi atualizado! Por favor, baixe a última versão.",
                    update_changes: "O que há de novo?",
                    donate_title: "Ajude o desenvolvimento",
                    donate_text: "Se gostar do script e quiser que continue funcionando ou com novas funções, por favor, considere uma %doação%",
                    download: "Download",
                    later: "Depois"
                },
                cs: {
                    already_sent: "%ses_currency poslané %1 z %2 přátel",
                    all_sent: "%ses_currency byla poslána",
                    send: "Poslat",
                    sent_msg: "Posláno příteli %1",
                    cancel: "Zrušit",
                    hide: "Schovat",
                    update_message: "Skript byl updatován! Prosím stáhněte si nejnovější verzi.",
                    update_changes: "Co je nového?",
                    donate_title: "Podpořit vývoj",
                    donate_text: "Pokud se vám tento skript líbí a přejete si, aby se na něm pracovalo, nebo si přejete přidávat nové funkce, zvažte prosím jeho %podporu%",
                    download: "Stáhnout",
                    later: "Později"
                },
                de: {
                    /*! Thanks to Tom Robert */
                    already_sent: "%ses_currency an %1 von %2 Freunden gesendet",
                    all_sent: "%ses_currency an alle Freunde gesendet",
                    send: "Senden",
                    sent_msg: "An %1 gesendet",
                    cancel: "Abbrechen",
                    hide: "Schliessen",
                    update_message: "Für das Script ist eine neue Version erhältlich.",
                    update_changes: "Was ist neu?",
                    donate_title: "Entwickler unterstützen",
                    donate_text: "Wenn dir das Script gefällt und es weiterhin verbessert werden soll, überlege dir eine %Spende%.",
                    download: "Update",
                    later: "Später"
                },
                el: {
                    /*! Thanks to Timemod Herkumo, Kostas */
                    already_sent: "Στείλατε %ses_currency σε %1 από %2 φίλους",
                    all_sent: "%ses_currency στάλθηκαν σε όλους τους φίλους",
                    send: "Στείλε",
                    sent_msg: "Στείλε σε έναν φίλο %1",
                    cancel: "Ακύρωση",
                    hide: "Κρύψε",
                    update_message: "Το σκριπτ ενημερώθηκε! Κάντε λήψη της τελευταίας έκδοσης.",
                    update_changes: "Τι καινούργιο υπάρχει;",
                    donate_title: "Υποστήριξη και Βοήθεια",
                    donate_text: "Αν σας αρέσει το σκριπτ και επιθυμείτε να προστεθούν νέες λειτουργίες ή να μας ενισχύσετε, μπορείτε να κάνετε δωρεά %donation%",
                    download: "Λήψη",
                    later: "Later"
                },
                en: {
                    already_sent: "%ses_currency has been sent to %1 of %2 friends",
                    all_sent: "%ses_currency has been sent to all friends",
                    send: "Send",
                    sent_msg: "Sent to friend %1",
                    cancel: "Cancel",
                    hide: "Hide",
                    update_message: "The script has been updated! Please download the latest version.",
                    update_changes: "Whats new?",
                    donate_title: "Support Development",
                    donate_text: "If you like this script and wish it's kept working or wish new features to be added, please consider a %donation%",
                    download: "Download",
                    later: "Later"
                },
                es: {
                    /*! Thanks to pepe100 */
                    already_sent: "%ses_currency enviar a %1 de %2 amigos",
                    all_sent: "%ses_currency fueron enviados",
                    send: "Enviar",
                    sent_msg: "Enviado a amigo %1",
                    cancel: "Cancelar",
                    hide: "Esconder",
                    update_message: "¡El script ha sido actualizado! Por favor, descargue la última versión.",
                    update_changes: "¿Qué hay de nuevo?",
                    donate_title: "Apoyando el desarrollo",
                    donate_text: "Si le gusta este script y desea que siga funcionando o desea que se agreguen nuevas funciones, por favor considere hacer una %donación%",
                    download: "Descargar aquí",
                    later: "Más tarde"
                },
                hu: {
                    /*! Thanks to Aviendha */
                    already_sent: "%ses_currency elküldve %1 barátnak ennyiből: %2",
                    all_sent: "%ses_currency minden barátnak elküldve",
                    send: "Küldés",
                    sent_msg: "Küldés a barátnak: %1",
                    cancel: "Megszakít",
                    hide: "Elrejt",
                    update_message: "A script frissült! Kérlek, töltsd le a legújabb verziót.",
                    update_changes: "Újdonság",
                    donate_title: "A fejlesztés támogatása",
                    donate_text: "Ha tetszik ez a script, és szeretnéd, hogy továbbra is működjön és új funkciók kerüljenek bele, kérlek küld egy kis %adományt%",
                    download: "Letöltés",
                    later: "Later"
                },
                it: {
                    /*! Thanks to Billy-AR */
                    already_sent: "%ses_currency inviati a %1 di %2 amici",
                    all_sent: "%ses_currency inviati",
                    send: "Invia",
                    sent_msg: "Invia all'amico %1",
                    cancel: "Cancella",
                    hide: "Nascondi",
                    update_message: "Lo script è stato aggiornato! Per favore, scarica l'ultima versione.",
                    update_changes: "Cosa c'è di nuovo?",
                    donate_title: "Supporta lo sviluppo",
                    donate_text: "Se ti piace lo script e desideri che continui il suo sviluppo o desideri che altre funzionalità vengano aggiunte, per favore considera una %donazione%",
                    download: "Download",
                    later: "Later"
                },
                nl: {
                    /*! Thanks to Mike, Jesse */
                    already_sent: "%ses_currency gestuur naar %1 van %2 vrienden",
                    all_sent: "%ses_currency is naar al je vrienden gestuurd",
                    send: "send",
                    sent_msg: "%1 naar vriend gestuurd",
                    cancel: "cancel",
                    hide: "verberg",
                    update_message: "Script is ge-update! Download astublieft de nieuwste versie.",
                    update_changes: "Wat is er nieuw?",
                    donate_title: "Steun ontwikkelingen ",
                    donate_text: "Als het script je bevalt en wil zorgen dat het blijft werken. Overweeg dan om een %Donatie% te doen",
                    download: "Download",
                    later: "later"
                },
                pl: {
                    /*! Thanks to Wojcieszy, mxj */
                    already_sent: "%ses_currency wysłane do %1 z %2 znajomych",
                    all_sent: "%ses_currency wysłane do wszystkich znajomych",
                    send: "Wyślij",
                    sent_msg: "Wysłano do %1",
                    cancel: "Anuluj",
                    hide: "Schowaj",
                    update_message: "Skrypt wymaga aktualizacji! Prosimy pobrać nową wersję.",
                    update_changes: "Co nowego?",
                    donate_title: "Wesprzyj twórców",
                    donate_text: "Jeżeli lubisz ten skrypt i chcesz aby dalej się rozwijał pomyśl proszę o %donation%",
                    download: "Pobierz",
                    later: "Później"
                },
                pt: {
                    /*! Thanks to jccwest, Tariik, Venozmat */
                    already_sent: "%ses_currency enviado(s) a %1 de %2 amigos",
                    all_sent: "%ses_currency foram enviados para todos os amigos",
                    send: "Enviar",
                    sent_msg: "Enivar para amigo %1",
                    cancel: "Cancelar",
                    hide: "Esconder",
                    update_message: "O script foi actualizado! Faz a transferência da versão mais recente.",
                    update_changes: "O que há de novo?",
                    donate_title: "Ajudar o desenvolvimento",
                    donate_text: "Se gostas deste script e desejas que se mantenha a funcionar ou que novas funções sejam adicionadas, por favor considera um %Donativo%",
                    download: "Transferir agora",
                    later: "Mais tarde"
                },
                ro: {
                    /*! Thanks to Totalfs */
                    already_sent: "%ses_currency momentan trimis către %1 din %2 prieteni",
                    all_sent: "%ses_currency  trimis către toți prietenii",
                    send: "Trimite",
                    sent_msg: "Trimis prietenului %1",
                    cancel: "Renunta",
                    hide: "Ascunde",
                    update_message: "Scriptul a fost actualizat! Vă rugăm să descărcați cea mai recentă versiune.",
                    update_changes: "Ce este nou?",
                    donate_title: "Sprijinirea dezvoltării",
                    donate_text: "Dacă îți place acest script și dorești să se îmbunătățească sau vă doriți să adăugăm noi caracteristici, vă rugăm să luați în considerare o %donație%",
                    download: "Descarca",
                    later: "Later"
                },
                ru: {
                    /*! Thanks to Luntik */
                    already_sent: "%ses_currency отправил %1 из %2 друзей",
                    all_sent: "%ses_currency  было отправлено",
                    send: "отправить",
                    sent_msg: "Отправлено другу %1",
                    cancel: "отменить",
                    hide: "спрятать",
                    update_message: "Скрипт обновлен! Пожалуйста, загрузите последнюю версию.",
                    update_changes: "Что нового?",
                    donate_title: "Поддержка развития",
                    donate_text: "Если вам нравится этот скрипт и вы хотите поработать над ним или хотите добавить новые функции, рассмотрите %пожертвование%",
                    download: "Скачать",
                    later: "потом"
                },
                sk: {
                    already_sent: "%ses_currency poslané %1 z %2 priateľov",
                    all_sent: "%ses_currency poslané",
                    send: "Poslať",
                    sent_msg: "Poslané priateľovi %1",
                    cancel: "Zrušiť",
                    hide: "Schovať",
                    update_message: "Skript bol updatovaný! Prosím stiahnite si najnovšiu verziu.",
                    update_changes: "Čo je nové?",
                    donate_title: "Podporiť vývoj",
                    donate_text: "Ak sa vám tento skript páči a prajete si, aby sa pokračovalo v jeho vývoji, alebo si prajete, aby sa pridávali nové funkcie, zvážte prosím jeho %podporu%",
                    download: "Stiahnuť",
                    later: "Neskôr"
                },
                tr: {
                    /*! Thanks to RezieaL */
                    already_sent: "%ses_currency %2 arkadaştan %1 arkadaşa gönderildi",
                    all_sent: "%ses_currency tüm arkadaşlara gönderildi",
                    send: "Gönder",
                    sent_msg: "Arkadaşına gönder %1",
                    cancel: "İptal",
                    hide: "Sakla",
                    update_message: "Betik güncellendi. Lütfen en son sürümü indiriniz.",
                    update_changes: "Neler yeni?",
                    donate_title: "Geliştiriciye bağış",
                    donate_text: "Bu komut dosyasını beğendiyseniz ve çalışmaya devam etmesini veya yeni özelliklerin eklenmesini istiyorsanız, lütfen %bağış% yapmayı düşünün",
                    download: "İndirme",
                    later: "İndirme"
                }
            },
            images: {
                icon_bg: "data:image/png;base64,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"
            },
            events: {
                Hearts: {
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AMWDA8I84rsPgAABitJREFUSMfdlktsW8cVhr+5vCQlUqREUZQt2ZJtSbblh2w5bmIbfqix66BuUhRJEyBAkSyyzKLL7rrprtsuskoWRdu0RRAnRZI69aO160apk9iRbEmWLFIPSiTFp0he8l7yvqYbOhCCNMimm/7AAHNmzsyPOYvzDfyPJb5lfeuebI2tUr4Wu9/FwAN4AT/ga8UOYALN1lzxeBSv47g+QG2ds1s5phDCklLKbzLwAR1ABNjm9/tiqlf1S+k29HojD5QBHVARItwZCkRVrxpyXRddb9Qsy8m7riyArLTynK0GvtbFA3v2bD/2wvNnzz9zfuxYdyQQWE9VyldvTE397doXX25slArt7W2BUycPjkxMjB/dv3/XDq/qU1LpXO7Kx3c+nZy8P5nJFOeA7GMT0SpJFzB87uzYhV/+4kevHR+1hzbT89h6A0fE8PUcdj+b05au/eN++uDoYPjiuYMj3kYlSL3uqsGo6BwcFU2h6u9/cOPmW2/95Q8zM0t3XNfNAA1PqywDTxzbd/HXv/rJ60cGHu5avHeFenIZJZ5DzKaoLj4S0Z3h7pNnD+8Yjin9zYWbPv/0tGibLSjm/IbIrWdFW/9u3/iJJwaLxbw1NbWQNE27LIRoeoDeYLD92JtvvP7z43tnh+Oz14lu09jvV+jPhYhqEaJFL434MpXknBJYm2N3waJfP0jUe5Ie3146CgbLS3F8Q7s9A0N9PUuJ1fXMRmHNMu2qBxh88cXzz732ct+lQuJPntBOg6HDCp50ALHYAblOvHI7UboZ0H30GjsJmE8jtv8AcXAcEemjTdlGuJBluboihk6OhTZy+crk5IMZy7KLKtB55vShUbf+0FPI1hk7LiCrIioKNCSiJsBoRzhR8Edg2y44Nor4/l7o74SVLPIzi05jP10r/0JPJ9i/b+dIJBKK6XrDpwDeSDjYbmkVbE0QWuiGOxF46IcNF6o2bDYhbYPWAX1dcLwT9oTAccG0EMJCoBI1PTQ2Noh0BTvDoWAH4FUBq6wZulEPYZX8cL8fEgpkHCg6oAuo68iqBoEqwqjDwgYUDZAKlHUolJFaCdGs09RrsqZgCoEUQkEBqrduP3jkBkYdafsoFYegOAi1AaTdj2x2IDUbdB0qGjJTRi7mkTMpmE9BIgvrOWRhhaKVwfYLuZbM5nSjUZbSbSpA9fLlm18mK6FVtXsveRGBjhNIcxfUY1ALI5t+pNPAqVdxUwXkch6SOeRyFrmchewqtdIDMl0W3t4ed2U1t6hV9aKiKKYHUFzH8ViuErt0aeLI+uq82Db8Et5yJ7IscXWBazq4tomUDaRl4xpNqBlQKaPUCtjVOWaVFWk9PeYm622LH/71zgeJRHradpySp9UllUQi5Z6aOHWot8vo0doC9L3wCtKrIqsOTr2J7Rg4soTjVJBmFZoVFCONshlnUVuR6dPdMvzk6dq7H969cuvW9I1a3VgFjMcGrm070hUe35mJE2OZpb/7wk+eI3ziKG6lgZ0q4BgFLFnEcfJgF8EqojRKZKt54gdUep6/ZE8lm3ff/uP191Lp4n1gE7C+MhBCyIWFVX340OHo+JGB4UeffqR09h0lJIM4y4+wK0mcZg5paiAbCNck3agzO6TQ/eoFmW/bmfjNG++9M31/6RMgAxiA9GyBhS0l9tJSqv7U2YnBA8OR/oc3f4dT1ui2dJRCHKoFPNJCRzDnWMzv89HzynlXi42kfv/O7fev37j3seu6K0Dtcbv2fI1IZnlTq83MJQqxweHo4fF9sbXF6+pafAa1WkVWq2Rsk7v+BunxLgZffdba8Pcuvn158t2r1774qF5vxIEKYG0l2FYsukAzny9v/vvObNLyBDjz4x/2N9uMtqXKqlhVbda3B/BeOOqM/uyn+lS6ee/N31798+efL9wwjGbctp3NFtnktzFZFUIEpJQxj0cZvvjMU+defuniudEdwb12odBue9vMgqumr9+8d/eT2w/+uZLMTmuavg5oiiJM15Xyu0BfaXG5C+jdvXv7yPHvHRjZsSMWrZQ1Y2F+dWUxvp4olbQ1KWWpRS/7Gz4G/9Xgq9cA7UAwGGgL+3yqz7Idu9kw644ra67rNlolcfi/1X8A6vJBivZReUAAAAAASUVORK5CYII=",
                    color: "253, 39, 94"
                },
                Easter: {
                    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AMWDA82MuvxlQAABVZJREFUSMfdlttrXFUUxn/nMmfO3CfTJJNbM0knqanNGLSt2rRWbb20UhERq6iIohQEURQFQV/FC/ggCiqIgqAPPvjghXqjarXWNtE2SWubmMZcmphMLnOfM3Nm5hxf9tRpCP0D3LA5bDbn+9a31t7f2hJrDxlQAAfgBFxiamLPBkygABjiWwLKYs+uAqmXAdcAN+AXMyDWKlARwBkgCaSBvPi/fDkCSRBogAeoAxqam+vbDz6y+6ab+7u2hwNSuIiWOnFqZuDt9747PHxmalwolWqiv6hCWUVQTYsbCAFNvb0dvW++/uATB3Z77gwr042SMeVx5udCV3X6Y7tu3bFpYclYGv1rLi0iLwt11loEkli7RDoam5qC3e++9eiT/Xusa4IBGxdpDkdmGQksEhlZJOVaWdeze1v39Fj675mZxZSoi1lbC3VV7h01BOEXXrz37u23aX2m2kqZeS74bCbxM9VgInsNppbGWTat9see33vf0NDEP9mskRO1MYWSiwqq0etAEAjv3b/1uoMv9d/f6A3rOvWYFMiQQiNOfcmm6NJAlpnJxKm0ehsjxfb4yRNjM6LYRaHCUlcROAGvoiihR/ZvvSHmcATIeaFk4JgyiY5UiE6qoLeBOwi2BfFxznhmtPlr+3Z+omu/FQrmsjhdBaCsriqwDnh7t2yMXNfR2Jsr+vB4bcBi0N/GhXATXitH2FtP0OXBlc5STnfTMjrGuuZA16039nV98c3ALJAQJ9RUa/KvCgXuvr07Yh/27GxUQ05iSpIJd4iPO6/kz3CIiAT9MjQrEC/DH4bN4kqCPfKcLzZfjH3xzcCAwFEBSa5JkVq9XF2b1nc0aEvSR3TxNDs4L1V42f6SB9wThICIAtES3KEneL/uKL3RAvFsifWxjmjNjVcBWV5VAwegbWmTmh72nia+LDGddPA4v7C3HOd1xtmmQ4cFvU64hQRXs8A7/EHa5SHaqjSJ6B0C7xIFVYtQ2wOyP2talJNZKJVw2gaU80hUCAJ1EvhtkIWD+Chhuj0UVU0XkSsCU1LXsAl52AppP690YKXzkKvwkP9uXtSGOEs36QIUVVixIK0EcBHhU9xYywnO6i1VnCrWJV500UMWlh3WuTkXgXYFnBonpwI8rF3B7W6VLm+ZhKzSpsCy5eDHfDffZ4s0GNM4Snatk9q1BLbwjwpQ3jl4PHVw8HTY46oHVYdEAkwTOiKwoRM2dEOoHkyTfbOzMDwEi7NM3nJl8Zn/PMmqtQpbgJtA8azO/EiPujFm/IovKBPK5QjkwRmYAVcSnDJ4ATMNwSPMt48w1uUj4ykkxC0uCbxLCMqCIDcwnzlvxUK73kjprPQtEOiSWK/X0a66iTpNonKSdSRZYZEjxQVOXyjRXaqj+XBuXFjFRcNbTVAAsse+PXXq1Zbd81t/mGyKHc2gbWhCUSUcuSQ+pYgnYOB0X6BSLrBnIcXSvAPp5ub0s18OHweyVZuo9aJagszvv4+On7hz25HOjdEDyZ8y9KTyhPIG7kwGNA38WWzPJCkUkpJCdksPo0n5+FeHBs+I7maspaBSJQCW3vrg0FdPvXbPhqPy5q1j+VGWIwZyUMXhL6MqGdScC7UQoKM1ymYlevbD5z7/DFgUBFUFtrJGy7QBsimjNHFubmrXvi3+hrpwGyu6XDa8WNk6lHQDIed6NrVustsyLYMfvfLtB8ODE6eBOJCqTZG0Rker9uMg0OANuFr23XX9tdu3b+5HtzsNu6DLqmyqJWV26Lfzx77+/PixpYX0tIg+AeTESaoAtnSZF4UL8NW8KHzCztWadGZFxOma3Bdr+vL/YPwLkyIleQSxMyIAAAAASUVORK5CYII=",
                    color: "118, 223, 55"
                },
                Independence: {
                    img: "data:image/png;base64,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",
                    color: "18, 171, 223"
                },
                Octoberfest: {
                    img: "data:image/png;base64,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",
                    color: "236, 236, 176"
                },
                DayOfDead: {
                    img: "data:image/png;base64,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",
                    color: "239, 120, 10"
                }
            },
            initScript: function() {
                isDefined(TheWestApi) ? (EzT.updateLang(), EzT.CurrencySender.init(), EzT.get_xhr(), 
                EzT.Updater.init()) : setTimeout(EzT.initScript, 100);
            },
            createDonateWindow: function() {
                var e = wman.open("EzT_donate", null, "escape noreload").setMiniTitle(EzT.script_name).setTitle(EzT.script_name).setSize(700, 400).addTab(EzT_lang.donate_title, "EzT_donate_tab", function() {
                    t();
                });
                function t() {
                    e.activateTab("EzT_donate_tab"), e.clearContentPane(), $(e.getContentPane()).append('<div style="text-align: center;margin-left: auto;margin-right: auto;width: 500px; font-size: 15px; margin-top: 30px;">' + EzT_lang.donate_text.replace(/%/g, "") + '</div><div style="text-align: center;margin-left: auto;margin-right: auto;width: 500px; margin-top: 40px;"><form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick" /><input type="hidden" name="hosted_button_id" value="CCN4T9NYJGFVS" /><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" /></form></div>'), 
                    $(e.getContentPane()).hide().fadeIn();
                }
                t();
            },
            updateLang: function() {
                var e = EzT.langs, t = [ localStorage.getItem("scriptsLang"), Game.locale.substr(0, 2) ], a = EzT.lang = e[t[0]] ? t[0] : "pt_BR" === Game.locale ? "br" : e[t[1]] ? t[1] : "en";
                EzT_lang = e[a];
            },
            getSesEvent: function() {
                var e = Object.keys(EzT.events);
                for (var t in Game.sesData) {
                    var a = Game.sesData[t];
                    if (e.includes(t) && a.friendsbar && buildTimestamp(a.meta.end, true) >= new ServerDate().getTime()) return t;
                }
                return false;
            },
            get_xhr: function() {
                $(document).ajaxComplete(function(e, t, a) {
                    switch (true) {
                      case new RegExp(/\?window\=friendsbar&action\=event/).test(a.url):
                        true !== EzT.CurrencySender.processing && EzT.CurrencySender.updateCounters();
                    }
                });
            },
            CurrencySender: {
                gui: {},
                init: function() {
                    var e = this;
                    EzT.getSesEvent() && (this.createIcon(), this.updateCounters(), EventHandler.listen([ "friend_added", "friend_removed" ], function() {
                        e.updateCounters();
                    }), this.handleEventEnd());
                },
                createIcon: function() {
                    var e = this, t = EzT.getSesEvent(), a = $('<div style="position: absolute;right: -25px;top: 0px;background: url(/images/interface/custom_unit_counter_sprite.png) 50% 0px no-repeat scroll transparent; background-position: right top;height: 33px;width: 50px;"></div>');
                    this.gui.btn = $('<div title="' + (Game.sesData[t] && Game.sesData[t].friendsbar ? Game.sesData[t].friendsbar.label : "") + '" style="position: absolute; right: 2px; top: 2px; width: 33px; height: 32px; background: url(' + EzT.images.icon_bg + '); background-size: contain; z-index: 3; cursor: pointer;"></div>').click(function(t) {
                        e.createMenu(t);
                    });
                    var n = this.gui.btn_icon = $('<img src="' + EzT.events[t].img + '" style="width: 16px;height: auto;position: absolute;left: 9px;top: 7px;background-size: contain; background-repeat: no-repeat;filter: drop-shadow(rgb(48, 21, 6) 2px 3px 3px); z-index: 3;"/>'), i = this.gui.btn_counter = $('<div style="text-shadow:black -1px 0 1px,black 0 1px 1px,black 1px 0 1px,black 0 -1px 1px;line-height:15px;font-size:10px;font-weight:700;text-align:center;position:absolute;width:21px;z-index:2;background:url(/images/interface/friendsbar/level_bg.png);height:15px;right: -4px;top: -4px;color: #f8c57c; display: none;"></div>'), s = $("#user-interface .custom_unit_counter");
                    s && s.is(":visible") && (s.append('<style type="text/css">@keyframes EzT_glow {from {filter: none;} to {filter: drop-shadow(rgb(' + EzT.events[t].color + ", 0.5) 1px 1px 8px) drop-shadow(rgb(" + EzT.events[t].color + ", 0.5) -1px 1px 0px) drop-shadow(rgb(" + EzT.events[t].color + ", 0.5) 1px -1px 0px) drop-shadow(rgb(" + EzT.events[t].color + ", 0.5) -1px -1px 0px);}}</style>"), 
                    s.append($('<div id="EzT_icon" style="position: relative;"/>').append(a.append(this.gui.btn.append(i, n)))));
                },
                createMenu: function(e) {
                    var t = this, a = EzT.getSesEvent(), n = new west.gui.Selectbox().setWidth(250).setHeader("Easy Tombola");
                    return n.addItem(1, '<span style="color: #5e321a; display: inline-block; margin-left: 5px;">' + (Game.sesData[a] && Game.sesData[a].friendsbar ? Game.sesData[a].friendsbar.label : "") + "</span>"), 
                    n.addItem(2, '<span style="color: #5e321a; display: inline-block; margin-left: 5px;">' + EzT_lang.donate_title + "</span>"), 
                    n.addListener(function(e) {
                        switch (e) {
                          case 1:
                            t.createDialog();
                            break;

                          case 2:
                            EzT.createDonateWindow();
                        }
                    }), n.show(e);
                },
                startAnimation: function() {
                    this.gui.btn_icon.css({
                        animation: "EzT_glow 1s ease-in-out infinite alternate"
                    });
                },
                stopAnimation: function() {
                    this.gui.btn_icon.css({
                        animation: "none"
                    });
                },
                setCounter: function(e) {
                    var t = this.gui.btn_counter;
                    e < 1 ? t.hide() : t.show(), west.common.countTo(t, parseInt(e));
                },
                sendSesCurrency: function(e, t) {
                    Ajax.remoteCall("friendsbar", "event", {
                        player_id: e,
                        event: EzT.getSesEvent()
                    }, function(e) {
                        t && t(e);
                    });
                },
                disableAll: function() {
                    throw $("#EzT_icon").remove(), this.t && (window.clearTimeout(this.t), delete this.t), 
                    this.processing = false, this.up && window.clearTimeout(this.up), this.gui.dialog && this.gui.dialog.getMainDiv().remove(), 
                    "EventHelper/: Event is over!";
                },
                handleEventEnd: function() {
                    var e = this, t = 0, a = EzT.getSesEvent();
                    a && (t = Math.ceil(1e3 * this.timeLeft(buildDateObject(Game.sesData[a].meta.end).getTime() - Game.serverTimeDifference))), 
                    t >= 2147483647 || (this.eventEnd = window.setTimeout(function() {
                        e.disableAll();
                    }, t));
                },
                getFriendsList: function(e) {
                    var t = EzT.getSesEvent();
                    if (t) {
                        var a = {}, n = {};
                        $.post("/game.php?window=friendsbar&mode=search", {
                            search_type: "friends"
                        }, function(i) {
                            return $.each(i.eventActivations, function(e, n) {
                                n.event_name === t && (a[n.friend_id] = n.activation_time);
                            }), $.each(i.players, function(e, t) {
                                if (t.name !== Character.name) {
                                    var i = void 0 !== a[t.player_id] ? a[t.player_id] : 0;
                                    n[t.player_id] = {
                                        name: t.name,
                                        activation_time: i
                                    };
                                }
                            }), e(n), true;
                        });
                    }
                },
                timeLeft: function(e) {
                    return e / 1e3 - Game.getServerTime();
                },
                sendToAll: function() {
                    var e = this, t = EzT.getSesEvent();
                    if (t && !this.processing) {
                        this.processing = true;
                        var a = Game.sesData[t], n = buildDateObject(a.meta.end).getTime() - Game.serverTimeDifference, i = west.events.Manager.getEvent(t).getCurrency().name, r = 0, o = 0, d = 0;
                        this.getFriendsList(function(t) {
                            var l = t;
                            if (!$.isEmptyObject(l)) {
                                var c = Object.keys(l);
                                o = c.length, r = o - e.gui.progressBar.value, e.up && window.clearTimeout(e.up), 
                                function t() {
                                    var u = l[c[d]];
                                    var g = Game.getServerTime();
                                    var p = u.activation_time + a.friendsbar.cooldown - g;
                                    var A = p < e.timeLeft(n) && p < 0;
                                    A ? e.sendSesCurrency(c[d], function(t) {
                                        --r < 0 && (r = 0), e.changeCounters(r, o, t.error ? '<span style="color: #900; font-weight: bold;">' + t.msg + "</span>" : s(EzT_lang.sent_msg, u.name.cutIt(14))), 
                                        v();
                                    }) : v();
                                    function v() {
                                        d < c.length - 1 && e.processing ? (d++, e.t = window.setTimeout(function() {
                                            t();
                                        }, A ? Math.floor(1501 * Math.random() + 1500) : 100)) : (e.processing = false, 
                                        e.updateCounters(), e.gui.progressMsg.text(EzT_lang.all_sent.replace("%ses_currency", i)));
                                    }
                                }();
                            }
                        });
                    }
                },
                changeHFCounters: function(e, t) {
                    try {
                        HiroFriends.friendManager.canSend = e, HiroFriends.friendManager.totalFriends = t < HiroFriends.friendManager.totalFriends ? HiroFriends.friendManager.totalFriends : t, 
                        HiroFriends.guiManager.updateCounters(HiroFriends.friendManager.canSend, HiroFriends.friendManager.totalFriends);
                    } catch (e) {}
                },
                changeCounters: function(e, t, a) {
                    var n = EzT.getSesEvent();
                    if (n) {
                        var i = west.events.Manager.getEvent(n).getCurrency().name, r = t - e;
                        this.gui.progressBar && (null !== e && (this.gui.progressBar.value = r), null !== t && (this.gui.progressBar.maxValue = t), 
                        this.gui.progressBar.update(), r !== t ? this.gui.progressBar.getMainDiv().addMousePopup(s(EzT_lang.already_sent.replace("%ses_currency", i), r, t)) : this.gui.progressBar.getMainDiv().addMousePopup(EzT_lang.all_sent.replace("%ses_currency", i))), 
                        a && this.gui.progressMsg && this.gui.progressMsg.html(a), this.gui.startBtn && this.gui.stopBtn && (e < 1 && this.gui.startBtn.disable(), 
                        this.processing ? this.gui.startBtn.disable() : this.gui.stopBtn.disable()), this.setCounter(e), 
                        this.changeHFCounters(e, t), e > 0 ? this.startAnimation() : this.stopAnimation();
                    }
                },
                updateCounters: function(e) {
                    var t = this;
                    this.up && window.clearTimeout(this.up);
                    var a = EzT.getSesEvent();
                    if (a) {
                        var n = Game.sesData[a], i = buildDateObject(n.meta.end).getTime() - Game.serverTimeDifference, s = n.friendsbar.cooldown, r = 0, o = 0;
                        this.getFriendsList(function(a) {
                            var d = a;
                            for (var l in d) {
                                var c = Game.getServerTime(), u = d[l].activation_time + n.friendsbar.cooldown - c;
                                u < t.timeLeft(i) && u < 0 ? r++ : s = Math.min(u, s), o++;
                            }
                            t.changeCounters(r, o), o && s && (t.up = window.setTimeout(function() {
                                t.updateCounters();
                            }, 1e3 * s < 1e4 ? 1e4 : 1e3 * s)), e && e();
                        });
                    }
                },
                createDialog: function() {
                    this.gui.dialog && this.gui.dialog.getMainDiv().is(":visible") && this.gui.dialog.hide();
                    var e = this.gui.btn, t = e.offset().left + e.width() / 2, a = e.offset().top + e.height(), n = this, i = EzT.getSesEvent(), s = $('<div style="text-align: center; width: 300px; min-height: 45px; margin-bottom: 5px;"></div>'), r = this.gui.progressMsg = $('<div style="font-style: italic; min-height: 12px; font-size: 12px;margin-bottom: 5px;"></div>'), o = this.gui.progressBar = new west.gui.Progressbar(0, 0), d = this.gui.startBtn = new west.gui.Button(EzT_lang.send.toLowerCase(), function() {
                        return n.gui.stopBtn.enable(), n.gui.startBtn.disable(), n.sendToAll(), false;
                    }), l = this.gui.stopBtn = new west.gui.Button(EzT_lang.cancel.toLowerCase(), function() {
                        n.gui.stopBtn.disable(), void 0 !== n.t && (window.clearTimeout(n.t), delete n.t), 
                        n.processing = false, n.gui.dialog.hide(), n.updateCounters();
                    }), c = $('<img src="' + EzT.events[i].img + '" style="float: right; display: inline-block;" height="16"/>');
                    s.append(r, o.getMainDiv());
                    var u = this.gui.dialog = new west.gui.Dialog("", s).setPosition(t, a).setBlockGame(false);
                    this.updateCounters(function() {
                        u.show();
                        var a = $(".tw2gui_dialog_actions", u.getMainDiv());
                        0 === a.length && (a = $('<div class="tw2gui_dialog_actions" style="text-align: center;"/>'), 
                        $(".tw2gui_dialog_content", u.getMainDiv()).after(a)), a.append(d.getMainDiv(), l.getMainDiv()), 
                        $(".textart_title", d.getMainDiv()).append(c), $(".tw2gui_inner_window_title", u.getMainDiv()).empty().css({
                            height: "20px"
                        }), $(".tw2gui_dialog_content", u.getMainDiv()).css({
                            "padding-bottom": "3px"
                        }), u.getMainDiv().css({
                            "min-width": "unset"
                        }), u.divMain.append($('<div title="' + EzT_lang.hide + '" class="tw2gui_window_buttons_close" style="position: absolute;right: 6px;top: 8px;"></div>').click(function() {
                            u.hide();
                        })), u.setX(t - u.getMainDiv().width()), e.prop("disabled", false);
                    });
                }
            },
            Updater: {
                init: function() {
                    this.interval || (this.interval = window.setInterval(this.init, Math.floor(12e5 * Math.random() + 6e5)));
                    var e = this;
                    try {
                        $.get(EzT.base_url + "update.txt", function(t) {
                            for (var a = t.split(", "), n = 0; n < a.length; n++) {
                                var i = a[n].split(": ");
                                EzT_update[i[0]] = i[1];
                            }
                            EzT_update.version !== EzT.version && (new west.gui.Dialog(EzT.script_name + "&nbsp;" + EzT_update.version, '<div style="max-width: 450px;"><div>' + EzT_lang.update_message + "</div><br/><div><b>" + EzT_lang.update_changes + "</b></br><i>" + EzT_update.changes + "</i></div></br><div>" + EzT_lang.donate_text.replace(/\%(.*?)\%/, '<a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CCN4T9NYJGFVS&source=url">$1</a>.') + "</div></div>", west.gui.Dialog.SYS_WARNING).addButton(EzT_lang.download, function() {
                                window.open(EzT.base_url + "code.user.js");
                            }).addButton(EzT_lang.later, function() {}).show(), clearInterval(e.interval));
                        }, "text");
                    } catch (e) {}
                }
            }
        }, $(document).ready(EzT.initScript));
    } + ")();", document.body.appendChild(t), document.body.removeChild(t);
}();