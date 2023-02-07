var value1, value2

function getValues() {
    value1 = parseFloat(document.getElementById('value1').value)
    value2 = parseFloat(document.getElementById('value2').value)
}

function sumValues() {
    event.preventDefault()
    getValues()
    var sumResult = value1 + value2
    document.getElementById('resultCalculus').value = sumResult
}

function multiplyValues() {
    event.preventDefault()
    getValues()
    var multiplyResult = value1 * value2
    document.getElementById('resultCalculus').value = multiplyResult
}

function divideValues() {
    event.preventDefault()
    getValues()
    var divisionResult = value1 / value2
    document.getElementById('resultCalculus').value = divisionResult
}

function subtractValues() {
    event.preventDefault()
    getValues()
    var subtractResult = value1 - value2
    document.getElementById('resultCalculus').value = subtractResult
}