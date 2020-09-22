function welcomeMessage(fullName) {
    function AlterMessage() {
        alert('Welcome ' + fullName);
    };
    return AlterMessage;
}
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

guillaume();
alex();
fred();
