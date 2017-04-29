/**
 * Base case for strategy pattern used by range class
 **/
class RangeStrategy {
    /**
     * Filter row out according to given column value
     * @param {DataFrame} df target DataFrame
     * @param {String} column column needed to be filter by RangeStrategy
     * @param {Number} value Range value for filtering
     **/
    filterRange(df, column, value) {

    }
}

/**
 * Strategy pattern for filtering column looking for row that is equal to given
 * value.
 **/
class EqualRange extends RangeStrategy {
    /**
     * Filter row that is equal to given value.
     * @param {DataFrame} df target DataFrame
     * @param {String} column column needed to be filter by RangeStrategy
     * @param {Number} value Range value for filtering
     **/
    filterRange(df, column, value) {
        return df.filter(row => row.get(column) === value)
    }
}

/**
 * Strategy pattern for filtering column looking for row that is greater or equal to given
 * value.
 **/
class GreaterRange extends RangeStrategy {
    /**
     * Filter row that is grater or equal to given value.
     * @param {DataFrame} df target DataFrame
     * @param {String} column column needed to be filter by RangeStrategy
     * @param {Number} value Range value for filtering
     **/
    filterRange(df, column, value) {
        return df.filter(row => row.get(column) >= value)
    }
}

/**
 * Strategy pattern for filtering column looking for row that is lesser or equal to given
 * value.
 **/
class LesserRange extends RangeStrategy {
    /**
     * Filter row that is lesser or equal to given value.
     * @param {DataFrame} df target DataFrame
     * @param {String} column column needed to be filter by RangeStrategy
     * @param {Number} value Range value for filtering
     **/
    filterRange(df, column, value) {
        return df.filter(row => row.get(column) <= value)
    }
}

/**
 * Strategy pattern for filtering column looking for row that is not equal to given
 * value.
 **/
class NotEqualRange extends RangeStrategy {
    /**
     * Filter row that is not equal to given value.
     * @param {DataFrame} df target DataFrame
     * @param {String} column column needed to be filter by RangeStrategy
     * @param {Number} value Range value for filtering
     **/
    filterRange(df, column, value) {
        return df.filter(row => row.get(column) !== value)
    }
}
