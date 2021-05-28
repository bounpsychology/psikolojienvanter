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