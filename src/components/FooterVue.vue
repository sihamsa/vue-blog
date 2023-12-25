<template>
  <div class="footer">
    <div class="fotter1">
      <h3>Personally Newsletter</h3>
      <p class="footer-paragraph">
        A bi-weekly newsletter of design inspiration, resources <br />and
        anything related to career development.
      </p>
      <div class="btn">
        <input type="text" placeholder="Email adress" /><button
          class="btn-footer"
        >
          Subscribe
        </button>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright 2021 - Elikem Daniels</p>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Graphik";
  src: url("@/assets/fonts/GraphikBold.otf") format("truetype"); /* Adjust the path as needed */
}
.footer1 {
  /* padding-bottom: 300px !important; */
}
h3 {
  font-family: "Graphik";
  font-size: 28px;
  line-height: 36px;
  text-align: center;

  background: linear-gradient(97.1deg, #c41740 4.8%, #ea9c28 100%);
  -webkit-background-clip: text;
  color: transparent;
}
.footer-paragraph {
  font-family: "inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: rgba(71, 84, 103, 1);
}
.btn {
  text-align: center;
  padding-bottom: 50px;
  /* position: relative; */
}
.btn-footer {
  background-color: #1d2939;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 12px 27px;
  gap: 10px;
  color: white;
  border: 1px;
  /* margin-left: 10px; */
  /* margin-left: -1px;  */
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-family: "inter";
  text-align: center;
  cursor: pointer;
  /* position: absolute; */
}
input {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 12px 14px;
  gap: 10px;
  border: 1px solid rgba(208, 213, 221, 1);

  font-family: "inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: rgba(152, 162, 179, 1);
}
.copyright {
  padding: 30px;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 0px 0px rgba(30, 40, 52, 0.12) inset;
}
p {
  font-family: "inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(29, 41, 57, 1);
  text-align: center;
}
</style>
