document.getElementById("reservation-btn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var startDate = new Date();
    var endDate = new Date();
    endDate.setDate(startDate.getDate() + 7); // Asumiendo una estadía de 7 días
    
    alert("¡Reservación realizada!\n\nNombre: " + name + "\nFecha de inicio: " + startDate.toDateString() + "\nFecha de fin: " + endDate.toDateString());
  });
  
