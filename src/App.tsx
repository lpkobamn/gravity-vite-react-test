import { Flex } from '@gravity-ui/uikit';
import { useState } from 'react';
import { PageLayout, PageLayoutAside } from '@gravity-ui/navigation';
import logo from "./assets/logo.svg"

function App() {
  const [compact, setCompact] = useState(false);

  return <PageLayout compact={compact}>
    <PageLayoutAside headerDecoration logo={{
      text: 'Unknown',
      icon: logo,
      href: '#',
      onClick: () => alert('click on logo'),
      'aria-label': 'Unknown',
    }} onChangeCompact={setCompact} />
    <PageLayout.Content>
      <Flex>
        Unknown
      </Flex>
    </PageLayout.Content>
  </PageLayout>
}

export default App
