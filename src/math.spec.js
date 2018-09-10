import { add, multiply } from './math'

describe('internal math library', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(3, 5)).toEqual(8)
    })
    it('works with just one number', () => {
      expect(add(5)).toEqual(5)
    })
    it('works with any number of arguments', () => {
      expect(add(1, 2, 3, 4)).toEqual(10)
    })
  })
  describe('multiply', () => {
    it('multiply two numbers', () => {
      expect(multiply(2, 4)).toEqual(8)
    })
    it('works with just one number', () => {
      expect(multiply(2)).toEqual(2)
    })
    it('works with any number of arguments', () => {
      expect(multiply(1, 2, 3)).toEqual(6)
    })
  })
})
