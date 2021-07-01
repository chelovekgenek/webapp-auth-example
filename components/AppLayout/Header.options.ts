import { RoutePath } from "types/router"
import { TrackName } from "helpers/hooks/mixpanel/mixpanel.types"

export interface Tab {
  id: RoutePath
  content: string
  track: TrackName
}

export const TABS: Tab[] = [
  {
    id: RoutePath.Index,
    content: "Dashboard",
    track: "View Dashboard",
  },
  {
    id: RoutePath.Analytics,
    content: "Analytics",
    track: "View Analytics",
  },
  {
    id: RoutePath.Settings,
    content: "Settings",
    track: "View Settings",
  },
  {
    id: RoutePath.Plans,
    content: "Plans",
    track: "View Plans",
  },
]
