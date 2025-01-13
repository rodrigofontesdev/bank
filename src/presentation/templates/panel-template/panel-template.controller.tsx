import { useRouter } from '@presentation/hooks/useRouter'
import { PanelTemplateView } from './panel-template.view'

export function PanelTemplate() {
  const methods = useRouter()

  return <PanelTemplateView {...methods} />
}
