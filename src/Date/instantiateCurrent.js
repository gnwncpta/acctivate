function instantiateCurrent(activeBefore){
    // Instantiate the Date
    let dt = new Date(activeBefore);

    const dateBefore = dt.toString();
    const dayFrom = dateBefore.slice(0, 3); // get the dayFrom
    const monthFrom = dateBefore.slice(4, 7) // get Month Before
    const dateFrom = dateBefore.slice(8, 10); // get the date
    const yearFrom = dateBefore.slice(11, 15); // get the Year

    return `${dayFrom}, ${dateFrom} ${monthFrom} ${yearFrom}`;
}

export default instantiateCurrent;