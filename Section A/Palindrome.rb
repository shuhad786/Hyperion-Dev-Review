def is_palindrome(x)
    if x < 0
        return false
    else 
        reversed = 0
        num = x
        while num != 0 # should be 0, not x
            extracted = num % 10
            reversed = reversed * 10 + extracted
            num = num / 10 # should be num, not x
        end
        if reversed != x
            return false # should use return instead of just false or true
        else
            return true
        end
    end
end