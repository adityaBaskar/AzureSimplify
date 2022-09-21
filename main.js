function getLabelByName(labelName)
{
    var labels = document.getElementsByTagName("label");
    for(i = 0; i < labels.length; i++)
    {
        label = labels[i];
        if (label.innerText == labelName)
        {
            return label;
        }
    }
    return undefined;
}

function setInputValue(labelName, labelValue)
{
    var label = getLabelByName(labelName);
    document.getElementById(label.getAttribute('for')).value = labelValue
}

setInputValue("Availability options", "Availability set");