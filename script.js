const submitButton = document.querySelector("#submitBtn");
const finishButton = document.querySelector(".finishBtn");
const firstNameBox = document.querySelector("#fname");
const lastNameBox = document.querySelector("#lname");
const wrapper = document.querySelector(".wrapper");
const mainUl = document.querySelector(".mainUl");
const nextBtn = document.querySelector(".nextBtn");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");
const previousButton = document.querySelector(".previous");
const end = document.querySelector(".end")
const sendMailBtn = document.querySelector("#sendMailBtn");


let firstName;
let lastName;

let totalScore = 0;
let questionCounter = 0;
const questions = [
  {
    choice1: "Kendimi üzüntülü ve sıkıntılı hissetmiyorum",
    choice2: "Kendimi üzüntülü ve sıkıntılı hissediyorum.",
    choice3: "Hep üzüntülü ve sıkıntılıyım. Bundan kurtulamıyorum.",
    choice4: "O kadar üzüntülü ve sıkıntılıyım ki artık dayanamıyorum."
  },
  {
    choice1: "Gelecek hakkında mutsuz ve karamsar değilim.",
    choice2: "Gelecek hakkında karamsarım.",
    choice3: "Gelecekten beklediğim hiçbir şey yok.",
    choice4: "Geleceğim hakkında umutsuzum ve sanki hiçbir şey düzelmeyecekmiş gibi geliyor."
    ,
  },
  {
    choice1: "Kendimi başarısız bir insan olarak görmüyorum.",
    choice2: "Çevremdeki birçok kişiden daha çok başarısızlıklarım olmuş gibi hissediyorum",
    choice3: "Geçmişe baktığımda başarısızlıklarla dolu olduğunu görüyorum.",
    choice4: "Kendimi tümüyle başarısız biri olarak görüyorum."
  },
  {
    choice1: "Birçok şeyden eskisi kadar zevk alıyorum.",
    choice2: "Eskiden olduğu gibi her şeyden hoşlanmıyorum",
    choice3: "Artık hiçbir şey bana tam anlamıyla zevk vermiyor.",
    choice4: "Her şeyden sıkılıyorum."
  },
  {
    choice1: "Kendimi herhangi bir şekilde suçlu hissetmiyorum.",
    choice2: "Kendimi zaman zaman suçlu hissediyorum.",
    choice3: "Çoğu zaman kendimi suçlu hissediyorum.",
    choice4: "Kendimi her zaman suçlu hissediyorum."
  },
  {
    choice1: "Bana cezalandırılmışım gibi geliyor.",
    choice2: "Cezalandırılabileceğimi hissediyorum.",
    choice3: "Cezalandırılmayı bekliyorum.",
    choice4: "Cezalandırıldığımı hissediyorum."
  },
  {
    choice1: "Kendimden memnunum.",
    choice2: "Kendi kendimden pek memnun değilim.",
    choice3: "Kendime çok kızıyorum.",
    choice4: "Kendimden nefret ediyorum."
  }, {
    choice1: "Başkalarından daha kötü olduğumu sanmıyorum",
    choice2: "Zayıf yanların veya hatalarım için kendi kendimi eleştiririm.",
    choice3: "Hatalarımdan dolayı ve her zaman kendimi kabahatli bulurum.",
    choice4: "Her aksilik karşısında kendimi hatalı bulurum."
  }, {
    choice1: "Kendimi öldürmek gibi düşüncelerim yok.",
    choice2: "Zaman zaman kendimi öldürmeyi düşündüğüm olur. Fakat yapmıyorum.",
    choice3: "Kendimi öldürmek isterdim.",
    choice4: "Fırsatını bulsam kendimi öldürürdüm."
  }, {
    choice1: "Her zamankinden fazla içimden ağlamak gelmiyor.",
    choice2: " Zaman zaman içinden ağlamak geliyor.",
    choice3: "Çoğu zaman ağlıyorum.",
    choice4: "Eskiden ağlayabilirdim şimdi istesem de ağlayamıyorum."
  }, {
    choice1: "Şimdi her zaman olduğumdan daha sinirli değilim.",
    choice2: "Eskisine kıyasla daha kolay kızıyor ya da sinirleniyorum.",
    choice3: " Şimdi hep sinirliyim.",
    choice4: "Bir zamanlar beni sinirlendiren şeyler şimdi hiç sinirlendirmiyor."
  }, {
    choice1: "Başkaları ile görüşmek, konuşmak isteğimi kaybetmedim.",
    choice2: "Başkaları ile eskiden daha az konuşmak, görüşmek istiyorum.",
    choice3: "Başkaları ile konuşma ve görüşme isteğimi kaybetmedim.",
    choice4: "Hiç kimseyle konuşmak görüşmek istemiyorum."
  }, {
    choice1: "Eskiden olduğu gibi kolay karar verebiliyorum.",
    choice2: "Eskiden olduğu kadar kolay karar veremiyorum.",
    choice3: "Karar verirken eskisine kıyasla çok güçlük çekiyorum.",
    choice4: "Artık hiç karar veremiyorum."
  }, {
    choice1: "Aynada kendime baktığımda değişiklik görmüyorum.",
    choice2: "Daha yaşlanmış ve çirkinleşmişim gibi geliyor.",
    choice3: "Görünüşümün çok değiştiğini ve çirkinleştiğimi hissediyorum.",
    choice4: "Kendimi çok çirkin buluyorum."
  }, {
    choice1: "Eskisi kadar iyi çalışabiliyorum.",
    choice2: "Bir şeyler yapabilmek için gayret göstermem gerekiyor.",
    choice3: "Herhangi bir şeyi yapabilmek için kendimi çok zorlamam gerekiyor.",
    choice4: "Hiçbir şey yapamıyorum."
  }, {
    choice1: "Her zamanki gibi iyi uyuyabiliyorum.",
    choice2: "Eskiden olduğu gibi iyi uyuyamıyorum.",
    choice3: "Her zamankinden 1-2 saat daha erken uyanıyorum ve tekrar uyuyamıyorum.",
    choice4: "Her zamankinden çok daha erken uyanıyor ve tekrar uyuyamıyorum."
  },
  {
    choice1: "Her zamankinden daha çabuk yorulmuyorum.",
    choice2: " Her zamankinden daha çabuk yoruluyorum.",
    choice3: "Yaptığım her şey beni yoruyor.",
    choice4: "Kendimi hemen hiçbir şey yapamayacak kadar yorgun hissediyorum."
  }, {
    choice1: "İştahım her zamanki gibi.",
    choice2: "İştahım her zamanki kadar iyi değil.",
    choice3: "İştahım çok azaldı.",
    choice4: "Artık hiç iştahım yok."
  }, {
    choice1: "Son zamanlarda kilo vermedim.",
    choice2: "İki kilodan fazla kilo verdim.",
    choice3: "Dört kilodan fazla kilo verdim.",
    choice4: "Altı kilodan fazla kilo vermeye çalışıyorum."
  }, {
    choice1: "Sağlığım beni fazla endişelendirmiyor.",
    choice2: "Ağrı, sancı, mide bozukluğu veya kabızlık gibi rahatsızlıklar beni endişelendirmiyor.",
    choice3: "Sağlığım beni endişelendirdiği için başka şeyleri düşünmek zorlaşıyor.",
    choice4: "Sağlığım hakkında o kadar endişeliyim ki başka hiçbir şey düşünemiyorum."
  }, {
    choice1: "Son zamanlarda cinsel konulara olan ilgimde bir değişme fark etmedim.",
    choice2: "Cinsel konularla eskisinden daha az ilgiliyim.",
    choice3: "Cinsel konularla şimdi çok daha az ilgiliyim.",
    choice4: "Cinsel konular olan ilgimi tamamen kaybettim."
  },]

