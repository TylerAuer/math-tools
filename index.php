<!doctype html>
<html lang="en">

<head>
  <!--Loads universal header-->
  <?php include 'header.php';?>

  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Mathematical Playgrounds</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <!--  Index CSS  -->
  <link rel="stylesheet" href="css/index.css">

</head>

<body>
  <!--  Heading-->
  <div id="holder" class="container">
    <h1 class="display-4">
      Mathematical Playgrounds
    </h1>
    <p class="lead">
      I'm a teacher with an interest in design, code, and graphics.
    </p>

    <div id="social">
      <a href="https://twitter.com/intent/tweet?screen_name=mathfireworks&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @mathfireworks</a>
    </div>


    <!--100s Grid -->

    <h2>
      100s Chart
    </h2>
    <p class="description">Explore place value and skip counting</p>
    <p><a href="/100_chart/grid.php">Simple</a> (<span class="accent-text">toggle colors & skip count</span>)</p>
    <p><b>Build Your Own:</b></p>
    <div class="container">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="eratosthenes">
        <label class="custom-control-label" for="eratosthenes">Sieve of Eratosthenes</label>
      </div>

      <div id="grid-build-options" class="input-group input-group-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">Start number</span>
        </div>
        <input id="grid-startNumber" type="number" min="1" max="1000" class="form-control" value="1">
      </div>

      <div id="grid-build-options" class="input-group input-group-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">End number</span>
        </div>
        <input id="grid-endNumber" type="number" min="1" max="2000" class="form-control" value="100">
      </div>

      <div id="grid-build-options" class="input-group input-group-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">Columns</span>
        </div>
        <input id="grid-columns" type="number" min="1" max="15" class="form-control" value="10">

        <div class="input-group-append">
          <button id="btn-build-grid" class="btn btn-outline-secondary" type="button">Build It</button>
        </div>
      </div>
    </div>
    <!--
    <p><a href="#">Basic, clickable</a></p>
    <p><a href="#">Multiples, clickable</a></p>
    <p><a href="#">Sieve of Eratosthenes</a></p>
    <p><a href="#">Hideable numbers</a></p>
    <p><a href="#">Customizable dimensions</a></p>
-->





    <!--Multiplication Table-->

    <h2>
      Multiplication Table
    </h2>
    <p class="description">Find patterns in a customizable times table</p>
    <p><a href="/mult_table/mult_table.php">Simple</a> (<span class="accent-text">10x10 & toggle colors</span>)</p>
    <p><b>Build Your Own:</b></p>
    <div class="container">
      <div id="mult-table-build-options" class="input-group input-group-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">Columns and Rows</span>
        </div>
        <input id="mult-table-columns" type="number" min="1" max="15" class="form-control" value="10">
        <input id="mult-table-rows" type="number" min="1" max="200" class="form-control" value="10">
        <div class="input-group-append">
          <button id="btn-build-mult-table" class="btn btn-outline-secondary" type="button">Build It</button>
        </div>
      </div>
    </div>
    <!--
