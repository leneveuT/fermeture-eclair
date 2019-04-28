var msgerreurnom = document.getElementById('msgerreurnom');
msgerreurnom.style.display='none';

var msgerreurprenom = document.getElementById('msgerreurprenom');
msgerreurprenom.style.display='none';

var msgerreurage = document.getElementById('msgerreurage');
msgerreurage.style.display='none';

var msgerreuradresse = document.getElementById('msgerreuradresse');
msgerreuradresse.style.display='none';

var msgerreurcp = document.getElementById('msgerreurcp');
msgerreurcp.style.display='none';

var msgerreurville = document.getElementById('msgerreurville');
msgerreurville.style.display='none';

var msgerreuremail = document.getElementById('msgerreuremail');
msgerreuremail.style.display='none';

var msgerreurpass = document.getElementById('msgerreurepass');
msgerreurepass.style.display='none';

var msgerreurpassConfirm = document.getElementById('msgerreurepassConfirm');
msgerreurepassConfirm.style.display='none';

var msgerreurtel = document.getElementById('msgerreuretel');
msgerreuretel.style.display='none';

var msgerreurcheckbox = document.getElementById('msgerreurecommentaire');
msgerreurecheckbox.style.display='none';

var msgerreurcommentaire = document.getElementById('msgerreurecommentaire');
msgerreurecommentaire.style.display='none';

function validation() {
  verifNom();
  verifPrenom();
  verifAge();
  verifAdresse();
  verifCp();
  verifVille();
  verifMail();
  verifPass();
  verifPassConfirm();
  verifTel();
  verifCommentaire();
}

// Verification Nom
function verifNom() {
  var nom = document.getElementById('nom');
  if (nom.value == '')	{
    nom.style.borderColor='red';
    msgerreurnom.style.display='inline';
    msgerreurnom.innerHTML = 'Le champ est vide';
  } else if(nom.value.length < 3) {
    nom.style.borderColor='red';
    msgerreurnom.style.display='inline';
    msgerreurnom.innerHTML = 'Le nom est trop petit';
  } else if(nom.value.length > 50) {
    nom.style.borderColor='red';
    msgerreurnom.style.display='inline';
    msgerreurnom.innerHTML = 'Le nom est trop long';
  } else {
    nom.style.borderColor = 'blue';
    msgerreurnom.style.display = 'none';
  }
}

// Verification Prenom
function verifPrenom() {
  var prenom = document.getElementById('prenom');
  if (prenom.value == '')	{
    prenom.style.borderColor='red';
    msgerreurprenom.style.display='inline';
    msgerreurprenom.innerHTML = 'Le champ est vide';
  } else if(prenom.value.length < 3) {
    prenom.style.borderColor='red';
    msgerreurprenom.style.display='inline';
    msgerreurprenom.innerHTML = 'Le prenom est trop petit';
  } else if(prenom.value.length > 50) {
    prenom.style.borderColor='red';
    msgerreurprenom.style.display='inline';
    msgerreurprenom.innerHTML = 'Le prenom est trop long';
  } else {
    prenom.style.borderColor = 'blue';
    msgerreurprenom.style.display = 'none';
  }
}

// Verification Age
function verifAge() {
  var age = document.getElementById('age');
  if (age.value == '')	{
    age.style.borderColor='red';
    msgerreurage.style.display='inline';
    msgerreurage.innerHTML = 'Le champ est vide';
  } else if(age.value.length > 2) {
    age.style.borderColor='red';
    msgerreurage.style.display='inline';
    msgerreurage.innerHTML = 'L\'âge est trop grand';
  } else if(age.value < 7) {
    age.style.borderColor='red';
    msgerreurage.style.display='inline';
    msgerreurage.innerHTML = 'Vous êtes trop jeune';
  } else if(age.value > 77) {
    age.style.borderColor='red';
    msgerreurage.style.display='inline';
    msgerreurage.innerHTML = 'Vous êtes trop âgée';
  } else {
    age.style.borderColor = 'blue';
    msgerreurage.style.display = 'none';
  }
}

// Verification Adresse
function verifAdresse() {
  var adresse = document.getElementById('adresse');
  if (adresse.value == '')	{
    adresse.style.borderColor='red';
    msgerreuradresse.style.display='inline';
    msgerreuradresse.innerHTML = 'Le champ est vide';
  } else {
    adresse.style.borderColor = 'blue';
    msgerreuradresse.style.display = 'none';
  }
}

