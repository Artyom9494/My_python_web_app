const openButton = document.querySelector('.openPopup');
const popupOverlay = document.querySelector('.popupOverlay');
const popupForm = document.querySelector('.popupForm');
var regions = {
  0: ["Краснодар", "Кропоткин", "Славянск"],
  1: ["Ростов", "Шахты", "Батайск"],
  2: ["Ставрополь", "Пятигорск", "Кисловодск"]
};

openButton.addEventListener('click', function() {
  popupOverlay.style.display = 'block';
});

popupOverlay.addEventListener('click', function(event) {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});
/////////////////////////////////////////////////////////

// Обновления списка городов при изменении выбранного региона
function updateCities() {
  var regionSelect = document.getElementById("region"); // оставил getElementById чтоб показать, что и так можно скать нужный элемент
  var citySelect = document.getElementById("city");
  var selectedRegion = regionSelect.value;
  
  // Очищаем список городов
  citySelect.innerHTML = "";
  
  // Если выбран регион, добавляем города в список
  if (selectedRegion) {
      var cities = regions[selectedRegion];
      for (var i = 0; i < cities.length; i++) {
          var option = document.createElement("option");
          option.value = cities[i];
          option.text = cities[i];
          citySelect.appendChild(option);
      }
      
      // Активируем поле выбора города
      citySelect.disabled = false;
  } else {
      // Если регион не выбран, отключаем поле выбора города
      citySelect.disabled = true;
  }
}

////////////////////////////////////////////////////

// проверка валидности
function validateForm(event) {
  var form = document.querySelector(".myForm");
  var inputs = form.getElementsByTagName("input");
  var isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      inputs[i].classList.add("invalid");
      showError(inputs[i]);
      isValid = false;
    } else {
      inputs[i].classList.remove("invalid");
      hideError(inputs[i]);
    }
  }

  if (!isValid) {
    event.preventDefault(); // применить Default сабмит
  }
}

function showError(input) {
  var errorText = input.getAttribute("data-error");
  var errorElement = document.createElement("span");
  errorElement.classList.add("error-message");
  errorElement.textContent = errorText;

  // Вставляем сообщение об ошибке после невалидного поля
  input.parentNode.insertBefore(errorElement, input.nextSibling);
}

function hideError(input) {
  var errorElement = input.nextSibling;
  if (errorElement && errorElement.classList.contains("error-message")) {
    errorElement.parentNode.removeChild(errorElement);
  }
}


