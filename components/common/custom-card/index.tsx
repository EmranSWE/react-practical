import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CustomCard = (data:any) => {
    console.log(data.data)
    return (
        <Card >
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
                <h1>{data.data.name}</h1>
              </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={data.data.image} width={200} height={200} alt="products"></Image>
            </CardContent>
            <CardFooter className="flex justify-between">
              
              <Link href={`/products/${data.data.title}`}><Button>Detail</Button></Link>
            </CardFooter>
          </Card>
    );
};

export default CustomCard;