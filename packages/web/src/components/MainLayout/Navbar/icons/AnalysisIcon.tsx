import { Icon, IconProps } from '@chakra-ui/react';

function AnalysisIcon(props: IconProps): JSX.Element {
  return (
    <Icon stroke="currentColor" fill="currentColor" viewBox="0 0 256 256" height="1em" width="1em" {...props}>
      <path d="M236 208a12 12 0 01-12 12H32a12 12 0 01-12-12V48a12 12 0 0124 0v99.032l43.517-43.517a12 12 0 0116.97 0l23.515 23.514L179.032 76h-11.03a12 12 0 010-24h40l.045.002q.57.003 1.138.058c.183.018.36.052.542.078.207.03.414.054.62.094.201.04.397.096.595.146.182.046.365.085.544.14.192.058.378.13.565.197.182.065.366.125.545.2.174.072.34.156.51.236.186.088.373.17.554.267.16.086.313.185.47.278.18.107.362.21.537.326.169.113.327.239.489.36.152.113.307.219.455.34.285.234.556.482.819.74.019.018.04.034.058.053.02.02.035.04.054.06.258.26.506.533.74.817.12.148.226.303.339.454.12.162.246.32.358.488.12.179.224.363.332.547.091.153.188.302.272.46.1.185.184.375.272.564.079.166.162.33.232.5.077.184.138.372.204.558.066.184.136.364.193.55.057.189.099.38.146.571.048.189.101.376.14.568.043.221.07.444.101.667.024.165.055.328.071.495.04.396.06.793.06 1.19V104a12 12 0 01-24 0V92.97l-59.514 59.515a12 12 0 01-16.97 0l-23.516-23.514L44 180.974V196h180a12 12 0 0112 12z" />
    </Icon>
  );
}

export default AnalysisIcon;
