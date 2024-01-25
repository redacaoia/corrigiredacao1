export function GreetingByTime(): string {
    const agora = new Date();
    const hora = agora.getHours();
  
    if (hora >= 5 && hora < 12) {
      return "Bom dia";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde";
    } else if (hora >= 18 && hora < 24) {
      return "Boa noite";
    } else {
      return "Boa madrugada";
    }
  }
 