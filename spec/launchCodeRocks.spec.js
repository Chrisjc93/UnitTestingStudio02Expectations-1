const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  it('When passed a number that is ONLY divisible by 2, return "Launch!"', function(){
    let expected = 'Launch!'
    let actual = launchOutput(2)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is ONLY divisible by 3, return "Code!"', function(){
    let expected = 'Code!'
    let actual = launchOutput(3)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is ONLY divisible by 5, return "Rocks!"', function(){
    let expected = 'Rocks!'
    let actual = launchOutput(5)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is divisible by 2 AND 3, return "LaunchCode!"', function(){
    let expected = 'LaunchCode!'
    let actual = launchOutput(6)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is divisible by 3 AND 5, return "Code Rocks!"', function(){
    let expected = 'Code Rocks!'
    let actual = launchOutput(15)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is divisible by 2 AND 5, return "Launch Rocks!"', function (){
    let expected = 'Launch Rocks! (CRASH!!!!)'
    let actual = launchOutput(10)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is divisible by 2, 3, AND 5, return "LaunchCode Rocks!"', function(){
    let expected = 'LaunchCode Rocks!'
    let actual = launchOutput(30)
    expect(expected).toEqual(actual)
  })

  it('When passed a number that is NOT divisible by 2, 3, or 5, return "Rutabagas! That doesnt work."', function(){
    let expected = `Rutabagas! That doesn't work!`;
    let actual = launchOutput(1)
    expect(expected).toEqual(actual)
  })

});