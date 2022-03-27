const printableDate = (epochTime: number) => {
    const date: Date = new Date(epochTime * 1000);
    return (
        date.getHours() +
        ':' +
        date.getMinutes() +
        '  ' +
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '-' +
        date.getFullYear()
    );
};

export {printableDate};
