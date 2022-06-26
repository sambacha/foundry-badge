declare module 'FoundryBadge' {
  function FoundryBadge(abi: string, options?: {
    targetLength?: number,
    href?: string
  }): string;
  export = FoundryBadge;
}
