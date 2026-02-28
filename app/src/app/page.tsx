'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { connected, publicKey } = useWallet();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">Superteam Brazil LMS</h1>
        
        <div className="mb-8">
          <WalletMultiButton />
        </div>

        {connected ? (
          <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg w-full">
            <h2 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">Wallet Connected!</h2>
            <p className="text-green-700 dark:text-green-200 break-all">
              Address: {publicKey?.toBase58()}
            </p>
          </div>
        ) : (
          <div className="p-6 bg-blue-100 dark:bg-blue-900 rounded-lg w-full">
            <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-100">Welcome Developer</h2>
            <p className="text-blue-700 dark:text-blue-200">
              Connect your Solana wallet to start learning and building.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
