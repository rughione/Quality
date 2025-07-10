// 1. Definiamo gli "Ambienti di Valore" e le loro domande
const valueEnvironments = [
    {
        id: 'allenatori',
        name: 'Allenatori',
        questions: [
            {
                id: 'all_q1',
                text: 'Il mister è inclusivo e si occupa di tutti i ragazzi in egual misura?',
                options: [
                    { value: 1, label: '1 - Per niente inclusivo molti si allenano in disparte' },
                    { value: 2, label: '2 - Poco inclusivo alcuni ragazzi sono trattati in maniera meno preferenziale' },
                    { value: 3, label: '3 - Sufficientemente inclusivo a volte alcuni ragazzi non vengono presi in considerazione' },
                    { value: 4, label: '4 - Ben inclusivo anche se per ragioni di risultato alcuni non vengono presi in considerazione' },
                    { value: 5, label: '5 - Sicuramente inclusivo ogni ragazzo è preso nella medesima considerazione e trattato in egual misura' }
                ]
            },
            {
                id: 'all_q2',
                text: 'Il tuo mister è autoritario?',
                options: [
                    { value: 1, label: '1 - Si, spesso urla e ordina cosa fare' },
                    { value: 2, label: '2 - Si, molte volte urla e ordina cosa fare' },
                    { value: 3, label: '3 - A volte urla e ordina cosa fare' },
                    { value: 4, label: '4 - Urla solo in determinati casi' },
                    { value: 5, label: '5 - Non urla mai e non ordina cosa fare' }
                ]
            },
            {
                id: 'all_q3',
                text: 'Il mister si arrabbia quando commetti un errore?',
                options: [
                    { value: 1, label: '1 - Si, si arrabbia molto e urla' },
                    { value: 2, label: '2 - Si si arrabbia spesso urla' },
                    { value: 3, label: '3 - Alza la voce e pretende un mio miglioramento immediato' },
                    { value: 4, label: '4 - Sottolinea l\'errore ' },
                    { value: 5, label: '5 - Non sottolinea l\'errore' }
                ]
            },
            {
                id: 'all_q4',
                text: 'Il mister fornisce feedback immediati?',
                options: [
                    { value: 1, label: '1 - Si solo quando sbaglio' },
                    { value: 2, label: '2 - Si ma prevalentemente negativi dopo un errore ' },
                    { value: 3, label: '3 - Ogni tanto' },
                    { value: 4, label: '4 - Sì, mi dice bravo ma non è specifico' },
                    { value: 5, label: '5 - Sì, mi da un feedback positivo, specifico e rafforza per dare valore al mio comportamento corretto' }
                ]
            },
            {
                id: 'all_q5',
                text: 'Il mister consente l\'errore come parte dell\'apprendimento?',
                options: [
                    { value: 1, label: '1 - No si arrabbia quando sbaglio' },
                    { value: 2, label: '2 - Spesso urla quando sbaglio' },
                    { value: 3, label: '3 - A volte si arrabbia quando sbaglio' },
                    { value: 4, label: '4 - Si ma poi mi dice che devo migliorare' },
                    { value: 5, label: '5 - Si e mi esorta a tentare di nuovo' }
                ]
            },
            {
                id: 'all_q6', // Nuovo ID unico per la domanda
                text: 'Il mister usa un linguaggio appropriato e non volgare?',
                options: [
                    { value: 1, label: '1 - No, usa sempre parole volgari e bestemmie' },
                    { value: 2, label: '2 - Poco, spesso usa parole volgari anche per descrivere cose positive' },
                    { value: 3, label: '3 - A volte usa parole volgari, specialmente quando si arrabbia' },
                    { value: 4, label: '4 - Raramente usa parole volgari' },
                    { value: 5, label: '5 - Non urla mai e non ordina cosa fare' }
                ]
            }
        ]
    },

    {
        id: 'dirigenti',
        name: 'Dirigenti Fissi Societari',
        questions: [
            {
                id: 'dir_q1',
                text: 'I dirigenti societari sono presenti agli allenamenti?',
                options: [
                    { value: 1, label: '1 - No, mai' },
                    { value: 2, label: '2 - Poco presenti, solo in caso di problemi' },
                    { value: 3, label: '3 - Solo in caso di problemi o partite importanti' },
                    { value: 4, label: '4 - Spesso presenti ma non partecipano attivamente' },
                    { value: 5, label: '5 - Sono sempre presenti e partecipano attivamente' }
                ]
            },
            {
                id: 'dir_q2',
                text: 'I dirigenti societari si assicurano della qualità dell\'ambiente di lavoro dei ragazzi?',
                options: [
                    { value: 1, label: '1 - No, non si preoccupano affatto' },
                    { value: 2, label: '2 - Solo dopo qualche lamentela' },
                    { value: 3, label: '3 - Qualche volta si preoccupano' },
                    { value: 4, label: '4 - Verificano spesso l\'ambiente di lavoro' },
                    { value: 5, label: '5 - Sono sempre in contatto con il mister e i dirigenti per migliorare l\'ambiente di lavoro e renderlo idoneo all\'apprendimento' }
                ]
            },
            {
                id: 'dir_q3',
                text: 'I dirigenti societari sono attenti alla qualità delle strutture?',
                options: [
                    { value: 1, label: '1 - No, non si preoccupano affatto' },
                    { value: 2, label: '2 - Raramente si preoccupano' },
                    { value: 3, label: '3 - Verificano ma poi non si attivano per migliorarle ' },
                    { value: 4, label: '4 - verificano e si attivano per migliorarle' },
                    { value: 5, label: '5 - Sono sempre attenti alla qualità delle strutture ed aiutano nel mantenerle in buone condizioni' }
                ]
            },
            {
                id: 'dir_q4',
                text: 'I mister societari favoriscono l\'inclusione?',
                options: [
                    { value: 1, label: '1 - No, non si preoccupano affatto' },
                    { value: 2, label: '2 - No si preoccupano ma non agiscono' },
                    { value: 3, label: '3 - Ogni tanto' },
                    { value: 4, label: '4 - Sì, ma non sempre' },
                    { value: 5, label: '5 - Sì, sono attivi e partecipano attivamente per favorire l\'inclusione' }
                ]
            },
            {
                id: 'dir_q5',
                text: 'I dirigenti si comportano in maniera corretta e forniscono informazioni veritiere?',
                options: [
                    { value: 1, label: '1 - No, non forniscono informazioni corrette e non mantengono le promesse fatte' },
                    { value: 2, label: '2 - No, spesso forniscono informazioni errate e non si preoccupano delle conseguenze' },
                    { value: 3, label: '3 - A volte forniscono informazioni differenti da quelle che poi sono le loro azioni' },
                    { value: 4, label: '4 - Si ' },
                    { value: 5, label: '5 - Si e sono sempre disponibili a dare spiegazioni e chiarimenti corretti' }
                ]
            },
            {
                id: 'dir_q6',
                text: 'I dirigenti societari sono precisi e forniscono supporto alle famiglie?',
                options: [
                    { value: 1, label: '1 - No, solo con chi è di interesse' },
                    { value: 2, label: '2 - Poco, solo all\'inizio della stagione' },
                    { value: 3, label: '3 - A volte forniscono supporto ma non sono sempre precisi' },
                    { value: 4, label: '4 - Si forniscono supporto ma non sempre sono precisi' },
                    { value: 5, label: '5 - Si sono sempre disponibili e forniscono supporto e sono precisi' }
                ]
            }
        ]
    },

    {
        id: 'struttura',
        name: 'Struttura',
        questions: [
            {
                id: 'str_q1',
                text: 'La struttura è nel complesso ordinata e pulita?',
                options: [
                    { value: 1, label: '1 - No, è sempre disordinata e sporca' },
                    { value: 2, label: '2 - Poco ordinata e spesso sporca' },
                    { value: 3, label: '3 - Sufficientemente ordinata ma sporca' },
                    { value: 4, label: '4 - Ben ordinata e pulita' },
                    { value: 5, label: '5 - Sicuramente ordinata e pulita e sempre mantenuta in queste condizioni' }
                ]
            },
            {
                id: 'str_q2',
                text: 'Il campo è in buone condizioni?',
                options: [
                    { value: 1, label: '1 - No, è in cattive condizioni e pericoloso per colpa di buche e altre irregolarità' },
                    { value: 2, label: '2 - No, è scarsamente in buone condizioni' },
                    { value: 3, label: '3 - Discrete condizioni' },
                    { value: 4, label: '4 - Buone condizioni e ben mantenuto' },
                    { value: 5, label: '5 - Nuove condizioni e ben mantenuto' }
                ]
            },
            {
                id: 'str_q3',
                text: 'Gli spogliatoi sono monitorati dalla società?',
                options: [
                    { value: 1, label: '1 - No, sono in pessime condizioni e non vengono mai controllati' },
                    { value: 2, label: '2 - No sono in cattive condizioni e vengono controllati solo in caso di problemi' },
                    { value: 3, label: '3 - Si ma spesso non vengono controllati' },
                    { value: 4, label: '4 - Sono in buone condizioni e vengono controllati' },
                    { value: 5, label: '5 - Sono in ottime condizioni e vengono sempre controllati' }
                ]
            },
            {
                id: 'str_q4',
                text: 'È presente una sala medica e un defibrillatore?',
                options: [
                    { value: 1, label: '1 - No, non sono presenti' },
                    { value: 2, label: '2 - È presente solo il defibrillatore' },
                    { value: 3, label: '3 - È presente sia la sala medica che il defibrillatore ma non c\'è mai nessuno che li controlla' },
                    { value: 4, label: '4 - Sì, e un dottore è qualche volta presente durante le partite' },
                    { value: 5, label: '5 - Si, e un dottore è sempre presente durante le partite e controlla sia la sala medica che il defibrillatore' },
                ]
            },
            {
                id: 'str_q5',
                text: 'È presente una sala riunioni e video?',
                options: [
                    { value: 1, label: '1 - No non è presente' },
                    { value: 2, label: '2 - Si ma non è mai utilizzata' },
                    { value: 3, label: '3 - Si ma è utilizzata solo in caso di problemi' },
                    { value: 4, label: '4 - Si e viene utilizzata' },
                    { value: 5, label: '5 - Si e viene utilizzata spesso' }
                ]
            }
        ]
    },

    {
        id: 'ambientemorale',
        name: 'Ambiente Morale',
        questions: [
            {
                id: 'amb_q1',
                text: 'I dirigenti e gli allenatori hanno un comportamento etico e sportivo idoneo alla presenza di bambini e ragazzi?',
                options: [
                    { value: 1, label: '1 - No, non si preoccupano affatto' },
                    { value: 2, label: '2 - Poco sportivi si preoccupano solo di vincere e non si preoccupano di come lo fanno' },
                    { value: 3, label: '3 - Si ma non sempre' },
                    { value: 4, label: '4 - Si sono sempre sportivi e rispettano le regole' },
                    { value: 5, label: '5 - Si sono sempre sportivi e rispettano le regole e sono un esempio per i ragazzi' }
                ]
            },
            {
                id: 'amb_q2',
                text: 'È presente uno psicologo dello sport?',
                options: [
                    { value: 1, label: '1 - No, non è presente' },
                    { value: 2, label: '2 - Si ma non è mai presente' },
                    { value: 3, label: '3 - Si ma è presente solo in caso di problemi' },
                    { value: 4, label: '4 - Si e è presente durante qualche allenamento' },
                    { value: 5, label: '5 - È spesso presente e aiuta sia i mister per migliorare la comunicazione con i ragazzi, sia con i genitori per migliorare l\'ambiente di lavoro e di apprendimento dei ragazzi' }
                ]
            },
            {
                id: 'amb_q3',
                text: 'La società è attenta al comportamento dei ragazzi sia durante le partite, gli allenamenti e nella struttura sportiva?',
                options: [
                    { value: 1, label: '1 - No, non si preoccupano affatto' },
                    { value: 2, label: '2 - Raramente si preoccupano' },
                    { value: 3, label: '3 - Verificano ma poi non si attivano per migliorarle ' },
                    { value: 4, label: '4 - verificano e si attivano per migliorarle' },
                    { value: 5, label: '5 - Sono sempre attenti alla qualità delle strutture ed aiutano nel mantenerle in buone condizioni' }
                ]
            },
            {
                id: 'amb_q4',
                text: 'Durante le partite mantengono tutti un comportamento etico e rispettoso?',
                options: [
                    { value: 1, label: '1 - No, spesso si comportano in maniera scorretta e non rispettano le regole o litigano con gli avversari o l\'arbitro' },
                    { value: 2, label: '2 - No, molte volte litigano e non favoriscono alla creazione di un ambiente sereno e rispettoso' },
                    { value: 3, label: '3 - Si ma non sempre' },
                    { value: 4, label: '4 - Sì e sono sempre rispettosi' },
                    { value: 5, label: '5 - Sì, sono attivi e partecipano attivamente per favorire la creazione di un ambiente sereno e rispettoso' }
                ]
            },
            {
                id: 'amb_q5',
                text: 'I ragazzi sono considerati solo un mezzo per fare quote o sono il vero fine della società sportiva?',
                options: [
                    { value: 1, label: '1 - I ragazzi sono solo un mezzo per fare quote' },
                    { value: 2, label: '2 - Spesso i ragazzi sono utilizzati per vincere e farsi pubblicità per aumentare le quote' },
                    { value: 3, label: '3 - Spesso per accaparrarsi i migliori ragazzi fanno discriminazioni sulle quote ' },
                    { value: 4, label: '4 - I ragazzi sono il vero fine della società sportiva ' },
                    { value: 5, label: '5 - I ragazzi sono sempre al centro di tutto e sono trattati in egual misura' }
                ]
            }
        ]
    }
];

