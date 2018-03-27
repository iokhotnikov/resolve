import lodash from 'lodash'

import resolveFile from './resolve_file'
import resolveFileOrModule from './resolve_file_or_module'
import paths from '../../configs/resolve.config.paths'

const assignConfigPaths = resolveConfig => {
  for (const key of paths.files) {
    lodash.set(resolveConfig, key, resolveFile(lodash.get(resolveConfig, key)))
  }
  for (const key of paths.filesOrModules) {
    lodash.set(
      resolveConfig,
      key,
      resolveFileOrModule(lodash.get(resolveConfig, key))
    )
  }
}

export default assignConfigPaths
