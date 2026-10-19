// Displays a message in the browser console
console.log("Yume is running!");

// Fetches user data from the API
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);

    console.log(data.length);

    // Finds the HTML element by its ID
    const usersElement = document.getElementById("total-users");

    // Update the displayed number of users
    usersElement.textContent = data.length;
});

// Fetches post data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    console.log(data);

    const totalPosts = data.length;

    // Finds the HTML element by its ID
    const postsElement = document.getElementById("total-posts");

    // Update the displayed number of posts
    postsElement.textContent = totalPosts;

    // Finds posts written by user 1
    const userPosts = data.filter(post => post.userId === 1);

    // Displays the posts written by user 1
    console.log(userPosts);

    // Counts posts written by user 1
    const userPostsCount = userPosts.length;

    // Displays the number of posts written by user 1
    console.log("Posts by user 1:", userPostsCount);

    const userLabels = [];
    const postCounts = [];

    // Goes through user IDs from 1 to 10
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(userId => {

        // Finds posts written by the current user
        const postByUser = data.filter(post => post.userId === userId);

        // Counts the user's posts
        const postCount = postByUser.length;

        // Adds the user label to the array
        userLabels.push("User " + userId);

        // Adds the post count to the array
        postCounts.push(postCount);
});

    // Displays the prepared chart data
    console.log(userLabels);
    console.log(postCounts);


// Finds the canvas element in HTML
const chartElement = document.getElementById("postsChart");

// Creates a bar chart
new Chart(chartElement, {
    type: "bar",

    data: {
        labels: userLabels,

        datasets: [{
            label: "Number of Posts",
            data: postCounts,
            backgroundColor: "#C999D9",
            borderColor: "#7952A3",
            borderWidth: 2,
            borderRadius: 8
        }]
    },

    options: {
        responsive: true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Closes the posts fetch callback
});


// Fetches comment data from the API
fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(data => {
    console.log(data);

    const totalComments = data.length;

    // Finds the HTML element for total comments
    const commentsElement = document.getElementById("total-comments");

    // Update the displayed number of comments
    commentsElement.textContent = totalComments;

    // Stores the number of comments for each post
    const commentsPerPost = [];

    // Goes through post IDs from 1 to 100
    for (let postId = 1; postId <= 100; postId++) {

        // Finds comments belonging to the current post
        const postComments = data.filter(comment => comment.postId === postId);

        // Stores the post ID and its comment count
        commentsPerPost.push({
            postId: postId,
            count: postComments.length
        });
    }

    // Displays the comment counts in the console
    console.log(commentsPerPost);

    // Sorts posts from most to least commented
    commentsPerPost.sort((a, b) => b.count - a.count);

    // Selects the first five posts
    const topFivePosts = commentsPerPost.slice(0, 5);

    // Displays the top five posts
    console.log("Top 5 most commented post:", topFivePosts);

    // Finds the HTML list for the top posts
    const topPostsElement = document.getElementById("top-posts");

    // Adds each top post to the list
    topFivePosts.forEach(post => {

        // Create a new list item
        const listItem = document.createElement("li");

        // Sets the list item text
        listItem.textContent = "Post" + post.postId + " - " + post.count + "comments";

        // Adds the item to the HTML list
        topPostsElement.appendChild(listItem);
    });

    // Creates labels for the top five posts chart
    const topPostLabels = topFivePosts.map(post => "Post" + post.postId);

    // Gets the number of comments for each post
    const topPostCounts = topFivePosts.map(post => post.count);

    // Displays the prepared chart data
    console.log(topPostLabels);
    console.log(topPostCounts);

    
// Finds the canvas for the top posts chart
const topChartElement = document.getElementById("topPostsChart");

// Creates a horizontal bar chart
new Chart(topChartElement, {
    type: "bar",

    data: {
        labels: topPostLabels,

        datasets: [{
            label: "Number of Comments",
            data: topPostCounts,
            backgroundColor: "#E6A8D7",
            borderColor: "#7952A3",
            borderWidth: 2,
            borderRadius: 8
        }]
    },

    options: {
        indexAxis: "y",
        responsive: true,

        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});


    //Fetches the post to calculate the average
    fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response => response.json())
         .then(posts => {
            // Calculates the average using the actual number of posts
            const averageComments = totalComments / posts.length;

            // Finds the HTML element by the average
            const averageElement = document.getElementById("average-comments");

            // Updates the displayed average
            averageElement.textContent = averageComments;
         });


    // Close the comments getch callbackl
        });

    // Finds the cat logo button
    const logoButton = document.getElementById("logo-button");

    // Scrolls the page to the top when the cat is clicked
    logoButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
});

 // Finds the cloud theme button
const themeButton = document.getElementById("theme-button");

// Changes the dashboard theme when the cloud is clicked
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
