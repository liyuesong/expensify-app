// get visible expenses
import moment from 'moment';

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // create after the startDate
        // need to be comparable with 'moment' type
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        // figure out if expenses.description has the text variable string inside of it
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        // sort by...
        if (sortBy === 'date') {
            // more recent one shows first
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            // sort by amount: item with greater amount shows first
            return a.amount < b.amount ? 1 : -1;
        }
    });
};