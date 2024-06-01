minOperationsToMakeMedianK(vector<int>& v, int k) {
        sort(begin(v), end(v));
        
        int n = (int) v.size();
        int mid = n / 2;
        long long ans = 0;
        
        for (int i = mid; i < n; i++) {
            ans += max(0, k - v[i]);
        }
        for (int i = mid; i >= 0; i--) {
            ans += max(0, v[i] - k);
        }
        
        return ans;
    }