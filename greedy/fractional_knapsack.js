function fractionalKnapsack(capacity, items) {
    // Sort items by value-to-weight ratio in descending order
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;

    for (let item of items) {
        if (capacity === 0) break;

        // Take as much as possible from the current item
        let takeWeight = Math.min(item.weight, capacity);
        totalValue += takeWeight * (item.value / item.weight);
        capacity -= takeWeight;
    }

    return totalValue;
}

// Example usage
const items = [
    { value: 60, weight: 10 },
    { value: 100, weight: 20 },
    { value: 120, weight: 30 }
];

const capacity = 50;
const maxValue = fractionalKnapsack(capacity, items);
console.log("Maximum value in Knapsack =", maxValue);
