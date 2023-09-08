import React, { useEffect, useRef } from "react";
import { useInfiniteHits } from "react-instantsearch";
import { twMerge } from "tailwind-merge";

interface InfiniteHitsProps {
  hitComponent: any;
  className?: {
    item?: string;
    root?: string;
    list?: string;
  };
}

export const InfiniteHits = ({
  hitComponent: HitComponent,
  className,
  ...props
}: InfiniteHitsProps) => {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className={twMerge("ais-InfiniteHits", className?.item)}>
      <ul className={twMerge("ais-InfiniteHits-list", className?.list)}>
        {hits.map((hit) => (
          <li
            key={hit.objectID}
            className={twMerge("ais-InfiniteHits-item", className?.item)}
          >
            <HitComponent hit={hit} />
          </li>
        ))}
        <li
          className="ais-InfiniteHits-sentinel"
          ref={sentinelRef}
          aria-hidden="true"
        />
      </ul>
    </div>
  );
};
