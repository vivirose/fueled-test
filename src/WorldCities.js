import World from "./World";

const WorldCities = ({onSelectCity}) => {

  return (
    <svg
      width="1500"
      height="608"
      viewBox="0 0 1200 708"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="world">
        <World />
        <g id="Sydney" onClick={()=>  onSelectCity('Sydney')}>
          <mask id="path-640-inside-1_1_650" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1100 584L1086 597.5L1100 611L1114 597.5L1100 584Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1100 584L1086 597.5L1100 611L1114 597.5L1100 584Z"
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            mask="url(#path-640-inside-1_1_650)"
          />
        </g>
        <g id="Delhi" onClick={()=>  onSelectCity('Delhi')}>
          <mask id="path-641-inside-2_1_650" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M932 394L918 407.5L932 421L946 407.5L932 394Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M932 394L918 407.5L932 421L946 407.5L932 394Z"
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            mask="url(#path-641-inside-2_1_650)"
          />
        </g>
        <g id="London" onClick={()=>  onSelectCity('London')}>
          <mask id="path-642-inside-3_1_650" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M550 182L536 195.5L550 209L564 195.5L550 182Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M550 182L536 195.5L550 209L564 195.5L550 182Z"
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            mask="url(#path-642-inside-3_1_650)"
          />
        </g>
        <g id="SanFrancisco" onClick={()=>  onSelectCity('San Francisco')}>
          <mask id="path-643-inside-4_1_650" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M153 337L139 350.5L153 364L167 350.5L153 337Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M153 337L139 350.5L153 364L167 350.5L153 337Z"
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            mask="url(#path-643-inside-4_1_650)"
          />
        </g>
        <g id="New York" onClick={()=>  onSelectCity('New York')}>
          <mask id="path-644-inside-5_1_650" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M340 261L326 274.5L340 288L354 274.5L340 261Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M340 261L326 274.5L340 288L354 274.5L340 261Z"
            stroke="white"
            fill="transparent"
            strokeWidth="4"
            mask="url(#path-644-inside-5_1_650)"
          />
        </g>
      </g>
    </svg>
  );
};

export default WorldCities;
