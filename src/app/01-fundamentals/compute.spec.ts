import { compute } from './compute';

describe('Compute', () => {
    it('should return 0 if input is negative',() => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should increment the input if it is positive',() => {
        const result = compute(0);
        expect(result).toBe(1);
    });
});

