import { Fields } from "types/graphql"

type ScriptTag = {
  id: string
  src: string
  displayScope: "ALL" | "ONLINE_STORE" | "ORDER_STATUS"
}

export type GetInput = {
  first: number
}

export type AddInput = {
  input: Pick<ScriptTag, "src" | "displayScope">
}

export type DeleteInput = {
  id: string
}

export type GetResult = {
  scriptTags: Fields<ScriptTag>
}

export type AddResult = {
  scriptTagCreate: {
    scriptTag: ScriptTag
  }
}

export type DeleteResult = {
  scriptTagDelete: {
    deletedScriptTagId: string
  }
}

export const DISPLAY_SCOPE: ScriptTag["displayScope"] = "ALL"
