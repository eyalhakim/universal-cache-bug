export class ArrayHelper {
    static removeWhere<T>(array: T[], condition: (element: T) => boolean) {
        let i = array.length;
        while (i--) {
            if (condition(array[i])) {
                return array.splice(i, 1);
            }
        }
    }

    static uniqueBy(myArr, prop) {
        return myArr.filter((obj, pos, arr) =>
            arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
        );
    }
}