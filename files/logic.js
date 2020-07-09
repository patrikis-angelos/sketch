const page = document.querySelector("html");
const container = document.querySelector("#container");
const resetButton = document.querySelector("button");
const inputBar = document.querySelectorAll("input");
const colorBar = document.querySelectorAll(".color");

let gridWidth = 16;
let gridHeight = 16;
let isMousePressed = false;
let color = "black";

console.log(colorBar);
CreateGrid(gridWidth, gridHeight);
InitializeColors();

resetButton.onclick = function(){
    ClearGrid();
    gridWidth = inputBar[0].value;
    gridHeight = inputBar[1].value;
    CreateGrid(gridWidth, gridHeight);
}

page.onmousedown = function()
{
    isMousePressed = true;
}

page.onmouseup = function()
{
    isMousePressed = false;
}
page.ondragstart = function()
{
    return false;
}

function CreateGrid(width, height)
{
    container.style.cssText = `grid-template-columns:repeat(${width}, 1fr);grid-template-rows:repeat(${height}, 1fr)`;

    for(let i=0; i < width; i++)
    {
        for(let j=0; j < height; j++)
        {
            const div = document.createElement("div");
            div.classList.add("block")
            div.addEventListener("mouseenter", function(e){Paint(e)});
            container.appendChild(div);
        }
    }
}

function ClearGrid()
{
    let grid = container.children;
    for (let i=grid.length-1; i>=0; i--) //Itterate in reverse because list changes every time we remove
    {
        grid[i].remove();
    }
}

function Paint(e)
{
    if (isMousePressed)
    {
        console.log(e.target);
        e.target.style.cssText=`background-color:${color};`;
    }
}

function InitializeColors()
{
    for (let i=0; i < colorBar.length; i++)
    {
        colorBar[i].addEventListener("click", function(e){PickColor(e)})
    }
}

function PickColor(e)
{
    color = e.target.style.backgroundColor;
}