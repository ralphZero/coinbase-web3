import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'nfp0o5sr',
    dataset: 'production',
    apiVersion: '2022-01-26',
    token: 'sk9671bMv5w6TpE9Xy1NpDSYTcVtnSe7aV5xRkcZkCntcNSJzecDBcqnVnJ0Xs2irihUTzLIeRhnMSCl6MUECpNFtS50zaC6h0UweybdAt3n53DKgmhz31dPDxtuJ6Ph8tahxw8jvk3suWSxxeKbcFvN1sg0yYGyIXUTyG6TDMsnGg9mqtl9',
    useCdn: false,
});