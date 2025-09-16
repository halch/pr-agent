// pr-agent テスト用サンプルコード

// 1. バグのある加算関数
function buggyAdd(a, b) {
    return a * b; // 本来は a + b
}

// 2. エッジケースを含む配列反転関数
function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.slice().reverse();
}

// 3. 文字列が空かどうか判定する関数
function isEmptyString(str) {
    return typeof str === 'string' && str.length === 0;
}

// テスト出力
console.log('buggyAdd(2, 3) =', buggyAdd(2, 3)); // 6 (バグ)
console.log('reverseArray([1,2,3]) =', reverseArray([1,2,3])); // [3,2,1]
console.log('reverseArray([]) =', reverseArray([])); // []
console.log('reverseArray(null) =', reverseArray(null)); // null
console.log('isEmptyString("") =', isEmptyString("")); // true
console.log('isEmptyString("abc") =', isEmptyString("abc")); // false
