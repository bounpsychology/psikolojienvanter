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


const choicesList = Array.from(document.getElementsByClassName("choices"));

choicesList.forEach(choice => {

  choice.addEventListener("click", e => {

    if (questionCounter != questions.length) {
      proceed(choice);
      previousButton.classList.remove("hide");
    } else {
      proceed(choice);
      finishTest();
    }
  });

});



const updateQuestions = (objectIndex) => {

  question1.style.backgroundColor = "white";
  question1.style.color = "black";
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

  const answersStr = getResultsString();
  const body = `<b>Here are the test results of ${firstName} ${lastName}.<br>
  ${answersStr}`;


  Email.send({
    Host: "smtp.gmail.com",
    Username: "bounpsikolojienvanter@gmail.com",
    Password: "hakancorba123",
    To: 'anilerc17@gmail.com',
    From: "bounpsikolojienvanter@gmail.com",
    Subject: `Test results of ${firstName} ${lastName}`,
    Body: body,
  }).then(
    message => {
      sendMailBtn.classList.toggle("hide")
      end.style.color = "green";
      end.textContent = "Test completed succesfully."
    }
  );
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