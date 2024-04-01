
export function copy() {
    const resultInput = document.getElementById("resultInput");
    const button = document.getElementById("copyToClipboard");
  
    button.addEventListener("click", function (ev) {
      if (button.innerText === "Copy") {
        button.innerText = "Copied!";
        button.classList.add("success");
        navigator.clipboard.writeText(resultInput.value).then(() => {
          // Callback opcional para lidar com a cópia bem-sucedida, se necessário
          console.log('Texto copiado para a área de transferência!');
        }).catch(err => {
          // Callback opcional para lidar com erros na cópia
          console.error('Erro ao copiar texto: ', err);
        });
      } else {
        button.innerText = "Copy";
        button.classList.remove("success");
      }
    });
  }
  