// Selezioniamo gli elementi HTML con cui interagiremo
const questionsContainer = document.getElementById('questions-container');
const calculateButton = document.getElementById('calculate-score-btn');
const resetButton = document.getElementById('reset-btn'); // Nuovo pulsante reset
const resultsSection = document.getElementById('results');
const totalScoreSpan = document.getElementById('total-score');
const evaluationMessage = document.getElementById('evaluation-message');
const qualityChartCtx = document.getElementById('qualityChart').getContext('2d');
const environmentChartCtx = document.getElementById('environmentChart').getContext('2d'); // Contesto per il nuovo grafico
let qualityChart; // Variabile per tenere traccia del grafico generale Chart.js
let environmentChart; // Variabile per tenere traccia del grafico per ambiente Chart.js

// Colori vibranti e moderni per i grafici
const chartColors = {
    primary: 'rgba(102, 187, 106, 0.8)', // Verde brillante
    secondary: 'rgba(255, 159, 64, 0.8)', // Arancione caldo
    tertiary: 'rgba(75, 192, 192, 0.8)', // Azzurro acqua
    quaternary: 'rgba(153, 102, 255, 0.8)', // Viola
    quinary: 'rgba(255, 99, 132, 0.8)', // Rosso salmone
    border: 'rgba(255, 255, 255, 0.6)' // Bordo bianco semi-trasparente
};

