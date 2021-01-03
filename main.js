var inputs= [];
function getParagraph1() {
for (var i = 1; i <= 6; i++)
{
console.log(document.getElementById("para1_input_box_"+ i).value);
inputs.push(document.getElementById("para1_input_box_"+ i).value);

}
document.getElementById("showParagraph_1").innerHTML= inputs.join(". ");
}
function getParagraph2() {
for (var j = 1; j <= 6; j++)
{
console.log(document.getElementById("para1_input_box_"+ j).value);  
inputs.push(document.getElementById("para2_input_box_"+ j).value);
}
document.getElementById("showParagraph_2").innerHTML= inputs.join(". ");
}