<p><a href="#">Basic, clickable</a></p>
<p><a href="#">Sum of clicked numbers</a></p>
<p><a href="#">Customizable dimensions</a></p>
-->





    <!--Monte Carlo Simulations-->

    <h2>
      Monte Carlo Simulations
    </h2>
    <p class="description">Run random events over and over and over...</p>
    <p><a href="http://montecarlo.mathfireworks.com/one_die.html">One die</a></p>
    <p><a href="http://montecarlo.mathfireworks.com/two_dice.html">Sum of 2 dice</a></p>
    <p><a href="http://montecarlo.mathfireworks.com/shake_and_spill.html">Shake and Spill</a> (via <a href="https://twitter.com/mburnsmath">@MBurnsMath</a>)</p>

    <!--The Future-->
    <h2>
      The Future
    </h2>
    <p class="description">Unbuilt ideas</p>
    <p>Customize number of columns (<span class="accent-text">100 grid</span>)</p>
    <p>Mark multiples after skip-counting (<span class="accent-text">100 grid</span>)</p>
    <p>Make numbers hideable for puzzles (<span class="accent-text">100 grid</span>)</p>
    <p>Operate on highlighted numbers (<span class="accent-text">100 grid</span> + <span class="accent-text">Multiplication Table</span>)</p>
    <p>Sum of 3 dice (<span class="accent-text">Monte Carlo</span>)</p>
    <p>Poker hands (<span class="accent-text">Monte Carlo</span>)</p>
    <p>Blackjack (<span class="accent-text">Monte Carlo</span>)</p>
    <p>Roulette (<span class="accent-text">Monte Carlo</span>)</p>
    <p>Broken calculators (<span class="accent-text">New</span>)</p>
    <p><a href="https://www.google.com/search?q=subitizing+cards&tbm=isch&source=iu&ictx=1&fir=1E4oUwfIzjQ04M%253A%252CvvcKvruS3fjTIM%252C_&usg=__N_iX8ooaSwIX-t6WAlQXkM3G5l4%3D&sa=X&ved=0ahUKEwj3-4DQqcfbAhUmiVQKHa3UA3UQ9QEIUDAH#imgrc=1E4oUwfIzjQ04M:">Dot Pattern Generator for Subitizing</a> (<span class="accent-text">New</span>)</p>
    <p><a href="https://en.wikipedia.org/wiki/Caesar_cipher">Visual Caeser Cipher</a> (<span class="accent-text">New</span>)</p>
    <p><a href="https://en.wikipedia.org/wiki/Ulam_spiral">Ulam's Spiral</a> (<span class="accent-text">New</span>)</p>
    <p><a href="https://www.illustrativemathematics.org/content-standards/tasks/938">Interactive Locker Problem</a> (<span class="accent-text">New</span>)</p>
    <p><a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz Conjecture</a> (<span class="accent-text">New</span>)</p>


    <!-- Change Log -->
    <h2>
      Change Log
    </h2>
    <p class="description">What I've been up to</p>

    <p class="accent-text">June 10, 2018</p>
    <p>Fixed bug for mult. table where clicking on column or row 1 also shaded rows 11, 12, 13...</p>

    <p class="accent-text">June 10, 2018</p>
    <p>Fixed the #id generated for each product in the multiplication table</p>
    <p>Clicking on column and row headers on multiplication table now toggles the entire column or row</p>
    <p>Set up custom multiplication table options</p>
    <p>Set up custom 100s grid options</p>
    <p>Fixed issue with 100s grid generation when not beginning at 1</p>
    <p>Single column landing page</p>
    <p>Revised file tree</p>
    <p>Redesigned page titles to include link to landing page</p>

    <p class="accent-text">March 28, 2018</p>
    <p>Tried (and failed) to make the SoE process visible instead of instant</p>
    <p>Found and fixed bug in skip-counting function for 100s Grid</p>
    <p>Began work on Caeser cipher page</p>

    <p class="accent-text">March 27, 2018</p>
    <p>Reorganized JS function parameters for 100s Chart</p>
    <p>Created simple 100s chart page</p>
    <p>Added new ideas to future</p>

    <p class="accent-text">March 26, 2018</p>
    <p>Improved mobile font styles</p>
    <p>Added subtitle to interactive pages</p>
    <p>Confirmed Google Analytics is functioning</p>

    <p class="accent-text">March 22, 2018</p>
    <p>Styled landing page</p>
    <p>Migrated to play.mathfireworks.com</p>
    <p>Installed Google Analytics</p>
    <p>Converted HTML files to PHP</p>

    <p class="accent-text">March 21, 2018</p>
    <p>Built landing page</p>
    <p>Built basic multiplication table template</p>
    <p>Sieve of Eratosthenes working (without animation)</p>
    <p>Responsive font for better mobile experience (needs more work)</p>
    <p>Twitter social button</p>

    <p class="accent-text">March 19, 2018</p>
    <p>Built basic 100s chart</p>
    <p>Made cells clickable</p>
    <p>100s grid posted and <a href="https://twitter.com/MathFireworks/status/975936024953069569">shared</a> for feedback</p>
  </div>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="../scripts/index.js"></script>

  <!--Twitter Scripts-->
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</body>

</html>
