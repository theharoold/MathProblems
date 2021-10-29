function isPrime(number) {
    // 1 isn't prime
    if (number == 1)
        return false;
    // 2 and 3 are prime
    if (number == 2 || number == 3) 
        return true;
    if (number % 2 == 0 || number % 3 == 0) 
        return false;
    const max = Math.floor(Math.sqrt(number)+1);
    for (let i = 6; i < max; i+=6) {
        if ((number % (i - 1) == 0) || (number % (i + 1) == 0))
            return false;
    }
    return true;
}