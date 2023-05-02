// Implement the type version of Array.unshift

// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

type Unshift<T extends unknown[], V> = [V, ...T];

type Result2 = Unshift<[1, 2], 0>;
