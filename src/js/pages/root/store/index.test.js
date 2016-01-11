import chai from 'chai';
import store from './index.test';

var expect = chai.expect;

describe('RootStore', () => {
    it('is not null', () => {
        expect(store).to.be.an('object');
    });
});
