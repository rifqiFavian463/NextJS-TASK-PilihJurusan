"use client";

import React, { useEffect, useState } from "react";
import useSWR, { SWRConfig, SWRResponse } from "swr";

// Shadcn UI
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

interface Manga {
  title: string;
  image: string;
  endpoint: string;
}
type Res = {
  message?: string;
  success: boolean;
  data: Manga[];
};

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
  }
}

function CardComponent() {
  // retrieve data
  const { data, error, isLoading }: SWRResponse<Res, CustomError, { onErrorRetry: (error: CustomError, key: string, config: any, revalidate: any, { retryCount }: { retryCount: number }) => void }> =
    useSWR("https://komiku-api.fly.dev/api/comic/list?filter=manga", {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.statusCode === 404) return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 2000);
      },
    });

  console.log(`
    result : ${data}
    errorResult : ${error?.statusCode}
    isLoading : ${isLoading}
  `);

  return (
    <div className="flex flex-col items-center mb-2">
      <span>Product List</span>
      {isLoading && (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
      {typeof error !== "undefined" ? (
        <Alert variant="destructive" className="w-50 mt-3" data-item="error">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      ) : null}
      <div className="flex ms-2 me-2 flex-wrap gap-2 justify-center">
        {data?.data.map((comic: Manga) => {
          return (
            <Card className="h-[280px] w-[280px] mt-4" key={comic.endpoint} data-item="card-comic">
              <CardHeader>
                <CardTitle>{comic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={comic.image} alt={comic.title} width={280} height={280} />
              </CardContent>
              <CardFooter>
                <Button variant="link" data-item="detail-comic-button">
                  <Link href={`/product/${comic.endpoint}`}>More info</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function CardComics() {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
        fetcher: async (resource) => {
          const res = await fetch(resource);
          if (!res.ok) {
            throw new CustomError("An error occurred while fetching the data.", res.status);
          }
          const resJSON: Res = await res.json();
          return { ...resJSON, data: resJSON.data.slice(0, 5) };
        },
      }}
    >
      <CardComponent />
    </SWRConfig>
  );
}

export default CardComics;
