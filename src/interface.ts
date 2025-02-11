import { ITokenObject } from "@scom/scom-token-list";

export interface INetwork {
  chainId: number;
  name: string;
  img?: string;
  rpc?: string;
	symbol?: string;
	env?: string;
  explorerName?: string;
  explorerTxUrl?: string;
  explorerAddressUrl?: string;
  isDisabled?: boolean;
};

export const enum EventId {
  ConnectWallet = 'connectWallet',
  IsWalletConnected = 'isWalletConnected',
  chainChanged = 'chainChanged',
  IsWalletDisconnected = "IsWalletDisconnected",
  EmitNewToken = "EmitNewToken",
  Paid = "Paid"
};

export type TokenMapType = { [token: string]: ITokenObject };

export enum SITE_ENV {
  DEV = 'dev',
  TESTNET = 'testnet',
  MAINNET = 'mainnet',
}
