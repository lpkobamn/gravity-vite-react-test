import { Flex } from '@gravity-ui/uikit';
import { useState } from 'react';
import { PageLayout, PageLayoutAside } from '@gravity-ui/navigation';
import logo from "./assets/logo.svg"
import BrandFilterHOC from './components/brand-filters';
import ExampleGravityTable from './components/demo-table';

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

      <Flex direction='column'>
        <div>
          <BrandFilterHOC />
        </div>
        <ExampleGravityTable />
      </Flex>
    </PageLayout.Content>
  </PageLayout>
}

export default App
