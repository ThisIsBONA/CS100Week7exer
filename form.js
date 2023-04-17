
let foodList = [];
const newFood = new Object();

const submitButton = document.getElementById("submit-button");
const deleteButton = document.getElementById("delete-button");




const submitFood = () => {
  const foodNameValue = document.getElementById("foodname").value;
  const descriptionValue = document.getElementById("description").value;
  const imgurlValue = document.getElementById("imgurl").value;
  const rankValue = document.getElementById("rank").value;
  const  regex=/^[0-9]+$/;
  if(foodNameValue == ''){
    alert("Enter food name!");
  }else if(descriptionValue== ''){
    alert("Enter food description!");
  }else if(imgurlValue == ''){
    alert("Enter image url!");
  }else if(rankValue == '' || !rankValue.match(regex)){
    alert("Enter rank as integer!");
  }else{
    console.log("Food: "+foodNameValue);
    console.log("Description: "+descriptionValue);
    console.log("Image URL: "+imgurlValue);
    console.log("Rank: "+ rankValue);
    newFood.fname = foodNameValue;
    newFood.fdes = descriptionValue;
    newFood.furl = imgurlValue;

    foodList.add(newFood);
  }
}


   