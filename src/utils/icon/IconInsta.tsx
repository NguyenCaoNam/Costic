import React from 'react'

type IconInsta = {
  width?: number,
  height?: number,
  color?: string
}

const IconInsta = ({width, height, color}:IconInsta) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width||"21"} height={height||"20"} viewBox="0 0 21 20" fill="none">
      <path d="M11.079 0.00123035C11.8087 -0.00156977 12.5384 0.00576409 13.2679 0.0232297L13.4619 0.0302294C13.6859 0.0382291 13.9069 0.0482288 14.1739 0.0602284C15.2378 0.110227 15.9638 0.278221 16.6008 0.525213C17.2608 0.779204 17.8168 1.12319 18.3727 1.67917C18.8811 2.17876 19.2745 2.78308 19.5257 3.45011C19.7727 4.08709 19.9407 4.81407 19.9907 5.87803C20.0027 6.14402 20.0127 6.36601 20.0207 6.59001L20.0267 6.784C20.0444 7.51317 20.0521 8.24255 20.0497 8.97193L20.0507 9.7179V11.0279C20.0531 11.7576 20.0455 12.4873 20.0277 13.2168L20.0217 13.4108C20.0137 13.6348 20.0037 13.8558 19.9917 14.1227C19.9417 15.1867 19.7717 15.9127 19.5257 16.5497C19.2754 17.2174 18.8818 17.8222 18.3727 18.3216C17.8727 18.8299 17.2681 19.2233 16.6008 19.4746C15.9638 19.7216 15.2378 19.8896 14.1739 19.9396C13.9069 19.9516 13.6859 19.9615 13.4619 19.9696L13.2679 19.9756C12.5384 19.9933 11.8087 20.001 11.079 19.9986L10.333 19.9995H9.02405C8.29434 20.002 7.56463 19.9943 6.83513 19.9766L6.64113 19.9706C6.40375 19.9619 6.16642 19.9519 5.92916 19.9406C4.86519 19.8906 4.13922 19.7206 3.50124 19.4746C2.83395 19.2239 2.22952 18.8304 1.7303 18.3216C1.22136 17.8219 0.827556 17.2172 0.57634 16.5497C0.329349 15.9127 0.161354 15.1867 0.111356 14.1227C0.100219 13.8855 0.0902197 13.6481 0.0813572 13.4108L0.0763575 13.2168C0.0579217 12.4873 0.0495877 11.7576 0.0513582 11.0279V8.97193C0.0485674 8.24255 0.0559012 7.51317 0.0733576 6.784L0.0803573 6.59001C0.088357 6.36601 0.0983566 6.14402 0.110356 5.87803C0.160355 4.81307 0.328349 4.08809 0.57534 3.45011C0.826704 2.78276 1.22128 2.1786 1.7313 1.68017C2.23018 1.17094 2.83422 0.776777 3.50124 0.525213C4.13922 0.278221 4.86419 0.110227 5.92916 0.0602284L6.64113 0.0302294L6.83513 0.0252297C7.56429 0.00680315 8.29366 -0.0015308 9.02305 0.00023046L11.079 0.00123035ZM10.051 5.00106C9.38855 4.99169 8.73082 5.11408 8.11606 5.36112C7.5013 5.60815 6.94177 5.97491 6.46999 6.44007C5.9982 6.90523 5.62357 7.45951 5.36786 8.07072C5.11216 8.68192 4.98048 9.33785 4.98048 10.0004C4.98048 10.6629 5.11216 11.3189 5.36786 11.9301C5.62357 12.5413 5.9982 13.0956 6.46999 13.5607C6.94177 14.0259 7.5013 14.3926 8.11606 14.6397C8.73082 14.8867 9.38855 15.0091 10.051 14.9997C11.3771 14.9997 12.6488 14.473 13.5864 13.5353C14.5241 12.5977 15.0508 11.3259 15.0508 9.99989C15.0508 8.67385 14.5241 7.40213 13.5864 6.46448C12.6488 5.52683 11.3771 5.00106 10.051 5.00106ZM10.051 7.00099C10.4495 6.99365 10.8455 7.06579 11.2158 7.21319C11.5861 7.3606 11.9233 7.58031 12.2077 7.85951C12.4922 8.1387 12.7181 8.47177 12.8724 8.83927C13.0266 9.20677 13.1061 9.60132 13.1062 9.99988C13.1062 10.3984 13.0269 10.793 12.8728 11.1606C12.7186 11.5281 12.4928 11.8613 12.2084 12.1406C11.9241 12.4198 11.587 12.6397 11.2167 12.7872C10.8465 12.9347 10.4505 13.007 10.052 12.9998C9.2564 12.9998 8.49336 12.6837 7.93077 12.1211C7.36818 11.5585 7.05212 10.7955 7.05212 9.99989C7.05212 9.20427 7.36818 8.44123 7.93077 7.87864C8.49336 7.31605 9.2564 6.99999 10.052 6.99999L10.051 7.00099ZM15.3008 3.50111C14.9782 3.51402 14.6732 3.65126 14.4495 3.88407C14.2258 4.11688 14.1009 4.42721 14.1009 4.75007C14.1009 5.07292 14.2258 5.38326 14.4495 5.61607C14.6732 5.84888 14.9782 5.98611 15.3008 5.99903C15.6323 5.99903 15.9503 5.86733 16.1847 5.63292C16.4191 5.39851 16.5508 5.08058 16.5508 4.74907C16.5508 4.41756 16.4191 4.09963 16.1847 3.86522C15.9503 3.6308 15.6323 3.49911 15.3008 3.49911V3.50111Z" fill={color||"white"} />
    </svg>
  )
}

export default IconInsta