// Verification Code Postal
function verifCp() {
  var cp = document.getElementById('cp');
  if (cp.value == '')	{
    cp.style.borderColor='red';
    msgerreurcp.style.display='inline';
    msgerreurcp.innerHTML = 'Le champ est vide';
  } else if(cp.value.length > 5) {
	cp.style.borderColor='red';
    msgerreurcp.style.display='inline';
    msgerreurcp.innerHTML = 'Le code postal est trop long';
  } else {
    cp.style.borderColor = 'blue';
    msgerreurcp.style.display = 'none';
  }
}

// Validation ville
function verifVille() {
  var ville = document.getElementById('ville');
  if (ville.value == '')	{
    ville.style.borderColor='red';
    msgerreurville.style.display='inline';
    msgerreurville.innerHTML = 'Le champ est vide';
  } else {
    ville.style.borderColor = 'blue';
    msgerreurville.style.display = 'none';
  }
}

// Validation email
function verifMail() {
  var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  var email = document.getElementById('email');
  if (email.value == '')	{
    email.style.borderColor='red';
    msgerreuremail.style.display='inline';
    msgerreuremail.innerHTML = 'Le champ est vide';
  } else if(email.value.length > 50) {
	email.style.borderColor='red';
    msgerreuremail.style.display='inline';
    msgerreuremail.innerHTML = 'L\'e-mail est trop long';
  } else if(!regex.test(email.value)) {
	email.style.borderColor='red';
    msgerreuremail.style.display='inline';
    msgerreuremail.innerHTML = 'L\'e-mail est invalide';
  } else {
    email.style.borderColor = 'blue';
    msgerreuremail.style.display = 'none';
  }
}


// Validation mot de passe
function verifPass() {
  var pass = document.getElementById('pass');
  if (pass.value == '')	{
    pass.style.borderColor='red';
    msgerreurpass.style.display='inline';
    msgerreurpass.innerHTML = 'Le champ est vide';
  } else if(pass.value.length > 20) {
	pass.style.borderColor='red';
	msgerreurpass.style.display='inline';
    msgerreurpass.innerHTML = 'Le mot de passe est trop long';
  } else {
    pass.style.borderColor = 'blue';
    msgerreurpass.style.display = 'none';
  }
}

// Verification mot de passe de confirmation
function verifPassConfirm() {
  var pass = document.getElementById('pass');
  var passConfirm = document.getElementById('passConfirm');
  if (passConfirm.value == '')	{
    passConfirm.style.borderColor='red';
    msgerreurpassConfirm.style.display='inline';
    msgerreurpassConfirm.innerHTML = 'Le champ est vide';
  } else if(passConfirm.value.length > 20) {
	pass.style.borderColor='red';
	msgerreurpassConfirm.style.display='inline';
    msgerreurpassConfirm.innerHTML = 'Les mot de passe de confirmation est trop long';
  } else if (pass.value != passConfirm.value) {
	pass.style.borderColor='red';
	msgerreurpass.style.display='inline';
    msgerreurpass.innerHTML = 'Les mots de passe doivent etre identique';
	  
	passConfirm.style.borderColor='red';
	msgerreurpassConfirm.style.display='inline';
    msgerreurpassConfirm.innerHTML = 'Les mots de passe doivent etre identique';
  } else {
	pass.style.borderColor = 'blue';
    msgerreurpass.style.display = 'none';
	
    passConfirm.style.borderColor = 'blue';
    msgerreurpassConfirm.style.display = 'none';
  }
}

// Verification Telephone
function verifTel() {
  var regex = /(\+\d+(\s|-))?0\d(\s|-)?(\d{2}(\s|-)?){4}/
  var tel = document.getElementById('tel');
  if (tel.value == '')	{
    tel.style.borderColor='red';
    msgerreurtel.style.display='inline';
    msgerreurtel.innerHTML = 'Le champ est vide';
  } else if(tel.value.length > 10) {
	tel.style.borderColor='red';
    msgerreurtel.style.display='inline';
    msgerreurtel.innerHTML = 'Le numéro de téléphone est trop long';
  } else if(!regex.test(tel.value)) {
	tel.style.borderColor='red';
    msgerreurtel.style.display='inline';
    msgerreurtel.innerHTML = 'numéro de téléphone invalide';
  } else {
    tel.style.borderColor = 'blue';
    msgerreurtel.style.display = 'none';
  }
}

// Verification Telephone
function verifCommentaire() {
  var commentaire = document.getElementById('commentaire');
  if (commentaire.value == '')	{
    commentaire.style.borderColor='red';
    msgerreurecommentaire.style.display='inline';
    msgerreurecommentaire.innerHTML = 'Le champ est vide';
  } else {
    commentaire.style.borderColor = 'blue';
    msgerreurcommentaire.style.display = 'none';
  }
}
