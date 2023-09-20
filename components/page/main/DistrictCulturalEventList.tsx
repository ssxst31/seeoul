import { useFetchCulturalEvent } from "hooks/useFetchCulturalEvent";
import DistrictSkeleton from "components/page/main/skeleton/DistrictSkeleton";
import DistrictCulturalEvent from "components/page/main/DistrictCulturalEvent";

interface DistrictCulturalEventListProps {
  location: string;
}

export default function DistrictCulturalEventList({ location }: DistrictCulturalEventListProps) {
  const page = "1";

  const search = undefined;
  const sort = location;
  const { totalCulturalEvent } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  if (!totalCulturalEvent) {
    return <DistrictSkeleton width="192" height="288" />;
  }

  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="-2xl:w-[1220px] flex items-center justify-between">
        {totalCulturalEvent?.slice(0, 5).map((culturalEvent, index) => (
          <DistrictCulturalEvent culturalEvent={culturalEvent} key={index} />
        ))}
      </div>
    </div>
  );
}
