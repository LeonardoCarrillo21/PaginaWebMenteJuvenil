


console.info("ejecutando");
var doc = new jsPDF('p','mm','letter');
doc.setFontSize(22);
doc.setTextColor(0,85,136);
doc.setFont("helvetica");
doc.setFontType("bold");

doc.text(20, 140, 'Hola ' + nombre);
var logo = new Image();
logo.src = 'imagen.jpg';
doc.addImage(logo, 'JPEG', 10, 10, 50, 70);
doc.save('Prueba.pdf');