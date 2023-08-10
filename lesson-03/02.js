
    const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

    let word = words.indexOf("апельсин");
    
    if (word !== -1) {
      console.log("Ура! нашел");
    } else {
      console.log("Придется поискать в другом магазине...");
    }