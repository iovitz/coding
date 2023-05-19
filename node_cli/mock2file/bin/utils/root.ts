import downgradeRoot from 'downgrade-root'
import sudoBlock from 'sudo-block'

export default function rootCheck () {
  try {
    downgradeRoot()
  } catch {
    //
  }

  sudoBlock()
}
