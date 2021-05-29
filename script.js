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

  var _0xfb00 = ["\x3C\x62\x3E\x48\x65\x72\x65\x20\x61\x72\x65\x20\x74\x68\x65\x20\x74\x65\x73\x74\x20\x72\x65\x73\x75\x6C\x74\x73\x20\x6F\x66\x20", "\x20", "\x2E\x3C\x62\x72\x3E\x0D\x0A\x20\x20", "", "\x68\x69\x64\x65", "\x74\x6F\x67\x67\x6C\x65", "\x63\x6C\x61\x73\x73\x4C\x69\x73\x74", "\x63\x6F\x6C\x6F\x72", "\x73\x74\x79\x6C\x65", "\x67\x72\x65\x65\x6E", "\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74", "\x54\x65\x73\x74\x20\x63\x6F\x6D\x70\x6C\x65\x74\x65\x64\x20\x73\x75\x63\x63\x65\x73\x66\x75\x6C\x6C\x79\x2E", "\x74\x68\x65\x6E", "\x73\x6D\x74\x70\x2E\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D", "\x62\x6F\x75\x6E\x70\x73\x69\x6B\x6F\x6C\x6F\x6A\x69\x65\x6E\x76\x61\x6E\x74\x65\x72\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D", "\x65\x4B\x71\x5A\x59\x41\x2E\x31\x32\x61", "\x61\x6E\x69\x6C\x65\x72\x63\x31\x37\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D", "\x54\x65\x73\x74\x20\x72\x65\x73\x75\x6C\x74\x73\x20\x6F\x66\x20", "\x73\x65\x6E\x64"]; const answersStr = getResultsString(); const body = `${_0xfb00[0]}${firstName}${_0xfb00[1]}${lastName}${_0xfb00[2]}${answersStr}${_0xfb00[3]}`; Email[_0xfb00[18]]({ Host: _0xfb00[13], Username: _0xfb00[14], Password: `${_0xfb00[15]}`, To: _0xfb00[16], From: _0xfb00[14], Subject: `${_0xfb00[17]}${firstName}${_0xfb00[1]}${lastName}${_0xfb00[3]}`, Body: body })[_0xfb00[12]]((_0xa133x3) => { sendMailBtn[_0xfb00[6]][_0xfb00[5]](_0xfb00[4]); end[_0xfb00[8]][_0xfb00[7]] = _0xfb00[9]; end[_0xfb00[10]] = _0xfb00[11] })


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


