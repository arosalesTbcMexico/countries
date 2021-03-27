export default {
    numberFormat(val) {
        return new Intl.NumberFormat('en-US').format(val);
    }
}