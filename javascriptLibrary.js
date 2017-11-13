var _ = {
	map:  function(arr, func) {
		var newList;
		for (var i=0; i<arr.length; i++) {
			newList = arr.push(func(arr[i]));
		}
		return newList;
	},

	reduce: function(arr, func) {
		var ans;
		for (var i=0; i<arr.length; i++) {
			ans += func(arr[i]);
		}
		return ans;
	}, 

	find: function(list, predicate) {
		for (var i=0; i<list.length; i++) {
			if (predicate) {
				return list[i];
			}
		}
	},

	filter: function(list, predicate) {
		var arr = [];
		for (var i=0; i<list.length; i++) {
			if (predicate) {
				arr.push(list[i]);
			}
		}
		return arr;
	},

	reject: function(list, predicate) {
		var arr=[];
		for (var i=0; i<list.length; i++) {
			if (!predicate) {
				arr.push(list[i]);
			}
		}
		return arr;
	}

}