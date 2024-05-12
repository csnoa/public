// Select the target node
const targetNode = document;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            // Here you can add your logic to remove elements with z-index of 10
            // For example:
            const elements = document.querySelectorAll('[style="z-index: 2147483647;"]');
            elements.forEach(element => {
                element.remove();
            });
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