// 2. Funzione per generare dinamicamente gli "Ambienti di Valore" e le domande nell'HTML
function generateQuestions() {
    questionsContainer.innerHTML = ''; // Pulisce il contenitore prima di rigenerare

    valueEnvironments.forEach(environment => {
        const environmentDiv = document.createElement('div');
        environmentDiv.classList.add('environment-group'); // Nuova classe CSS
        environmentDiv.innerHTML = `<h2>${environment.name}</h2>`; // Titolo per l'ambiente

        if (environment.questions.length === 0) {
            environmentDiv.innerHTML += `<p>Nessuna domanda ancora disponibile per questo ambiente.</p>`;
        } else {
            environment.questions.forEach(q => {
                const questionGroup = document.createElement('div');
                questionGroup.classList.add('question-group');

                const label = document.createElement('label');
                label.setAttribute('for', q.id);
                label.textContent = q.text;

                const select = document.createElement('select');
                select.setAttribute('id', q.id);
                select.setAttribute('name', q.id);
                select.required = true; // Rende il campo obbligatorio

                // Aggiungi un'opzione predefinita "Scegli..."
                const defaultOpt = document.createElement('option');
                defaultOpt.setAttribute('value', '');
                defaultOpt.textContent = 'Seleziona un valore...';
                defaultOpt.disabled = true; // Non selezionabile
                defaultOpt.selected = true; // Selezionata di default
                select.appendChild(defaultOpt);


                q.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.setAttribute('value', option.value);
                    opt.textContent = option.label;
                    select.appendChild(opt);
                });

                questionGroup.appendChild(label);
                questionGroup.appendChild(select);
                environmentDiv.appendChild(questionGroup);
            });
        }
        questionsContainer.appendChild(environmentDiv);
    });
}

