const sentence = "hello there from lighthouse labs";
  let i = 0;
  let interval = 50;
  let typeWriter = function() {
    if (i < sentence.length) {
      process.stdout.write(sentence[i]);
      i++;
      setTimeout(typeWriter, interval);
    } else {
      process.stdout.write("\n");
    }
  };

  typeWriter();