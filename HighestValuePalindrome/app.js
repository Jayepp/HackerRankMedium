function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let diff = new Array(n).fill(false);
    let left = 0, right = n - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            let max = Math.max(arr[left], arr[right]);
            arr[left] = arr[right] = max;
            diff[left] = diff[right] = true;
            k--;
        }
        left++;
        right--;
    }

    if (k < 0) return '-1';

    left = 0;
    right = n - 1;

    while (left <= right && k > 0) {
        if (left === right) {
            if (k > 0) arr[left] = '9';
        } else {
            if (arr[left] !== '9') {
                if (diff[left] && k >= 1) {
                    arr[left] = arr[right] = '9';
                    k -= 1;
                } else if (!diff[left] && k >= 2) {
                    arr[left] = arr[right] = '9';
                    k -= 2;
                }
            }
        }
        left++;
        right--;
    }

    return arr.join('');
}