// Funzione per validare che tutte le domande abbiano una risposta
function validateAnswers() {
    let allAnswered = true;
    valueEnvironments.forEach(environment => {
        environment.questions.forEach(q => {
            const selectElement = document.getElementById(q.id);
            // Controlla se l'elemento select esiste e se il suo valore non è l'opzione di default vuota
            if (selectElement && selectElement.value === '') {
                selectElement.style.borderColor = '#ff6b6b'; // Evidenzia il campo non compilato
                allAnswered = false;
            } else if (selectElement) {
                selectElement.style.borderColor = '#3a475a'; // Ripristina il bordo normale
            }
        });
    });

    if (!allAnswered) {
        alert('Per favore, rispondi a tutte le domande prima di calcolare il punteggio.');
    }
    return allAnswered;
}


// 3. Funzione per calcolare il punteggio totale e per ambiente
function calculateScore() {
    if (!validateAnswers()) { // Controlla prima se tutte le domande sono state risposte
        return; // Ferma la funzione se non tutte le domande sono state risposte
    }

    let totalScore = 0;
    let maxPossibleTotalScore = 0;
    const environmentScores = {}; // Oggetto per tenere traccia dei punteggi per ambiente

    valueEnvironments.forEach(environment => {
        let envCurrentScore = 0;
        let envMaxScore = 0;

        environment.questions.forEach(q => {
            const selectElement = document.getElementById(q.id);
            if (selectElement) {
                const selectedValue = parseInt(selectElement.value);
                envCurrentScore += selectedValue;
                totalScore += selectedValue;

                const maxOptionValue = Math.max(...q.options.map(option => option.value));
                envMaxScore += maxOptionValue;
                maxPossibleTotalScore += maxOptionValue;
            }
        });
        // Calcola il punteggio normalizzato per l'ambiente
        environmentScores[environment.name] = envMaxScore > 0 ? (envCurrentScore / envMaxScore) * 100 : 0;
    });

    const normalizedTotalScore = maxPossibleTotalScore > 0 ? (totalScore / maxPossibleTotalScore) * 100 : 0;

    totalScoreSpan.textContent = normalizedTotalScore.toFixed(0);
    updateEvaluationMessage(normalizedTotalScore);
    resultsSection.classList.remove('hidden'); // Mostra la sezione risultati
    calculateButton.classList.add('hidden'); // Nascondi il pulsante Calcola Punteggio
    resetButton.classList.remove('hidden'); // Mostra il pulsante Reset

    // Aggiorna entrambi i grafici
    createOrUpdateChart(normalizedTotalScore);
    createOrUpdateEnvironmentChart(environmentScores);

    // Scorri fino alla sezione dei risultati per comodità dell'utente
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 4. Funzione per aggiornare il messaggio di valutazione testuale (migliorata per responsività)
function updateEvaluationMessage(score) {
    let message = "";
    if (score >= 90) {
        message = "Eccellente! Il settore giovanile è un modello di riferimento.";
    } else if (score >= 70) {
        message = "Ottimo! Il settore giovanile è di alta qualità.";
    } else if (score >= 50) {
        message = "Soddisfacente. Il tuo settore giovanile e la tua società sono adatti alla presenza di bambini e ragazzi ma ci sono margini di miglioramento.";
    } else if (score >= 30) {
        message = "Mediocre. Il settore giovanile necessita di interventi  significativi. Presta attenzione nel lasciare tuo figlio in questo ambiente e valuta attentamente la scelta di un'altra società se non vedi miglioramenti.";
    } else {
        message = "Inadeguato. Il settore giovanile richiede un'attenzione urgente. L'ambiente di lavoro non è adatto alla presenza di bambini e ragazzi. Suggeriamo il cambio repentino di soceità, scegli in base alle domande alle quali hai risposto.";
    }
    evaluationMessage.textContent = message;
}

// 5. Funzione per creare o aggiornare il grafico del Punteggio Generale
function createOrUpdateChart(score) {
    const data = {
        labels: ['Qualità Settore Giovanile'],
        datasets: [{
            label: 'Punteggio',
            data: [score],
            backgroundColor: [
                score >= 90 ? chartColors.primary :
                    score >= 70 ? chartColors.tertiary :
                        score >= 50 ? chartColors.secondary :
                            score >= 30 ? chartColors.quinary :
                                'rgba(255, 99, 132, 0.8)' // Rosso più acceso per punteggi bassissimi
            ],
            borderColor: [
                score >= 90 ? chartColors.primary :
                    score >= 70 ? chartColors.tertiary :
                        score >= 50 ? chartColors.secondary :
                            score >= 30 ? chartColors.quinary :
                                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { // Animazione più fluida
            duration: 1500,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Linee della griglia più scure
                },
                ticks: {
                    color: '#e0e6ed', // Colore dei numeri sull'asse Y
                    callback: function(value) {
                        return value + '%'; // Aggiungi il simbolo di percentuale
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#e0e6ed' // Colore delle etichette sull'asse X
                }
            }
        },
        plugins: {
            legend: {
                display: false // Nascondi la legenda per questo grafico singolo
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '%';
                    }
                }
            }
        }
    };

    if (qualityChart) {
        qualityChart.destroy();
    }

    qualityChart = new Chart(qualityChartCtx, {
        type: 'bar',
        data: data,
        options: options
    });
}

// 6. Funzione per creare o aggiornare il grafico dei Punteggi per Ambiente
function createOrUpdateEnvironmentChart(scores) {
    const labels = Object.keys(scores);
    const dataValues = Object.values(scores);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Punteggio Ambiente',
            data: dataValues,
            backgroundColor: [
                chartColors.primary,
                chartColors.secondary,
                chartColors.tertiary,
                chartColors.quaternary,
                chartColors.quinary
            ],
            borderColor: chartColors.border,
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1500,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#e0e6ed',
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#e0e6ed'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Nascondi la legenda per questo grafico a barre
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed.y + '%';
                    }
                }
            }
        }
    };

    if (environmentChart) {
        environmentChart.destroy();
    }

    environmentChart = new Chart(environmentChartCtx, {
        type: 'bar', // Puoi cambiare a 'horizontalBar' se preferisci per più etichette
        data: data,
        options: options
    });
}

