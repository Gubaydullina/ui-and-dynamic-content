        // Save the reference to text-field into a variable.
        const textInput = document.getElementById('itemInput');
        
        // Save the reference to new-item button into a variable.
        const addButton = document.getElementById('addButton');
        
        // Save the reference to unordered list into a variable.
        const shoppingList = document.getElementById('shoppingList');
        
        // Save the reference to paragraph for feedback
        const feedback = document.getElementById('feedback');

        // Start function addItem.
        function addItem() {
            // Create list-item and store output in a variable.
            const listItem = document.createElement('li');
            
            // Check if user entered the value in input text-field.
            if (textInput.value.trim() !== '') {
                // Use textContent property on created list-item
                // and assign it with the value of the text written in the text-field
                listItem.textContent = textInput.value.trim();
                
                // Append list item to unordered list.
                shoppingList.appendChild(listItem);
                
                // Clear a feedback-message.
                feedback.textContent = '';
                
                // Clear the text-field.
                textInput.value = '';
                
                // Put the cursor back to text-field
                textInput.focus();
            } else {
                // Print the message nothing entered in the paragraph "feedback"
                feedback.textContent = 'Nothing entered!';
                textInput.focus();
            }
        }

        // Register your function addItem for click event on button.
        addButton.addEventListener('click', addItem);

        // Allow Enter key to add items
        textInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addItem();
            }
        });

        // Focus on input field when page loads
        window.addEventListener('load', function() {
            textInput.focus();
        });
        