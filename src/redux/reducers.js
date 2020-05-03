import { ADD_BRICK, DEL_BRICK } from './action-types'

const initBrickTree = 
{
    "id": "13de510a-4805-4a0f-9e76-995306e723a6",
    "name": "div",
    "parentId": "BLOCK_TOP",
    "leaderId": "QUEUE_TOP",
    "content": "",
    "childs": [
    "29038686-d230-4239-91bb-e467779573ea",
    "5614da53-2b22-4f23-bad3-611ea29abd08",
    "bc770a25-4e64-4ae0-95cd-e253c1c36963",
    "78c1bcad-a72b-4bd8-97f8-5b1ef2028c0e"
    ],
    "blocks": [
    {
    "id": "29038686-d230-4239-91bb-e467779573ea",
    "name": "div",
    "parentId": "13de510a-4805-4a0f-9e76-995306e723a6",
    "leaderId": "QUEUE_TOP",
    "childs": [
    "c67f2ab3-7cc2-4ce4-854d-644cba202a07"
    ],
    "blocks": [
    {
    "id": "c67f2ab3-7cc2-4ce4-854d-644cba202a07",
    "name": "p",
    "parentId": "29038686-d230-4239-91bb-e467779573ea",
    "leaderId": "QUEUE_TOP",
    "content": "What a fucking day!",
    "childs": [],
    "blocks": [],
    "event": {},
    "style": {},
    "nodeType": "LEAF_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
    }
    ],
    "event": {},
    "style": {},
    "nodeType": "BRANCH_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
    },
    {
    "id": "5614da53-2b22-4f23-bad3-611ea29abd08",
    "name": "p",
    "parentId": "13de510a-4805-4a0f-9e76-995306e723a6",
    "leaderId": "29038686-d230-4239-91bb-e467779573ea",
    "content": "愿你三冬暖，愿你春不寒",
    "childs": [],
    "blocks": [],
    "event": {},
    "style": {
    "color": "red"
    },
    "nodeType": "LEAF_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
    },
    {
    "id": "bc770a25-4e64-4ae0-95cd-e253c1c36963",
    "name": "p",
    "parentId": "13de510a-4805-4a0f-9e76-995306e723a6",
    "leaderId": "5614da53-2b22-4f23-bad3-611ea29abd08",
    "content": "Just so so...",
    "childs": [],
    "blocks": [],
    "event": {},
    "style": {},
    "nodeType": "LEAF_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
    },
    {
    "id": "78c1bcad-a72b-4bd8-97f8-5b1ef2028c0e",
    "name": "p",
    "parentId": "13de510a-4805-4a0f-9e76-995306e723a6",
    "leaderId": "bc770a25-4e64-4ae0-95cd-e253c1c36963",
    "content": "Welcome StackedBricks",
    "childs": [],
    "blocks": [],
    "event": {},
    "style": {
    "font-size": "100px"
    },
    "nodeType": "LEAF_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
    }
    ],
    "event": {},
    "style": {},
    "nodeType": "BRANCH_NODE",
    "page": "f253997a-5904-49d8-aaa1-a40d8a5dbc6b"
}

export const brickTree = (state = initBrickTree, action) => {
    switch (action.type) {
        case ADD_BRICK:
            return [...state.blocks, action.data]
        case DEL_BRICK:
            return state.blocks.filter((brick, index) => index !== action.data)
        default:
            return state
    }
}