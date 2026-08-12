<!-- Script para WordPress/Divi - Envía el formulario al Worker de Cloudflare -->
<!-- Pegar en WordPress → Apariencia → Personalizar → CSS/JS adicional -->
<!-- O en WordPress → Apariencia → Editor → footer.php (antes de </body>) -->

<script>
(function() {
  var WORKER_URL = 'https://offensive-zone-form-handler.camaguapa.workers.dev';

  document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('.et_pb_contact_form');

    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        var submitBtn = form.querySelector('.et_pb_contact_submit');
        var originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        var allInputs = form.querySelectorAll('input, textarea');
        var nameVal = '';
        var emailVal = '';
        var messageVal = '';

        allInputs.forEach(function(el) {
          var n = el.name || '';
          if (n.indexOf('nombre') !== -1 || n.indexOf('name') !== -1) nameVal = el.value;
          if (n.indexOf('email') !== -1) emailVal = el.value;
          if (n.indexOf('message') !== -1) messageVal = el.value;
        });

        console.log('Form fields found:', { name: nameVal, email: emailVal, message: messageVal, totalInputs: allInputs.length });

        var data = {
          name: nameVal,
          email: emailVal,
          message: messageVal,
          source: 'miprimeraweb'
        };

        fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(function(res) { return res.json(); })
        .then(function(result) {
          if (result.success) {
            alert('¡Mensaje enviado correctamente!');
            form.reset();
          } else {
            throw new Error(result.error || 'Error al enviar');
          }
        })
        .catch(function(err) {
          console.error('Error:', err);
          alert('Error al enviar el mensaje. Intente nuevamente.');
        })
        .finally(function() {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
      });
    });
  });
})();
</script>