let answers = [];


submitButton.addEventListener("click", e => {

  e.preventDefault();

  if (firstNameBox.value && lastNameBox.value) {
    firstName = firstNameBox.value;
    lastName = lastNameBox.value;
  } else {
    return false;
  }

  wrapper.classList.toggle("hide");
  mainUl.classList.toggle("hide");

  updateQuestions(0);

  mainUl.style.display = "flex";



})


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const choicesList = Array.from(document.getElementsByClassName("choices"));

choicesList.forEach(choice => {

  choice.addEventListener("click", e => {

    if (questionCounter != questions.length) {

      choice.style.backgroundColor = "green";
      choice.style.color = "white";

      sleep(500).then(() => {
        choice.style.backgroundColor = "";
        choice.style.color = "";
        proceed(choice);
        previousButton.classList.remove("hide");
      })
    } else {
      proceed(choice);
      finishTest();
    }
  });

});



const updateQuestions = (objectIndex) => {
  question1.textContent = questions[objectIndex].choice1;
  question2.textContent = questions[objectIndex].choice2;
  question3.textContent = questions[objectIndex].choice3;
  question4.textContent = questions[objectIndex].choice4;
  questionCounter++;
}



const proceed = (choice) => {

  if (choice.classList.contains("0")) {
    answers.push(0);
    totalScore += 0;
  } else if (choice.classList.contains("1")) {
    answers.push(1);
    totalScore += 1;
  } else if (choice.classList.contains("2")) {
    answers.push(2);
    totalScore += 2;
  } else {
    answers.push(3);
    totalScore += 3;
  }

  if (questionCounter != questions.length) {
    updateQuestions(questionCounter);
  }
}




