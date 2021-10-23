import './App.css';
import BMITable from './BMITable.jpg';

function App() {

  function tabledisplay() {
    let table = document.getElementsByClassName("bmitable_div")[0];
    table.style.display = "flex";
  }

  function rvmdisplaytable() {
    let table = document.getElementsByClassName("bmitable_div")[0];
    table.style.display = "none";
  }

  function resetBmi() {
    document.getElementById("height_feet").value = "";
    document.getElementById("height_inches").value = "";
    document.getElementById("weight_kg").value = "";
    document.getElementsByClassName("result_bmi")[0].innerText = "";
  }

  function computeBmi() {
    var feet_var = document.getElementById("height_feet").value;
    var inch_var = document.getElementById("height_inches").value;
    var weight_var = document.getElementById("weight_kg").value;
    if (feet_var == "" || inch_var == "" || weight_var == "") {
      if (feet_var == "") {
        document.getElementById("height_feet").style.border = "medium solid red";
      }
      if (inch_var == "") {
        document.getElementById("height_inches").style.border = "medium solid red";
      }
      if (weight_var == "") {
        document.getElementById("weight_kg").style.border = "medium solid red";
      }
      if (weight_var == "") {
        console.log(weight_var);
        document.getElementById("weight_kg").style.border = "medium solid red";
      }
      return;
    }

    if (isNaN(weight_var) || isNaN(inch_var) || isNaN(feet_var)) {
      alert("Please enter valid values in height and weight.");
      return;
    }
    var strtotal = feet_var.toString() + "." + inch_var.toString();
    var height = (parseFloat(strtotal) / 3.28).toPrecision(4);
    var bmi = (weight_var / (height * height)).toPrecision(4);

    document.getElementsByClassName("result_bmi")[0].innerText = "Your Body Mass Index (BMI) is: " + bmi;
    document.getElementById("height_feet").style.border = "none";
    document.getElementById("height_inches").style.border = "none";
    document.getElementById("weight_kg").style.border = "none";
  }


  return (
    <>
      <div className="container">
        <div className="bmitable_div">
          <span className="close"><i onClick={rvmdisplaytable} class="far fa-times-circle"></i></span>
          <img src={BMITable} alt="BMI Table" className="bmitable_img" />
        </div>
        <h1 className="heading">BMI Calculator</h1>
        <p className="desc">Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.</p>
        <h1 className="center_div_title">Calculate Your Body Mass Index</h1>
        <div className="center_div">
          <div className="center_div_1">
            <div className="height_div">
              <label htmlFor="height_feet height_inches" className="height_label">Your Height </label>
              <input type="tel" id="height_feet" autoComplete="off" placeholder="in feet" />
              <input type="tel" id="height_inches" autoComplete="off" placeholder="in inches" />
            </div>
            <div className="weight_div">
              <label htmlFor="weight_kg" className="weight_label">Your Weight</label>
              <input type="tel" id="weight_kg" autoComplete="off" placeholder="in kg" />
            </div>
            <div className="button_div">
              <button className="compute_btn" onClick={computeBmi}>Compute BMI</button>
              <button className="reset_btn" onClick={resetBmi}>Reset</button>
            </div>

            <p className="result_bmi"></p>
          </div>
          <div className="center_div_2">
            <h2 className="bmi_category">BMI Categories</h2>
            <p className="category_item">Underweight = &lt; 18.5</p>
            <p className="category_item">Normal weight = 18.5–24.9</p>
            <p className="category_item">Overweight = 25–29.9</p>
            <p className="category_item">Obesity = BMI of 30 or greater</p>

            <p className="bmitable" onClick={tabledisplay}>View the BMI tables</p>
          </div>
        </div>
        <p className="copyright">&copy; 2021 Anant Kumawat.</p>
      </div>
    </>
  );
}

export default App;
