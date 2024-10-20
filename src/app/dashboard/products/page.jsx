'use client'
import Layout from '@/Components/Layout';
import React from 'react';
import withAuth from '../../../../middleware/withAuth';

const page = () => {
    return (
        <Layout>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-4">This is your profile page.</p>
    </Layout>
    );
};

export default page;