document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.rating-button');
    const submitBtn = document.getElementById('submitBtn');
    const selected = document.getElementById('selected');
    const ratingSection = document.getElementById('ratingSection');
    const thankYouSection = document.getElementById('thankYouSection');
    let buttonText = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('bg-Orange'); // Remove previous background color
                btn.classList.add('bg-[rgb(41,49,60)]'); // Revert to original color
            });
            button.classList.remove('bg-[rgb(41,49,60)]'); // Remove original color
            button.classList.add('bg-Orange'); // Add selected color
            buttonText = button.textContent;
        });
    });

    submitBtn.addEventListener('click', () => {
        if (buttonText) {
            selected.textContent = `You selected ${buttonText} out of 5`;
            ratingSection.classList.add('hidden');
            thankYouSection.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});