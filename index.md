---
layout: page
title: "Home"
---
<div class="container">

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
  <ul>
    <li><a href="montecarlo/one_die.html">One die</a></li>
    <li><a href="montecarlo/two_dice.html">Sum of 2 dice</a></li>
    <li><a href="montecarlo/shake_and_spill.html">Shake and Spill</a></li>
  </ul>

  <!--The Future-->
  <!-- <h2>
    The Future
  </h2>
  <p class="description">Unbuilt ideas</p>
  <ul>
    <li>Mark multiples after skip-counting (<span class="accent-text">100 grid</span>)</li>
    <li>Customize number of columns (<span class="accent-text">100 grid</span>)</li>
    <li>Make numbers hideable for puzzles (<span class="accent-text">100 grid</span>)</li>
    <li>Operate on highlighted numbers (<span class="accent-text">100 grid</span> + <span
        class="accent-text">Multiplication Table</span>)</>
    <li>Sum of 3 dice (<span class="accent-text">Monte Carlo</span>)</li>
    <li>Poker hands (<span class="accent-text">Monte Carlo</span>)</li>
    <li>Blackjack (<span class="accent-text">Monte Carlo</span>)</li>
    <li>Roulette (<span class="accent-text">Monte Carlo</span>)</li>
    <li>Broken calculators (<span class="accent-text">New</span>)</li>
    <li><a
        href="https://www.google.com/search?q=subitizing+cards&tbm=isch&source=iu&ictx=1&fir=1E4oUwfIzjQ04M%253A%252CvvcKvruS3fjTIM%252C_&usg=__N_iX8ooaSwIX-t6WAlQXkM3G5l4%3D&sa=X&ved=0ahUKEwj3-4DQqcfbAhUmiVQKHa3UA3UQ9QEIUDAH#imgrc=1E4oUwfIzjQ04M:">Dot
        Pattern Generator for Subitizing
      </a> (<span class="accent-text">New</span>)</li>
    <li><a href="https://en.wikipedia.org/wiki/Caesar_cipher">Visual Caeser Cipher</a> (<span
        class="accent-text">New</span>)</li>
    <li><a href="https://en.wikipedia.org/wiki/Ulam_spiral">Ulam's Spiral</a> (<span class="accent-text">New</span>)
    </li>
    <li><a href="https://www.illustrativemathematics.org/content-standards/tasks/938">Interactive Locker Problem</a>
      (<span class="accent-text">New</span>)</li>
    <li><a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz Conjecture</a> (<span
        class="accent-text">New</span>)</li>
  </ul>
</div> -->