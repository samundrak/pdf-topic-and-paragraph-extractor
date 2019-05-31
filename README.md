# pdf-topic-and-paragraph-extractor
 It goes through all the pages and extracts each paragraphs with title and its content.
 Saves pages where the topic is located and contents
 
 Will output like this
 ```
// Pages
Map { 0 => [ 0, 1, 2, 3, 4 ] }


// Topics
[ { topicIndexedAt: 0,
    topic: '4.1.1.2       Policy #1: Strict Policy' },
  { topicIndexedAt: 1,
    topic: '4.1.1.3       Policy #2: Rarest First' },
  { topicIndexedAt: 2,
    topic: '4.1.1.4       Policy #3: Random First Piece' },
  { topicIndexedAt: 3,
    topic: '4.1.1.5       Policy #4: Endgame mode' } ]
    
    
// Paragraphs
Map {
  0 => { topic: '4.1.1.2       Policy #1: Strict Policy',
  content: 'Once a sub-piece has been requested, the remaining sub-pieces for that particular piece are\nrequested before sub-pieces from any other piece. This helps us getting a complete piece as\nquickly as possible. [4]' },
  1 => { topic: '4.1.1.3       Policy #2: Rarest First',
  content: 'The main policy in BitTorrent is that of “rarest first”. This means that when a peer selects the\nnext piece to download, it selects the piece which the fewest of their peers have. There are\nseveral reasons for this being a good policy [4][12]:\n   •      Spreading the seed: Rarest first makes sure that only “new” pieces are downloaded\n          from the seed. In the beginning, the seed will be a bottleneck since it is the only one\n          with any piece of the file. A downloader can see what pieces their peers have, and the\n          “rarest first”-policy will result in that the pieces fetched from the seed are pieces\n          which have not already been uploaded by others.\n   •      Increased download speed: The more peers that have the piece, the faster the\n          download can happen, as it is possible to download sub-pieces from different places.\n          We want to replicate rare pieces so they can be downloaded faster.\n   •      Enabling uploading: A rare piece is most wanted by other peers, and by getting a rare\n          piece others will be interested in uploading from you.\n   •      Most common last: It is sensible to leave the most common pieces to the end of the\n          download. Since many peers have it, the probability of being able to download them\n          later is much larger than that of the rare pieces.\n   •      Prevent rarest piece missing: When the seed is taken down, it is important that all\n          the different pieces of the file are distributed somewhere among the remaining peers.\n          By replicating the rarest pieces first, we reduce the risk of missing one or more pieces\n          of a file when the seeder leaves.' },
  2 => { topic: '4.1.1.4       Policy #3: Random First Piece',
  content: 'Once you start downloading, you don’t have anything to upload. It is important to get the first\npiece as fast as possible, and this means that the “rarest first”-policy is not the most efficient.\nRare pieces tend to be downloaded slower, because you can download it’s sub-pieces from\nonly one (or maybe a few) other peers. As mentioned earlier, multiple peers with the same\npiece increase the download speed. The policy is then to select the first piece randomly. When\nthe first piece is complete, we change to “rarest first”. [4]' },
  3 => { topic: '4.1.1.5       Policy #4: Endgame mode',
  content: 'Sometimes a piece might be downloaded from a peer with a slow transfer rate. This can\npotentially delay the finishing of a download. To prevent this we have the “endgame mode”.\nRemember the pipelining principle, which ensures that we always have a number of requests\n(for sub-pieces) pending, the number often being set to five. When all the sub-pieces a peer\nlacks are requested, this request is broadcasted to all peers. This helps us to get the last chunk\nof the file as quickly as possible. Once a sub-piece arrives, we send a cancel-message\nindicating that we have obtained it and the peers can disregard the request. Some bandwidth is\nof course wasted by this broadcasting, but in practice this is not very much because of the\nshort periode of the endgame mode. [4]' },
  4 => { topic: null,
  content: '                                                                                             9\n\f' } }

```


  
