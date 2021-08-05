import { Enterprise } from './entrerprise.entity';

describe('Enterprise', () => {
  let enterprise;
  const properties = [
    'name',
    'city',
    'is_sms',
    'is_Email',
    'logo_url',
    'is_active',
    'type',
  ];

  beforeEach(() => {
    enterprise = new Enterprise();
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
      expect(enterprise).toBeUndefined();
    });
  });
});
