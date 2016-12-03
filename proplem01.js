//https://projecteuler.net/problem=1

var sumFunc = function(limit)
{
	var n = limit - 1;
	var sum = 0;

	while (n > 0)
	{
		if ((n % 3 === 0) || (n % 5 === 0))
		{
			sum += n;
		}

		n--;
	}
	return sum;
};

console.log(sumFunc(10));
console.log(sumFunc(1000));