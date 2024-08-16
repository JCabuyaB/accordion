const plusButtons = document.querySelectorAll(".plus-btn");

// contenedor de preguntas
const questionsContainer = document.querySelector(".questions");

// contenedor del texto
const textContainer = document.querySelectorAll(".question-answer");

// desplegar
const desplegar = (button) => {
    // contenedor respuesta
    const answer = button.closest(".question").lastElementChild;

    plusButtons.forEach((btn) => {
        if (button !== btn) {
            if (btn.classList.contains("plus-btn--active")) {
                btn.classList.remove("plus-btn--active");
                btn.closest(".question").lastElementChild.classList.remove(
                    "question-answer--active"
                );
            }
        }
    });

    button.classList.toggle("plus-btn--active");
    answer.classList.toggle("question-answer--active");
};


// eventos mediante delegacion
questionsContainer.addEventListener("click", (e) => {
    if (e.target.matches("i.plus-btn")) {
        // contenedor de la respuesta

        desplegar(e.target);
    }
});
