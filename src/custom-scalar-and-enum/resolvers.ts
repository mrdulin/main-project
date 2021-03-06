import { IAppContext } from './appContext';
import { IResolvers } from 'apollo-server';

export const resolvers: IResolvers = {
  Device: {
    UNKNOWN: 'Other',
    DESKTOP: 'Computers',
    HIGH_END_MOBILE: 'Mobile devices with full browsers',
    TABLET: 'Tablets with full browsers',
    CONNECTED_TV: 'Devices streaming video content to TV screens',
  },

  Query: {
    async campaignPerformanceReports(_, __, { db }: IAppContext) {
      return db.campaignPerformanceReports;
    },
    // https://stackoverflow.com/questions/58394659/cant-custom-value-of-graphql-enum#58396460
    async someQuery(_, { device }) {
      console.log(`device=${device}`);
      return device;
    },
  },
};
