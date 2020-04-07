function select() {
    var select = document.getElementById("select1").value;
    var val = document.getElementById("select2");
    switch (select) {
        case "China" :
            val.innerHTML = "<option>Shanghai</option><option>Kunming</option><option>Beijing</option><option>Yantai</option>";
            break;
        case "Japan" :
            val.innerHTML = "<option>Tokyo</option><option>Osaka</option><option>Kamakura</option>";
            break;
        case "Italy" :
            val.innerHTML = "<option>Roma</option><option>Milan</option><option>Venice</option><option>Florence</option>";
            break;
        case "America" :
            val.innerHTML = "<option>New York</option><option>San Francisco</option><option>Washington</option>";
            break;
        default :
            alert("error");
    }
}