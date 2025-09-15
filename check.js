// サンプル関数: 2つの数値を加算する
function add(a, b) {
	return a + b;
}

// サンプル関数: 文字列が回文かどうか判定する
function isPalindrome(str) {
	const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	return cleaned === cleaned.split('').reverse().join('');
}

// サンプルのテスト出力
console.log('add(2, 3) =', add(2, 3)); // 5
console.log('isPalindrome("racecar") =', isPalindrome("racecar")); // true
console.log('isPalindrome("hello") =', isPalindrome("hello")); // false
