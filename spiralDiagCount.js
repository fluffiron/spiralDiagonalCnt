function spiralCnt(dim)
{
	var rightTop = 1;
	var sum = 1;
	
	for(var tDim = 3; tDim <= dim; tDim += 2)
	{
		var rightButtom = rightTop + (    tDim - 1);
		var leftBottom  = rightTop + (2 * tDim - 2);
		var leftTop     = rightTop + (3 * tDim - 3);
		rightTop        = rightTop + (4 * tDim - 4);
		sum += rightButtom + leftBottom + leftTop + rightTop;
	}
	return sum;
}