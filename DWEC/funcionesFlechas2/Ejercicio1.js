/*
Reemplace las expresiones de función con funciones de flecha en el código a continuación:
function ask(question, yes, no) 
{
    if (confirm(question)) yes();
    else no();
}
*/

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);