const finishTest = () => {
  mainUl.style.display = "none";
  previousButton.classList.remove("hide");
  end.classList.toggle("hide");
  sendMailBtn.classList.toggle("hide");
  console.log("Answers: " + answers);
  console.log("Total score: " + totalScore);
}


previousButton.addEventListener("click", e => {

  if (questionCounter == 2) {
    previousButton.classList.add("hide");
  }


  totalScore -= answers.pop();
  questionCounter -= 2;
  updateQuestions(questionCounter);

})


function sendEmail() {

  const D = ['eKqZYA.12a', '.<br>\x0a\x20\x20', 'ted\x20succesf', '312158lsuYTL', '381116WvlbIq', '198914IjXUew', 'esults\x20of\x20', 'bounpsikolo', '\x20the\x20test\x20r', '680722fmVrcW', 'toggle', 'anilerc17@g', 'gmail.com', '750977oCrBmh', 'color', 'jienvanter@', 'hide', 'smtp.gmail.', 'send', 'classList', '<b>Here\x20are', 'Test\x20comple', 'textContent', 'mail.com', '10145NcKeVj', 'ully.', 'Test\x20result', 'green', '1417936gDNuaO', 'style', 'then', 's\x20of\x20', 'com']; const m = V; const s = V; const B = V; const O = V; const X = V; const d = V; const F = V; const E = V; const q = V; const R = V; const z = V; const p = V; const b = V; const K = V; const u = V; const T = V; const Q = V; function V(P, J) { P = P - (0x12b5 * -0x1 + -0x224a + 0x36de); let e = D[P]; return e; } const h = V; const a = V; (function (C, f) { const N = V; const S = V; const G = V; const g = V; const r = V; const Y = V; const o = V; while (!![]) { try { const c = parseInt(N(0x1f8)) + parseInt(N(0x1f7)) + -parseInt(G(0x1eb)) + -parseInt(g(0x1f9)) + parseInt(G(0x1e0)) + parseInt(N(0x1fd)) + -parseInt(G(0x1ef)); if (c === f) { break; } else { C['push'](C['shift']()); } } catch (i) { C['push'](C['shift']()); } } }(D, -0x2 * 0x5c2f8 + -0xbe9f6 + 0x1f0920)); const v = getResultsString(); const l = m(0x1e7) + m(0x1fc) + s(0x1fa) + firstName + '\x20' + lastName + B(0x1f5) + v; const M = {}; M['P'] = s(0x1e4) + m(0x1f3); M['J'] = s(0x1fb) + X(0x1e2) + E(0x1df); M['e'] = q(0x1f4); M['t'] = X(0x1ff) + E(0x1ea); M['x'] = O(0x1fb) + E(0x1e2) + d(0x1df); M['W'] = E(0x1ed) + X(0x1f2) + firstName + '\x20' + lastName; M['Z'] = l; Email[m(0x1e5)](M)[O(0x1f1)](f => { const k = q; const w = X; const L = E; const H = m; const n = p; const A = q; const D0 = u; const D1 = q; const D2 = Q; const D3 = Q; const c = {}; c['I'] = k(0x1e3); c['j'] = k(0x1ee); c['y'] = w(0x1e8) + H(0x1f6) + H(0x1ec); const i = c; sendMailBtn[L(0x1e6)][n(0x1fe)](i['I']); end[L(0x1f0)][H(0x1e1)] = i['j']; end[H(0x1e9)] = i['y']; });


}


const getResultsString = () => {

  let finalStr = "";

  let index = 1;
  for (answer of answers) {
    finalStr += `Question #${index}: ${answer}<br>`
    index++;
  }

  finalStr += `Total score is ${totalScore}.`

  return finalStr;


}


