import * as React from 'react'
import uniqueId from 'lodash/uniqueId'

import HatColor from './HatColor'

export default class Hijab extends React.Component {
  static optionValue = 'Hijab'

  private filter1 = uniqueId('react-filter-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')

  render() {
    const { filter1, mask1, mask2, path1, path2 } = this
    return (
      <g id="Top" strokeWidth="1" fillRule="evenodd">
        <defs>
          <rect id={path1} x="0" y="0" width="264" height="280" />
          <path
            d="M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z"
            id={path2}
          />
          <filter
            x="-0.8%"
            y="-2.0%"
            width="101.5%"
            height="108.0%"
            filterUnits="objectBoundingBox"
            id={filter1}
          >
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
              type="matrix"
              in="shadowOffsetOuter1"
              result="shadowMatrixOuter1"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill="white">
          <use xlinkHref={'#' + path1} />
        </mask>
        <g id="Mask" />
        <g id="Top/Accesories/Hijab" mask={`url(#${mask1})`}>
          <g transform="translate(-1.000000, 0.000000)">
            <mask id={mask2} fill="white">
              <use xlinkHref={'#' + path2} />
            </mask>
            <use
              id="Hijab-Mask"
              stroke="none"
              fill="#3B6BAD"
              fillRule="evenodd"
              xlinkHref={'#' + path2}
            />
            <HatColor maskID={mask2} defaultColor="Blue03" />
            <path
              d="M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z"
              id="Band"
              stroke="none"
              fillOpacity="0.5"
              fill="#FFFFFF"
              fillRule="evenodd"
              mask={`url(#${mask2})`}
            />
            <path
              d="M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z"
              id="Shadows"
              stroke="none"
              fillOpacity="0.16"
              fill="#000000"
              fillRule="evenodd"
              opacity="0.899999976"
              mask={`url(#${mask2})`}
            />
            {this.props.children}
          </g>
        </g>
      </g>
    )
  }
}