// 7. Funzione per resettare il questionario
function resetQuiz() {
    // Reimposta tutte le selezioni alla loro opzione di default
    valueEnvironments.forEach(environment => {
        environment.questions.forEach(q => {
            const selectElement = document.getElementById(q.id);
            if (selectElement) {
                selectElement.value = ''; // Imposta il valore vuoto per selezionare l'opzione di default
                selectElement.style.borderColor = '#3a475a'; // Ripristina il bordo
            }
        });
    });

    resultsSection.classList.add('hidden'); // Nascondi la sezione risultati
    calculateButton.classList.remove('hidden'); // Mostra il pulsante Calcola Punteggio
    resetButton.classList.add('hidden'); // Nascondi il pulsante Reset

    // Distruggi i grafici se esistono per pulire la memoria
    if (qualityChart) {
        qualityChart.destroy();
        qualityChart = null;
    }
    if (environmentChart) {
        environmentChart.destroy();
        environmentChart = null;
    }

    // Riporta la vista all'inizio del questionario
    questionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// 8. Esegui la generazione delle domande quando la pagina è completamente caricata
document.addEventListener('DOMContentLoaded', () => {
    generateQuestions();
    calculateButton.addEventListener('click', calculateScore);
    resetButton.addEventListener('click', resetQuiz); // Aggiungi l'event listener per il reset
});