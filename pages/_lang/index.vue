<template>
  <v-layout column justify-center align-center>
    <v-img width="100%" src="/header.png">
      <v-col cols="4" offset="8" style="height: 100%;">
        <div style="position: absolute; right: 10%; bottom: 10%; font-size: 3vw; color: white;">

        <div class="pl-10">We help you build</div>
          <div class="pl-5">a new version</div>
          <div>of your business</div>
          
        </div>
      </v-col>
    </v-img>
    <v-container id="home" width="50" class="text-center">
      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">Bonjour!</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <v-container class="text-center">
        <h3 class="pa=2">We are a software development agency located in Paris, France.</h3>
      </v-container>
    
      </br>
      </br>

      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">We focus on </h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>

      </v-row>
      <v-row>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-research.png"></v-img>
          <h4>Research</h4>
        </v-col>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-planning.png"></v-img>
          <h4>Planning</h4>
        </v-col>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-delivery.png"></v-img>
          <h4>Delivery</h4>
        </v-col>
      </v-row>

      </br>
      </br>

      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">Workflow</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      </br>
      <v-row>
        <v-col>Our strategy is to help you improve the efficiency, overall revenue, and day-to-day operations of your business. The workflow allows us anticipates the need for flexibility and applies a level of pragmatism to the delivery of the finished product.</v-col>
      </v-row>

      </br>

      <v-row>
        <v-col align="center">
          <v-img width="100" src="/icon-communicate.png"></v-img>
          <h4>01. Communicate</h4>
          </br>
          <p>We begin every client project with strategic curiosity. We ask questions designed to understand what our clients want and need. </p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-evaluate.png"></v-img>
          <h4>02. Evaluate</h4>
          </br>
          <p>The primary purpose of evaluation, in addition to gaining insight into prior or existing initiatives, is to enable reflection and assist in the identification of future change.</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-design.png"></v-img>
          <h4>03. Design</h4>
          </br>
          <p>We actualize your vision from concept to integration to bring beautiful, user-optimized design to your project</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-develop.png"></v-img>
          <h4>04. Develop</h4>
          </br>
          <p>Development phase is about transforming the design of a system into a computer language format. We translate design specifications into the source code.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-img width="100" src="/icon-test.png"></v-img>
          <h4>05. Test</h4>
          </br>
          <p>Testing allows developers to deliver software that meets expectations, prevents unexpected results, and improves the long term maintenance of the application.</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-release.png"></v-img>
          <h4>06. Release</h4>
          <p>A release is the distribution of the final version of an application. We ensure that the project is delivered in time and that we are in phase with our customers.</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-support.png"></v-img>
          <h4>07. Support</h4>
          <p>We make sure to meet the needs of maintenance to support the new features that the users want or to change different types of functionalities of the system according to the customer demands.</p>
        </v-col>
      </v-row>
      <v-row id="expertise">
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">A powerful and robust skillset</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>Extensive and innovative to get the most out of your bottom line.</v-col>
      </v-row>
        <v-row class="text-left">
        <v-col col="7">
          <v-img src="/section-software.png"></v-img>
        </v-col>
        <v-col col="5">
          <h3 class="py-3">Software</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-mobile.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Mobile Development</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-app.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Desktop Applications</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-script.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Script Automation</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-stack.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Full Stack</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-QA.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>QA & Testing</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-web.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Website Development</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p>While making software, we take into account the final user point of view. We ensure to perform above and beyond expectations. We care about User Experience, User Interface but also Portability, Reliability, Flexibility, Maintainability & Cost Effectiveness. They do what they are designed to, not more or less.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="text-left">
        <v-col col="5">
          <h3 class="py-3">Marketing & Design</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-UI.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>UI/UX Design</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-illus.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Illustration</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-consult.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Design Consulting</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-brand.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Branding</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-analysis.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Data Analysis</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-SEO.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>SEO & Social Campaigns</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-strategy.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Business Planning</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-advert.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>Advertisements & Content</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p>
                  Our marketing philosophy is really all about honest empathy with your customers. Our goal is to be able to make business communicating with people as efficiently as possible.
                  As for our design thinking, We create Art from client expectations. Our goal is to integrate with your team to help you identify and achieve your objectives and grow your business.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col col="7">
          <v-img src="/section-marketingdesign.png"></v-img>
        </v-col>
      </v-row>
    
      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">Technology is who we are</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>We utilize many platforms and frameworks to accomplish your vision.</v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img src="section-tech.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>


<script>
</script>