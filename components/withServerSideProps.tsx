import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function withGetServerSideProps(getServerSideProps: GetServerSideProps): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context);
    } catch (error) {
      console.log(error);

      if (error) {
        return {
          notFound: true,
        };
      }

      console.log(error);

      throw error;
    }
  };
}
