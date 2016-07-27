module.exports = function (destString, splitNum) {
        splitNum = parseInt(splitNum) || 1;

        if (typeof destString != 'string' || parseInt(splitNum) == 0) {
          return false;
        }


        var splitLength = Math.abs(splitNum),
            strGroup = '',
            resArr = [];

        var strToArr = destString.split('');

        if (splitLength >= destString.length) {
          return [destString];
        }

        if (splitLength == 1) {
          return strToArr;
        }

        if (splitNum > 0) {

            for (var iterator = 0; iterator < destString.length; iterator ++) {
                strGroup += destString[iterator];

                if (strGroup.length == splitLength) {
                  resArr.push(strGroup);
                  strGroup = '';
                }
            }

            if (strGroup.length > 0) {
              resArr.push(strGroup);
            }
        } else {

            for (var iterator = destString.length-1; iterator >= 0 ; iterator --) {
                strGroup = destString[iterator] + strGroup;

                if (strGroup.length == splitLength) {
                  resArr.unshift(strGroup);
                  strGroup = '';
                }
            }

            if (strGroup.length > 0) {
              resArr.unshift(strGroup);
            }
        }

        return resArr;
}
