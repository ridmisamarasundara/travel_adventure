// Load saved reviews
window.onload = function(){
    displayReviews();
};

function addReview(){
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let message = document.getElementById("message").value;

    if(name === "" || role === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    let review = {
        name: name,
        role: role,
        message: message
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();

    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("message").value = "";
}

function displayReviews(){
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let container = document.getElementById("review-container");

    container.innerHTML = "";

    reviews.reverse().forEach(review => {

        container.innerHTML += `
        <div class="review-box">
            <p>${review.message}</p>

            <div class="user">
                <img src="https://i.pravatar.cc/60">
                <div>
                    <h3>${review.name}</h3>
                    <span>${review.role}</span>
                </div>
            </div>
        </div>
        `;
    });
}