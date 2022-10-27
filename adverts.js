function advertising(n) {
    let cumulative = 0;
    let shares = 5;
  
    for (let i = 0; n > i; i++) {
      let likes = Math.floor(shares / 2);
      shares = likes * 3;
      cumulative += likes;
    }
    return cumulative;
  }

  console.log(advertising(3))