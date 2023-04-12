/// <amd-module name="@scom/scom-token-modal/scom-token-list/interface.ts" />
declare module "@scom/scom-token-modal/scom-token-list/interface.ts" {
    export interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/avalanche.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/avalanche.ts" {
    export const Tokens_Avalanche: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/ethereum.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/ethereum.ts" {
    export const Tokens_Ethereuem: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/polygon.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/polygon.ts" {
    export const Tokens_Polygon: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/bsc.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/bsc.ts" {
    export const Tokens_BSC: ({
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/fantom.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/fantom.ts" {
    export const Tokens_Fantom: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/cronos.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/cronos.ts" {
    export const Tokens_Cronos: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/mainnet/index.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/mainnet/index.ts" {
    export { Tokens_Avalanche } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/avalanche.ts";
    export { Tokens_Ethereuem } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/ethereum.ts";
    export { Tokens_Polygon } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/polygon.ts";
    export { Tokens_BSC } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/bsc.ts";
    export { Tokens_Fantom } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/fantom.ts";
    export { Tokens_Cronos } from "@scom/scom-token-modal/scom-token-list/tokens/mainnet/cronos.ts";
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/bsc-testnet.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/bsc-testnet.ts" {
    export const Tokens_BSC_Testnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/fuji.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/fuji.ts" {
    export const Tokens_Fuji: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/mumbai.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/mumbai.ts" {
    export const Tokens_Mumbai: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/fantom-testnet.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/fantom-testnet.ts" {
    export const Tokens_Fantom_Testnet: ({
        address: string;
        decimals: number;
        name: string;
        symbol: string;
        isWETH: boolean;
        isCommon?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/amino.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/amino.ts" {
    export const Tokens_Amino: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon?: undefined;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/aminoX-testnet.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/aminoX-testnet.ts" {
    export const Tokens_AminoXTestnet: ({
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/cronos-testnet.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/cronos-testnet.ts" {
    export const Tokens_Cronos_Testnet: ({
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH: boolean;
    } | {
        name: string;
        address: string;
        symbol: string;
        decimals: number;
        isCommon: boolean;
        isWETH?: undefined;
    })[];
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/testnet/index.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/testnet/index.ts" {
    export { Tokens_BSC_Testnet } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/bsc-testnet.ts";
    export { Tokens_Fuji } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/fuji.ts";
    export { Tokens_Mumbai } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/mumbai.ts";
    export { Tokens_Fantom_Testnet } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/fantom-testnet.ts";
    export { Tokens_Amino } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/amino.ts";
    export { Tokens_AminoXTestnet } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/aminoX-testnet.ts";
    export { Tokens_Cronos_Testnet } from "@scom/scom-token-modal/scom-token-list/tokens/testnet/cronos-testnet.ts";
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/tokens/index.ts" />
declare module "@scom/scom-token-modal/scom-token-list/tokens/index.ts" {
    import { ITokenObject } from "@scom/scom-token-modal/scom-token-list/interface.ts";
    const DefaultERC20Tokens: {
        [chainId: number]: ITokenObject[];
    };
    const ChainNativeTokenByChainId: {
        [chainId: number]: ITokenObject;
    };
    const WETHByChainId: {
        [chainId: number]: ITokenObject;
    };
    const getOpenSwapToken: (chainId: number) => ITokenObject;
    const DefaultTokens: {
        [chainId: number]: ITokenObject[];
    };
    const ToUSDPriceFeedAddressesMap: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    const tokenPriceAMMReference: {
        [chainId: number]: {
            [token: string]: string;
        };
    };
    export { DefaultERC20Tokens, ChainNativeTokenByChainId, WETHByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getOpenSwapToken };
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/utils.ts" />
declare module "@scom/scom-token-modal/scom-token-list/utils.ts" {
    import { ITokenObject } from "@scom/scom-token-modal/scom-token-list/interface.ts";
    export enum WalletPlugin {
        MetaMask = "metamask",
        WalletConnect = "walletconnect"
    }
    export const state: {
        userTokens: {
            [key: string]: ITokenObject[];
        };
    };
    export function isWalletConnected(): boolean;
    export function getChainId(): number;
    export const hasMetaMask: () => boolean;
    export const setUserTokens: (token: ITokenObject, chainId: number) => void;
    export const hasUserToken: (address: string, chainId: number) => boolean;
    export const getUserTokens: (chainId: number) => any[] | null;
    export const addUserTokens: (token: ITokenObject) => void;
    export const getChainNativeToken: (chainId: number) => ITokenObject;
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/token.ts" />
declare module "@scom/scom-token-modal/scom-token-list/token.ts" {
    import { ITokenObject, TokenMapType } from "@scom/scom-token-modal/scom-token-list/interface.ts";
    export type DefaultTokensByChainType = Record<number, ITokenObject[]>;
    export type TokenBalancesType = Record<string, string>;
    export class TokenStore {
        private _defaultTokensByChain;
        private _tokenBalances;
        private _tokenMap;
        constructor(defaultTokensByChain: DefaultTokensByChainType);
        get tokenBalances(): TokenBalancesType;
        get tokenMap(): TokenMapType;
        getTokenList(chainId: number): ITokenObject[];
        private getERC20Balance;
        getTokenBalance(token: ITokenObject): string;
        private _updateAllTokenBalances;
        updateAllTokenBalances(): Promise<TokenBalancesType>;
        updateTokenBalances(erc20TokenList: ITokenObject[]): Promise<TokenBalancesType>;
        private _updateTokenMapData;
        updateTokenMapData(): TokenMapType;
    }
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/assets.ts" />
declare module "@scom/scom-token-modal/scom-token-list/assets.ts" {
    import { ITokenObject } from "@scom/scom-token-modal/scom-token-list/interface.ts";
    function fullPath(path: string): string;
    function tokenPath(tokenObj?: ITokenObject, chainId?: number): string;
    const _default: {
        fullPath: typeof fullPath;
        tokenPath: typeof tokenPath;
        fallbackUrl: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-token-modal/scom-token-list/index.ts" />
declare module "@scom/scom-token-modal/scom-token-list/index.ts" {
    import { TokenStore } from "@scom/scom-token-modal/scom-token-list/token.ts";
    import { hasMetaMask, hasUserToken, setUserTokens, getChainId, isWalletConnected, addUserTokens } from "@scom/scom-token-modal/scom-token-list/utils.ts";
    import { DefaultERC20Tokens, ChainNativeTokenByChainId } from "@scom/scom-token-modal/scom-token-list/tokens/index.ts";
    import assets from "@scom/scom-token-modal/scom-token-list/assets.ts";
    let tokenStore: TokenStore;
    const setTokenStore: () => TokenStore;
    export { hasMetaMask, hasUserToken, setUserTokens, addUserTokens, getChainId, isWalletConnected, DefaultERC20Tokens, ChainNativeTokenByChainId, tokenStore, setTokenStore, assets };
}
/// <amd-module name="@scom/scom-token-modal/interface.ts" />
declare module "@scom/scom-token-modal/interface.ts" {
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
    }
    export const enum EventId {
        ConnectWallet = "connectWallet",
        IsWalletConnected = "isWalletConnected",
        chainChanged = "chainChanged",
        IsWalletDisconnected = "IsWalletDisconnected",
        EmitNewToken = "EmitNewToken",
        Paid = "Paid"
    }
    export interface ITokenObject {
        address?: string;
        name: string;
        decimals: number;
        symbol: string;
        status?: boolean | null;
        logoURI?: string;
        isCommon?: boolean | null;
        balance?: string | number;
        isNative?: boolean | null;
        isWETH?: boolean | null;
        isNew?: boolean | null;
    }
    export type TokenMapType = {
        [token: string]: ITokenObject;
    };
    export enum SITE_ENV {
        DEV = "dev",
        TESTNET = "testnet",
        MAINNET = "mainnet"
    }
}
/// <amd-module name="@scom/scom-token-modal/utils.ts" />
declare module "@scom/scom-token-modal/utils.ts" {
    export const formatNumber: (value: any, decimals?: number) => string;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const getNetworkInfo: (chainId: number) => any;
    export const viewOnExplorerByAddress: (chainId: number, address: string) => void;
}
/// <amd-module name="@scom/scom-token-modal/importToken.tsx" />
declare module "@scom/scom-token-modal/importToken.tsx" {
    import { Control, ControlElement, Module, Container } from '@ijstech/components';
    import { ITokenObject } from "@scom/scom-token-modal/interface.ts";
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['import-token']: ControlElement;
            }
        }
    }
    export class ImportToken extends Module {
        private importModal;
        private importBtn;
        private tokenAgreeCheckBox;
        private _token;
        private $eventBus;
        onUpdate: any;
        private _state;
        constructor(parent?: Container, options?: any);
        set token(value: ITokenObject);
        get token(): ITokenObject;
        updateState(): void;
        closeModal(): void;
        showModal(): void;
        onImportToken(source: Control, event: Event): Promise<void>;
        onHandleCheck(source: Control, event: Event): void;
        viewContract(): void;
        init(): Promise<void>;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-token-modal/index.css.ts" />
declare module "@scom/scom-token-modal/index.css.ts" {
    export const tokenStyle: string;
    const _default_1: string;
    export default _default_1;
}
/// <amd-module name="@scom/scom-token-modal" />
declare module "@scom/scom-token-modal" {
    import { Module, Control, ControlElement, Container } from '@ijstech/components';
    import { ITokenObject } from "@scom/scom-token-modal/interface.ts";
    interface ScomTokenModalElement extends ControlElement {
        title?: string;
        chainId?: number;
        token?: ITokenObject;
        importable?: boolean;
        isSortBalanceShown?: boolean;
        isCommonShown?: boolean;
        onSelectToken?: (token: ITokenObject) => void;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-token-modal']: ScomTokenModalElement;
            }
        }
    }
    export default class ScomTokenModal extends Module {
        private tokenBalancesMap;
        private hstackMap;
        private currentToken;
        private $eventBus;
        private _targetChainId;
        private _token;
        private _title;
        private _isCommonShown;
        private _isSortBalanceShown;
        private _importable;
        private mdTokenSelection;
        private gridTokenList;
        private gridCommonToken;
        private pnlCommonToken;
        private pnlSortBalance;
        private mdImportToken;
        private titleStack;
        private sortValue;
        private iconSortUp;
        private iconSortDown;
        private inputSearch;
        private filterValue;
        onSelectToken: (token: ITokenObject) => void;
        constructor(parent?: Container, options?: any);
        static create(options?: ScomTokenModalElement, parent?: Container): Promise<ScomTokenModal>;
        get token(): ITokenObject | undefined;
        set token(value: ITokenObject | undefined);
        get targetChainId(): number;
        set targetChainId(value: number);
        get chainId(): number;
        get isCommonShown(): boolean;
        set isCommonShown(value: boolean);
        get isSortBalanceShown(): boolean;
        set isSortBalanceShown(value: boolean);
        get importable(): boolean;
        set importable(value: boolean);
        get title(): any;
        set title(value: string | Control);
        onRefresh(): void;
        private updateDataByNewToken;
        private onUpdateData;
        private registerEvent;
        private get tokenDataList();
        private get commonTokenDataList();
        private get tokenDataListFiltered();
        private sortToken;
        private sortBalance;
        private onSearch;
        private renderCommonItems;
        private renderToken;
        private getTokenObject;
        private clearTokenList;
        private renderTokenList;
        private addToMetamask;
        showModal(): void;
        closeModal(): void;
        private setActive;
        private onSelect;
        init(): Promise<void>;
        showImportTokenModal(target: Control, event: Event, token: ITokenObject): void;
        onImportToken(target: Control, token: ITokenObject): void;
        onCloseModal(): void;
        onOpenModal(): void;
        render(): any;
    }
}
