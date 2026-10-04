import React from 'react'
import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
      const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat")
  const long = searchParams.get("lng")
  return [lat, long];
}
