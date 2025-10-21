function darLike(boton) {
    const post = boton.closest(".post");
    const contador = post.querySelector(".like-count");

    // Extraer número actual
    let actual = parseInt(contador.innerText) || 0;

    // Incrementar y actualizar
    actual++;
    contador.innerText = `${actual} Like(s)`;
}