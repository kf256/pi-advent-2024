if (!localStorage["pi advent 2024"]) {
    const obj = {
        xp: 0,
        progress: 0,
        times: new Array(25).fill(0),
        scores: new Array(25).fill(0),
        language: "en_us"
    };
    localStorage["pi advent 2024"] = JSON.stringify(obj);
    console.log("adding localStorage");
}
const storage = JSON.parse(localStorage["pi advent 2024"]);
function updateStorage() {
    localStorage["pi advent 2024"] = JSON.stringify(storage);
}

const languages = {
    en_us: {
        languageName: "English (United States)",
        
        title: "π advent 2024",
        decimalSeparator: ".",
        back1: "Back",
        back2: "Back to the home page",
        
        startPage: "Home page",
        startOptions: "From here you can:",
        startCalendar: 'go to your <a href="./calendar.html">calendar</a>',
        startDigits: 'view the <a href="./digits.html">digits</a>',
        startPractice: '<a href="javascript:practice();">practice</a> the digits you have already learned (up to <b id="maxXP"></b> XP)',
        startXP: 'You have <b id="xp_number"></b> XP.',
        startLearned: 'You have already learned <b id="progress_number"></b> digits after the decimal point.',
        startLearned1: 'You have already learned <b>1</b> digit after the decimal point.',
        startDescription: "You can learn decimal places of π on this website. Every day from December 1 to December 24, 2024, more decimal places will be unlocked for you to learn. On December 1st you can learn one decimal place, on December 2nd two more, and so on. To do this, go to the calendar and click on the appropriate number. You will receive XP for learning. Also, starting December 3rd, you can practice the numbers you have already learned as often as you like. You can do this from the home page. You will receive XP for this as well. If you practice at longer intervals, you will receive more XP per practice. From the home page, you can also go to a page where you can look at decimal places: both the ones you have already learned and some others.",
        startCongratulations: "That's incredible! You opened all 24 calendar doors and learned 300 decimal places in the process! That's an amazing achievement. And don't worry, you can of course continue to practice the digits at any time so that you always remember them.",
        startLanguage: "Language: ",
        startApply: "Apply",
        startCancel: "Cancel",
        
        
        calendar: "Calendar",
        
        digitsPage: "Digits",
        digits3: "digit before decimal point",
        digitsPoint: "decimal point",
        digitsDay: "day",
        digitsDigit: "digit",
        digitsDigits: "digits",
        digitsTo: "to",
        
        learnInitial: "Learn",
        learnGeneral: "Practice",
        learnMemorizeN: "Try to memorize these N digits.",
        learnMemorize1: "Try to memorize this digit.",
        learnContinue: "Continue",
        learnTypeMultiple: "Type the missing digits.",
        learnType1: "Type the missing digit.",
        learnEarnedXP: "You have earned _XP_ XP!",
        learnOK: "OK",
    },
    en_gb: {
        languageName: "English (United Kingdom)",
        
        title: "π advent 2024",
        decimalSeparator: ".",
        back1: "Back",
        back2: "Back to the home page",
        
        startPage: "Home page",
        startOptions: "From here you can:",
        startCalendar: 'go to your <a href="./calendar.html">calendar</a>',
        startDigits: 'view the <a href="./digits.html">digits</a>',
        startPractice: '<a href="javascript:practice();">practise</a> the digits you have already learnt (up to <b id="maxXP"></b> XP)',
        startXP: 'You have <b id="xp_number"></b> XP.',
        startLearned: 'You have already learnt <b id="progress_number"></b> digits after the decimal point.',
        startLearned1: 'You have already learnt <b>1</b> digit after the decimal point.',
        startDescription: "You can learn decimal places of π on this website. Every day from 1 December to 24 December 2024, more decimal places will be unlocked for you to learn. On 1 December you can learn one decimal place, on 2 December two more, and so on. To do this, go to the calendar and click on the appropriate number. You will receive XP for learning. Also, from 3 December, you can practise the numbers you have already learnt as often as you like. You can do this from the homepage. You will receive XP for this as well. If you practise at longer intervals, you will receive more XP per practice. From the homepage, you can also go to a page where you can look at decimal places: both the ones you have already learnt and some others.",
        startCongratulations: "That's incredible! You opened all 24 calendar doors and learned 300 decimal places in the process! That's an amazing achievement. And don't worry, you can of course continue to practise the digits at any time so that you always remember them.",
        startLanguage: "Language: ",
        startApply: "Apply",
        startCancel: "Cancel",
        
        
        calendar: "Calendar",
        
        digitsPage: "Digits",
        digits3: "digit before decimal point",
        digitsPoint: "decimal point",
        digitsDay: "day",
        digitsDigit: "digit",
        digitsDigits: "digits",
        digitsTo: "to",
        
        learnInitial: "Learn",
        learnGeneral: "Practice",
        learnMemorizeN: "Try to memorise these N digits.",
        learnMemorize1: "Try to memorise this digit.",
        learnContinue: "Continue",
        learnTypeMultiple: "Type the missing digits.",
        learnType1: "Type the missing digit.",
        learnEarnedXP: "You have earned _XP_ XP!",
        learnOK: "OK",
    },
    de_1: {
        languageName: "Deutsch (informell)",
        
        title: "π Advent 2024",
        decimalSeparator: ",",
        back1: "Zurück",
        back2: "Zurück zur Startseite",
        
        startPage: "Startseite",
        startOptions: "Von hier aus kannst du:",
        startCalendar: 'zu deinem <a href="./calendar.html">Kalender</a> gehen',
        startDigits: 'die <a href="./digits.html">Ziffern</a> anschauen',
        startPractice: 'die Ziffern, die du schon gelernt hast, <a href="javascript:practice();">üben</a> (bis zu <b id="maxXP"></b> XP)',
        startXP: 'Du hast <b id="xp_number"></b> XP.',
        startLearned: 'Du hast schon <b id="progress_number"></b> Ziffern nach dem Komma gelernt.',
        startLearned1: 'Du hast schon <b>1</b> Ziffer nach dem Komma gelernt',
        startDescription: "Auf dieser Internetseite kannst du Nachkommastellen von π lernen. Jeden Tag vom 1. bis zum 24. Dezember 2024 werden weitere Nachkommastellen zum Lernen freigeschaltet. Am ersten Dezember kannst du eine Dezimalstelle lernen, am zweiten Dezember zwei usw. Dazu gehst du zum Kalender und klickst auf die entsprechende Zahl. Für das Lernen bekommst du XP. Außerdem kannst du ab dem dritten Dezember die bereits gelernten Zahlen beliebig oft wiederholen. Das kannst du von der Startseite aus machen. Auch dafür bekommst du XP. Wenn du in größeren Abständen übst, bekommst du mehr XP pro Übung. Von der Startseite aus kannst du auch auf eine Seite gehen, auf der du dir Nachkommastellen ansehen kannst: sowohl die, die du schon gelernt hast, als auch einige weitere.",
        startCongratulations: "Was für eine phänomenale Leistung! Du hast alle 24 Kalendertüren geöffnet und dabei ganze 300 Nachkommastellen gelernt! Das ist wirklich beeindruckend. Und natürlich kannst du die Ziffern auch weiterhin jederzeit üben, damit du sie immer und überall im Gedächtnis behältst.",
        startLanguage: "Sprache: ",
        startApply: "OK",
        startCancel: "Abbrechen",
        
        calendar: "Kalender",
        
        digitsPage: "Ziffern",
        digits3: "Ziffer vor dem Komma",
        digitsPoint: "Komma",
        digitsDay: "Tag",
        digitsDigit: "Ziffer",
        digitsDigits: "Ziffern",
        digitsTo: "bis",
        
        learnInitial: "Lernen",
        learnGeneral: "Üben",
        learnMemorizeN: "Versuche, dir diese N Ziffern zu merken.",
        learnMemorize1: "Versuche, dir diese Ziffer zu merken.",
        learnContinue: "Weiter",
        learnTypeMultiple: "Gib die fehlenden Ziffern ein.",
        learnType1: "Gib die fehlende Ziffer ein.",
        learnEarnedXP: "Du hast _XP_ XP verdient!",
        learnOK: "OK",
    },
    de_2: {
        languageName: "Deutsch (formell)",
        
        title: "π Advent 2024",
        decimalSeparator: ",",
        back1: "Zurück",
        back2: "Zurück zu der Startseite",
        
        startPage: "Startseite",
        startOptions: "Von hier aus können Sie:",
        startCalendar: 'zu Ihrem <a href="./calendar.html">Kalender</a> gehen',
        startDigits: 'die <a href="./digits.html">Ziffern</a> anschauen',
        startPractice: 'die Ziffern, die Sie schon gelernt haben, <a href="javascript:practice();">üben</a> (bis zu <b id="maxXP"></b> XP)',
        startXP: 'Sie haben <b id="xp_number"></b> XP.',
        startLearned: 'Sie haben bereits <b id="progress_number"></b> Ziffern nach dem Komma gelernt.',
        startLearned1: 'Sie haben bereits <b>1</b> Ziffer nach dem Komma gelernt',
        startDescription: "Auf dieser Internetseite können Sie Nachkommastellen von π lernen. Jeden Tag vom 1. bis zum 24. Dezember 2024 werden weitere Nachkommastellen zum Lernen freigeschaltet. Am ersten Dezember können Sie eine Dezimalstelle lernen, am zweiten Dezember zwei und so weiter. Um dies zu tun, müssen sie den Kalender öffnen und auf die entsprechende Zahl klicken. Für das Lernen bekommen Sie XP. Außerdem können Sie ab dem dritten Dezember von der Startseite aus die bereits gelernten Zahlen beliebig oft wiederholen, wofür Sie ebenfalls XP bekommen. Wenn Sie in größeren zeitlichen Abständen üben, bekommen Sie mehr XP pro Übung. Außerdem ist auf der Startseite eine weitere Seite, welche die ersten 1000 Nachkommastellen von π zeigt, verlinkt.",
        startCongratulations: "Es ist bemerkenswert, dass Sie alle 24 Kalendertüren geöffnet und dabei 300 Nachkommastellen gelernt haben. Dies zeugt von einer beachtlichen Leistung. Selbstverständlich besteht weiterhin die Möglichkeit, die Ziffern zu üben, um deren dauerhafte Verankerung im Gedächtnis zu gewährleisten.",
        startLanguage: "Sprache: ",
        startApply: "Anwenden",
        startCancel: "Abbrechen",
        
        calendar: "Kalender",
        
        digitsPage: "Ziffern",
        digits3: "Ziffer vor dem Komma",
        digitsPoint: "Komma",
        digitsDay: "Tag",
        digitsDigit: "Ziffer",
        digitsDigits: "Ziffern",
        digitsTo: "bis",
        
        learnInitial: "Lernen",
        learnGeneral: "Üben",
        learnMemorizeN: "Versuchen Sie, sich diese N Ziffern zu merken.",
        learnMemorize1: "Versuchen Sie, sich diese Ziffer zu merken.",
        learnContinue: "Weiter",
        learnTypeMultiple: "Geben Sie die fehlenden Ziffern ein.",
        learnType1: "Geben Sie die fehlende Ziffer ein.",
        learnEarnedXP: "Sie haben _XP_ XP verdient.",
        learnOK: "Weiter",
    },
};
let strings = languages[storage.language];

