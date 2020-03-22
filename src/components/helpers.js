import accounting from "accounting";

function formatValue(value, decimalPlaces, separator) {
    return accounting.formatNumber(value, decimalPlaces, separator);
}

function unformatValue(value) {
    var val = Number(accounting.unformat(value));

    // if equals to 0
    if (val == 0) val = "";
    // if decimals are 0
    else if (val > 0 && val % 1 == 0) val = val.toFixed(0);
    // if last digit of dicimal is 0
    else if ((val * 100) % 10 == 0) val = val.toFixed(1);
    else val = val.toFixed(this.decimalPlaces);

    return val;
}

export default {
    formatValue: formatValue,
    unformatValue: unformatValue,
}
