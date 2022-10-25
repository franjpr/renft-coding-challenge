import { NFT } from '../../models/NFT'
import { NftCard } from '../NftCard/NftCard'

interface Props {
  nfts: NFT[]
}

export const Showcase: React.FC<Props> = ({ nfts = [] }) => {
  return (
    <div>
      <h1>List of nfts</h1>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.title}>
            <NftCard nft={nft} />
          </li>
        ))}
      </ul>
    </div>
  )
}
