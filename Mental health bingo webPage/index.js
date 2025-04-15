// let mockedOptions;
// let language = 'pl';

// function getOptions() {
//     // request to backend resulting list of options
//     // mockedOptions = fetch(
//     //     'https://health-bingo/api/v1/options?lang=pl',
//     // ).then(data => {
//     //     mockedOptions = data
//     // })
//     mockedOptions = {
//        'jumping-jacks': {
//             'pl': 'Pajacyki',
//             'en': 'Jumping Jacks',
//        },
//        'meditation': {
//             'pl': 'Medytacja',
//             'en': 'Meditation',
//        },
//     };
// }

// getOptions();
// createOptionCheckboxes();

// function createOptionCheckboxes() {
//     if (typeof mockedOptions !== 'object') {
//         console.log('xd');
//         return;
//     } 

//     let optionsDiv = document.querySelector("#options");

//     console.log(mockedOptions);
//     for (const [key, value] of Object.entries(mockedOptions)) {
//         let newCheckbox = document.createElement("input");
//         newCheckbox.type = "checkbox";
//         newCheckbox.name = `checkbox-${key}`;
//         newCheckbox.id = newCheckbox.name;

//         let newCheckboxLabel = document.createElement("label");
//         newCheckboxLabel.htmlFor = newCheckbox.id;
//         newCheckboxLabel.appendChild(document.createTextNode(value[language]));

//         optionsDiv.appendChild(newCheckbox);
//         optionsDiv.appendChild(newCheckboxLabel);
//     }
// }

// let bingoTasks = {
//    'jumping-jacks': {
//         'pl': 'Pajacyki',
//         'en': 'Jumping Jacks',
//         'quantity': '20',
//         'unit': 'reps',
//    },
//    'meditation': {
//         'pl': 'Medytacja',
//         'en': 'Meditation',
//         'quantity': '3',
//         'unit': 'minutes',
//    },
//     'water-intake': {
//         'pl': 'Woda',
//         'en': 'Water',
//         'quantity': '1',
//         'unit': 'glass',
//     },
//     'meal': {
//         'pl': 'Pożywny posiłek',
//         'en': 'Healthy meal',
//         'quantity': '1',
//         'unit': '',
//     },
//     'plank': {
//         'pl': 'Deska',
//         'en': 'Plank',
//         'quantity': '1',
//         'unit': 'minute',
//     },
//     'breathing-exercise': {
//         'pl': 'Ćwiczenia oddechu',
//         'en': 'Breathing exercise',
//         'quantity': '5',
//         'unit': 'minutes',
//     },
//     'shaking-dance': {
//         'pl': 'Taniec/shaking żeby uwolnić emocje',
//         'en': 'Dancing/shaking to realse emotions',
//         'quantity': '4',
//         'unit': 'minutes',
//     },
//     'tell-kind': {
//         'pl': 'Powiedz do siebie coś z wyrozumiałością',
//         'en': 'Tell yourself something with kindness and indulgence',
//         'quantity': '',
//         'unit': '',
//     },
//     'sun-air': {
//         'pl': 'Wystaw się na słońce (i świeże powietrze jeśli możesz)',
//         'en': 'catch sun (and posibly fresh air)',
//         'quantity': '5',
//         'unit': 'minutes',
//     },
//     'streching': {
//         'pl': 'Rozciąganie',
//         'en': 'Streching',
//         'quantity': '5',
//         'unit': 'minutes',
//     },
//     'grateful': {
//         'pl': 'napisz za co jesteś wdzięczny (poczuj to)',
//         'en': 'write down what are you gretful for (feel it)',
//         'quantity': '2',
//         'unit': 'things',
//     },
//     'ligth-a-candle': {
//         'pl': 'Zapal świecę zapachową, albo użyj olejków wterycznych',
//         'en': 'Light a scented candle or use essential oils',
//         'quantity': '',
//         'unit': '',
//     },
//     'walk': {
//         'pl': 'Spacer na dworze',
//         'en': 'Walk outside',
//         'quantity': '10',
//         'unit': 'minutes',
//     },
//     'deep-breaths': {
//         'pl': 'Weź głebokie oddechy',
//         'en': 'Take deep breaths',
//         'quantity': '10',
//         'unit': 'times',
//     },
//     'friends': {
//         'pl': 'Wyślij wiadomość do przyjaciela',
//         'en': 'Send a message to a friend',
//         'quantity': '',
//         'unit': '',
//     },
//     'nature-looking': {
//         'pl': 'Spójrz na naturę',
//         'en': 'Look at nature',
//         'quantity': '5',
//         'unit': 'minutes',
//     },
// };