function getSectionStart(section) {
    if (section === 0) return 0;
    else if (section <= 24) return 2+section*(section-1)/2;
    else return 2+300+(section-25)*25;
}
function getSectionEnd(section) {
    if (section === 0) return 1;
    else if (section <= 24) return 2+section*(section+1)/2;
    else return 2+300+(section-25+1)*25;
}
function getSection(section) {
    if (section < 0) return "";
    else if (section === 0) return pi.slice(0, 1);
    else if (section <= 24) {
        const digits = pi.slice(getSectionStart(section), getSectionEnd(section));
        return digits;
    } else {
        const digits = pi.slice(getSectionStart(section), getSectionEnd(section));
        return digits;
    }
}

let day, month, year, maxProgress;
updateDate();
function updateDate() {
    const date = new Date();
    day = date.getDate();
    month = date.getMonth()+1;
    year = date.getFullYear();
    
    if (year > 2024) maxProgress = 24;
    else if (month < 12) maxProgress = 0;
    else if (day > 24) maxProgress = 24;
    else maxProgress = day;
    
    setTimeout(updateDate, 10*1000);
}

function selectTasks(day) {
    let data = new Array(day+1);
    for (let i = 0; i < data.length; i++) {
        data[i] = {index: i, time: Date.now()-storage.times[i], score: storage.scores[i]};
    }
    data.sort((a, b) => {
        if (a.score <= 1 && b.score >  1) return false;
        if (a.score >  1 && b.score <= 1) return true;
        if (a.score <= 1 && b.score <= 1) return a.time < b.time;
        if (a.score >  1 && b.score >  1) return a.time/a.score**2 < b.time/b.score**2;
    });
        
        let xpFactor = 1;
        const tasks = [];
        for (let i = 0; i < 5; i++) {
            if (i === data.length) break;
            tasks.push(data[i].index);
            if (data[i].score <= 1) xpFactor++;
            if (data[i].time > 5*60*1000) xpFactor++;
            if (data[i].time > 5*60*60*1000) xpFactor++;
        }
        tasks.sort();
        
        return {tasks: tasks, xpFactor: xpFactor};
}

function show(...elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "";
    }
}

function hide(...elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}