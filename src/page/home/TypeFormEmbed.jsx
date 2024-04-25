import React, { useEffect } from 'react';

const TypeFormEmbed = () => {
  useEffect(() => {
    // Cargar el script de Typeform de manera programática
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id='contact'
        data-tf-widget="QKJIj7jc"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Contacto"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ 
          width: "100%", 
          height: "900px",
          backgroundColor: "#000", // Fondo negro
          color: "#fff", // Letras blancas
        }}
        dangerouslySetInnerHTML={{ __html: '' }}
      />
    </>
  );
}

export default TypeFormEmbed;