let bingoTasks = [
    "Do 20 jumping jacksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "Meditate for 3 minutes",
    "Drink a glass of water",
    "Eat a healthy meal",
    "Hold a plank for 1 minute",
    "Do 5 minutes of breathing exercises",
    "Dance or shake for 4 minutes to release emotions",
    "Say something kind to yourself",
    "Sit in the sun and enjoy fresh air for 5 minutes",
    "Stretch for 5 minutes",
    "Write down 2 things you're grateful for",
    "Light a scented candle or use essential oils",
    "Take a 10-minute walk outside",
    "Take 10 deep breaths",
    "Send a message to a friend",
    "Look at nature for 5 minutes",
    "Smile at yourself in the mirror",
    "Listen to your favorite song",
    "Draw or doodle for 5 minutes",
    "Write down a positive affirmation",
    "Do a quick clean-up of your space (5 minutes)",
    "Give yourself a compliment",
    "Try a new yoga pose",
    "Think about 3 things that went well today",
];

const bingoTable = document.getElementById("bingo");

function makeCellEditable(cell) {
    const span = cell.querySelector("span");
    const originalText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;

    span.textContent="";
    span.appendChild(input);

    input.focus();

    input.addEventListener("blur", () => finishEditing(span, input));
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") finishEditing(span,input);
    });
};

function finishEditing(span, input) {
    const newValue = input.value;
    span.textContent = newValue;
};

bingoTable.addEventListener("click", (event) =>{
    const target = event.target;

    if (target.classList.contains("bingo-window")) {
        makeCellEditable(target);
        
        // mockedOptions.forEach((option) => {
        //     console.log(document.querySelector(`#${option}`).checked);
        // });
    }
});

function randomBingoGenerate() {

    let bingoElements = document.querySelectorAll(".bingo-window > span");

    bingoElements.forEach((span) =>{
        let randomTextIndex = Math.floor(Math.random() * bingoTasks.length);
        // console.log(randomTextIndex);
        span.textContent = bingoTasks[randomTextIndex];
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const buttonGenerator = document.getElementById("generateBingoButton");
    buttonGenerator.addEventListener("click", randomBingoGenerate);
});


// window.onload = function() {
//     const element = document.getElementById('PDF');
//     const options = {
//       margin: 1,
//       filename: 'my-document.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

document.querySelectorAll('.collapsible').forEach((button, index) => {
    button.addEventListener('click', function () {
        const options = document.getElementsByClassName('collapsed')[index];
        if (options.style.display === 'none' || options.style.display === '') {
            options.style.display = 'block';
        } else {
            options.style.display = 'none';
        }
    });
});


// document.getElementById('downloadPDF').addEventListener('click', function () {
    
//     const { jsPDF } = window.jspdf; // Pobierz klasę jsPDF
//     const doc = new jsPDF();

//     // Znajdź element o klasie 'content'
//     const content = document.querySelector('.content');

//     // Przekonwertuj HTML na PDF
//     doc.html(content, {
//         callback: function (doc) {
//             doc.save('content.pdf'); // Pobierz plik
//         },
//         x: 10, // Margines X w PDF
//         y: 10, // Margines Y w PDF
//     });
// });

  document.getElementById("downloadPDF").addEventListener("click", async () => {
    const element = document.getElementById("bingo");

    // Use html2canvas to capture the element as an image
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better resolution
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate aspect ratio and scale image to fit one page
    const imgProps = {
      width: canvas.width,
      height: canvas.height
    };
    const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
    const imgWidth = imgProps.width * ratio;
    const imgHeight = imgProps.height * ratio;

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save("section.pdf");
  });



  