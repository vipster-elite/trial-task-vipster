import { useSession } from 'next-auth/react';

export default function WalletConnect() {
  const { data: session } = useSession();

  const handleConnectWallet = () => {
    // Implement wallet connection logic here
  };

  return (
    <>
      {!session ? (
        <button onClick={handleConnectWallet}
          className="flex w-fit outline-none border-none justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Connect Wallet
        </button>
      ) : null}
    </>
  );
}