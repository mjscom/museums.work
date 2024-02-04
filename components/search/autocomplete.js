import useMeasure from "react-use-measure";
import { useState, useRef } from "react";
import { connectAutoComplete } from "react-instantsearch-dom";
import Link from "next/link";

import useOnClickOutside from "./use-onclick-outside";

import styles from "./autocomplete.module.css";

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const ref = useRef();
  const [width, bounds] = useMeasure();
  const [open, setOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <div class="field has-addons" ref={width}>
        <div className="control is-expanded">
          <input
            className="input is-large"
            type="text"
            placeholder="Enter a city, municipality, or town"
            value={currentRefinement}
            onChange={(e) => refine(e.currentTarget.value)}
            onClick={(e) => setOpen(true)}
          />
        </div>
        <div class="control">
          <a class={`${styles.search} button is-large`}>
            <i className={styles.ggSearch}></i>
          </a>
        </div>
      </div>

      <div
        className={`${styles.list} ${open ? styles.listShow : ""}`}
        style={{ width: bounds.width }}
      >
        {hits.map((hit) => (
          <Link
            prefetch={false}
            href={`/s/location/${hit.country}/${hit.nameUrl}`}
          >
            <a>
              <div key={hit.objectID} className={styles.item}>
                {hit.name}, {hit.country}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default connectAutoComplete(Autocomplete);
