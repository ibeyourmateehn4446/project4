function insertionSort(arr) {
    // Traverse through 1 to arr.length
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        // Initialize the variable for the position to insert
        let j = i - 1;

        // Shift elements of arr[0..i-1] that are greater than current
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--;
        }
        // Insert the current element at the correct position
        arr[j + 1] = current;
    }
    return arr;
}
