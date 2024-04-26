<!DOCTYPE html>
<html>
  <head>
    <title>Javascript Test</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Hello</h1>

    <section id="content"></section>

    <input type="text" id="name" placeholder="Enter your name" />
    <button onclick="test()">Submit</button>

    <section>
        <input type="date" id="start_date" />
        <input type="date" id="end_date" />
        <button onclick="dateDiff()">Calculate</button>
        <p id="dateDiff"></p>
    </section>
  </body>
</html>