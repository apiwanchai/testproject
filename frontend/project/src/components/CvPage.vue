<template>
  <div>
    <!--| ABOUT |--------------------------------------------------->
    <section id="about" class="container">
      <img
        src="../assets/img/proflie.jpg"
      />
      <h1 class="display-4">Apiwanchai Yingtavorn</h1>
      <p>
        I’m a Front-end developer web developer with over 1 years of experience.
        Software development is a fulfilling and rewarding job for me. I love to
        execute big ideas, and I want to use my talents to solve problems and
        make life easier for people. I jump at the chance to learn new things. I
        take great pride in my work and the fact that I create things that
        others find useful.
      </p>
      <p>
        <strong>Skills:</strong>
        <b-badge variant="primary" class=" text-black">Vue</b-badge>
        <b-badge variant="primary" class=" text-black">Vuetify</b-badge>
        <b-badge variant="primary" class=" text-black">Javascript</b-badge>
        <b-badge variant="primary" class=" text-black">Nuxt</b-badge>
        
        
      </p>
    </section>

    <!-- EXPERIENCE --------------------------------------------->
    <section id="experience" class="container">
      <h1>Experience</h1>
      <div class="card">
        <div
          class="card-header collapse show"
        >
          <div class="row">
            <h5 class="col-md-8 mb-0">Frontend Developer </h5>
            <em class="col-md-4 text-md-right">ExpSystem: 1 September 2022 - Present</em>
          </div>
        </div>
        
      </div>

      <div class="card">
        <div
          class="card-header collapse show"
        >
          <div class="row">
            <h5 class="col-md-8 mb-0">Frontend Developer </h5>
            <em class="col-md-4 text-md-right"> PP-Ontime: 1 September 2021 - 30 June 2022 </em>
          </div>
        </div>
        
      </div>
      <div class="card">
        <div
          class="card-header collapse show"
        >
          <div class="row">
            <h5 class="col-md-8 mb-0">Fullstack Developer </h5>
            <em class="col-md-4 text-md-right"> Onemoby: 23 Norvember 2020 - 16 March 2021 </em>
          </div>
        </div>
        
      </div>
    </section>

    <!-- CONTACT ----------------------------------------------------->

    <section class="container" id="contact">
      <h1>Contact</h1>
      <div class="row">
        <div class="col-sm-2">Phone:</div>
        <div class="col-sm-4">094-418-9175</div>
      </div>
      <div class="row">
        <div class="col-sm-2">Email:</div>
        <div class="col-sm-4">
          <a href="mailto:apiwanchai1998@gmail.com">apiwanchai1998@gmail.com</a>
        </div>
      </div>
    
    </section>
  </div>
</template>

<script></script>


<style>
#about {
  text-align: center;
  padding: 40px;
}
#about img {
  width: 200px;
  border-radius: 100%;
}
#about h1 {
  margin: 25px;
}
section {
  padding-bottom: 40px;
}
.card .card-header {
  cursor: pointer;
}
</style>