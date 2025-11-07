import { Resource } from 'capacitor-resource-permission';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Resource.echo({ value: inputValue })
}
