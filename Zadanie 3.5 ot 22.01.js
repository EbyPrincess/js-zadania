function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  const index = text.indexOf(errorSymbol);

  if (index !== -1) {
    errorCallback(
      `Найден запрещённый символ "${errorSymbol}" на позиции ${index}`
    );
  } else {
    successCallback("Запрещённые символы отсутствуют");
  }
}
