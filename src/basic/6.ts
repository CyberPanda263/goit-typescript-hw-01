    interface Iuser {
        name: string,
        age: number,
        email: string,
        address?: object
    }
    
    const mango:Iuser = {
            name: 'Mango',
            age: 30,
            email: 'john@example.com',
            address: {
                city: 'New York',
                country: 'USA'
            }
        };
        
        const poly:Iuser = {
            name: 'Mango',
            age: 30,
            email: 'john@example.com'
        };