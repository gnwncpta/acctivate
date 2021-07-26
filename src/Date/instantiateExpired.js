function instantiateExpired(activeBefore, days){
    // Instantiate the Date
    let dt = new Date(activeBefore);
    dt.setDate(dt.getDate() + parseInt(days)); // get the Future Date

    const dateAfter = dt.toString();
    const dayExp = dateAfter.slice(0, 3);
    const monthExp = dateAfter.slice(4, 7);
    const dateExp = dateAfter.slice(8, 10);
    const yearExp = dateAfter.slice(11, 15);

    return `${dayExp}, ${dateExp} ${monthExp} ${yearExp}`;
}

export default instantiateExpired;