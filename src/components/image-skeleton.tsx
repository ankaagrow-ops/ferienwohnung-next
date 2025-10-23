'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageSkeleton({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={{ width, height }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ width, height }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">Bild konnte nicht geladen werden</div>
          </div>
        </div>
      )}
      
      {/* Actual Image */}
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          priority={priority}
          sizes={sizes}
          quality={85}
        />
      )}
    </div>
  );
}
