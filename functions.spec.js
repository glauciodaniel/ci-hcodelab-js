const functions = require('./functions')

//it ou test

it(`Somando dois valores`,()=>{
    expect(functions.soma(2,2)).toBe(4)
})

it(`Should be null`,()=>{
    expect(functions.isNull()).toBeNull()
})

it(`Should be Falsy`, ()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
})

it(`Should be Glaucio Santos Object`, ()=>{
    expect(functions.createUser()).toEqual({
        firstName:"Glaucio",
        lastName: "Santos"
    })
})

it(`Should be under 1600`, ()=>{
    const val1 = 800;
    const val2 = 800;

    expect(val1 + val2).toBeLessThanOrEqual(1600)
})


it(`Using regex to match expression`,()=>{
    expect("Developer").not.toMatch(/JS/i)
})

it(`Admin should be in usernames`,()=>{
    const usernames = ["glaucio", "rafael",
     "ronaldo", "joao", "dj"]
    expect(usernames).toContain("dj");
})


// it(`User fetched name should be Glenna Reichert`, () =>{
//     expect.assertions(1);

//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual("Glenna Reichert")
//     })
// })

it(`User fetched name should be Glenna Reichert`, async () =>{
    expect.assertions(1);

    const data = await functions.fetchUser()
        expect(data.name).toEqual("Glenna Reichert")
})