export function filterDigits(maxDigits: number, viewString: string): string {
  const onlyDigits = viewString.replace(/\D/g, '');
  return onlyDigits.slice(0, maxDigits);
}

export function maskCpf(value: string): string {
  	value = value.replace(/\D/g, '');
  
  	if(!value.length) {
		return "";
	}
  	if (value.length <= 3) {
        return value;
    }
    if (value.length <= 6) {
        return value.slice(0, 3) + '.' + value.slice(3);
    }
    if (value.length <= 9) {
        return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6);
    }
    return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9, 11);
}

export function maskPhone(value: string): string {
    value = value.replace(/\D/g, '');
  
    if (!value.length) {
		return "";
    }
    if (value.length < 3) {
        return '(' + value;
    }
    if (value.length < 7) {
        return '(' + value.slice(0, 2) + ') ' + value.slice(2);
    }
    if (value.length < 11) {
        return '(' + value.slice(0, 2) + ') ' + value.slice(2, 6) + '-' + value.slice(6);
    }
    return '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
}