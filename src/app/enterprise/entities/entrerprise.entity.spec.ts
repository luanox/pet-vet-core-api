import { Enterprise } from './entrerprise.entity';
import * as faker from 'faker';

describe('Enterprise', () => {
  let enterprise;
  const properties = [
    'name',
    'city',
    'isSms',
    'isEmail',
    'logoUrl',
    'isActive',
  ];

  beforeEach(() => {
    enterprise = new Enterprise();

    enterprise.name = faker.name.findName();
    enterprise.city = faker.name.findName();
    enterprise.isSms = false;
    enterprise.isEmail = true;
    enterprise.logoUrl = null;
    enterprise.isActive = true;
  });

  it('is defined', () => {
    expect(enterprise).toBeDefined();
  });

  describe('', () => {
    properties.forEach((property) => {
      it(`includes the ${property} property`, () => {
        expect(enterprise[property]).toBeDefined();
      });

      it('properties must match', () => {
        expect(Object.keys(enterprise)).toEqual(properties);
      });
    });
  });

  describe('when enterprise has no properties', () => {
    const enterprise = new Enterprise();

    it('some property is undefined', () => {
      expect(enterprise.name).toBeUndefined();
    });
  });
});
