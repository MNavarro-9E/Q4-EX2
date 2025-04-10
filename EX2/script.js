function verifyAge() {
    var age = document.getElementById('a-value').value;
    if (age < 18) {
        window.alert('You are a minor, not eligible for voting!');
    } else {
        window.alert('You are eligible for voting!');
    }
}
