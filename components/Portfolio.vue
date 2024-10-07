<script setup>
const route = useRoute();
const timeout = ref();
const activeLink = ref("");
const sections = ref([]);
watch(route, (param) => {
  console.log(param);
  activeLink.value = param.hash;
});
const updateHash = (newHash) => {
  if (newHash !== activeLink.value) {
    activeLink.value = newHash;
  }
};
const onScroll = () => {
  sections.value.forEach((section) => {
    const rect = section.el.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        updateHash(section.hash);
      }, 0);
    }
  });
};
onMounted(() => {
  activeLink.value = route.hash ? route.hash : "#about";
  sections.value = [
    { el: document.getElementById("about"), hash: "#about" },
    { el: document.getElementById("experience"), hash: "#experience" },
    { el: document.getElementById("project"), hash: "#project" },
    { el: document.getElementById("contact"), hash: "#contact" },
  ];
  window.addEventListener("scroll", onScroll);
});
</script>
<template>
  <div class="container flex flex-container">
    <header>
      <div class="_title text-white">Neeraj Maurya</div>
      <div class="_position text-white">Frontend Developer</div>
      <div class="_sort_summary">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </div>
      <div class="_links">
        <ul>
          <li>
            <NuxtLink
              :class="{ 'nav-active': activeLink == '#about' }"
              to="#about"
            >
              About me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :class="{ 'nav-active': activeLink == '#experience' }"
              to="#experience"
            >
              Experience
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :class="{ 'nav-active': activeLink == '#project' }"
              to="#project"
            >
              Project
            </NuxtLink>
          </li>
          <!-- <li >
            <NuxtLink :class="{ 'nav-active': activeLink == '#contact' }" to="#contact"> Contact me </NuxtLink>
          </li> -->
        </ul>
      </div>
      <div class="_social_connectivity">
        <ul>
          <li>
            <a
              class="text-white"
              href="https://www.linkedin.com/in/neeraj-maurya-73a5691ab"
              target="_blank"
            >
              Linked in
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              class="text-white"
              href="https://github.com/se-neeraj-maurya"
              target="_blank"
            >
              Github
            </a>
          </li>
          <!-- <li><a class="text-white" href="tel:+916392032056" target="_blank">
              +91 6392032056
            </a></li>
          <li><a class="text-white" href="mailto:neerajgpj98@gmail.com" target="_blank">
              Mail
            </a></li> -->
        </ul>
      </div>
      <div class="_contact_me">
        <ul>
          <li>
            <a class="text-white" href="tel:+916392032056">
              +91 6392032056
            </a>
          </li>
          <li>
            <a
              class="text-white"
              href="mailto:neerajgpj98@gmail.com"
            >
              neerajgpj98@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </header>
    <main id="about">
      <div class="about-section">
        <div class="section-title">About</div>
        <p class="mb-5">
          I’m Neeraj Maurya, a frontend developer with over
          <b class="text-white">3+ years</b> of experience in creating
          responsive, dynamic, and user-friendly web applications. My expertise
          lies in Vue.js and its ecosystem, where I specialize in building
          scalable, high-performance interfaces.
        </p>
        <p class="mb-5">
          I have a strong foundation in<b class="text-white"> HTML5, CSS3,</b>
          and <b class="text-white">JavaScript,</b> and I'm proficient with
          modern frameworks and libraries like
          <b class="text-white">Vue.js, Bootstrap,</b> and
          <b class="text-white">Vuetify.</b> Whether it’s crafting responsive
          layouts or integrating with RESTful APIs, I focus on delivering
          seamless, optimized experiences for both web and mobile users.
        </p>
        <div class="mb-5">
          <div class="_sub_heading text-white mb-2">Technical Skills:</div>
          <ul>
            <li class="mb-2">
              <b>Frontend Technologies : </b>
              HTML5, CSS3, JavaScript, Vue.js, Bootstrap, Vuetify, Pinia
            </li>
            <li class="mb-2">
              <b>State Management : </b>
              Vuex, Pinia
            </li>
            <li class="mb-2">
              <b>UI Libraries : </b>
              Vuetify, Bootstrap
            </li>
            <li class="mb-2">
              <b>API Integration : </b>
              RESTful APIs, JSON
            </li>
            <li class="mb-2">
              <b>Version Control : </b>
              Git, GitHub
            </li>
            <li class="mb-2">
              <b>Other Skills : </b>
              Responsive Design, Cross-browser Compatibility
            </li>
          </ul>
        </div>
        <p class="mb-5">
          I am particularly skilled at managing state with Vuex and Pinia, and
          integrating backend services to create smooth, data-driven
          applications. I take pride in writing clean, maintainable code and
          ensuring cross-browser compatibility while maintaining a keen focus on
          performance optimization.
        </p>
        <!-- <p  class="mb-5">
          In addition to my technical expertise, I thrive in collaborative
          environments, working closely with designers and backend teams to
          bring ideas to life. My goal is always to create efficient, scalable,
          and intuitive user interfaces that enhance the overall user
          experience.
        </p>
        <p>
          Outside of work, I’m always exploring new web technologies and
          contributing to open-source projects to keep my skills sharp and stay
          ahead of industry trends.
        </p> -->
      </div>
      <div id="experience">
        <div class="section-title">Experience</div>
        <div class="_card">
          <div class="_year text-white">Oct 2021 - Present</div>
          <div class="_exp_description">
            <div class="_company">Businessthrust techsoft pvt ltd noida</div>
            <div class="_role _position">Software Developer</div>
            <div class="_responsibility">
              <ul>
                <li>
                  Developing layout, user-facing features, and reusable
                  components using Vue.js to ensure a dynamic and responsive
                  user experience
                </li>
                <li>
                  Collaborating with cross-functional teams, including designers
                  and backend developers, to conceptualize and implement user
                  friendly interfaces
                </li>
                <li>
                  Working on CRM (Customer Relationship Management) and FSM
                  (Field Service Management) based software projects,
                  contributing to the development of key functionalities and
                  features
                </li>
                <li>
                  Utilizing Vue.js, Vuex, Vuetify, and Pinia Store to develop
                  dynamic and responsive frontend components
                </li>
                <li>
                  Integrating REST APIs to facilitate seamless communication
                  between frontend and backend systems, ensuring efficient data
                  exchange
                </li>
              </ul>
            </div>
            <div class="_technology">
              <div class="_texch_chip">HTML</div>
              <div class="_texch_chip">CSS</div>
              <div class="_texch_chip">JavaScript</div>
              <div class="_texch_chip">JQuery</div>
              <div class="_texch_chip">Bootstrap</div>
              <div class="_texch_chip">Vue Js</div>
              <div class="_texch_chip">Vuetify</div>
              <div class="_texch_chip">Vuex</div>
              <div class="_texch_chip">Pinia</div>
              <div class="_texch_chip">Git</div>
            </div>
          </div>
        </div>
        <div class="_card">
          <div class="_year text-white">Jan 2021 - July 2021</div>
          <div class="_exp_description">
            <div class="_company">The webplant pvt. ltd. new delhi</div>
            <div class="_role _position">UI Developer Intern</div>
            <div class="_responsibility">
              <ul>
                <li>
                  Designed and developed user interfaces for web applications
                  using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Implemented responsive design principles to ensure
                  compatibility across various devices and screen sizes.
                </li>
                <li>Analyzing the provided design pattern and requirements.</li>
                <li>
                  Design and develop dynamic web application layout on hubspot
                  platform
                </li>
              </ul>
            </div>
            <div class="_technology">
              <div class="_texch_chip">HTML</div>
              <div class="_texch_chip">CSS</div>
              <div class="_texch_chip">JavaScript</div>
              <div class="_texch_chip">JQuery</div>
              <div class="_texch_chip">Hubspot</div>
            </div>
          </div>
        </div>
      </div>
      <div id="project">
        <div class="section-title">Project</div>
        <div class="_project_card">
          <div class="_preview_img">
            <a href="images/task_thumb.jpg" target="_blank">
              <img src="/images/task_thumb.jpg" alt="" />
            </a>
            <a href="images/task_calender_view.jpg" target="_blank">
              <img class="mt-4" src="/images/task_calender_view.jpg" alt="" />
            </a>
          </div>
          <div class="_about_project">
            <div class="_project_name">
              <a
                class="text-white"
                href="https://app.workstatus.io"
                target="_blank"
              >
                Task management & Time tracking system
              </a>
            </div>
            <div class="_project_description">
              A Task Management Application helps individuals or teams organize,
              prioritize, and track tasks efficiently. It allows users to create
              tasks, set deadlines, assign responsibilities, and monitor
              progress. Key features include task prioritization, collaboration
              tools, deadlines, status tracking, calendar views and kanban view.
              By streamlining workflows and enhancing communication, it boosts
              productivity and ensures tasks are completed on time. Ideal for
              both personal and team project management, the app provides a
              clear overview of tasks and deadlines, keeping everyone aligned
              and focused.
            </div>
            <div class="_technology">
              <div class="_texch_chip">HTML</div>
              <div class="_texch_chip">CSS</div>
              <div class="_texch_chip">JavaScript</div>
              <div class="_texch_chip">Vue 3</div>
              <div class="_texch_chip">Vuetify</div>
              <div class="_texch_chip">Pinia Store</div>
            </div>
          </div>
        </div>
        <div class="_project_card">
          <div class="_preview_img">
            <a href="images/nfc1.jpg" target="_blank">
              <img src="/images/nfc1.jpg" alt="" />
            </a>
            <a href="images/nfc2.jpg" target="_blank">
              <img class="mt-4" src="/images/nfc2.jpg" alt="" />
            </a>
          </div>
          <div class="_about_project">
            <div class="_project_name text-white">
              <a
                class="text-white"
                href="https://app.geniccards.com"
                target="_blank"
              >
                Digital Business Profile with NFC Integration
              </a>
            </div>
            <div class="_project_description">
              A Digital Business Profile with NFC Integration project allows
              businesses or individuals to create a digital business card
              accessible via NFC-enabled devices. Users can share their contact
              details, social media links, and other relevant information by
              simply tapping their smartphone to an NFC-enabled card or device.
              This solution eliminates the need for physical business cards,
              offering an eco-friendly, modern alternative that enhances
              networking. The digital profile can be easily updated in
              real-time, ensuring the shared information is always current.
            </div>
            <div class="_technology">
              <div class="_texch_chip">HTML</div>
              <div class="_texch_chip">CSS</div>
              <div class="_texch_chip">JavaScript</div>
              <div class="_texch_chip">Vue 3</div>
              <div class="_texch_chip">Vuetify</div>
              <div class="_texch_chip">Pinia Store</div>
            </div>
          </div>
        </div>
        <div class="mt-5" style="text-align: center">
          <a
            class="text-white"
            href="https://github.com/se-neeraj-maurya?tab=repositories"
            target="_blank"
          >
            View All Projects
          </a>
        </div>
      </div>
      <div id="contact"></div>
    </main>
  </div>
</template>
