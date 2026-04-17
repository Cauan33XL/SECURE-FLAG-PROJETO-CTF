    const emailCorreto = "sebastiao.santos@yaldabaothbank.com";
    const senhaCorreta = "kRzM36SU9e";

    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); 
      
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const erro = document.getElementById("erro");

      if (email === emailCorreto && senha === senhaCorreta) {
        
        localStorage.setItem("usuario", email);
        
        window.location.href = "action=registrar.html";
      } else {
        erro.textContent = "Email ou senha incorretos!";
      }
    });